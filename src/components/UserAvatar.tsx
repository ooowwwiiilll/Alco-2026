import React from 'react';

const AVATAR_PALETTE = [
  '#4F46E5', // Indigo
  '#7C3AED', // Violet
  '#D946EF', // Fuchsia
  '#E11D48', // Rose
  '#EA580C', // Orange
  '#059669', // Emerald
  '#0D9488', // Teal
  '#2563EB', // Blue
  '#0284C7', // Sky
  '#9333EA', // Purple
  '#D97706', // Amber
  '#0891B2', // Cyan
  '#4338CA', // Deep Indigo
  '#BE185D', // Dark Pink
  '#047857', // Dark Emerald
  '#1D4ED8', // Dark Blue
];

export function getAvatarColor(seed: string): string {
  if (!seed || seed.trim() === '') {
    return AVATAR_PALETTE[0];
  }
  let hash = 0;
  const normalized = seed.trim().toLowerCase();
  for (let i = 0; i < normalized.length; i++) {
    hash = normalized.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % AVATAR_PALETTE.length;
  return AVATAR_PALETTE[index];
}

export function getInitials(name?: string | null): string {
  if (!name || name.trim() === '') return 'SA';
  const cleanName = name.replace(/\s*\([^)]*\)/g, '').trim();
  const parts = cleanName.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'SA';
  if (parts.length === 1) {
    return parts[0].length >= 2
      ? parts[0].substring(0, 2).toUpperCase()
      : parts[0].substring(0, 1).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

interface UserAvatarProps {
  name?: string | null;
  seed?: string | null;
  size?: number; // Size in px (e.g. 24, 32, 40)
  className?: string;
  style?: React.CSSProperties;
  fontSize?: number | string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  size = 40,
  className = '',
  style = {},
  fontSize,
}) => {
  const initials = getInitials(name);
  const calculatedFontSize = fontSize ?? (size >= 36 ? '14px' : size >= 28 ? '12px' : '10px');

  return (
    <div
      className={`inline-flex items-center justify-center select-none shrink-0 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '6px',
        paddingBottom: '6px',
        backgroundColor: '#353535',
        borderRadius: '1000px',
        ...style,
      }}
      title={name || undefined}
      aria-label={name || 'User Avatar'}
    >
      <div
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize:
            typeof calculatedFontSize === 'number' ? `${calculatedFontSize}px` : calculatedFontSize,
          fontFamily: "'Season Mix', serif",
          fontWeight: 420,
          wordWrap: 'break-word',
          lineHeight: 1,
        }}
      >
        {initials}
      </div>
    </div>
  );
};
