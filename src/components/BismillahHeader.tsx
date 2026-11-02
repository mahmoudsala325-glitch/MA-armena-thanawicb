import React from 'react';

export const BismillahHeader: React.FC = () => {
  return (
    <header className="relative w-full py-6 sm:py-8 bg-gradient-to-b from-[#060c16] via-[#09152a] to-[#0a192f] border-b border-amber-500/20 text-center overflow-hidden">
      {/* Subtle decorative background light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Decorative Egyptian / Nubian inspired geometric line */}
      <div className="relative max-w-4xl mx-auto px-4 flex items-center justify-center gap-3 sm:gap-6">
        <div className="flex-1 h-px bg-gradient-to-l from-amber-400/40 via-amber-500/20 to-transparent" />
        
        <div className="relative group inline-block">
          {/* Islamic Ornament Frame */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/20 via-blue-500/10 to-amber-500/20 blur-sm opacity-75 group-hover:opacity-100 transition duration-500" />
          
          <div className="relative px-6 py-2 rounded-xl bg-slate-900/80 border border-amber-500/30 backdrop-blur-sm shadow-xl shadow-blue-950/40">
            <span className="font-['Amiri',serif] text-2xl sm:text-3xl md:text-4xl text-amber-200 tracking-wide select-none drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)]">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
          </div>
        </div>

        <div className="flex-1 h-px bg-gradient-to-r from-amber-400/40 via-amber-500/20 to-transparent" />
      </div>

      <div className="mt-2 text-xs sm:text-sm text-slate-400 tracking-wider">
        صرح التعليم والنهضة في قرية أرمنا • مركز نصر النوبة • محافظة أسوان
      </div>
    </header>
  );
};
