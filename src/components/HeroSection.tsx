import React from 'react';
import { Sparkles, ArrowLeft, Bot, Award, MapPin, Building, ShieldCheck, Bell } from 'lucide-react';
import schoolLogo from '../assets/images/armana_school_crest.jpg';

interface HeroSectionProps {
  onOpenAssistant: () => void;
  onOpenNews?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAssistant, onOpenNews }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#061224]/50 via-[#0a1e3b]/75 to-[#061224]/90 backdrop-blur-[1px]">
      {/* Nile River & Aswan Natural Atmospheric Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Golden Sun of Aswan Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-3xl" />
        
        {/* Nile Deep Blue Current Glow */}
        <div className="absolute bottom-10 left-1/3 w-[500px] h-72 bg-blue-600/15 rounded-full blur-3xl" />

        {/* Subtle Nubian Arch & Wave SVG Vector Background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-15"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Nile water flow curves */}
          <path
            d="M-100 650 C 300 550, 600 750, 1000 620 C 1250 540, 1400 600, 1600 580 L 1600 900 L -100 900 Z"
            fill="url(#nileGrad1)"
          />
          <path
            d="M-50 720 C 400 680, 750 780, 1150 710 C 1350 670, 1500 700, 1600 730 L 1600 900 L -50 900 Z"
            fill="url(#nileGrad2)"
          />
          {/* Nubian geometric triangles */}
          <g stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" fill="none">
            <polygon points="120,240 140,210 160,240" />
            <polygon points="160,240 180,210 200,240" />
            <polygon points="1250,180 1270,150 1290,180" />
            <polygon points="1290,180 1310,150 1330,180" />
            <circle cx="1200" cy="120" r="40" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" />
          </g>
          <defs>
            <linearGradient id="nileGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="nileGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0369a1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#082f49" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        {/* Nubian Grid Overlay */}
        <div className="absolute inset-0 nubian-pattern opacity-40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Prominent Official School Crest Logo */}
        <div className="relative inline-block mb-8 group">
          {/* Ambient Royal Gold & Lapis Lazuli Glow */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-amber-500/30 via-blue-600/40 to-amber-500/30 blur-2xl opacity-75 group-hover:opacity-100 transition duration-700" />
          
          <div className="relative p-2 sm:p-3 rounded-3xl bg-gradient-to-b from-[#14325e] via-[#0b2142] to-[#07152b] border-2 border-amber-400/60 shadow-2xl shadow-blue-950/80 backdrop-blur-xl">
            <img
              src={schoolLogo}
              alt="لوجو مدرسة أرمنا الثانوية المشتركة - نصر النوبة أسوان"
              className="w-40 sm:w-52 md:w-60 h-auto object-contain rounded-2xl drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Top Badges Inspired by Logo */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#14325e]/80 text-amber-300 border border-amber-400/50 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>تأسست عام 1978م • صرح تعليمي عريق</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0a1e3b]/80 text-blue-200 border border-blue-400/40 backdrop-blur-md shadow-sm">
            <Building className="w-3.5 h-3.5 text-blue-400" />
            <span>تطوير وتوسعة المبادرة الرئاسية "حياة كريمة"</span>
          </span>
        </div>

        {/* Main School Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight sm:leading-tight mb-3">
          مدرسة <span className="gold-gradient-text">أرمنا</span> الثانوية المشتركة
        </h1>

        <div className="text-sm sm:text-base font-bold text-amber-400/90 tracking-widest mb-4 uppercase">
          ARMANA JOINT SECONDARY SCHOOL • ASWAN, EGYPT
        </div>

        <p className="text-base sm:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-sm">
          منارة العلم والمعرفة والتفوق في قرية أرمنا • مجلس قروي عنيبة • مركز نصر النوبة • محافظة أسوان
        </p>

        {/* Required Motivational Highlight Banner */}
        <div className="max-w-2xl mx-auto mb-10 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0d274f]/90 via-[#091b36]/95 to-[#0d274f]/90 border-2 border-amber-400/50 shadow-2xl shadow-blue-950/80 backdrop-blur-md transform transition hover:scale-[1.01]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-amber-500/30">
            <div className="flex items-center gap-2 text-center sm:text-right">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-base sm:text-lg font-bold text-amber-300">
                «بالعلم نبني المستقبل»
              </span>
            </div>

            <div className="pt-3 sm:pt-0 sm:pr-8 flex items-center gap-2 text-center sm:text-right">
              <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                «اجتهد اليوم لتفخر بنفسك غدًا»
              </span>
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition duration-300 transform hover:-translate-y-0.5"
          >
            <span>استكشف تاريخ المدرسة</span>
            <ArrowLeft className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenAssistant}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-blue-900/60 hover:bg-blue-800/80 border border-blue-400/40 hover:border-amber-400/60 shadow-lg shadow-blue-950/50 backdrop-blur-md transition duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Bot className="w-5 h-5 text-amber-300" />
            <span>اسأل المساعد الذكي</span>
          </button>

          {onOpenNews && (
            <button
              onClick={onOpenNews}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-base font-medium text-slate-200 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700 hover:border-amber-400/60 transition cursor-pointer"
            >
              <Bell className="w-4 h-4 text-amber-400" />
              <span>أحدث الأخبار من فيسبوك</span>
            </button>
          )}
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-blue-900/40 backdrop-blur-sm text-right">
            <div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>الموقع والمركز</span>
            </div>
            <div className="font-bold text-sm sm:text-base text-white">نصر النوبة • قرية أرمنا</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-blue-900/40 backdrop-blur-sm text-right">
            <div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-blue-400" />
              <span>المشروع القومي</span>
            </div>
            <div className="font-bold text-sm sm:text-base text-white">مبادرة حياة كريمة</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-blue-900/40 backdrop-blur-sm text-right">
            <div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>المرحلة التعليمية</span>
            </div>
            <div className="font-bold text-sm sm:text-base text-white">الثانوية العامة (مشترك)</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-blue-900/40 backdrop-blur-sm text-right">
            <div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>الإدارة التعليمية</span>
            </div>
            <div className="font-bold text-sm sm:text-base text-white">إدارة نصر النوبة</div>
          </div>
        </div>

      </div>
    </section>
  );
};
