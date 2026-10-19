import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import iconSuccessScreen from '../../assets/images/icon-success-screen.png';
import { CustomFormField } from './AuthFields';
import { isValidEmailFormat } from './emailValidation';

interface DialogProps {
  open: boolean;
  onClose: () => void;
}

/** Shown when Firebase temporarily blocks sign-in after repeated failed attempts. */
export function SuspendedDialog({ open, onClose }: DialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.2 }}
            style={{
              width: '100%',
              maxWidth: '558px',
              padding: '40px',
              background: '#111111',
              borderRadius: '24px',
              outline: '1px #484848 solid',
              outlineOffset: '-1px',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '40px',
              display: 'inline-flex',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '478px',
                textAlign: 'center',
                color: 'white',
                fontSize: '32px',
                fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                fontWeight: 400,
                wordWrap: 'break-word',
              }}
            >
              Akun Ditangguhkan
            </div>
            <div
              style={{
                alignSelf: 'stretch',
                textAlign: 'center',
                color: 'white',
                fontSize: '16px',
                fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                fontWeight: 400,
                lineHeight: '24px',
                wordWrap: 'break-word',
              }}
            >
              Akun Anda ditangguhkan sementara karena terlalu banyak percobaan password yang gagal.
              Coba lagi nanti atau gunakan "Lupa Password" untuk mengatur password baru.
            </div>
            <div
              style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                display: 'flex',
              }}
            >
              <button
                type="button"
                onClick={() => onClose()}
                style={{
                  width: '200px',
                  padding: '16px',
                  background: 'white',
                  borderRadius: '76px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  display: 'inline-flex',
                  cursor: 'pointer',
                  border: 'none',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                }}
                className="hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
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
                  Saya Mengerti
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/** Firebase emails a reset link to the account address. */
export function ForgotPasswordDialog({
  open,
  onClose,
  onSubmit,
  initialEmail,
}: DialogProps & { onSubmit: (email: string) => Promise<void>; initialEmail: string }) {
  const [forgotEmailInput, setForgotEmailInput] = useState(initialEmail);
  useEffect(() => {
    if (open) setForgotEmailInput(initialEmail);
    // Prefill only when the dialog opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  const [forgotError, setForgotError] = useState<string | null>(null);
  const [forgotSuccess, setForgotSuccess] = useState(false);
  const [isSubmittingReset, setIsSubmittingReset] = useState(false);
  const close = () => {
    onClose();
    setForgotSuccess(false);
    setForgotEmailInput('');
    setForgotError(null);
  };
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.2 }}
            style={{
              width: '100%',
              maxWidth: '460px',
              background: '#1A1A1A',
              borderRadius: '24px',
              outline: '1px rgba(255, 255, 255, 0.10) solid',
              outlineOffset: '-1px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            }}
          >
            <h3
              style={{
                color: 'white',
                fontSize: '24px',
                fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                fontWeight: 400,
                lineHeight: '32px',
                margin: 0,
              }}
            >
              Forgot Password
            </h3>

            {!forgotSuccess ? (
              <>
                <p
                  style={{
                    color: 'rgba(255, 255, 255, 0.70)',
                    fontSize: '14px',
                    fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                    fontWeight: 400,
                    lineHeight: '22px',
                    marginTop: '12px',
                    marginBottom: '20px',
                  }}
                >
                  Enter your account email and we will send you a link to set a new password.
                </p>

                <div className="w-full mb-3">
                  <CustomFormField
                    label="Account Email"
                    value={forgotEmailInput}
                    onChange={(val) => {
                      setForgotEmailInput(val);
                      if (forgotError) setForgotError(null);
                    }}
                    type="email"
                    error={forgotError}
                    autoFocus
                  />
                </div>

                <div className="w-full flex items-center justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={close}
                    className="px-5 py-2.5 rounded-full text-stone-400 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    disabled={isSubmittingReset || !forgotEmailInput.trim()}
                    onClick={async () => {
                      const clean = forgotEmailInput.trim().toLowerCase();
                      if (!clean) {
                        setForgotError('Email is required');
                        return;
                      }
                      if (!isValidEmailFormat(clean)) {
                        setForgotError('Invalid email format');
                        return;
                      }
                      try {
                        setIsSubmittingReset(true);
                        await onSubmit(clean);
                        setForgotSuccess(true);
                        setForgotError(null);
                      } catch (failure) {
                        setForgotError(
                          failure instanceof Error
                            ? failure.message
                            : 'Failed to send the password reset email. Please try again.',
                        );
                      } finally {
                        setIsSubmittingReset(false);
                      }
                    }}
                    style={{
                      paddingLeft: '24px',
                      paddingRight: '24px',
                      height: '46px',
                      background: '#00DF81',
                      borderRadius: '9999px',
                      color: 'black',
                      fontSize: '15px',
                      fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                      fontWeight: 500,
                      cursor:
                        isSubmittingReset || !forgotEmailInput.trim() ? 'not-allowed' : 'pointer',
                      opacity: isSubmittingReset || !forgotEmailInput.trim() ? 0.6 : 1,
                      transition: 'all 0.15s ease',
                    }}
                    className="hover:brightness-110 active:scale-95 shadow-md flex items-center gap-2"
                  >
                    {isSubmittingReset ? (
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <span>Send Reset Link</span>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="my-5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-300 text-sm w-full">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#00DF81]" />
                  <div>
                    <p className="font-semibold text-white">Reset Link Sent</p>
                    <p className="mt-1 text-xs text-stone-300 leading-relaxed">
                      If an account exists for this email, a password reset link is on its way.
                      Follow it to set a new password, then log in.
                    </p>
                  </div>
                </div>

                <div className="w-full flex justify-end mt-2">
                  <button
                    type="button"
                    onClick={close}
                    style={{
                      paddingLeft: '28px',
                      paddingRight: '28px',
                      height: '44px',
                      background: 'white',
                      borderRadius: '9999px',
                      color: 'black',
                      fontSize: '14px',
                      fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    className="hover:bg-stone-200 active:scale-95 shadow-md"
                  >
                    Saya Mengerti
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function RegisterSuccessDialog({ open, onClose }: DialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 24,
            }}
            style={{
              width: '100%',
              maxWidth: '540px',
              padding: '40px',
              background: '#111111',
              borderRadius: '24px',
              outline: '1px #484848 solid',
              outlineOffset: '-1px',
              backdropFilter: 'blur(20px)',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '40px',
              display: 'inline-flex',
              boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.9)',
            }}
          >
            {/* Title: Akun Berhasil Dibuat */}
            <div
              style={{
                color: 'white',
                fontSize: '32px',
                fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                fontWeight: 400,
                wordWrap: 'break-word',
                textAlign: 'center',
              }}
            >
              Akun Berhasil Dibuat
            </div>

            {/* Icon from src/assets/images/icon-success-screen.png */}
            <img
              style={{ width: '163px', height: '163px', objectFit: 'contain' }}
              src={iconSuccessScreen}
              alt="Akun Berhasil Dibuat"
            />

            {/* Description */}
            <div
              style={{
                alignSelf: 'stretch',
                textAlign: 'center',
                color: 'white',
                fontSize: '16px',
                fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                fontWeight: 400,
                lineHeight: '24px',
                wordWrap: 'break-word',
              }}
            >
              Registrasi akun Anda sedang menunggu persetujuan Role Manager. Anda dapat menggunakan
              akun setelah registrasi disetujui.
            </div>

            {/* Button Container */}
            <div
              style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                display: 'flex',
              }}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={onClose}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onClose();
                }}
                style={{
                  width: '200px',
                  padding: '16px',
                  background: 'white',
                  borderRadius: '76px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  display: 'inline-flex',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                className="hover:bg-stone-200 active:scale-95 shadow-md"
              >
                <div
                  style={{
                    flex: '1 1 0',
                    textAlign: 'center',
                    color: 'black',
                    fontSize: '16px',
                    fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                    fontWeight: 400,
                    wordWrap: 'break-word',
                    userSelect: 'none',
                  }}
                >
                  Tutup
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
