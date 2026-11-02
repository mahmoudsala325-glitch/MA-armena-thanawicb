import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, AlertCircle, RefreshCw, CheckCircle2, Copy, Check, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import schoolLogo from '../assets/images/armana_school_crest.jpg';

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  isUnverifiedNotice?: boolean;
  timestamp: string;
}

interface SmartAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SmartAssistantModal: React.FC<SmartAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      role: 'model',
      content:
        'مرحباً بك في البوابة الرقمية لمدرسة أرمنا الثانوية بأسوان! أنا المساعد الذكي للمدرسة، يسعدني الإجابة عن أي استفسار حول موقع المدرسة، مراحلها الدراسية، رؤيتها، وتطويرها في المبادرة الرئاسية "حياة كريمة".\n\nإذا لم أتمكن من معرفة الجواب، فيرجى الرجوع لصفحة المدرسة الرسمية أو مراسلة الطالب محمود عاشور على الرقم 01070283758.',
      timestamp: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'أين تقع مدرسة أرمنا الثانوية بالضبط؟',
    'ما هي المراحل والشعب التعليمية المتاحة؟',
    'كيف طوّرت مبادرة حياة كريمة المدرسة؟',
    'ما هي رؤية ورسالة المدرسة؟',
    'هل تتوفر أرقام هواتف شخصية للمعلمين؟',
    'من هم الطلاب الذين صمموا الموقع؟',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const historyPayload = messages.slice(-6).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
        }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      const replyText = data.reply || 'يرجى الرجوع لصفحة المدرسة الرسمية أو مراسلة الطالب محمود عاشور على الرقم 01070283758';
      const isUnverifiedNotice =
        replyText.includes('01070283758') ||
        replyText.includes('محمود عاشور') ||
        replyText.includes('صفحة المدرسة');

      const modelMessage: Message = {
        id: `model-${Date.now()}`,
        role: 'model',
        content: replyText,
        isUnverifiedNotice,
        timestamp: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch {
      // Local fallback in case server was unreachable
      const modelMessage: Message = {
        id: `model-${Date.now()}`,
        role: 'model',
        content:
          'يرجى الرجوع لصفحة المدرسة الرسمية أو مراسلة الطالب محمود عاشور على الرقم 01070283758',
        isUnverifiedNotice: true,
        timestamp: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, modelMessage]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[460px] sm:max-h-[640px] h-[100dvh] sm:h-[620px] z-50 flex flex-col bg-[#09152a] text-slate-100 rounded-none sm:rounded-2xl border border-amber-500/30 shadow-2xl shadow-blue-950/80 backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3.5 bg-gradient-to-r from-[#0a192f] via-[#102444] to-[#0a192f] border-b border-amber-500/25">
        <div className="flex items-center gap-3">
          <img
            src={schoolLogo}
            alt="شعار مدرسة أرمنا"
            className="w-10 h-10 rounded-xl object-contain bg-[#091e3e] border border-amber-400/50 p-0.5 shadow-md shadow-amber-500/20"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-base">المساعد الذكي لمدرسة أرمنا</h3>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                متصل
              </span>
            </div>
            <p className="text-[11px] text-amber-300/80">
              إجابات موثوقة من واقع الموقع وسجلات المدرسة
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Trust & Transparency Banner */}
      <div className="px-3.5 py-2 bg-blue-950/70 border-b border-blue-800/40 flex items-center gap-2 text-xs text-blue-200">
        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
        <span>قاعدة المصداقية: لا تخمين، وإيضاح فوري لأي معلومة غير موثقة.</span>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-center gap-1.5 mb-1 text-[11px] text-slate-400">
              <span>{msg.role === 'user' ? 'أنت' : 'مساعد أرمنا الذكي'}</span>
              <span>•</span>
              <span>{msg.timestamp}</span>
            </div>

            <div
              className={`relative max-w-[88%] p-3.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line group ${
                msg.role === 'user'
                  ? 'bg-gradient-to-l from-blue-600 to-indigo-700 text-white rounded-br-none shadow-md shadow-blue-900/40'
                  : msg.isUnverifiedNotice
                  ? 'bg-amber-950/30 border border-amber-500/40 text-amber-100 rounded-bl-none shadow-md shadow-amber-950/40'
                  : 'bg-slate-900/90 border border-slate-800 text-slate-100 rounded-bl-none shadow-md'
              }`}
            >
              {msg.isUnverifiedNotice && (
                <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-amber-500/30 text-amber-300 font-semibold text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>توضيح الشفافية وعدم التخمين</span>
                </div>
              )}

              <p>{msg.content}</p>

              {msg.content.includes('01070283758') && (
                <div className="mt-3 pt-2.5 border-t border-amber-500/25 flex flex-wrap items-center gap-2">
                  <a
                    href="https://wa.me/201070283758"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>مراسلة واتساب</span>
                  </a>
                  <a
                    href="tel:01070283758"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>اتصال مباشر</span>
                  </a>
                  <a
                    href="https://www.facebook.com/search/top?q=%D9%85%D8%AF%D8%B1%D8%B3%D8%A9%20%D8%A3%D8%B1%D9%85%D9%86%D8%A7%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D8%A9%20%D9%86%D8%B5%D8%B1%20%D8%A7%D9%84%D9%86%D9%88%D8%A8%D8%A9%20%D8%A3%D8%B3%D9%88%D8%A7%D9%86"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold transition shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>صفحة فيسبوك</span>
                  </a>
                </div>
              )}

              {/* Copy button */}
              <button
                onClick={() => copyToClipboard(msg.id, msg.content)}
                className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 p-1 rounded bg-black/40 text-slate-300 hover:text-white transition"
                title="نسخ النص"
              >
                {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1.5 mb-1 text-[11px] text-slate-400">
              <span>مساعد أرمنا الذكي</span>
              <span>•</span>
              <span>جارٍ المراجعة والتحقق...</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 rounded-bl-none flex items-center gap-2 text-sm text-amber-300">
              <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
              <span>جاري صياغة إجابة دقيقة من السجلات الموثقة...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts */}
      <div className="px-3 py-2 bg-[#060e1d] border-t border-slate-800">
        <div className="flex items-center gap-1 mb-1.5 text-[11px] text-amber-400/90 font-medium">
          <Sparkles className="w-3 h-3" />
          <span>أسئلة شائعة وسريعة:</span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              disabled={loading}
              className="text-xs whitespace-nowrap px-2.5 py-1 rounded-full bg-blue-950/60 border border-blue-700/40 text-blue-200 hover:text-amber-300 hover:border-amber-400/50 hover:bg-blue-900/40 transition disabled:opacity-50"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-[#0a192f] border-t border-amber-500/20 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اكتب استفسارك عن مدرسة أرمنا..."
          disabled={loading}
          className="flex-1 bg-slate-900/90 text-sm text-slate-100 placeholder-slate-400 px-3.5 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="p-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition transform active:scale-95 cursor-pointer"
          aria-label="إرسال"
        >
          <Send className="w-4 h-4 rotate-180" />
        </button>
      </form>
    </div>
  );
};
