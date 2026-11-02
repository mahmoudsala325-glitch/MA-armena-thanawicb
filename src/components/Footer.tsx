import React from 'react';
import { MapPin, Building, ShieldCheck, Heart } from 'lucide-react';
import schoolLogo from '../assets/images/armana_school_crest.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050e1c] border-t border-amber-500/30 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative ambient Nile light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-slate-800/80 text-right">
          
          {/* Brand & Crest */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 justify-end">
              <div className="flex flex-col items-end">
                <h3 className="text-lg font-extrabold text-white">
                  مدرسة أرمنا الثانوية المشتركة
                </h3>
                <span className="text-[11px] text-amber-400 font-semibold">تأسست 1978م • نصر النوبة - أسوان</span>
              </div>
              <img
                src={schoolLogo}
                alt="شعار المدرسة"
                className="w-12 h-12 rounded-xl object-contain border border-amber-400/40 bg-[#091e3e] p-1"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              منارة تعليمية رائدة بقرية أرمنا التابعة لمجلس قروي عنيبة، مركز نصر النوبة، محافظة أسوان، تسعى لتمكين الطلاب بالعلم الحديث وبناء قادة المستقبل.
            </p>
          </div>

          {/* Quick links & Directorate */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-amber-300">التبعية الإدارية والتعليمية</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2 justify-end">
                <span>وزارة التربية والتعليم والتعليم الفني المصرية</span>
                <Building className="w-4 h-4 text-blue-400 shrink-0" />
              </li>
              <li className="flex items-center gap-2 justify-end">
                <span>مديرية التربية والتعليم بمحافظة أسوان</span>
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              </li>
              <li className="flex items-center gap-2 justify-end">
                <span>إدارة نصر النوبة التعليمية</span>
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              </li>
            </ul>
          </div>

          {/* Mottos */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-amber-300">شعارنا الخالد</h4>
            <div className="p-4 rounded-xl bg-[#09152a] border border-blue-900/60 text-sm leading-relaxed space-y-2">
              <p className="font-bold text-white text-center">
                «بالعلم نبني المستقبل»
              </p>
              <p className="font-semibold text-amber-300 text-center">
                «اجتهد اليوم لتفخر بنفسك غدًا»
              </p>
            </div>
          </div>

        </div>

        {/* Required Student Developer Credit Statement at the very bottom */}
        <div className="text-center pt-2">
          <div className="inline-block px-6 py-3 rounded-2xl bg-[#08172d] border border-amber-400/40 shadow-lg text-slate-100 text-sm sm:text-base font-bold">
            «تم إنشاء هذا الموقع بواسطة الطلاب: محمود عاشور، وعلوي علاء، وعارف يحيى، وأمير جمال، وميادة محمد، تحت إشراف الأستاذة الفاضلة هبة شيخ الدين.»
          </div>
          
          <div className="mt-4 text-xs text-slate-500">
            جميع الحقوق محفوظة © {new Date().getFullYear()} • مدرسة أرمنا الثانوية - مركز نصر النوبة - محافظة أسوان
          </div>
        </div>

      </div>
    </footer>
  );
};
