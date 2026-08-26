import React, { useState } from 'react';
import { ShoreTempleViewer } from '../components/3d/ShoreTempleViewer';
import { SHORE_TEMPLE_HOTSPOTS } from '../data/heritageData';
import { Hotspot, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  Sparkles, 
  Eye, 
  Layers, 
  Bot, 
  Navigation, 
  MapPin, 
  ShieldCheck, 
  ArrowRight,
  Info,
  Compass,
  Volume2
} from 'lucide-react';

interface ThreeDExplorerPageProps {
  onNavigate: (route: string) => void;
  language: Language;
}

export const ThreeDExplorerPage: React.FC<ThreeDExplorerPageProps> = ({
  onNavigate,
  language
}) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(SHORE_TEMPLE_HOTSPOTS[0]);
  const t = TRANSLATIONS[language].threeD;

  return (
    <div className="min-h-screen bg-[#17130F] text-[#F3EBDD] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Page Title & Breadcrumb Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#D4A85A]/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2118] border border-[#D4A85A]/40 text-xs text-[#D4A85A] font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Sub-Millimeter 3D Architectural Digital Twin
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#F3EBDD]">
              {t.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#F3EBDD]/80 font-subheading italic text-lg text-[#D4A85A] mt-1">
              Mahabalipuram, Tamil Nadu • 700–728 CE (Pallava Dynasty)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('monument/shore-temple')}
              className="px-4 py-2 rounded-full bg-[#2B2118] border border-[#D4A85A]/30 text-xs text-[#F3EBDD] hover:border-[#D4A85A] transition-colors"
            >
              View Historical Chronicle
            </button>
            <button
              onClick={() => onNavigate('ai-guide')}
              className="px-4 py-2 rounded-full bg-[#D4A85A] text-[#17130F] text-xs font-bold uppercase tracking-wider hover:bg-[#F3EBDD] transition-colors flex items-center gap-1.5 shadow-md shadow-[#D4A85A]/20"
            >
              <Bot className="w-3.5 h-3.5" />
              Ask AI Guide
            </button>
          </div>
        </div>

        {/* The 3D Interactive WebGL Stage Component */}
        <div className="w-full">
          <ShoreTempleViewer
            onSelectHotspot={(hotspot) => setActiveHotspot(hotspot)}
            activeHotspotId={activeHotspot?.id}
          />
        </div>

        {/* 4 Architectural Hotspots Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold text-[#F3EBDD] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#D4A85A]" />
              Architectural Hotspot Directory
            </h2>
            <span className="text-xs text-[#F3EBDD]/60 hidden sm:inline">
              Click any node to focus camera
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SHORE_TEMPLE_HOTSPOTS.map((hotspot) => {
              const isSelected = activeHotspot?.id === hotspot.id;
              return (
                <div
                  key={hotspot.id}
                  id={`hotspot-card-${hotspot.id}`}
                  onClick={() => setActiveHotspot(hotspot)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-[#2B2118] border-[#D4A85A] shadow-xl shadow-[#D4A85A]/10 scale-[1.02]'
                      : 'bg-[#17130F] border-[#D4A85A]/30 hover:border-[#D4A85A]/60 hover:bg-[#2B2118]/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#D4A85A] font-semibold mb-1">
                      <span className="uppercase text-[10px] tracking-wider">Spatial Node</span>
                      {isSelected && <span className="text-emerald-400 font-bold">• Active</span>}
                    </div>
                    <h3 className="font-display text-base font-bold text-[#F3EBDD]">
                      {hotspot.title}
                    </h3>
                    <p className="text-xs text-[#D4A85A] font-subheading italic mt-0.5">
                      {hotspot.subtitle}
                    </p>
                    <p className="text-xs text-[#F3EBDD]/70 line-clamp-2 mt-2 leading-relaxed">
                      {hotspot.architecturalSignificance}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#D4A85A]/20 flex items-center justify-between text-xs text-[#D4A85A]">
                    <span className="text-[11px] text-[#F3EBDD]/60 font-mono">Focus Node</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Demo Next Steps Journey Carousel */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#2B2118] via-[#17130F] to-[#2B2118] border border-[#D4A85A]/40 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#D4A85A]">
                National Heritage Hackathon Demo Journey
              </div>
              <h3 className="font-display text-2xl font-bold text-[#F3EBDD] mt-1">
                Continue the Exploration Experience
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                id="btn-next-to-ai-guide"
                onClick={() => onNavigate('ai-guide')}
                className="px-5 py-2.5 rounded-full bg-[#D4A85A] text-[#17130F] font-bold text-xs uppercase tracking-wider hover:bg-[#F3EBDD] transition-colors flex items-center gap-1.5 shadow-md"
              >
                <Bot className="w-4 h-4" />
                <span>Next: AI Guide</span>
              </button>

              <button
                id="btn-next-to-trails"
                onClick={() => onNavigate('trails')}
                className="px-5 py-2.5 rounded-full bg-[#2B2118] border border-[#D4A85A]/40 text-[#F3EBDD] text-xs font-semibold uppercase tracking-wider hover:border-[#D4A85A] transition-colors flex items-center gap-1.5"
              >
                <Navigation className="w-4 h-4 text-[#D4A85A]" />
                <span>Pallava Trail</span>
              </button>

              <button
                id="btn-next-to-map"
                onClick={() => onNavigate('heritage-map')}
                className="px-5 py-2.5 rounded-full bg-[#17130F] border border-[#D4A85A]/40 text-[#D4A85A] text-xs font-semibold uppercase tracking-wider hover:bg-[#2B2118] transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4" />
                <span>Interactive Map</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
