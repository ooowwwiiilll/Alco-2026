import React, { useEffect, useRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

// =========================================================================
// CUSTOM FORM FIELD (Supports Empty, Active, Filled, and Error states)
// =========================================================================
interface CustomFormFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  onBlur?: () => void;
  type?: 'text' | 'email' | 'password';
  error?: string | null;
  isError?: boolean;
  hideErrorMessage?: boolean;
  showPasswordToggle?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  required?: boolean;
  name?: string;
}

export const CustomFormField: React.FC<CustomFormFieldProps> = ({
  label,
  value,
  onChange,
  onBlur,
  type = 'text',
  error,
  isError = false,
  hideErrorMessage = false,
  showPasswordToggle = false,
  disabled = false,
  autoFocus = false,
  required = false,
  name,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Click outside listener: when user clicks outside the field area, state returns to inactive
  useEffect(() => {
    if (!isFocused) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsFocused(false);
        inputRef.current?.blur();
        if (onBlur) onBlur();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [isFocused, onBlur]);

  const hasValue = value.length > 0;
  // Field enters active & typing state immediately upon focus or if filled
  const isTypingOrFilled = isFocused || hasValue;
  const hasError = isError || !!error;
  const actualType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="w-full flex flex-col items-start select-none">
      <div
        ref={containerRef}
        onClick={() => {
          if (!disabled) {
            setIsFocused(true);
            inputRef.current?.focus();
          }
        }}
        style={{
          width: '100%',
          height: '72px',
          paddingLeft: '16px',
          paddingRight: '16px',
          background: '#202020',
          borderRadius: '12px',
          outline: isFocused ? '1px white solid' : hasError ? '1px #EF4444 solid' : 'none',
          outlineOffset: '-1px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          cursor: disabled ? 'not-allowed' : 'text',
          opacity: disabled ? 0.6 : 1,
          transition: 'outline 0.15s ease, background 0.15s ease',
        }}
        className="group"
      >
        {/* Animated Floating Label */}
        <div
          style={{
            position: 'absolute',
            left: '16px',
            right: showPasswordToggle ? '48px' : '16px',
            top: isTypingOrFilled ? '14px' : '24px',
            fontSize: isTypingOrFilled ? '12px' : '16px',
            lineHeight: isTypingOrFilled ? '18px' : '24px',
            color: isTypingOrFilled ? 'rgba(255, 255, 255, 0.50)' : 'white',
            fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
            fontWeight: 400,
            transition: 'all 0.15s ease',
            pointerEvents: 'none',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {label}
        </div>

        {/* Persistent Input Row - Single input element that immediately receives focus and enters typing state */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: isTypingOrFilled ? '18px' : '0px',
            opacity: isTypingOrFilled ? 1 : 0,
            pointerEvents: isTypingOrFilled ? 'auto' : 'none',
            transition: 'opacity 0.12s ease, margin-top 0.15s ease',
          }}
        >
          <input
            ref={inputRef}
            type={actualType}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              if (containerRef.current?.contains(e.relatedTarget as Node)) return;
              setIsFocused(false);
              if (onBlur) onBlur();
            }}
            disabled={disabled}
            required={required}
            name={name}
            autoFocus={autoFocus}
            autoComplete={type === 'password' ? 'current-password' : name || 'on'}
            style={{
              flex: '1 1 0',
              color: 'white',
              fontSize: '16px',
              fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
              fontWeight: 400,
              lineHeight: '24px',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              padding: 0,
              margin: 0,
            }}
            className="w-full bg-transparent outline-none border-none p-0 focus:ring-0 [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
          />
          {showPasswordToggle && (
            <button
              type="button"
              tabIndex={-1}
              onClick={(e) => {
                e.stopPropagation();
                setShowPassword(!showPassword);
                inputRef.current?.focus();
              }}
              className="w-5 h-5 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
              title={showPassword ? 'Sembunyikan password' : 'Lihat password'}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4 text-white" />
              ) : (
                <Eye className="w-4 h-4 text-white" />
              )}
            </button>
          )}
        </div>

        {/* Password Toggle Icon in empty inactive state */}
        {showPasswordToggle && !isTypingOrFilled && (
          <div
            style={{
              position: 'absolute',
              right: '16px',
              top: '26px',
              opacity: 0.5,
              pointerEvents: 'none',
            }}
            className="w-5 h-5 flex items-center justify-center"
          >
            <Eye className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      {/* Error Message directly underneath the 72px box */}
      {hasError && !hideErrorMessage && error && (
        <div
          style={{
            alignSelf: 'stretch',
            color: '#EF4444',
            fontSize: '12px',
            fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
            fontWeight: 400,
            lineHeight: '20px',
            wordWrap: 'break-word',
            marginTop: '6px',
            paddingLeft: '2px',
          }}
          className="animate-fadeIn"
        >
          {error}
        </div>
      )}
    </div>
  );
};

