import React from 'react';

interface NubianDividerProps {
  className?: string;
  variant?: 'simple' | 'ornate';
}

export const NubianDivider: React.FC<NubianDividerProps> = ({ className = '', variant = 'ornate' }) => {
  return (
    <div className={`relative w-full py-4 flex items-center justify-center overflow-hidden ${className}`}>
      {/* Golden gradient line left */}
      <div className="flex-1 h-px bg-gradient-to-l from-amber-400/50 via-amber-500/20 to-transparent" />

      {/* Center Nubian Pattern SVG Motif */}
      <div className="px-4 flex items-center gap-2">
        <svg
          className="h-6 w-48 sm:w-64 text-amber-400/80 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]"
          viewBox="0 0 240 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Nubian Triangles & Sun Motif */}
          <path
            d="M10 20 L20 4 L30 20 L40 4 L50 20 L60 4 L70 20 L80 4 L90 20 L100 4 L110 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="120" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" fill="#f59e0b" fillOpacity="0.25" />
          <circle cx="120" cy="12" r="3" fill="#f59e0b" />
          <path
            d="M130 20 L140 4 L150 20 L160 4 L170 20 L180 4 L190 20 L200 4 L210 20 L220 4 L230 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Golden gradient line right */}
      <div className="flex-1 h-px bg-gradient-to-r from-amber-400/50 via-amber-500/20 to-transparent" />
    </div>
  );
};
