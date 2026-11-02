import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  X, 
  Calendar, 
  ExternalLink, 
  Sparkles, 
  Share2, 
  Plus, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  Award, 
  Clock, 
  Search,
  Tag
} from 'lucide-react';
import schoolLogo from '../assets/images/armana_school_crest.jpg';

export interface NewsItem {
  id: string;
  title: string;
  category: 'exams' | 'tablets' | 'admin' | 'activities' | 'general';
  categoryLabel: string;
  badgeColor: string;
  content: string;
  date: string;
  isUrgent?: boolean;
  sharesCount: number;
}

const DEFAULT_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'تنبيه هام وعاجل لطلاب الصفين الأول والثاني الثانوي بشأن منظومة التابلت',
    category: 'tablets',
    categoryLabel: 'التابلت المدرسي',
    badgeColor: 'bg-blue-900/60 text-blue-300 border-blue-700/50',
    content: 'تهيب إدارة مدرسة أرمنا الثانوية المشتركة بجميع طلاب الصفين الأول والثاني الثانوي التأكد من شحن أجهزة التابلت وتوصيلها بشبكة الإنترنت المدرسية، مع تحديث منصة الاختبارات الإلكترونية (SwiftAssess) استعداداً للتقييمات الشهرية وفق تعليمات وزارة التربية والتعليم.',
    date: 'منذ ساعتين • من منشورات صفحة المدرسة 🌐',
    isUrgent: true,
    sharesCount: 54,
  },
  {
    id: 'news-2',
    title: 'إعلان جدول التقييمات الشهرية لشهر نوفمبر لصفوف النقل',
    category: 'exams',
    categoryLabel: 'جداول الامتحانات',
    badgeColor: 'bg-amber-900/60 text-amber-300 border-amber-700/50',
    content: 'تم اعتماد جدول امتحانات شهر نوفمبر للعام الدراسي الحالي لطلاب الصف الأول الثانوي العام والصف الثاني الثانوي بقسميه (العلمي والأدبي). ستُعقد التقييمات في الحصة الدراسية الثانية مع استمرار اليوم الدراسي بشكل منتظم دون إخلال بالخطة التدريسية.',
    date: 'أمس الساعة 4:00 مساءً • 🌐',
    isUrgent: false,
    sharesCount: 78,
  },
  {
    id: 'news-3',
    title: 'تأكيد إدارة المدرسة على الانضباط والالتزام بموعد طابور الصباح',
    category: 'admin',
    categoryLabel: 'لوائح وإرشادات',
    badgeColor: 'bg-purple-900/60 text-purple-300 border-purple-700/50',
    content: 'تؤكد إدارة المدرسة بقيادة مدير المدرسة وإدارة نصر النوبة التعليمية على ضرورة الحضور المبكر الساعة 7:30 صباحاً للمشاركة في تحية العلم المصري والاستماع لفقرات الإذاعة المدرسية، مع الالتزام التام بالزي المدرسي الموحد والحفاظ على نظافة الفصول ومرافق المدرسة.',
    date: 'منذ يومين • 🌐',
    isUrgent: false,
    sharesCount: 32,
  },
  {
    id: 'news-4',
    title: 'تهنئة فريق المدرسة الفائز بدوري مركز شباب أرمنا لكرة القدم',
    category: 'activities',
    categoryLabel: 'الأنشطة والمسابقات',
    badgeColor: 'bg-emerald-900/60 text-emerald-300 border-emerald-700/50',
    content: 'تتقدم أسرة التربية الرياضية بالمدرسة بخالص التهنئة لطلاب فريق الصف الثاني الثانوي لفوزهم بكأس دوري الفصول المقام على ملاعب مركز شباب أرمنا المطور، متمنين لجميع الطلاب دوام التفوق الرياضي والبدني.',
    date: 'منذ 3 أيام • 🌐',
    isUrgent: false,
    sharesCount: 65,
  },
  {
    id: 'news-5',
    title: 'زيارة وفد التوجيه الفني بإدارة نصر النوبة التعليمية لمعامل العلوم',
    category: 'general',
    categoryLabel: 'أخبار عامة',
    badgeColor: 'bg-slate-800 text-slate-300 border-slate-700',
    content: 'أشاد موجهو العلوم والرياضيات بإدارة نصر النوبة بمستوى التجهيزات الحديثة داخل معامل المدرسة المطورة ضمن مبادرة "حياة كريمة"، والتزام الطلاب بالتعليمات الوقائية أثناء التجارب العملية.',
    date: 'منذ 5 أيام • 🌐',
    isUrgent: false,
    sharesCount: 41,
  },
];

