import React from 'react';
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Navigation, 
  Layers, 
  Clock, 
  Eye, 
  Volume2, 
  CheckCircle2,
  ChevronRight,
  Flame,
  Globe2
} from 'lucide-react';
import { STATES_DATA, MONUMENTS, HERITAGE_TRAILS } from '../data/heritageData';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface LandingPageProps {
  onNavigate: (route: string) => void;
  language: Language;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, language }) => {
  const t = TRANSLATIONS[language].hero;
  const shoreTemple = MONUMENTS['shore-temple'];

  return (
    <div className="min-h-screen bg-[#17130F] text-[#F3EBDD] overflow-hidden">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Layer with Dark Texture & Gold Lighting */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2000&q=85"
            alt="DHAROHAR Indian Temple Heritage"
            className="w-full h-full object-cover object-center opacity-25 scale-105 filter saturate-50 contrast-125"
          />
          {/* Radial Dark Vignette & Gold Atmospheric Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#17130F] via-[#17130F]/80 to-[#17130F]/60" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A85A]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Architectural Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B2118]/90 border border-[#D4A85A]/50 text-xs text-[#D4A85A] font-semibold tracking-widest uppercase shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Futuristic Digital Heritage Sanctuary</span>
            <span className="w-1 h-1 rounded-full bg-[#D4A85A]" />
            <span className="text-[#F3EBDD]/70 font-normal">India 3D Archive</span>
          </div>

          {/* Main Display Headline */}
          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F3EBDD] leading-[1.1]">
              DHAROHAR
            </h1>
            <p className="font-subheading text-2xl sm:text-3xl lg:text-4xl text-[#D4A85A] italic max-w-3xl mx-auto leading-snug">
              “Explore the past. Experience it in 3D. Preserve it for the future.”
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-[#F3EBDD]/80 max-w-2xl mx-auto font-normal leading-relaxed">
            {t.subtitle}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              id="hero-btn-begin-exploration"
              onClick={() => onNavigate('explore')}
              className="px-8 py-4 rounded-full bg-[#D4A85A] text-[#17130F] font-bold text-sm tracking-wider uppercase hover:bg-[#F3EBDD] hover:shadow-xl hover:shadow-[#D4A85A]/30 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>{t.btnExplore}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-btn-explore-map"
              onClick={() => onNavigate('heritage-map')}
              className="px-8 py-4 rounded-full bg-[#2B2118] border border-[#D4A85A]/50 text-[#F3EBDD] font-semibold text-sm tracking-wider uppercase hover:border-[#D4A85A] hover:bg-[#B58A52]/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#D4A85A]" />
              <span>{t.btnMap}</span>
            </button>

            <button
              id="hero-btn-launch-3d"
              onClick={() => onNavigate('3d-explorer')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#B58A52]/30 to-[#D4A85A]/30 border border-[#D4A85A] text-[#D4A85A] font-semibold text-sm tracking-wider uppercase hover:bg-[#D4A85A] hover:text-[#17130F] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch 3D Shore Temple</span>
            </button>
          </div>

          {/* 2. THE USP STATEMENT SECTION */}
          <div className="pt-10 max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-[#2B2118]/80 border border-[#D4A85A]/40 backdrop-blur-md shadow-2xl relative overflow-hidden text-center space-y-2">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4A85A]/10 rounded-full blur-2xl pointer-events-none" />
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B58A52]">
                {t.uspLead}
              </p>
              <p className="font-subheading text-lg sm:text-xl font-bold text-[#F3EBDD] leading-relaxed">
                “DHAROHAR tells you what to experience, what it means, and why it matters.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED INTERACTIVE 3D PREVIEW CARD */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#2B2118] via-[#17130F] to-[#2B2118] border border-[#D4A85A]/50 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
          {/* Subtle gold grid pattern */}
          <div className="absolute inset-0 stone-pattern opacity-40 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A85A]/20 text-[#D4A85A] text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" />
                Featured 3D Architectural Monument
              </div>

              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F3EBDD]">
                  Shore Temple, Mahabalipuram
                </h2>
                <p className="text-sm font-subheading italic text-[#D4A85A] mt-1 text-lg">
                  {shoreTemple.nativeName} • Pallava Dynasty (700–728 CE)
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#F3EBDD]/80 leading-relaxed">
                Standing sentinel on the Bay of Bengal for over thirteen centuries, this structural stone masterpiece transition from cave excavations to skyward granite vimanas. Reconstructed in sub-millimeter 3D with interactive architectural hotspots.
              </p>

              {/* Quick Spec Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#17130F]/80 border border-[#D4A85A]/20">
                  <div className="text-[10px] uppercase text-[#D4A85A] font-semibold">Patron King</div>
                  <div className="text-xs font-bold text-[#F3EBDD] mt-0.5">Rajasimha II</div>
                </div>
                <div className="p-3 rounded-xl bg-[#17130F]/80 border border-[#D4A85A]/20">
                  <div className="text-[10px] uppercase text-[#D4A85A] font-semibold">Architecture</div>
                  <div className="text-xs font-bold text-[#F3EBDD] mt-0.5">Early Dravidian</div>
                </div>
                <div className="p-3 rounded-xl bg-[#17130F]/80 border border-[#D4A85A]/20">
                  <div className="text-[10px] uppercase text-[#D4A85A] font-semibold">3D Hotspots</div>
                  <div className="text-xs font-bold text-[#F3EBDD] mt-0.5">4 Spatial Nodes</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="featured-monument-3d-btn"
                  onClick={() => onNavigate('3d-explorer')}
                  className="px-6 py-3 rounded-full bg-[#D4A85A] text-[#17130F] font-bold text-xs uppercase tracking-wider hover:bg-[#F3EBDD] transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#D4A85A]/20"
                >
                  <Eye className="w-4 h-4" />
                  <span>Enter 3D Spatial Sanctuary</span>
                </button>

                <button
                  id="featured-monument-detail-btn"
                  onClick={() => onNavigate('monument/shore-temple')}
                  className="px-6 py-3 rounded-full bg-[#17130F] border border-[#D4A85A]/40 text-[#F3EBDD] text-xs font-semibold hover:border-[#D4A85A] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Chronicle & History</span>
                  <ChevronRight className="w-4 h-4 text-[#D4A85A]" />
                </button>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4A85A]/40 shadow-2xl group">
                <img
                  src={shoreTemple.heroImage}
                  alt="Shore Temple Mahabalipuram 3D"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17130F] via-transparent to-transparent opacity-80" />
                
                {/* 3D Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#17130F]/90 backdrop-blur-md p-3 rounded-xl border border-[#D4A85A]/40">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold text-[#F3EBDD]">Interactive WebGL Active</span>
                  </div>
                  <button
                    onClick={() => onNavigate('3d-explorer')}
                    className="text-xs text-[#D4A85A] font-semibold hover:underline flex items-center gap-1"
                  >
                    Launch <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 5 STATES REGIONAL HERITAGE GATEWAY */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#D4A85A]/20">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#D4A85A] mb-1">
              Architectural Atlas
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F3EBDD]">
              Explore India by Heritage Region
            </h2>
          </div>
          <button
            onClick={() => onNavigate('explore')}
            className="text-xs font-bold uppercase tracking-wider text-[#D4A85A] hover:text-[#F3EBDD] flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <span>View All 5 States</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATES_DATA.map((state) => (
            <div
              key={state.id}
              onClick={() => onNavigate(`state/${state.id}`)}
              className="group relative rounded-2xl bg-[#2B2118] border border-[#D4A85A]/30 overflow-hidden cursor-pointer hover:border-[#D4A85A] transition-all hover:shadow-2xl hover:shadow-[#D4A85A]/10 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={state.heroImage}
                  alt={state.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118] via-[#2B2118]/40 to-transparent" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#17130F]/90 backdrop-blur-md border border-[#D4A85A]/30 text-[11px] text-[#D4A85A] font-semibold">
                  {state.destinations[0]?.name}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold text-[#F3EBDD] group-hover:text-[#D4A85A] transition-colors">
                      {state.name}
                    </h3>
                    <span className="text-sm font-subheading italic text-[#D4A85A]/80">{state.nativeName}</span>
                  </div>
                  <p className="text-xs text-[#F3EBDD]/70 mt-2 line-clamp-2">
                    {state.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D4A85A]/20 flex items-center justify-between text-xs text-[#D4A85A]">
                  <span className="font-medium text-[#F3EBDD]/80">{state.dynasties[0]}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                    Explore <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HERITAGE TRAILS HIGHLIGHT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#2B2118]/60 border border-[#D4A85A]/30 p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A85A]/20 text-[#D4A85A] text-xs font-bold uppercase tracking-wider">
              <Navigation className="w-3.5 h-3.5" />
              Thematic Journeys
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F3EBDD]">
              The Pallava Architecture Trail
            </h2>
            <p className="text-sm text-[#F3EBDD]/80 leading-relaxed font-subheading italic text-lg text-[#D4A85A]">
              Shore Temple → Arjuna's Penance → Pancha Rathas
            </p>
            <p className="text-xs sm:text-sm text-[#F3EBDD]/70 leading-relaxed">
              Trace 150 years of rapid architectural evolution in Mahabalipuram as Pallava stonemasons transformed monolithic boulders into structural oceanfront pyramids.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('trails')}
                className="px-6 py-3 rounded-full bg-[#D4A85A] text-[#17130F] font-bold text-xs uppercase tracking-wider hover:bg-[#F3EBDD] transition-all flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Walk the Trail Route</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('personalized-trail')}
                className="px-6 py-3 rounded-full bg-[#17130F] border border-[#D4A85A]/40 text-[#D4A85A] font-semibold text-xs uppercase tracking-wider hover:bg-[#2B2118] transition-all cursor-pointer"
              >
                <span>Build Custom 15m / 1hr Itinerary</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRESERVATION CHARTER CALLOUT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <ShieldCheck className="w-10 h-10 text-[#D4A85A] mx-auto" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F3EBDD]">
            “PRESERVE WHAT WE INHERIT”
          </h2>
          <p className="text-xs sm:text-sm text-[#F3EBDD]/70 leading-relaxed">
            From sacrificial clay salt-extraction packs to LiDAR digital archiving, discover how modern technology safeguards ancient monuments for the next thousand years.
          </p>
          <button
            onClick={() => onNavigate('preservation')}
            className="px-6 py-2.5 rounded-full bg-[#2B2118] border border-[#D4A85A] text-[#D4A85A] text-xs font-bold uppercase tracking-wider hover:bg-[#D4A85A] hover:text-[#17130F] transition-all cursor-pointer"
          >
            Read Preservation Guidelines & Sign Pledge
          </button>
        </div>
      </section>
    </div>
  );
};
