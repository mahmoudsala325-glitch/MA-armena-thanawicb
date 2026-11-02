import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

interface FloatingAssistantButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const FloatingAssistantButton: React.FC<FloatingAssistantButtonProps> = ({ onClick, isOpen }) => {
  if (isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Interactive label bubble on hover */}
      <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-amber-200 text-xs shadow-lg backdrop-blur-md animate-bounce duration-1000">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>اسأل المساعد الذكي عن المدرسة</span>
      </div>

      <button
        onClick={onClick}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 text-slate-950 shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer border-2 border-white/50"
        aria-label="المساعد الذكي لمدرسة أرمنا"
      >
        {/* Pulsing halo */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-30"></span>

        <Bot className="w-7 h-7 text-slate-950 group-hover:rotate-12 transition duration-300" />

        {/* Small live notification badge */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-600 border-2 border-slate-900"></span>
        </span>
      </button>
    </div>
  );
};
