import React, { useState } from 'react';
import { Menu, X, Sparkles, BookOpen, MapPin, Award, Bot, Bell } from 'lucide-react';
import schoolLogo from '../assets/images/armana_school_crest.jpg';

interface NavbarProps {
  onOpenAssistant: () => void;
  onOpenNews: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssistant, onOpenNews }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'عن المدرسة', href: '#about', icon: BookOpen },
    { name: 'لمسة وفاء', href: '#tribute', icon: Award },
    { name: 'الموقع والإدارة', href: '#location', icon: MapPin },
    { name: 'الرؤية والرسالة', href: '#vision', icon: Award },
    { name: 'المراحل والشعب', href: '#stages', icon: Sparkles },
    { name: 'المعامل والأنشطة', href: '#facilities', icon: Sparkles },
    { name: 'صناع الموقع', href: '#developers', icon: null },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#08182f]/95 backdrop-blur-md border-b border-amber-500/30 shadow-xl shadow-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo & School Brand with Official Crest */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-600 to-blue-900 p-[2px] shadow-lg shadow-amber-500/25 group-hover:shadow-amber-500/50 group-hover:scale-105 transition duration-300 shrink-0">
              <div className="w-full h-full bg-[#0a1c38] rounded-[14px] overflow-hidden flex items-center justify-center p-0.5">
                <img
                  src={schoolLogo}
                  alt="لوجو مدرسة أرمنا الثانوية المشتركة"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="flex flex-col text-right">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-amber-300 transition duration-300 flex items-center gap-1.5">
                <span>مدرسة أرمنا الثانوية المشتركة</span>
              </span>
              <span className="text-[11px] text-amber-400 font-semibold flex items-center gap-1">
                <span>ARMANA JOINT SEC. SCHOOL</span>
                <span>•</span>
                <span>أسوان 1978</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-blue-900/40 transition duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons: Latest News + Smart Assistant */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenNews}
              className="relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-amber-300 hover:text-white bg-blue-950/80 hover:bg-blue-900/90 border border-amber-500/30 hover:border-amber-400 transition cursor-pointer shadow-sm"
              title="أحدث الأخبار من صفحة فيسبوك"
            >
              <Bell className="w-4 h-4 text-amber-400" />
              <span>أحدث الأخبار</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </button>

            <button
              onClick={onOpenAssistant}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-900 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 transition duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Bot className="w-4 h-4 text-slate-900" />
              <span>المساعد الذكي</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenNews}
              className="p-2 rounded-lg bg-blue-950/80 text-amber-300 border border-amber-500/30 hover:bg-blue-900 transition relative"
              title="أحدث الأخبار"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
            </button>
            <button
              onClick={onOpenAssistant}
              className="p-2 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 transition"
              title="المساعد الذكي"
            >
              <Bot className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-blue-900/50 transition focus:outline-none"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-500/20 bg-[#09152a] px-4 pt-2 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-blue-900/40 transition"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenNews();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-amber-300 bg-blue-950/90 border border-amber-500/40 shadow-md"
            >
              <Bell className="w-4 h-4 text-amber-400" />
              <span>نافذة أحدث الأخبار من فيسبوك</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssistant();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-900 bg-gradient-to-r from-amber-300 to-amber-500 shadow-md"
            >
              <Bot className="w-4 h-4" />
              <span>فتح المساعد الذكي لمدرسة أرمنا</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
