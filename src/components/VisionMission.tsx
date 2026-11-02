import React from 'react';
import { Eye, Target, Compass, Sparkles, Award, Shield, Lightbulb } from 'lucide-react';
import { VERIFIED_SCHOOL_DATA } from '../data/schoolData';

export const VisionMission: React.FC = () => {
  const values = [
    {
      title: 'التميز الأكاديمي',
      desc: 'غرس الشغف المعرفي والتحصيل العلمي الجاد لبلوغ أعلى كليات القمة.',
      icon: Award,
    },
    {
      title: 'الانتماء الوطني والنوبي',
      desc: 'الفخر بجذورنا النوبية العريقة والاعتزاز بالهوية الوطنية المصرية.',
      icon: Shield,
    },
    {
      title: 'الأمانة والمصداقية',
      desc: 'تربية النفوس على الصدق والأمانة العلمية في القول والعمل.',
      icon: Compass,
    },
    {
      title: 'الابتكار ومواكبة العصر',
      desc: 'تسخير وسائل التكنولوجيا والذكاء الاصطناعي لحل المشكلات وخدمة مجتمعنا.',
      icon: Lightbulb,
    },
  ];

  return (
    <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#09152a]/85 backdrop-blur-sm border-t border-amber-500/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>البوصلة التربوية والتعليمية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            الرؤية والرسالة <span className="gold-gradient-text">والقيم</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            خارطة طريق مدرستنا لتخريج جيل متسلح بالعلم والمعرفة يقود قاطرة المستقبل.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Vision */}
          <div className="relative group p-8 rounded-2xl bg-gradient-to-b from-[#0f2444] to-[#0d1e38] border-2 border-amber-400/30 hover:border-amber-400/70 shadow-xl shadow-blue-950/60 transition duration-300 text-right">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>رؤية المدرسة</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                المستقبل
              </span>
            </h3>
            <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
              {VERIFIED_SCHOOL_DATA.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="relative group p-8 rounded-2xl bg-gradient-to-b from-[#0f2444] to-[#0d1e38] border-2 border-blue-500/30 hover:border-blue-400/70 shadow-xl shadow-blue-950/60 transition duration-300 text-right">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>رسالة المدرسة</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                الواجب
              </span>
            </h3>
            <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
              {VERIFIED_SCHOOL_DATA.mission}
            </p>
          </div>

        </div>

        {/* Core Values Grid */}
        <div className="text-center mb-8">
          <h4 className="text-xl font-bold text-white inline-block pb-2 border-b-2 border-amber-400">
            قيمنا المؤسسية الراسخة
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-400/40 transition duration-300 text-right group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-950 border border-blue-800/60 flex items-center justify-center text-amber-400 group-hover:scale-110 transition duration-300 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h5 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition">
                  {val.title}
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
