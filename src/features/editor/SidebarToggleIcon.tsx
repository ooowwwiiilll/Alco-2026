import React from 'react';

interface SidebarToggleIconProps {
  className?: string;
}

export const SidebarToggleIcon: React.FC<SidebarToggleIconProps> = ({
  className = 'w-5 h-5 text-white',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
  >
    <rect x="2.5" y="3.75" width="19" height="16.5" rx="3" strokeWidth="1.75" />
    <path d="M8.5 3.75V20.25" strokeWidth="1.75" />
  </svg>
);
