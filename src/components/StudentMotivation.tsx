import React, { useState } from 'react';
import { Sparkles, Trophy, Award, BookOpen, Clock, Heart, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { VERIFIED_SCHOOL_DATA } from '../data/schoolData';

export const StudentMotivation: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const tips = [
    {
      title: 'تنظيم جدول الاستذكار',
      desc: 'قسّم وقتك على جلسات 45 دقيقة تليها 10 دقائق استراحة لإنعاش التركيز وتثبيت المعلومات.',
      icon: Clock,
    },
    {
      title: 'التطبيق وحل النماذج',
      desc: 'فهم المفاهيم وحده لا يكفي؛ التدريب على أسئلة التابلت وامتحانات الأعوام السابقة هو مفتاح الدرجات العالية.',
      icon: BookOpen,
    },
    {
      title: 'الثقة بالنفس والتفاؤل',
      desc: 'اجتهد اليوم وكن واثقاً في قدراتك؛ فكل جهد تبذله في قريتك أرمنا اليوم يمهد لطريق فخر عائلتك غداً.',
      icon: Trophy,
    },
    {
      title: 'التوازن النفسي والراحة',
      desc: 'النوم الكافي والغذاء الصحي وممارسة الرياضة بمركز شباب أرمنا تعزز طاقتك الذهنية والنفسية.',
      icon: Heart,
    },
  ];

  const handleNextQuote = (e: React.MouseEvent) => {
    setCurrentQuoteIndex((prev) => (prev + 1) % VERIFIED_SCHOOL_DATA.motivationalQuotes.length);

    try {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 25,
        spread: 70,
        origin: { x, y },
        colors: ['#f59e0b', '#38bdf8', '#fbbf24', '#ffffff'],
        disableForReducedMotion: true,
      });
    } catch {
      // fallback
    }
  };

  const activeQuote = VERIFIED_SCHOOL_DATA.motivationalQuotes[currentQuoteIndex];

  return (
    <section id="motivation" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#09152a]/85 backdrop-blur-sm border-t border-amber-500/20 relative overflow-hidden">
      {/* Decorative Golden Ambient */}
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>رسائل الهمة والتفوق</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            واحة التحفيز <span className="gold-gradient-text">لأبطال مدرسة أرمنا</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            كلمات تصنع العزيمة وتجدد الشغف في قلوب أبنائنا وبناتنا الطلاب نحو مستقبل مشرق.
          </p>
        </div>

        {/* Featured Main Motivational Quote Card */}
        <div className="max-w-3xl mx-auto mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950 via-[#0e2344] to-blue-950 border-2 border-amber-400/40 shadow-2xl text-center relative group">
          <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mx-auto mb-6 group-hover:scale-110 transition duration-300">
            <Sparkles className="w-7 h-7" />
          </div>

          <div className="min-h-[90px] flex items-center justify-center mb-4">
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-200 leading-snug drop-shadow-sm font-['Amiri',serif]">
              {activeQuote.text}
            </blockquote>
          </div>

          <p className="text-sm font-medium text-slate-300 mb-8">
            — {activeQuote.author}
          </p>

          <button
            onClick={handleNextQuote}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-900 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-lg shadow-amber-500/20 transition duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>جرعة تحفيز جديدة ✨</span>
          </button>
        </div>

        {/* Study Advice & Tips */}
        <div className="mb-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white inline-block pb-1 border-b-2 border-blue-500">
            وصايا التفوق لطلاب الثانوية العامة
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, idx) => {
            const Icon = tip.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0d1e38]/90 border border-blue-900/50 hover:border-amber-400/50 transition-all duration-300 text-right group shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-700/60 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition">
                  {tip.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
