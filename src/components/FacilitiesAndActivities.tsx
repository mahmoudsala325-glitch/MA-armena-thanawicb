import React from 'react';
import { FlaskConical, Laptop, Library, Trophy, Leaf, Mic, CheckCircle2 } from 'lucide-react';
import { VERIFIED_SCHOOL_DATA } from '../data/schoolData';

export const FacilitiesAndActivities: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    FlaskConical,
    Laptop,
    Library,
    Trophy,
    Leaf,
    Mic,
  };

  return (
    <section id="facilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#09152a]/85 backdrop-blur-sm border-t border-amber-500/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>البيئة المدرسية والمرافق</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            المعامل والخدمات <span className="gold-gradient-text">والأنشطة التعليمية</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            تجهيزات عملية ومرافق تعليمية متطورة تُعنى ببناء شخصية الطالب فكرياً وعلمياً ورياضياً.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_SCHOOL_DATA.facilities.map((fac, idx) => {
            const Icon = iconMap[fac.icon] || FlaskConical;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0d1e38]/80 border border-blue-900/40 hover:border-amber-400/50 hover:bg-[#0f2444] transition-all duration-300 shadow-lg text-right group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-950 to-blue-900 border border-blue-700/60 flex items-center justify-center text-amber-300 group-hover:scale-110 group-hover:text-amber-200 transition duration-300 mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition">
                  {fac.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
