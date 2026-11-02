import React from 'react';
import { BookOpen, MapPin, Building2, CheckCircle2, HeartHandshake, Compass } from 'lucide-react';

export const AboutSchool: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#08172d]/85 backdrop-blur-sm border-t border-amber-500/15 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-amber-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>نبذة توثيقية وتاريخية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            عن <span className="gold-gradient-text">مدرسة أرمنا الثانوية</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            صرح تعليمي شامخ يجسد التلاحم النوبي الأصيل وتطلعات الجمهورية الجديدة في بناء الإنسان المصري.
          </p>
        </div>

        {/* Grid: Story & Verification */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1e38]/90 border border-blue-900/50 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2.5 h-7 rounded-full bg-gradient-to-b from-amber-400 to-amber-600 inline-block" />
                <span>النشأة والدور المجتمعي في نصر النوبة</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  تقع <strong className="text-white">قرية أرمنا</strong> في قلب مركز نصر النوبة بمحافظة أسوان، وهي إحدى القرى النوبية العريقة التابعة للوحدة المحلية لقروي «عنيبة». يتميز أهلها بالترابط العائلي المتين وحب العلم والاجتهاد.
                </p>
                <p>
                  كان الطلاب في السابق يواجهون مشاق التنقل اليومي وقطع مسافات شاقة للوصول إلى مدارس التعليم الثانوي في المراكز والقرى المجاورة. ومن هنا جاء إنشاء وتوسعة <strong className="text-amber-300">مدرسة أرمنا الثانوية</strong> كحلم طال انتظاره لخدمة أبناء القرية والقرى المجاورة مثل عنيبة ومصمص.
                </p>
                <p>
                  توفر المدرسة بيئة تعليمية متكاملة تشمل فصولاً دراسية حديثة ومعامل متطورة تسهم في استقرار الطلاب وتفوقهم في المرحلة الثانوية العامة.
                </p>
              </div>
            </div>

            {/* Presidential Initiative Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/90 to-slate-900 border border-amber-500/30 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-amber-400" />
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  المبادرة الرئاسية «حياة كريمة» وتطوير المدرسة
                </h4>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                شهدت مدرسة أرمنا طفرة نوعية بفضل إدراجها ضمن مشروعات المبادرة الرئاسية لتطوير الريف المصري وقرى النوبة (حياة كريمة)، حيث شملت الأعمال:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>تطوير ورفع كفاءة المبنى التعليمي.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>تجهيز معامل العلوم ومصادر التعلم.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>تأسيس البنية الرقمية لشبكة التابلت.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>توفير أحدث معايير الأمان والسلامة.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location & Administration Details */}
            <div id="location" className="p-6 rounded-2xl bg-slate-900/90 border border-blue-900/60 shadow-lg text-right">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2 text-amber-300">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>التبعية والموقع الجغرافي المعتمد</span>
              </h4>

              <div className="space-y-3 divide-y divide-slate-800 text-sm">
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-400">القرية:</span>
                  <span className="font-semibold text-white">قرية أرمنا</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-400">الوحدة المحلية:</span>
                  <span className="font-semibold text-white">مجلس قروي عنيبة</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-400">المركز:</span>
                  <span className="font-semibold text-white">مركز نصر النوبة</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-400">المحافظة:</span>
                  <span className="font-semibold text-white">محافظة أسوان</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-400">الإدارة التعليمية:</span>
                  <span className="font-semibold text-amber-300">إدارة نصر النوبة التعليمية</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-400">المديرية:</span>
                  <span className="font-semibold text-white">مديرية التربية والتعليم بأسوان</span>
                </div>
              </div>
            </div>

            {/* Community & Adjacent Facilities */}
            <div className="p-6 rounded-2xl bg-[#0c1a30] border border-amber-500/20 shadow-lg text-right">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2 text-amber-300">
                <HeartHandshake className="w-5 h-5 text-amber-400" />
                <span>معالم وبيئة قرية أرمنا</span>
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                تتكامل المدرسة مع بيئتها النوبية النشطة، حيث يستفيد الطلاب من:
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-900/40">
                  <strong className="text-amber-300 block mb-1">مركز شباب أرمنا:</strong>
                  شريك الأنشطة الرياضية والمسابقات والبطولات الطلابية.
                </div>
                <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-900/40">
                  <strong className="text-amber-300 block mb-1">المزرعة الذكية التنموية:</strong>
                  مشروع رائد يقع بقرية أرمنا لترشيد الري بالطاقة الشمسية يمثل نموذجاً إلهامياً للطلاب في التكنولوجيا والبيئة.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
