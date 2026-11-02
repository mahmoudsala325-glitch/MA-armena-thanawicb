import React from 'react';
import { BookOpen, Compass, GraduationCap, Laptop, CheckCircle, ChevronLeft } from 'lucide-react';
import { VERIFIED_SCHOOL_DATA } from '../data/schoolData';

export const StagesAndCurriculum: React.FC = () => {
  return (
    <section id="stages" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#08172d]/85 backdrop-blur-sm border-t border-amber-500/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-200 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            <span>المسار الأكاديمي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            المراحل والشعب <span className="gold-gradient-text">التعليمية</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            برامج تعليمية متطورة تلبي طموحات الطلاب وتؤهلهم لاجتياز امتحانات الثانوية العامة بتفوق واقتدار.
          </p>
        </div>

        {/* 3 Secondary Grades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {VERIFIED_SCHOOL_DATA.stages.map((stage, idx) => {
            const icons = [BookOpen, Compass, GraduationCap];
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-gradient-to-b from-[#0c1e38] to-[#09152a] border border-blue-800/40 hover:border-amber-400/60 p-6 sm:p-8 transition-all duration-300 shadow-xl shadow-slate-950/40 flex flex-col justify-between text-right group"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                    {stage.type}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-blue-900/50 border border-blue-700/50 flex items-center justify-center text-amber-300 group-hover:scale-110 transition duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition">
                    {stage.grade}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>تأهيل تقني وأكاديمي شامل</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tablet & Digital Infrastructure Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-blue-950/80 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-right">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
              <Laptop className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                منظومة التعليم الرقمي والتابلت المدرسي
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                تطبيق كامل لمنظومة التابلت لطلاب المرحلة الثانوية مع توفير شبكات الفايبر والاتصال التعليمي ببوابات بنك المعرفة المصري ومنصات الوزارة.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 text-amber-300 text-xs font-semibold border border-amber-500/30 whitespace-nowrap">
            <span>تحديث وزاري مستمر</span>
          </div>
        </div>

      </div>
    </section>
  );
};
