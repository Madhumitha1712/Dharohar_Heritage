import React, { useState } from 'react';
import { MONUMENTS, STATES_DATA } from '../data/heritageData';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  ArrowLeft, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Crown, 
  Landmark, 
  ShieldCheck, 
  Volume2, 
  VolumeX, 
  Eye, 
  Flame, 
  BookOpen, 
  AlertTriangle,
  Play,
  Pause,
  Compass,
  Layers,
  ChevronRight,
  Share2,
  CheckCircle2
} from 'lucide-react';

interface MonumentDetailPageProps {
  monumentId: string;
  onNavigate: (route: string) => void;
  language: Language;
}

export const MonumentDetailPage: React.FC<MonumentDetailPageProps> = ({
  monumentId,
  onNavigate,
  language
}) => {
  const monument = MONUMENTS[monumentId] || MONUMENTS['shore-temple'];
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const t = TRANSLATIONS[language].monument;

  const handleToggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#17130F] text-[#F3EBDD] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 text-xs text-[#D4A85A]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate(`destination/${monument.destinationId}`)}
              className="hover:underline flex items-center gap-1 font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to {monument.location.city}
            </button>
            <span className="text-[#F3EBDD]/40">/</span>
            <span className="text-[#F3EBDD] font-bold">{monument.name}</span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2B2118] border border-[#D4A85A]/30 text-[#D4A85A] hover:bg-[#D4A85A] hover:text-[#17130F] transition-all text-xs"
          >
            {copiedLink ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Link Copied' : 'Share Monument'}</span>
          </button>
        </div>

        {/* Hero Showcase with Prominent "Explore in 3D" Button */}
        <div className="relative rounded-3xl overflow-hidden border border-[#D4A85A]/50 bg-[#2B2118] shadow-2xl">
          <div className="relative h-96 sm:h-[480px] w-full">
            <img
              src={monument.heroImage}
              alt={monument.name}
              className="w-full h-full object-cover filter brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17130F] via-[#17130F]/60 to-transparent" />
            
            {/* Top Badges */}
            <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#17130F]/90 backdrop-blur-md border border-[#D4A85A] text-xs font-bold text-[#D4A85A]">
                {monument.dynasty}
              </span>
              {monument.unescoYear && (
                <span className="px-3 py-1 rounded-full bg-[#17130F]/90 backdrop-blur-md border border-[#B58A52]/40 text-xs font-semibold text-[#F3EBDD]">
                  UNESCO World Heritage ({monument.unescoYear})
                </span>
              )}
            </div>

            {/* Bottom Details & Hero Title */}
            <div className="absolute bottom-8 left-6 sm:left-10 right-6 space-y-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#D4A85A]">
                  {monument.location.city}, {monument.location.state} • {monument.period}
                </div>
                <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F3EBDD] mt-1">
                  {monument.name}
                </h1>
                <p className="font-subheading text-2xl sm:text-3xl text-[#D4A85A] italic mt-1">
                  “{monument.tagline}”
                </p>
              </div>

              {/* Prominent Explore in 3D Button */}
              {monument.has3DModel && (
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    id="monument-hero-explore-3d-btn"
                    onClick={() => onNavigate('3d-explorer')}
                    className="px-8 py-4 rounded-full bg-[#D4A85A] text-[#17130F] font-bold text-sm uppercase tracking-wider hover:bg-[#F3EBDD] transition-all flex items-center gap-2.5 shadow-2xl shadow-[#D4A85A]/40 group cursor-pointer"
                  >
                    <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{t.explore3DBtn}</span>
                  </button>

                  <button
                    onClick={() => onNavigate('ai-guide')}
                    className="px-6 py-4 rounded-full bg-[#17130F]/90 backdrop-blur-md border border-[#D4A85A]/60 text-[#D4A85A] font-semibold text-xs uppercase tracking-wider hover:bg-[#2B2118] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Consult Sutradhar AI</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Key Facts Architectural Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#17130F] border-t border-[#D4A85A]/30">
            <div className="p-3.5 rounded-xl bg-[#2B2118]/60 border border-[#D4A85A]/20">
              <div className="text-[10px] uppercase font-bold text-[#D4A85A] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {t.period}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#F3EBDD] mt-1">{monument.period}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#2B2118]/60 border border-[#D4A85A]/20">
              <div className="text-[10px] uppercase font-bold text-[#D4A85A] flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5" />
                {t.ruler}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#F3EBDD] mt-1">{monument.ruler}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#2B2118]/60 border border-[#D4A85A]/20">
              <div className="text-[10px] uppercase font-bold text-[#D4A85A] flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5" />
                {t.style}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#F3EBDD] mt-1 truncate">{monument.architectureStyle}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#2B2118]/60 border border-[#D4A85A]/20">
              <div className="text-[10px] uppercase font-bold text-[#D4A85A] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                Coordinates
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#F3EBDD] mt-1 truncate">{monument.location.coordinates}</div>
            </div>
          </div>
        </div>

        {/* Audio Guide Player Bar */}
        <div className="p-6 rounded-2xl bg-[#2B2118] border border-[#D4A85A]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <button
              id="audio-guide-play-btn"
              onClick={handleToggleAudio}
              className="w-12 h-12 rounded-full bg-[#D4A85A] text-[#17130F] flex items-center justify-center hover:bg-[#F3EBDD] transition-colors shrink-0 shadow-lg shadow-[#D4A85A]/20"
            >
              {isPlayingAudio ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <div>
              <div className="text-xs font-bold text-[#D4A85A] uppercase tracking-wider">
                {t.audioGuideTitle} ({monument.audioGuide.duration})
              </div>
              <p className="text-xs text-[#F3EBDD]/70 mt-0.5">
                Narrated by {monument.audioGuide.narrator}
              </p>
            </div>
          </div>

          <div className="text-xs text-[#F3EBDD]/80 bg-[#17130F] px-4 py-2.5 rounded-xl border border-[#D4A85A]/20 max-w-lg italic font-subheading">
            "{monument.audioGuide.transcript}"
          </div>
        </div>

        {/* In-depth Chronicle and Cultural Significance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Cultural Significance */}
            <div className="p-8 rounded-3xl bg-[#2B2118]/70 border border-[#D4A85A]/30 space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#F3EBDD] flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#D4A85A]" />
                {t.significance}
              </h2>
              <p className="text-sm text-[#F3EBDD]/90 leading-relaxed font-subheading italic text-lg text-[#D4A85A]">
                {monument.culturalSignificance}
              </p>
            </div>

            {/* History */}
            <div className="p-8 rounded-3xl bg-[#2B2118]/70 border border-[#D4A85A]/30 space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#F3EBDD] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#D4A85A]" />
                {t.historyTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#F3EBDD]/80 leading-relaxed">
                {monument.history}
              </p>
            </div>

            {/* Stories and Revelations */}
            <div className="p-8 rounded-3xl bg-[#2B2118]/70 border border-[#D4A85A]/30 space-y-6">
              <h2 className="font-display text-2xl font-bold text-[#F3EBDD] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4A85A]" />
                {t.storiesTitle}
              </h2>

              <div className="space-y-4">
                {monument.stories.map((story, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#17130F] border border-[#D4A85A]/20 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#D4A85A]/20 text-[#D4A85A]">
                        {story.type.replace('_', ' ')}
                      </span>
                      <h4 className="font-display text-base font-bold text-[#F3EBDD]">
                        {story.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#F3EBDD]/80 leading-relaxed">
                      {story.narrative}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Preservation Health Status & Guidelines */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-[#2B2118] border border-[#D4A85A]/40 space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#D4A85A]/20">
                <div className="text-xs font-bold text-[#D4A85A] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Preservation Health
                </div>
                <div className="text-xl font-display font-bold text-[#D4A85A]">
                  {monument.preservationStatus.healthScore}%
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#17130F] h-2.5 rounded-full overflow-hidden border border-[#D4A85A]/30">
                <div 
                  className="bg-gradient-to-r from-[#B58A52] to-[#D4A85A] h-full rounded-full" 
                  style={{ width: `${monument.preservationStatus.healthScore}%` }}
                />
              </div>

              {/* Threats */}
              <div className="space-y-2 text-xs">
                <div className="font-semibold text-[#D4A85A] flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  Environmental Pressures
                </div>
                <ul className="space-y-1 text-[11px] text-[#F3EBDD]/70">
                  {monument.preservationStatus.threats.map((threat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-amber-400" />
                      <span>{threat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Current Initiative */}
              <div className="p-3.5 rounded-xl bg-[#17130F] border border-[#D4A85A]/20 text-xs space-y-1">
                <div className="text-[10px] font-bold text-[#D4A85A] uppercase">Active ASI Initiative</div>
                <p className="text-[11px] text-[#F3EBDD]/80">
                  {monument.preservationStatus.currentInitiatives}
                </p>
              </div>

              {/* Digital Scan Record */}
              <div className="p-3.5 rounded-xl bg-[#17130F] border border-[#D4A85A]/20 text-xs space-y-1">
                <div className="text-[10px] font-bold text-[#D4A85A] uppercase">LiDAR 3D Status</div>
                <p className="text-[11px] text-emerald-400 font-medium">
                  {monument.preservationStatus.digitalScanStatus}
                </p>
              </div>

              {/* Visitor Guidelines */}
              <div className="space-y-2 pt-2 border-t border-[#D4A85A]/20 text-xs">
                <div className="font-semibold text-[#F3EBDD]">Responsible Visitor Code</div>
                <ul className="space-y-1 text-[11px] text-[#F3EBDD]/70">
                  {monument.preservationStatus.visitorGuidelines.map((guide, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#D4A85A] font-bold">•</span>
                      <span>{guide}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick 3D Launch Action Widget */}
            {monument.has3DModel && (
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#B58A52]/20 to-[#D4A85A]/10 border border-[#D4A85A] text-center space-y-4">
                <Sparkles className="w-8 h-8 text-[#D4A85A] mx-auto" />
                <div>
                  <h4 className="font-display text-lg font-bold text-[#F3EBDD]">
                    Experience in 3D Spatial Canvas
                  </h4>
                  <p className="text-xs text-[#F3EBDD]/70 mt-1">
                    Examine the Dravidian vimana pyramid, Nandi bull enclosure, and sacred sanctum.
                  </p>
                </div>
                <button
                  id="side-explore-3d-btn"
                  onClick={() => onNavigate('3d-explorer')}
                  className="w-full py-3 rounded-xl bg-[#D4A85A] text-[#17130F] font-bold text-xs uppercase tracking-wider hover:bg-[#F3EBDD] transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>Launch 3D Explorer</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