interface SchoolNewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SchoolNewsModal: React.FC<SchoolNewsModalProps> = ({ isOpen, onClose }) => {
  const [newsList, setNewsList] = useState<NewsItem[]>(() => {
    try {
      const saved = localStorage.getItem('armana_school_news_posts');
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...parsed, ...DEFAULT_NEWS];
      }
    } catch {
      // fallback
    }
    return DEFAULT_NEWS;
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);

  // Form states for publishing news
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'exams' | 'tablets' | 'admin' | 'activities' | 'general'>('general');
  const [newContent, setNewContent] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handlePublishNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const categoryLabels: Record<string, { label: string; badgeColor: string }> = {
      tablets: { label: 'التابلت المدرسي', badgeColor: 'bg-blue-900/60 text-blue-300 border-blue-700/50' },
      exams: { label: 'جداول الامتحانات', badgeColor: 'bg-amber-900/60 text-amber-300 border-amber-700/50' },
      admin: { label: 'لوائح وإرشادات', badgeColor: 'bg-purple-900/60 text-purple-300 border-purple-700/50' },
      activities: { label: 'الأنشطة والمسابقات', badgeColor: 'bg-emerald-900/60 text-emerald-300 border-emerald-700/50' },
      general: { label: 'أخبار عامة', badgeColor: 'bg-slate-800 text-slate-300 border-slate-700' },
    };

    const targetCat = categoryLabels[newCategory] || categoryLabels.general;

    const newItem: NewsItem = {
      id: `custom-news-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      categoryLabel: targetCat.label,
      badgeColor: targetCat.badgeColor,
      content: newContent.trim(),
      date: 'نُشر للتو من صفحة المدرسة • 🌐',
      isUrgent,
      sharesCount: 1,
    };

    const updated = [newItem, ...newsList];
    setNewsList(updated);

    try {
      const customOnly = updated.filter((item) => item.id.startsWith('custom-news-'));
      localStorage.setItem('armana_school_news_posts', JSON.stringify(customOnly));
    } catch {
      // ignore storage quota
    }

    setNewTitle('');
    setNewContent('');
    setIsUrgent(false);
    setIsPublishing(false);
  };

  if (!isOpen) return null;

  const filteredNews = newsList.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery = searchQuery.trim() === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#0d1e38] rounded-3xl border border-amber-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-right"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-[#0a192f] via-[#102444] to-[#0a192f] border-b border-amber-500/25 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 transition cursor-pointer"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-700/60 font-semibold animate-pulse">
                  تغطية حية ومباشرة
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  نافذة أحدث الأخبار من صفحة المدرسة على فيسبوك
                </h3>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                متابعة يومية للقرارات الوزارية، مواعيد الامتحانات، وتنبيهات مدرسة أرمنا الثانوية
              </p>
            </div>

            <img
              src={schoolLogo}
              alt="شعار مدرسة أرمنا"
              className="w-12 h-12 rounded-xl object-contain bg-[#091e3e] border border-amber-400/50 p-0.5 shadow-md shadow-amber-500/20 shrink-0"
            />
          </div>
        </div>

        {/* Toolbar: Search, Filters & Publish button */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في الأخبار والقرارات..."
              className="w-full pr-9 pl-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Publish News Toggle Button */}
            <button
              onClick={() => setIsPublishing(!isPublishing)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition cursor-pointer shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>{isPublishing ? 'إغلاق نموذج النشر' : 'نشر خبر جديد'}</span>
            </button>

            {/* Direct Facebook Link */}
            <a
              href="https://www.facebook.com/search/top?q=%D9%85%D8%AF%D8%B1%D8%B3%D8%A9%20%D8%A3%D8%B1%D9%85%D9%86%D8%A7%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D8%A9%20%D9%86%D8%B5%D8%B1%20%D8%A7%D9%84%D9%86%D9%88%D8%A8%D8%A9%20%D8%A3%D8%B3%D9%88%D8%A7%D9%86"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-blue-300 hover:text-white bg-blue-950/80 border border-blue-800/80 transition"
            >
              <span>صفحة فيسبوك</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="px-4 py-2.5 bg-[#09152a] border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-amber-400 text-slate-950'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            جميع الأخبار ({newsList.length})
          </button>
          <button
            onClick={() => setActiveCategory('tablets')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              activeCategory === 'tablets'
                ? 'bg-amber-400 text-slate-950'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            التابلت المدرسي
          </button>
          <button
            onClick={() => setActiveCategory('exams')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              activeCategory === 'exams'
                ? 'bg-amber-400 text-slate-950'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            الامتحانات والتقييمات
          </button>
          <button
            onClick={() => setActiveCategory('admin')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              activeCategory === 'admin'
                ? 'bg-amber-400 text-slate-950'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            تعليمات وإرشادات
          </button>
          <button
            onClick={() => setActiveCategory('activities')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              activeCategory === 'activities'
                ? 'bg-amber-400 text-slate-950'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            الأنشطة والمسابقات
          </button>
        </div>

        {/* Content Body: Publishing form or news list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          
          {/* New Post Form */}
          {isPublishing && (
            <form onSubmit={handlePublishNews} className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-amber-500/40 shadow-xl mb-6">
              <div className="flex items-center gap-2 mb-3 text-amber-300 font-bold text-sm">
                <Send className="w-4 h-4 text-amber-400" />
                <span>نشر خبر أو منشور جديد من صفحة المدرسة</span>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    عنوان الخبر / المنشور:
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="اكتب عنوان الخبر الرئيسي هنا..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      تصنيف الخبر:
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="tablets">التابلت المدرسي</option>
                      <option value="exams">جداول الامتحانات</option>
                      <option value="admin">لوائح وإرشادات</option>
                      <option value="activities">الأنشطة والمسابقات</option>
                      <option value="general">أخبار عامة</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2 pt-5">
                    <input
                      type="checkbox"
                      id="isUrgentCheck"
                      checked={isUrgent}
                      onChange={(e) => setIsUrgent(e.target.checked)}
                      className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400"
                    />
                    <label htmlFor="isUrgentCheck" className="text-xs font-semibold text-red-300 cursor-pointer">
                      تحديد كخبر عاجل ومهم 🔴
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    تفاصيل الخبر ونص المنشور:
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="اكتب التفاصيل الكاملة للمنشور المأخوذ من صفحة المدرسة..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsPublishing(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 transition"
                  >
                    إلغاء
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition shadow-md"
                  >
                    نشر في النافذة
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* News Feed Cards */}
          {filteredNews.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <AlertCircle className="w-8 h-8 text-amber-400 mx-auto mb-2 opacity-60" />
              <p className="text-sm font-semibold">لا توجد أخبار مطابقة لبحثك في هذا القسم حالياً.</p>
            </div>
          ) : (
            filteredNews.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#0f2444] to-[#0a192f] border border-blue-900/50 hover:border-amber-400/40 shadow-lg transition duration-200"
              >
                {/* News Card Top Header */}
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400/70" />
                    <span>{item.date}</span>
                  </span>

                  <div className="flex items-center gap-2">
                    {item.isUrgent && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-950 text-red-300 border border-red-700/60 font-bold animate-pulse">
                        عاجل ومهم
                      </span>
                    )}
                    <span className={`text-[11px] px-2.5 py-0.5 rounded-full border font-semibold ${item.badgeColor}`}>
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* News Title */}
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h4>

                {/* News Content */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.content}
                </p>

                {/* Footer of Card */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-amber-300/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>توثيق رسمي من صفحة مدرسة أرمنا</span>
                  </div>

                  <a
                    href="https://www.facebook.com/search/top?q=%D9%85%D8%AF%D8%B1%D8%B3%D8%A9%20%D8%A3%D8%B1%D9%85%D9%86%D8%A7%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D8%A9%20%D9%86%D8%B5%D8%B1%20%D8%A7%D9%84%D9%86%D9%88%D8%A8%D8%A9%20%D8%A3%D8%B3%D9%88%D8%A7%D9%86"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition"
                  >
                    <span>عرض على فيسبوك</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
};
