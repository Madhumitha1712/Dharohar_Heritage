import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { AI_CULTURAL_KNOWLEDGE_BASE } from '../data/heritageData';
import { 
  Bot, 
  Sparkles, 
  Send, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Layers, 
  Compass, 
  Landmark, 
  Flame, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

interface AIGuidePageProps {
  onNavigate: (route: string) => void;
  language: Language;
}

interface Message {
  id: string;
  sender: 'user' | 'sutradhar';
  text: string;
  title?: string;
  details?: string[];
  deepDivePrompt?: string;
  timestamp: string;
}

export const AIGuidePage: React.FC<AIGuidePageProps> = ({ onNavigate, language }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'sutradhar',
      text: 'Namaste! I am Sutradhar (सूत्रधार), your AI Cultural & Epigraphical Guide for Indian Architecture and Ancient Civilizations. I can illuminate the stone geometries of the Dravidian Vimanas, the acoustic secrets of musical pillars, the thermodynamic physics of Rajput palaces, or modern LiDAR preservation efforts.',
      timestamp: 'Just now'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);

  const t = TRANSLATIONS[language].guide;

  const sampleQuestions = [
    {
      label: 'Explain the Shore Temple Vimana geometry',
      query: 'Tell me about the Shore Temple Dravidian vimana architecture and the 2004 tsunami revelation.'
    },
    {
      label: 'How do the 56 musical pillars in Hampi work?',
      query: 'What is the acoustic physics and legend behind the musical stone pillars in Vittala Temple, Hampi?'
    },
    {
      label: 'How does Hawa Mahal cool naturally without power?',
      query: 'Explain the thermodynamic Venturi cooling principle of the 953 jharokhas at Hawa Mahal in Jaipur.'
    },
    {
      label: 'How does digital preservation protect ancient granite?',
      query: 'How do LiDAR scans and sacrificial clay packs extract sea salt and preserve monuments?'
    }
  ];

  const handleSend = (queryToSend?: string) => {
    const q = (queryToSend || inputQuery).trim();
    if (!q) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryToSend) setInputQuery('');
    setIsTyping(true);

    // Simulate intelligent cultural curator lookup
    setTimeout(() => {
      const lower = q.toLowerCase();
      let matched = AI_CULTURAL_KNOWLEDGE_BASE.find((k) =>
        k.keywords.some((w) => lower.includes(w))
      );

      if (!matched) {
        matched = AI_CULTURAL_KNOWLEDGE_BASE[0];
      }

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'sutradhar',
        title: matched.title,
        text: matched.summary,
        details: matched.details,
        deepDivePrompt: matched.deepDivePrompt,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#17130F] text-[#F3EBDD] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Cultural Guide Sanctuary Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B2118] border border-[#D4A85A]/50 text-xs text-[#D4A85A] font-semibold uppercase tracking-widest shadow-lg">
            <Bot className="w-4 h-4" />
            <span>AI Cultural Epigraphy Guide • Sutradhar</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#F3EBDD]">
            {t.title}
          </h1>

          <p className="font-subheading text-lg sm:text-xl text-[#D4A85A] italic">
            “Ask not merely when stone was carved, but what cosmic truths it preserves.”
          </p>
        </div>

        {/* Interactive Chat Canvas */}
        <div className="rounded-3xl bg-[#2B2118] border border-[#D4A85A]/40 shadow-2xl overflow-hidden flex flex-col h-[600px]">
          {/* Top Status Bar */}
          <div className="px-6 py-4 bg-[#17130F] border-b border-[#D4A85A]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4A85A] text-[#17130F] flex items-center justify-center font-display font-bold text-lg shadow-md">
                सू
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-sm font-bold text-[#F3EBDD]">
                    Sutradhar (सूत्रधार)
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[11px] text-[#D4A85A]">
                  Active Scholar Mode • Pan-Indian Architecture & Heritage
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setVoiceActive(!voiceActive)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                  voiceActive
                    ? 'bg-[#D4A85A] text-[#17130F] border-[#D4A85A]'
                    : 'bg-[#2B2118] text-[#F3EBDD]/70 border-[#D4A85A]/30 hover:text-[#F3EBDD]'
                }`}
              >
                {voiceActive ? <Volume2 className="w-3.5 h-3.5 animate-bounce" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{voiceActive ? 'Voice Active' : 'Voice Mode'}</span>
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-3xl ${
                  msg.sender === 'user' ? 'ml-auto justify-end' : 'mr-auto'
                }`}
              >
                {msg.sender === 'sutradhar' && (
                  <div className="w-8 h-8 rounded-full bg-[#D4A85A] text-[#17130F] font-bold text-xs flex items-center justify-center shrink-0 mt-1 shadow">
                    सू
                  </div>
                )}

                <div
                  className={`p-5 rounded-2xl space-y-3 ${
                    msg.sender === 'user'
                      ? 'bg-[#D4A85A] text-[#17130F] font-medium text-xs sm:text-sm rounded-tr-none shadow-md'
                      : 'bg-[#17130F] text-[#F3EBDD] border border-[#D4A85A]/30 rounded-tl-none shadow-xl'
                  }`}
                >
                  {msg.title && (
                    <div className="flex items-center gap-2 pb-2 border-b border-[#D4A85A]/20">
                      <Sparkles className="w-4 h-4 text-[#D4A85A]" />
                      <h4 className="font-display text-sm sm:text-base font-bold text-[#D4A85A]">
                        {msg.title}
                      </h4>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    {msg.text}
                  </p>

                  {msg.details && (
                    <ul className="space-y-1.5 pt-2 border-t border-[#D4A85A]/10 text-xs">
                      {msg.details.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[#F3EBDD]/80">
                          <span className="text-[#D4A85A] font-bold mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {msg.deepDivePrompt && (
                    <div className="pt-2 border-t border-[#D4A85A]/20 flex items-center justify-between text-xs text-[#D4A85A]">
                      <span className="italic font-subheading">{msg.deepDivePrompt}</span>
                    </div>
                  )}

                  <div className={`text-[10px] text-right ${
                    msg.sender === 'user' ? 'text-[#17130F]/70' : 'text-[#F3EBDD]/40'
                  }`}>
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-[#D4A85A] italic pl-11">
                <span className="w-2 h-2 rounded-full bg-[#D4A85A] animate-ping" />
                <span>Sutradhar is consulting ancient epigraphical manuscripts...</span>
              </div>
            )}
          </div>

          {/* Curated Suggested Queries Strip */}
          <div className="px-6 py-2.5 bg-[#17130F]/90 border-t border-[#D4A85A]/20 flex items-center gap-2 overflow-x-auto">
            <span className="text-[10px] uppercase font-bold text-[#D4A85A] shrink-0">
              Curated Queries:
            </span>
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q.query)}
                className="px-3 py-1 rounded-full bg-[#2B2118] border border-[#D4A85A]/30 text-[11px] text-[#F3EBDD]/80 hover:text-[#D4A85A] hover:border-[#D4A85A] shrink-0 transition-colors"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* User Input Bar */}
          <div className="p-4 bg-[#17130F] border-t border-[#D4A85A]/30 flex items-center gap-3">
            <input
              id="ai-guide-query-input"
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Sutradhar about vimanas, musical pillars, salt weathering, or legends..."
              className="flex-1 bg-[#2B2118] border border-[#D4A85A]/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#F3EBDD] placeholder-[#F3EBDD]/40 outline-none focus:border-[#D4A85A]"
            />
            <button
              id="ai-guide-send-btn"
              onClick={() => handleSend()}
              className="px-5 py-3 rounded-xl bg-[#D4A85A] text-[#17130F] font-bold text-xs uppercase tracking-wider hover:bg-[#F3EBDD] transition-colors flex items-center gap-1.5 shadow-md shadow-[#D4A85A]/20"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Ask Guide</span>
            </button>
          </div>
        </div>

        {/* Demo Bridge to Next Step */}
        <div className="p-6 rounded-2xl bg-[#2B2118]/60 border border-[#D4A85A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-display text-base font-bold text-[#F3EBDD]">
              Ready to explore step-by-step thematic itineraries?
            </h4>
            <p className="text-xs text-[#F3EBDD]/70">
              Experience the Pallava Architecture Trail linking Shore Temple to Arjuna's Penance & Pancha Rathas.
            </p>
          </div>
          <button
            onClick={() => onNavigate('personalized-trail')}
            className="px-6 py-2.5 rounded-full bg-[#D4A85A] text-[#17130F] font-bold text-xs uppercase tracking-wider hover:bg-[#F3EBDD] transition-colors shrink-0 flex items-center gap-1.5 shadow"
          >
            <span>Personalized Trail Generator</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