// =========================================================================
// CUSTOM SELECT FIELD (For Divisi Selection)
// =========================================================================
interface CustomSelectFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: { id: string; name: string }[];
  disabled?: boolean;
  error?: string | null;
  isError?: boolean;
  hideErrorMessage?: boolean;
}

export const CustomSelectField: React.FC<CustomSelectFieldProps> = ({
  label,
  value,
  onChange,
  options,
  disabled = false,
  error,
  isError = false,
  hideErrorMessage = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  // Click outside listener: when user clicks outside the select area, state returns to inactive
  useEffect(() => {
    if (!isFocused) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsFocused(false);
        selectRef.current?.blur();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [isFocused]);

  const hasValue = !!value && value.trim().length > 0;
  const hasError = isError || !!error;

  return (
    <div className="w-full flex flex-col items-start select-none">
      <div
        ref={containerRef}
        onClick={() => {
          if (!disabled) {
            setIsFocused(true);
            selectRef.current?.focus();
          }
        }}
        style={{
          width: '100%',
          height: '72px',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: hasValue ? '14px' : '24px',
          paddingBottom: hasValue ? '14px' : '24px',
          background: '#202020',
          borderRadius: '12px',
          outline: isFocused ? '1px white solid' : hasError ? '1px #EF4444 solid' : 'none',
          outlineOffset: '-1px',
          flexDirection: hasValue ? 'column' : 'row',
          justifyContent: hasValue ? 'center' : 'center',
          alignItems: hasValue ? 'flex-start' : 'center',
          display: 'inline-flex',
          cursor: disabled ? 'not-allowed' : 'pointer',
          position: 'relative',
          transition: 'outline 0.15s ease, background 0.15s ease',
        }}
      >
        {hasValue ? (
          <>
            <div
              style={{
                alignSelf: 'stretch',
                color: 'rgba(255, 255, 255, 0.50)',
                fontSize: '12px',
                fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                fontWeight: 400,
                lineHeight: '18px',
                wordWrap: 'break-word',
              }}
            >
              {label}
            </div>
            <div className="w-full flex items-center justify-between">
              <div
                style={{
                  flex: '1 1 0',
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                  fontWeight: 400,
                  lineHeight: '24px',
                  wordWrap: 'break-word',
                }}
              >
                {value}
              </div>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 10L12 16L18 10"
                    stroke="#8F8F8F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                flex: '1 1 0',
                color: 'white',
                fontSize: '16px',
                fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
                fontWeight: 400,
                lineHeight: '24px',
                wordWrap: 'break-word',
              }}
            >
              {label}
            </div>
            <div
              style={{
                width: '24px',
                height: '24px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 10L12 16L18 10"
                  stroke="#8F8F8F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </>
        )}

        <select
          ref={selectRef}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            if (containerRef.current?.contains(e.relatedTarget as Node)) return;
            setIsFocused(false);
          }}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        >
          <option value="" disabled hidden>
            {label}
          </option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.name} className="bg-[#202020] text-white">
              {opt.name}
            </option>
          ))}
        </select>
      </div>

      {/* Error Message directly underneath the 72px box */}
      {hasError && !hideErrorMessage && error && (
        <div
          style={{
            alignSelf: 'stretch',
            color: '#EF4444',
            fontSize: '12px',
            fontFamily: 'Season Sans, Plus Jakarta Sans, Inter, sans-serif',
            fontWeight: 400,
            lineHeight: '20px',
            wordWrap: 'break-word',
            marginTop: '6px',
            paddingLeft: '2px',
          }}
          className="animate-fadeIn"
        >
          {error}
        </div>
      )}
    </div>
  );
};
