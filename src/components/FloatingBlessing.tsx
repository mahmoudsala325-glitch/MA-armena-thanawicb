import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Volume2, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FloatingBlessing: React.FC = () => {
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem('armana_salawat_count');
    return saved ? parseInt(saved, 10) : 12;
  });
  const [isSparkling, setIsSparkling] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    localStorage.setItem('armana_salawat_count', count.toString());
  }, [count]);

  const handleBlessingClick = (e: React.MouseEvent) => {
    setCount((prev) => prev + 1);
    setIsSparkling(true);

    // Subtle golden confetti spark
    try {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 15,
        spread: 60,
        origin: { x, y },
        colors: ['#f59e0b', '#fbbf24', '#fef08a', '#38bdf8'],
        disableForReducedMotion: true,
      });
    } catch {
      // Fallback gracefully
    }

    setTimeout(() => {
      setIsSparkling(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2">
      {/* Tooltip hint on hover */}
      {showTooltip && (
        <div className="bg-slate-900/95 text-amber-200 text-xs px-3 py-1.5 rounded-lg border border-amber-500/30 shadow-xl backdrop-blur-md animate-fade-in pointer-events-none mb-1">
          انقر للترديد والزيادة في الأجر والبركة ✨
        </div>
      )}

      {/* Floating Pill Button */}
      <button
        onClick={handleBlessingClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center gap-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#09152a] via-[#102444] to-[#0a192f] border-2 border-amber-400/50 hover:border-amber-400 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
        aria-label="صلِّ على النبي ﷺ"
      >
        {/* Glow ambient ring */}
        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-400/20 via-blue-500/20 to-amber-400/20 blur opacity-60 group-hover:opacity-100 transition duration-500" />

        {/* Golden icon */}
        <div className="relative w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 group-hover:bg-amber-500/30 transition">
          <Sparkles className={`w-4 h-4 text-amber-300 ${isSparkling ? 'animate-spin' : ''}`} />
        </div>

        {/* Required Phrase */}
        <div className="relative flex flex-col items-start text-right">
          <span className="font-['Amiri',serif] text-base sm:text-lg font-bold text-amber-300 tracking-wide drop-shadow-[0_1px_4px_rgba(245,158,11,0.4)]">
            صلِّ على النبي ﷺ
          </span>
          <span className="text-[10px] text-slate-300/80 -mt-0.5">
            {count} صلاة مسجلة بالموقع
          </span>
        </div>

        {/* Counter indicator */}
        <div className="relative ml-1 px-2 py-0.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-200 text-xs font-semibold">
          +{count}
        </div>
      </button>
    </div>
  );
};
