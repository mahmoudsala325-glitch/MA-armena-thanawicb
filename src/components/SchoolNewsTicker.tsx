import React, { useState, useEffect } from 'react';
import { Bell, ChevronLeft, Sparkles, Newspaper, Flame } from 'lucide-react';

interface SchoolNewsTickerProps {
  onOpenNewsModal: () => void;
}

const TICKER_HEADLINES = [
  'تنبيه عاجل لطلاب الصفين الأول والثاني الثانوي بشأن تحديث منصة الاختبارات على التابلت',
  'إعلان جدول امتحانات شهر نوفمبر لصفوف النقل بشعبتي العلمي والأدبي',
  'تأكيد إدارة مدرسة أرمنا على ضرورة الحضور في تمام الساعة 7:30 صباحاً لطابور الصباح',
  'تهنئة الطلاب الفائزين بكأس دوري كرة القدم بالتعاون مع مركز شباب أرمنا',
];

export const SchoolNewsTicker: React.FC<SchoolNewsTickerProps> = ({ onOpenNewsModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TICKER_HEADLINES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-blue-950 via-[#0a1b36] to-blue-950 border-b border-amber-500/25 py-2 px-3 sm:px-6 relative z-30 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-right">
        
        {/* News Headline Rotating Item */}
        <div 
          onClick={onOpenNewsModal}
          className="flex items-center gap-2.5 overflow-hidden flex-1 cursor-pointer group"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-600/90 text-white text-[11px] font-bold shrink-0 shadow-sm animate-pulse">
            <Flame className="w-3.5 h-3.5" />
            <span>أحدث الأخبار:</span>
          </div>

          {/* Headline text */}
          <p className="text-xs sm:text-sm text-slate-200 group-hover:text-amber-300 transition duration-300 truncate">
            {TICKER_HEADLINES[currentIndex]}
          </p>
        </div>

        {/* Trigger Button to Open News Window */}
        <button
          onClick={onOpenNewsModal}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-amber-300 hover:text-white text-xs font-semibold border border-blue-600/40 hover:border-amber-400/60 transition cursor-pointer shrink-0 shadow-sm"
        >
          <Bell className="w-3.5 h-3.5 text-amber-400" />
          <span>فتح نافذة الأخبار</span>
          <ChevronLeft className="w-3 h-3" />
        </button>

      </div>
    </div>
  );
};
