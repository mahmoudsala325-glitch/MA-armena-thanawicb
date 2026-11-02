import React, { useState } from 'react';
import { Award, Heart, Sparkles, Building2, Users, GraduationCap, Star, BookOpen, UserCheck } from 'lucide-react';
import ashrafImg from '../assets/images/ashraf_abdelbaqi.jpg';
import sabriyaImg from '../assets/images/sabriya_abualfadl.jpg';
import faisalImg from '../assets/images/faisal_ali_younis.jpg';

export const AshrafTribute: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'faisal' | 'sabriya' | 'ashraf'>('faisal');

  return (
    <section id="tribute" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#07152b]/90 backdrop-blur-sm border-t border-amber-500/25 relative overflow-hidden">
      {/* Decorative ambient Nile light */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold mb-3 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
            <span>لوحة الشرف ولمسة وفاء وعرفان</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            روّاد العطاء في <span className="gold-gradient-text">مدرسة أرمنا</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            تحية تقدير واعتزاز لمن وضعوا اللبنات الأولى وبذلوا جهودهم المخلصة لقيادة هذا الصرح التعليمي وخدمة أبنائه وبناته بمركز نصر النوبة.
          </p>

          {/* Toggle Tabs Between Honorees */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              onClick={() => setActiveTab('faisal')}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition duration-300 flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'faisal'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 scale-105 shadow-amber-500/20'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>الأستاذ فيصل علي يونس (المعلم والمدير)</span>
            </button>

            <button
              onClick={() => setActiveTab('sabriya')}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition duration-300 flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'sabriya'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 scale-105 shadow-amber-500/20'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>الأستاذة صبرية أبو الفضل (المديرة الثانية)</span>
            </button>

            <button
              onClick={() => setActiveTab('ashraf')}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition duration-300 flex items-center gap-2 cursor-pointer shadow-md ${
                activeTab === 'ashraf'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 scale-105 shadow-amber-500/20'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>الأستاذ أشرف عبد الباقي (السعي المجتمعي)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Mr. Faisal Ali Younis Tribute Card */}
        {activeTab === 'faisal' && (
          <div className="rounded-3xl bg-gradient-to-br from-[#0c2347] via-[#091b36] to-[#071326] border-2 border-amber-400/50 p-6 sm:p-10 shadow-2xl shadow-blue-950/80 relative overflow-hidden animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Photo Column */}
              <div className="md:col-span-5 flex flex-col items-center text-center">
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-500/40 via-blue-600/30 to-amber-500/40 blur-xl opacity-75 group-hover:opacity-100 transition duration-700" />
                  
                  <div className="relative w-64 sm:w-72 h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-amber-400/70 shadow-2xl bg-[#09152a] p-1.5">
                    <img
                      src={faisalImg}
                      alt="الأستاذ فيصل علي يونس في أروقة المدرسة"
                      className="w-full h-full object-cover object-center rounded-xl"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    الأستاذ فيصل علي يونس
                  </h3>
                  <span className="text-xs sm:text-sm font-semibold text-amber-300">
                    المعلم المثالي ومدير مدرسة أرمنا الثانوية
                  </span>
                  <p className="text-[11px] text-slate-400 mt-1">
                    حاصل على ليسانس الآداب في اللغة الإنجليزية - جامعة جنوب الوادي
                  </p>
                </div>
              </div>

              {/* Tribute Content Column */}
              <div className="md:col-span-7 text-right space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/90 border border-blue-700/50 text-blue-200 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>مسيرة عطاء وتربية رائدة</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-amber-200 leading-snug">
                  قائد تربوي وضع اللبنة الأولى وكرّس علمه لخدمة أجيال نصر النوبة
                </h4>

                <div className="text-sm sm:text-base text-slate-200 leading-relaxed space-y-3 font-normal">
                  <p>
                    تتشرّف مدرسة أرمنا الثانوية بتوجيه تحية إجلال وتقدير لمسيرة <strong className="text-amber-300 font-bold">الأستاذ فيصل علي يونس</strong>، القامة التربوية التي تركت أثرًا بليغًا ومضيئًا في مسيرة التعليم بمركز نصر النوبة.
                  </p>

                  <p>
                    تخرّج الأستاذ فيصل حاملاً <strong className="text-white">ليسانس الآداب في اللغة الإنجليزية من جامعة جنوب الوادي</strong>، وجاب مدارس نصر النوبة معلمًا بارعًا ومربيًا ملهمًا، ونال تقدير القيادات التعليمية بمشاركته المتميزة في وضع أسئلة امتحانات الإدارة لصفوف النقل بالمرحلتين الإعدادية والثانوية، واستحق عن جدارة التتويج بلقب <strong className="text-amber-300">«المعلم المثالي» لثلاث سنوات متتالية</strong>، إلى جانب إشرافه المقتدر على تدريس مادة اللغة الإنجليزية بمدارس الآمال.
                  </p>

                  <p>
                    وفي مرحلة فارقة من تاريخ التعليم بقرية أرمنا، كان للأستاذ فيصل شرف المساهمة في <strong className="text-white">تأسيس مدرسة أرمنا الثانوية ووضع لبنتها الأولى</strong>، ثم تولى إدارتها وقيادتها بكل تفانٍ وإخلاص لمدة ثلاث سنوات، ساعياً بكل طاقته مع قيادات القرية المخلصين: <strong className="text-amber-200">الحاج عامر عابدين</strong>، و<strong className="text-amber-200">الحاج عزت أبو السعود</strong>، و<strong className="text-amber-200">الأستاذ أشرف عبد الدايم (رحمه الله)</strong>، الذي يظل «الغائب الحاضر» في ذاكرة المدرسة ووجدان أهلها.
                  </p>
                </div>

                {/* Professional Highlights Badges */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-blue-900/50 flex items-center gap-2.5">
                    <Star className="w-5 h-5 text-amber-400 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400">التكريم المهني</span>
                      <span className="text-sm font-bold text-white">المعلم المثالي لـ 3 سنوات متتالية</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-blue-900/50 flex items-center gap-2.5">
                    <Building2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400">القيادة والإدارة</span>
                      <span className="text-sm font-bold text-white">إدارة مدرسة أرمنا الثانوية 3 سنوات</span>
                    </div>
                  </div>
                </div>

                {/* Village Pioneers Notice */}
                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200/90 leading-relaxed">
                  <span className="font-bold text-amber-300">رجال اللبنة الأولى والتأسيس: </span>
                  جهود مشتركة مع قيادات القرية: الحاج عامر عابدين، الحاج عزت أبو السعود، والأستاذ أشرف عبد الدايم (رحمه الله - الغائب الحاضر).
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Mrs. Sabriya Abu Al-Fadl Tribute Card */}
        {activeTab === 'sabriya' && (
          <div className="rounded-3xl bg-gradient-to-br from-[#0c2347] via-[#091b36] to-[#071326] border-2 border-amber-400/50 p-6 sm:p-10 shadow-2xl shadow-blue-950/80 relative overflow-hidden animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Photo Column */}
              <div className="md:col-span-5 flex flex-col items-center text-center">
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-500/40 via-blue-600/30 to-amber-500/40 blur-xl opacity-75 group-hover:opacity-100 transition duration-700" />
                  
                  <div className="relative w-64 sm:w-72 aspect-[4/3] rounded-2xl overflow-hidden border-2 border-amber-400/70 shadow-2xl bg-[#09152a] p-1.5">
                    <img
                      src={sabriyaImg}
                      alt="الأستاذة صبرية أبو الفضل تكرم أحد الطلاب بمدرسة أرمنا"
                      className="w-full h-full object-cover object-center rounded-xl"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    الأستاذة صبرية أبو الفضل
                  </h3>
                  <span className="text-xs sm:text-sm font-semibold text-amber-300">
                    المديرة الثانية لمدرسة أرمنا الإعدادية الثانوية
                  </span>
                  <p className="text-[11px] text-slate-400 mt-1">
                    لقطة توثيقية حقيقية أثناء تكريم أحد الطلاب وتسليمه شهادة التقدير
                  </p>
                </div>
              </div>

              {/* Tribute Content Column */}
              <div className="md:col-span-7 text-right space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/90 border border-blue-700/50 text-blue-200 text-xs font-semibold">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                  <span>عطاء تربوي وإنساني مخلص</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-amber-200 leading-snug">
                  قيادة حكيمة ورعاية أبوية تركت أثرًا طيبًا في نفوس الطلاب
                </h4>

                <div className="text-sm sm:text-base text-slate-200 leading-relaxed space-y-3 font-normal">
                  <p>
                    تتشرّف مدرسة أرمنا الثانوية المشتركة ومجتمعها بالاحتفاء بمسيرة <strong className="text-amber-300 font-bold">الأستاذة صبرية أبو الفضل</strong>، المديرة الثانية للمدرسة، تقديرًا لدورها التربوي والإنساني البارز في قيادة هذا الصرح التعليمي، ورعايتها المخلصة لأبنائها وبناتها الطلاب.
                  </p>

                  <p>
                    لقد جسّدت الأستاذة صبرية نموذجًا مضيئًا للمديرة والمعلمة القريبة من وجدان طلابها، فلم تكن إدارتها مجرد تسيير للعمل اليومي، بل كانت رسالة محبة وتشجيع، تحرص فيها على بث الثقة وبث روح الطموح والتفوق في نفوس الناشئة، والاحتفاء بكل خطوة نجاح يخطونها في محراب العلم.
                  </p>

                  <p>
                    إن ما قدّمته من إخلاص وتفانٍ في خدمة المنظومة التعليمية بأرمنا يظل محفورًا في ذاكرة المدرسة ووجدان أهل قرية أرمنا ومركز نصر النوبة، عنوانًا للوفاء وركيزةً من ركائز البناء الإنساني والتربوي التي تفتخر بها أجيال المدرسة.
                  </p>
                </div>

                {/* Values Card */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-blue-900/50 flex items-center gap-2.5">
                    <Heart className="w-5 h-5 text-amber-400 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400">النهج القيادي</span>
                      <span className="text-sm font-bold text-white">رعاية إنسانية وتحفيز مستمر</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-blue-900/50 flex items-center gap-2.5">
                    <Star className="w-5 h-5 text-blue-400 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400">الأثر والمكانة</span>
                      <span className="text-sm font-bold text-white">إخلاص في خدمة أجيال النوبة</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Mr. Ashraf Abdel Baqi Tribute Card */}
        {activeTab === 'ashraf' && (
          <div className="rounded-3xl bg-gradient-to-br from-[#0c2347] via-[#091b36] to-[#071326] border-2 border-amber-400/50 p-6 sm:p-10 shadow-2xl shadow-blue-950/80 relative overflow-hidden animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Photo Column */}
              <div className="md:col-span-5 flex flex-col items-center text-center">
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-500/40 via-blue-600/30 to-amber-500/40 blur-xl opacity-75 group-hover:opacity-100 transition duration-700" />
                  
                  <div className="relative w-56 sm:w-64 h-72 sm:h-80 rounded-2xl overflow-hidden border-2 border-amber-400/70 shadow-2xl bg-[#09152a] p-1.5">
                    <img
                      src={ashrafImg}
                      alt="الأستاذ أشرف عبد الباقي"
                      className="w-full h-full object-cover object-top rounded-xl"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    الأستاذ أشرف عبد الباقي
                  </h3>
                  <span className="text-xs sm:text-sm font-semibold text-amber-300">
                    سعي مجتمعي مخلص لأجل تعليم أبناء النوبة
                  </span>
                </div>
              </div>

              {/* Tribute Content Column */}
              <div className="md:col-span-7 text-right space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/90 border border-blue-700/50 text-blue-200 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>رسالة شكر وتقدير وعرفان بالجميل</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-amber-200 leading-snug">
                  سعيٌ صادق أثمر صرحًا تعليميًا يخدم أجيال الحاضر والمستقبل
                </h4>

                <div className="text-sm sm:text-base text-slate-200 leading-relaxed space-y-3 font-normal">
                  <p>
                    بكل معاني الوفاء والتقدير، تُثمّن قرية أرمنا ومجتمعها التعليمي السعي الحثيث والمساهمة المجتمعية النبيلة التي بذلها <strong className="text-amber-300 font-bold">الأستاذ أشرف عبد الباقي</strong>، الذي حمل همّ أبناء منطقته، وسعى بإخلاص وتفانٍ لدعم فكرة إنشاء <strong>مدرسة أرمنا الإعدادية الثانوية</strong> بمركز نصر النوبة في محافظة أسوان.
                  </p>

                  <p>
                    وقد جاء إنشاء هذا الصرح التعليمي الحيوي استجابةً حقيقية وملحة لاحتياجات أهالي المنطقة، ولاستيعاب الزيادة السكانية المتنامية، حيث تضم المدرسة <strong>12 فصلًا دراسيًا مجهزًا</strong>، لتقدم خدماتها التعليمية لأبناء قرى <strong>عنيبة، ومصمص، ووادي خربت، وأرمنا</strong>، بما يخدم نحو <strong>20 ألف نسمة</strong>، مما قرّب المسافات وخفّف عن كاهل الطلاب عناء ومشقة الانتقال اليومي لبلدات بعيدة.
                  </p>

                  <p>
                    وقد تكلّلت هذه التطلعات بدخول المدرسة الخدمة رسميًا ضمن مشروعات تطوير ودعم المنظومة التعليمية تحت مظلة المبادرة الرئاسية <strong>«حياة كريمة»</strong>، لتغدو منارة تعليمية تفتح أبواب الأمل والعلم أمام شباب وفتيات النوبة وأسوان.
                  </p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-blue-900/50 flex items-center gap-2.5">
                    <Building2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400">سعة المبنى</span>
                      <span className="text-sm font-bold text-white">12 فصلاً دراسياً</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-blue-900/50 flex items-center gap-2.5">
                    <Users className="w-5 h-5 text-blue-400 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400">المستفيدون</span>
                      <span className="text-sm font-bold text-white">نحو 20 ألف نسمة</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
