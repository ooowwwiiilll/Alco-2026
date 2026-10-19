import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import defaultAuthBg from '../../assets/images/alco-auth-bg.png';
import { resolveAssetUrl } from '../../preview/assetUrls';
import type { AppUser, DivisionItem, RegistrationInput } from '../../types';
import { ForgotPasswordDialog, RegisterSuccessDialog, SuspendedDialog } from './AuthDialogs';
import { CustomFormField, CustomSelectField } from './AuthFields';
import { authErrorMessage, isThrottled } from './authErrors';
import { isValidEmailFormat } from './emailValidation';

type ViewMode = 'landing' | 'login' | 'register';

interface LandingAuthPageProps {
  divisions: DivisionItem[];
  /** Background configured by the Role Manager; falls back to the bundled image. */
  authBackground?: string;
  /** Local workspace only: one-click demo profiles. Empty in Firebase mode. */
  demoProfiles: AppUser[];
  onDemoLogin: (user: AppUser) => Promise<void>;
  onLogin: (email: string, password: string) => Promise<void>;
  onRegister: (input: RegistrationInput) => Promise<void>;
  onRequestPasswordReset: (email: string) => Promise<void>;
  initialMode?: ViewMode;
}

// =========================================================================
// MAIN LANDING / AUTH COMPONENT
// =========================================================================
export function LandingAuthPage({
  divisions,
  authBackground,
  demoProfiles,
  onDemoLogin,
  onLogin,
  onRegister,
  onRequestPasswordReset,
  initialMode = 'landing',
}: LandingAuthPageProps) {
  const [viewMode, setViewMode] = useState<ViewMode>(initialMode);
  const authBgImage = (authBackground && resolveAssetUrl(authBackground)) || defaultAuthBg;

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSuspendedModalOpen, setIsSuspendedModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);

  // Register form state
  const [regName, setRegName] = useState('');
  const [regNameError, setRegNameError] = useState<string | null>(null);
  const [regEmail, setRegEmail] = useState('');
  const [regEmailError, setRegEmailError] = useState<string | null>(null);
  const [regDivision, setRegDivision] = useState('');
  const [regDivisionError, setRegDivisionError] = useState<string | null>(null);
  const [regPassword, setRegPassword] = useState('');
  const [regPasswordError, setRegPasswordError] = useState<string | null>(null);
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [regConfirmPasswordError, setRegConfirmPasswordError] = useState<string | null>(null);
  const [registerError, setRegisterError] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRegisterSuccessModalOpen, setIsRegisterSuccessModalOpen] = useState(false);
  const [entryFromLanding, setEntryFromLanding] = useState(false);

  const clearLoginForm = () => {
    setLoginEmail('');
    setLoginPassword('');
    setEmailError(null);
    setPasswordError(null);
  };

  const clearRegisterPasswords = () => {
    setRegPassword('');
    setRegConfirmPassword('');
    setRegPasswordError(null);
    setRegConfirmPasswordError(null);
  };

  const clearAllRegisterErrors = () => {
    setRegNameError(null);
    setRegEmailError(null);
    setRegDivisionError(null);
    setRegPasswordError(null);
    setRegConfirmPasswordError(null);
    setRegisterError(null);
  };

  // Leaving a form wipes its credentials.
  const prevViewModeRef = useRef(viewMode);
  useEffect(() => {
    if (prevViewModeRef.current === 'login' && viewMode !== 'login') clearLoginForm();
    if (prevViewModeRef.current === 'register' && viewMode !== 'register') {
      clearRegisterPasswords();
      clearAllRegisterErrors();
    }
    prevViewModeRef.current = viewMode;
  }, [viewMode]);

  // Responsive spring animation between landing and the forms.
  const [windowHeight, setWindowHeight] = useState<number>(() => window.innerHeight);
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isFormOpen = viewMode === 'login' || viewMode === 'register';

  const handleLogin = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setEmailError(null);
    setPasswordError(null);
    const email = loginEmail.trim().toLowerCase();
    if (email && !isValidEmailFormat(email)) {
      setEmailError('Format email tidak valid. Periksa kembali alamat email Anda.');
      return;
    }
    if (!email || !loginPassword) {
      setEmailError('Email atau kata sandi salah. Silakan coba lagi.');
      setPasswordError('Email atau kata sandi salah. Silakan coba lagi.');
      return;
    }
    setIsLoggingIn(true);
    try {
      await onLogin(email, loginPassword);
      setLoginPassword('');
    } catch (failure) {
      if (isThrottled(failure)) setIsSuspendedModalOpen(true);
      setEmailError('error');
      setPasswordError(authErrorMessage(failure));
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleRegister = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setRegisterError(null);
    const name = regName.trim();
    const email = regEmail.trim().toLowerCase();
    const division = regDivision.trim();
    const errors = {
      name: name ? null : 'Nama lengkap harus diisi',
      email: !email
        ? 'Alamat Email harus diisi'
        : isValidEmailFormat(email)
          ? null
          : 'Format email tidak valid. Periksa kembali alamat email Anda.',
      division: division ? null : 'Divisi harus dipilih',
      password: !regPassword
        ? 'Password harus diisi, minimal 6 karakter'
        : regPassword.length < 6
          ? 'Password harus memiliki minimal 6 karakter'
          : null,
      confirm: !regConfirmPassword
        ? 'Konfirmasi Password harus diisi'
        : regPassword !== regConfirmPassword
          ? 'Password tidak sesuai'
          : null,
    };
    setRegNameError(errors.name);
    setRegEmailError(errors.email);
    setRegDivisionError(errors.division);
    setRegPasswordError(errors.password);
    setRegConfirmPasswordError(errors.confirm);
    if (Object.values(errors).some(Boolean)) return;
    setIsRegistering(true);
    try {
      await onRegister({
        name,
        email,
        password: regPassword,
        division,
        title: `Creator / ${division}`,
      });
      clearRegisterPasswords();
      setIsRegisterSuccessModalOpen(true);
    } catch (failure) {
      setRegisterError(authErrorMessage(failure));
    } finally {
      setIsRegistering(false);
    }
  };

  const handleRegisterSuccessClose = () => {
    setIsRegisterSuccessModalOpen(false);
    setViewMode('landing');
    setEntryFromLanding(false);
    setRegName('');
    setRegEmail('');
    setRegDivision('');
    clearRegisterPasswords();
    clearLoginForm();
  };

  return (
    <div className="relative w-full h-screen min-h-screen bg-[#111111] overflow-hidden select-none flex flex-col items-center justify-center font-season-sans">
      {/* 1. Background Image PNG */}
      <img
        src={authBgImage}
        alt="Auth Background"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          if (target.src !== defaultAuthBg) {
            target.src = defaultAuthBg;
          }
        }}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
      />

      {/* 2. Local workspace demo profiles (never rendered in Firebase mode) */}
      {demoProfiles.length > 0 && (
        <div className="absolute top-6 left-0 right-0 z-30 flex flex-col items-center gap-2 px-4 pointer-events-auto">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] text-white/50 tracking-wide uppercase font-semibold">
            <span>Akses Cepat Demo:</span>
            <div className="flex flex-wrap items-center gap-1.5">
              {demoProfiles.map((u) => (
                <button
                  key={u.id}
                  type="button"
                  onClick={() => void onDemoLogin(u)}
                  className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium flex items-center gap-1.5 transition-all cursor-pointer border border-white/10 hover:border-white/30"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${u.role === 'manager' ? 'bg-purple-400' : u.role === 'admin' ? 'bg-stone-300' : 'bg-blue-400'}`}
                  />
                  <span>{u.name}</span>
                  <span className="text-[10px] text-white/50">
                    (
                    {u.role === 'manager'
                      ? 'Role Manager'
                      : u.role === 'admin'
                        ? 'Admin'
                        : u.division}
                    )
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* BRAND LOGO: ALCO LAYOUT & CONTENT */}
      {/* Saat login dan form registrasi terbuka: bergeser ke atas (top: 80px), */}
      {/* stay fixed, dan posisinya di belakang form (zIndex: 10 vs form zIndex: 20). */}
      {/* Kembali ke posisi semula saat user kembali ke landing page. */}
      {/* ========================================================================= */}
      <motion.div
        initial={false}
        animate={{
          top: isFormOpen ? 80 : Math.max(80, windowHeight - 216),
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 220,
          damping: 26,
          mass: 0.9,
        }}
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10, // Posisi di belakang form (Form Card memiliki zIndex: 20)
          pointerEvents: 'none',
        }}
      >
        <img
          src="/logo-pegadaian.png"
          alt="Pegadaian"
          className="h-14 md:h-16 w-auto object-contain select-none filter drop-shadow-lg pointer-events-none"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            if (target.parentElement && !target.parentElement.querySelector('span')) {
              const fallback = document.createElement('span');
              fallback.innerText = 'Pegadaian';
              fallback.style.fontFamily = "'Geist', sans-serif";
              fallback.style.fontSize = '24px';
              fallback.style.fontWeight = 'bold';
              fallback.style.color = '#fff';
              target.parentElement.appendChild(fallback);
            }
          }}
        />
      </motion.div>

      {/* ========================================================================= */}
      {/* OUTER AUTH CARD (LANDING SWITCHER / LOGIN FORM / REGISTER FORM) */}
      {/* ========================================================================= */}
      <div
        style={{
          position: 'absolute',
          bottom: '60px',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 20, // Di depan logo
          pointerEvents: 'auto',
        }}
      >
        <motion.div
          layout
          transition={{
            type: 'spring',
            stiffness: 240,
            damping: 26,
            mass: 0.9,
          }}
          style={{
            outline: '1px rgba(255, 255, 255, 0.08) solid',
            outlineOffset: '-1px',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxSizing: 'border-box',
          }}
          animate={{
            width: viewMode === 'landing' ? '424px' : '540px',
            maxWidth: '92vw',
            padding: viewMode === 'landing' ? '8px' : '36px',
            borderRadius: viewMode === 'landing' ? '56px' : '24px',
            background:
              viewMode === 'landing' ? 'rgba(22, 22, 22, 0.85)' : 'rgba(22, 22, 22, 0.92)',
          }}
          className="relative flex flex-col items-center justify-center shadow-2xl"
        >
          <AnimatePresence mode="wait" initial={false}>
            {/* VIEW 1: LANDING SWITCHER BUTTONS */}
            {viewMode === 'landing' && (
              <motion.div
                key="landing-view"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.18 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                {/* Login Button */}
                <button
                  type="button"
                  onClick={() => {
                    clearLoginForm();
                    setEntryFromLanding(true);
                    setViewMode('login');
                  }}
                  style={{
                    width: '200px',
                    padding: '16px',
                    background: 'white',
                    borderRadius: '76px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    display: 'flex',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                  <span
                    style={{
                      flex: '1 1 0',
                      textAlign: 'center',
                      color: 'black',
                      fontSize: '16px',
                      fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                      fontWeight: 400,
                      wordWrap: 'break-word',
                    }}
                  >
                    Login
                  </span>
                </button>

                {/* Register Button */}
                <button
                  type="button"
                  onClick={() => {
                    clearRegisterPasswords();
                    clearAllRegisterErrors();
                    setEntryFromLanding(true);
                    setViewMode('register');
                  }}
                  style={{
                    width: '200px',
                    padding: '16px',
                    borderRadius: '76px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    display: 'flex',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:bg-white/10 active:scale-[0.98]"
                >
                  <span
                    style={{
                      flex: '1 1 0',
                      textAlign: 'center',
                      color: 'white',
                      fontSize: '16px',
                      fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                      fontWeight: 400,
                      wordWrap: 'break-word',
                    }}
                  >
                    Register
                  </span>
                </button>
              </motion.div>
            )}

            {/* VIEW 2: LOGIN FORM */}
            {viewMode === 'login' && (
              <motion.form
                key="login-view"
                onSubmit={handleLogin}
                noValidate
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '32px',
                }}
              >
                {/* Header: Back Arrow + "Login" Title */}
                <div
                  style={{
                    alignSelf: 'stretch',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '20px',
                    display: 'inline-flex',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      clearLoginForm();
                      setViewMode('landing');
                    }}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer shrink-0"
                    title="Kembali"
                  >
                    <ArrowLeft className="w-5 h-5 text-white" />
                  </button>
                  <div
                    style={{
                      flex: '1 1 0',
                      color: 'white',
                      fontSize: '28px',
                      fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                      fontWeight: 400,
                      wordWrap: 'break-word',
                    }}
                  >
                    Login
                  </div>
                </div>

                {/* Form Fields Container */}
                <div
                  style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '16px',
                    display: 'flex',
                    width: '100%',
                  }}
                >
                  {/* Field 1: Alamat Email - NEVER DISABLED: User is always allowed to change email even if current email is locked */}
                  <CustomFormField
                    label="Alamat Email"
                    value={loginEmail}
                    onChange={(val) => {
                      setLoginEmail(val);
                      if (emailError) setEmailError(null);
                      if (passwordError) setPasswordError(null);
                    }}
                    onBlur={() => {
                      const clean = loginEmail.trim();
                      if (clean && !isValidEmailFormat(clean)) {
                        setEmailError(
                          'Format email tidak valid. Periksa kembali alamat email Anda.',
                        );
                        setPasswordError(null);
                      }
                    }}
                    type="email"
                    error={emailError}
                    hideErrorMessage={emailError === 'error'}
                    name="email"
                    disabled={false}
                    required
                  />

                  {/* Field 2: Password */}
                  <CustomFormField
                    label="Password"
                    value={loginPassword}
                    onChange={(val) => {
                      setLoginPassword(val);
                      if (emailError === 'error') setEmailError(null);
                      if (passwordError) setPasswordError(null);
                    }}
                    type="password"
                    showPasswordToggle={true}
                    error={passwordError}
                    name="password"
                    disabled={false}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoggingIn}
                  style={{
                    width: '180px',
                    height: '48px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    background: 'white',
                    borderRadius: '9999px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'inline-flex',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  title="Login"
                >
                  {isLoggingIn ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span
                      style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: '16px',
                        fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                        fontWeight: 500,
                        wordWrap: 'break-word',
                      }}
                    >
                      Login
                    </span>
                  )}
                </button>

                {/* Footer Switcher / Lupa Password */}
                <div className="text-center -mt-4 flex flex-col items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setIsForgotPasswordModalOpen(true)}
                    style={{
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                      fontWeight: 400,
                      cursor: 'pointer',
                    }}
                    className="hover:underline opacity-90 hover:opacity-100 transition-opacity"
                  >
                    Forgot Password
                  </button>
                  <p
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                      color: 'rgba(255, 255, 255, 0.60)',
                    }}
                  >
                    Belum punya akun?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        clearLoginForm();
                        clearRegisterPasswords();
                        clearAllRegisterErrors();
                        setViewMode('register');
                      }}
                      className="text-white hover:underline font-semibold cursor-pointer ml-1"
                    >
                      Daftar disini
                    </button>
                  </p>
                </div>
              </motion.form>
            )}

            {/* VIEW 3: REGISTER FORM */}
            {viewMode === 'register' && (
              <motion.form
                key="register-view"
                onSubmit={handleRegister}
                noValidate
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px',
                  maxHeight: 'calc(100vh - 220px)',
                  overflowY: 'auto',
                  paddingRight: '2px',
                }}
                className="custom-scrollbar"
              >
                {/* Header: Back Arrow + "Register" Title */}
                <div
                  style={{
                    alignSelf: 'stretch',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '20px',
                    display: 'inline-flex',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      clearRegisterPasswords();
                      clearAllRegisterErrors();
                      if (entryFromLanding) {
                        setViewMode('landing');
                        setEntryFromLanding(false);
                      } else {
                        setViewMode('login');
                      }
                    }}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer shrink-0"
                    title={entryFromLanding ? 'Kembali ke Landing' : 'Kembali ke Login'}
                  >
                    <ArrowLeft className="w-5 h-5 text-white" />
                  </button>
                  <div
                    style={{
                      flex: '1 1 0',
                      color: 'white',
                      fontSize: '28px',
                      fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                      fontWeight: 400,
                      wordWrap: 'break-word',
                    }}
                  >
                    Register
                  </div>
                </div>

                {/* Status Messages */}
                {registerError && (
                  <div className="w-full p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2 animate-fadeIn">
                    <span className="leading-relaxed">{registerError}</span>
                  </div>
                )}

                {/* Form Fields Container */}
                <div
                  style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '14px',
                    display: 'flex',
                    width: '100%',
                  }}
                >
                  {/* Field 1: Nama Lengkap */}
                  <CustomFormField
                    label="Nama Lengkap"
                    value={regName}
                    onChange={(val) => {
                      setRegName(val);
                      if (regNameError) setRegNameError(null);
                    }}
                    error={regNameError}
                    type="text"
                    required
                  />

                  {/* Field 2: Alamat Email */}
                  <CustomFormField
                    label="Alamat Email"
                    value={regEmail}
                    onChange={(val) => {
                      setRegEmail(val);
                      if (regEmailError) setRegEmailError(null);
                    }}
                    onBlur={() => {
                      const clean = regEmail.trim();
                      if (clean && !isValidEmailFormat(clean)) {
                        setRegEmailError(
                          'Format email tidak valid. Periksa kembali alamat email Anda.',
                        );
                      }
                    }}
                    error={regEmailError}
                    type="email"
                    required
                  />

                  {/* Field 3: Divisi */}
                  <CustomSelectField
                    label="Divisi"
                    value={regDivision}
                    onChange={(val) => {
                      setRegDivision(val);
                      if (regDivisionError) setRegDivisionError(null);
                    }}
                    error={regDivisionError}
                    options={
                      divisions.length > 0
                        ? divisions
                        : [
                            { id: '1', name: 'CRD' },
                            { id: '2', name: 'PDP' },
                          ]
                    }
                  />

                  {/* Field 4: Password */}
                  <CustomFormField
                    label="Password"
                    value={regPassword}
                    onChange={(val) => {
                      setRegPassword(val);
                      if (regPasswordError) setRegPasswordError(null);
                    }}
                    error={regPasswordError}
                    type="password"
                    showPasswordToggle={true}
                    required
                  />

                  {/* Field 5: Konfirmasi Password */}
                  <CustomFormField
                    label="Konfirmasi Password"
                    value={regConfirmPassword}
                    onChange={(val) => {
                      setRegConfirmPassword(val);
                      if (regConfirmPasswordError) setRegConfirmPasswordError(null);
                    }}
                    error={regConfirmPasswordError}
                    type="password"
                    showPasswordToggle={true}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isRegistering}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'white',
                    borderRadius: '76px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    display: 'inline-flex',
                    cursor: isRegistering ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    border: 'none',
                    outline: 'none',
                  }}
                  className="hover:scale-[1.01] active:scale-[0.99] shadow-lg disabled:opacity-50 mt-1"
                >
                  {isRegistering ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <div
                      style={{
                        flex: '1 1 0',
                        textAlign: 'center',
                        color: 'black',
                        fontSize: '16px',
                        fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                        fontWeight: 400,
                        wordWrap: 'break-word',
                      }}
                    >
                      Register
                    </div>
                  )}
                </button>

                {/* Switch to Login */}
                <div className="text-center -mt-3 pb-2">
                  <p
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                      color: 'rgba(255, 255, 255, 0.60)',
                    }}
                  >
                    Sudah punya akun?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        clearRegisterPasswords();
                        clearAllRegisterErrors();
                        clearLoginForm();
                        setViewMode('login');
                      }}
                      className="text-white hover:underline font-semibold cursor-pointer ml-1"
                    >
                      Login disini
                    </button>
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <SuspendedDialog open={isSuspendedModalOpen} onClose={() => setIsSuspendedModalOpen(false)} />
      <ForgotPasswordDialog
        open={isForgotPasswordModalOpen}
        onClose={() => setIsForgotPasswordModalOpen(false)}
        onSubmit={onRequestPasswordReset}
        initialEmail={loginEmail}
      />
      <RegisterSuccessDialog
        open={isRegisterSuccessModalOpen}
        onClose={handleRegisterSuccessClose}
      />
    </div>
  );
}
