import React from 'react';
import { Code, Users, Sparkles, Award, GraduationCap } from 'lucide-react';
import { VERIFIED_SCHOOL_DATA } from '../data/schoolData';

export const StudentDevelopersCredit: React.FC = () => {
  return (
    <section id="developers" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#071120]/90 backdrop-blur-sm border-t border-amber-500/30 relative">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <Users className="w-3.5 h-3.5" />
          <span>سواعد الطلاب المبتكرين</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          فريق الإعداد <span className="gold-gradient-text">والتطوير الرقمي</span>
        </h2>

        {/* Supervisor Badge / Card */}
        <div className="mb-6 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500/15 via-[#0b2347] to-amber-500/15 border-2 border-amber-400/60 shadow-xl backdrop-blur-md">
          <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-300">
            <GraduationCap className="w-5 h-5 text-amber-400" />
          </div>
          <div className="text-right">
            <span className="block text-[11px] text-amber-400 font-semibold">الإشراف التربوي والتعليمي:</span>
            <span className="text-base sm:text-lg font-extrabold text-white">
              تحت إشراف الأستاذة الفاضلة / هبة شيخ الدين
            </span>
          </div>
        </div>
        
        <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-10 leading-relaxed">
          مبادرة طلابية مبدعة لتوثيق تاريخ وصرح مدرسة أرمنا الثانوية بأسلوب رقمي حديث يليق بأبناء النوبة ومصر، تحت إشراف ورعاية تعليمية كريمة.
        </p>

        {/* The 5 Students Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
          {VERIFIED_SCHOOL_DATA.studentDevelopers.map((student, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0b1b33] border border-blue-900/60 hover:border-amber-400/50 transition-all duration-300 text-center shadow-lg group transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 border border-blue-700/60 flex items-center justify-center text-amber-400 mx-auto mb-3 group-hover:scale-105 transition shadow-inner">
                <Code className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="font-bold text-white text-base mb-1 group-hover:text-amber-300 transition">
                {student.name}
              </h3>
              <p className="text-xs text-slate-400">
                {student.role}
              </p>
            </div>
          ))}
        </div>

        {/* Required Credit Box */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-blue-950/90 via-slate-900 to-blue-950/90 border-2 border-amber-400/60 shadow-2xl max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-amber-400">
            <Award className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-wider">وسام التقدير والإشراف</span>
          </div>
          <p className="text-base sm:text-lg font-bold text-amber-200 leading-relaxed">
            «تم إنشاء هذا الموقع بواسطة الطلاب: محمود عاشور، وعلوي علاء، وعارف يحيى، وأمير جمال، وميادة محمد.»
          </p>
          <div className="pt-2 border-t border-amber-500/30 flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-white">
            <span className="text-amber-400">تحت إشراف الأستاذة الفاضلة /</span>
            <span className="text-amber-300 underline decoration-amber-400/60 underline-offset-4">هبة شيخ الدين</span>
          </div>
        </div>

      </div>
    </section>
  );
};
