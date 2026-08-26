import React, { useState } from 'react';
import { STATES_DATA, MONUMENTS, HERITAGE_TRAILS } from '../data/heritageData';
import { Language } from '../types';
import { 
  MapPin, 
  Compass, 
  Navigation, 
  Sparkles, 
  Eye, 
  ChevronRight, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  ZoomIn,
  ZoomOut,
  Maximize2
} from 'lucide-react';

interface HeritageMapPageProps {
  onNavigate: (route: string) => void;
  language: Language;
}

export const HeritageMapPage: React.FC<HeritageMapPageProps> = ({
  onNavigate,
  language
}) => {
  const [activeRegion, setActiveRegion] = useState<string>('tamil-nadu');
  const [activePin, setActivePin] = useState<string>('shore-temple');
  const [showTrailOverlay, setShowTrailOverlay] = useState(true);

  const selectedMonument = MONUMENTS[activePin] || MONUMENTS['shore-temple'];

  const regions = [
    { id: 'tamil-nadu', name: 'Tamil Nadu (Mahabalipuram)', coords: '12.6163° N, 80.1994° E', x: 55, y: 78 },
    { id: 'karnataka', name: 'Karnataka (Hampi)', coords: '15.3350° N, 76.4600° E', x: 44, y: 66 },
    { id: 'rajasthan', name: 'Rajasthan (Jaipur)', coords: '26.9239° N, 75.8267° E', x: 38, y: 34 },
    { id: 'delhi', name: 'Delhi NCR', coords: '28.5933° N, 77.2507° E', x: 45, y: 28 },
    { id: 'odisha', name: 'Odisha (Konark)', coords: '19.8876° N, 86.0945° E', x: 68, y: 52 }
  ];

  return (
    <div className="min-h-screen bg-[#17130F] text-[#F3EBDD] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#D4A85A]/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2118] border border-[#D4A85A]/40 text-xs text-[#D4A85A] font-semibold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5" />
              Pan-India Spatial Cartography
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#F3EBDD]">
              Interactive Heritage Map
            </h1>
            <p className="text-xs sm:text-sm text-[#F3EBDD]/80 font-subheading italic text-lg text-[#D4A85A] mt-1">
              India → Tamil Nadu → Mahabalipuram → Shore Temple & The Pallava Trail
            </p>
          </div>

          {/* Trail Overlay Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowTrailOverlay(!showTrailOverlay)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                showTrailOverlay
                  ? 'bg-[#D4A85A] text-[#17130F] border-[#D4A85A] font-bold shadow-md'
                  : 'bg-[#2B2118] text-[#F3EBDD]/70 border-[#D4A85A]/30 hover:text-[#F3EBDD]'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{showTrailOverlay ? 'Trail Vector Visible' : 'Show Trail'}</span>
            </button>
          </div>
        </div>

        {/* Map Layout: Interactive Vector Stage (Left) & Inspector Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Vector Map Stage */}
          <div className="lg:col-span-8 relative rounded-3xl bg-[#2B2118] border border-[#D4A85A]/40 overflow-hidden shadow-2xl min-h-[520px] flex flex-col justify-between p-6">
            {/* Top Region Navigation Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#D4A85A]/20">
              {regions.map((reg) => (
                <button
                  key={reg.id}
                  id={`map-reg-btn-${reg.id}`}
                  onClick={() => {
                    setActiveRegion(reg.id);
                    const mon = Object.values(MONUMENTS).find((m) => m.stateId === reg.id);
                    if (mon) setActivePin(mon.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all border ${
                    activeRegion === reg.id
                      ? 'bg-[#D4A85A] text-[#17130F] border-[#D4A85A] font-bold shadow-md'
                      : 'bg-[#17130F] text-[#F3EBDD]/80 border-[#D4A85A]/20 hover:border-[#D4A85A]/60'
                  }`}
                >
                  {reg.name}
                </button>
              ))}
            </div>

            {/* Simulated High-Res Stylized Cartographic Canvas */}
            <div className="relative my-6 w-full h-[380px] bg-[#17130F] rounded-2xl border border-[#D4A85A]/30 overflow-hidden p-4 flex items-center justify-center">
              {/* Subtle Grid Lat/Long Lines */}
              <div className="absolute inset-0 stone-pattern opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(#d4a85a15_1px,transparent_1px)] [background-size:24px_24px]" />

              {/* Stylized Outline of Indian Subcontinent & Coastal Contours */}
              <svg className="w-full h-full max-w-lg opacity-40 text-[#D4A85A]" viewBox="0 0 400 450" fill="none" stroke="currentColor" strokeWidth="1.5">
                {/* Stylized Northern / Peninsular coastline representation */}
                <path d="M150,40 L210,40 L260,80 L280,140 L310,180 L290,240 L270,300 L210,410 L190,410 L140,320 L110,230 L100,160 L120,100 Z" fill="#2B2118" fillOpacity="0.5" />
                {/* Coastal waterways */}
                <path d="M190,410 Q240,320 270,250" stroke="#D4A85A" strokeDasharray="3 3" />
                {/* Bay of Bengal wave marks */}
                <path d="M280,260 Q300,270 320,260" stroke="#B58A52" opacity="0.6" />
                <path d="M290,300 Q310,310 330,300" stroke="#B58A52" opacity="0.6" />
              </svg>

              {/* Animated Trail Route Vector from Shore Temple to Pancha Rathas */}
              {showTrailOverlay && activeRegion === 'tamil-nadu' && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                  <path
                    d="M 55 78 Q 57 82 54 86"
                    fill="none"
                    stroke="#D4A85A"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                    className="animate-pulse"
                  />
                </svg>
              )}

              {/* Regional Map Pins */}
              {regions.map((reg) => {
                const isActive = activeRegion === reg.id;
                return (
                  <button
                    key={reg.id}
                    id={`map-pin-${reg.id}`}
                    onClick={() => {
                      setActiveRegion(reg.id);
                      const mon = Object.values(MONUMENTS).find((m) => m.stateId === reg.id);
                      if (mon) setActivePin(mon.id);
                    }}
                    style={{ top: `${reg.y}%`, left: `${reg.x}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer focus:outline-none"
                  >
                    <div className="relative">
                      {isActive && (
                        <div className="absolute -inset-2 rounded-full bg-[#D4A85A]/30 animate-ping" />
                      )}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-2xl transition-transform ${
                        isActive
                          ? 'bg-[#D4A85A] text-[#17130F] scale-125 border-2 border-[#F3EBDD]'
                          : 'bg-[#2B2118] text-[#D4A85A] border border-[#D4A85A]/60 hover:scale-110'
                      }`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Pin Label */}
                    <div className={`mt-1 px-2.5 py-0.5 rounded-md text-[10px] whitespace-nowrap shadow-lg transition-all ${
                      isActive
                        ? 'bg-[#D4A85A] text-[#17130F] font-bold'
                        : 'bg-[#17130F]/90 text-[#F3EBDD] border border-[#D4A85A]/30 opacity-80 group-hover:opacity-100'
                    }`}>
                      {reg.name.split(' ')[0]}
                    </div>
                  </button>
                );
              })}

              {/* Mahabalipuram Trail Mini Waypoints (When Tamil Nadu is Active) */}
              {activeRegion === 'tamil-nadu' && showTrailOverlay && (
                <>
                  <div
                    onClick={() => setActivePin('shore-temple')}
                    style={{ top: '78%', left: '55%' }}
                    className="absolute cursor-pointer z-30"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A85A] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4A85A]"></span>
                    </span>
                  </div>

                  <div
                    onClick={() => setActivePin('pancha-rathas')}
                    style={{ top: '86%', left: '54%' }}
                    className="absolute cursor-pointer z-30"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#B58A52]"></span>
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Bottom Coordinates & Zoom Controls */}
            <div className="flex items-center justify-between text-xs text-[#F3EBDD]/60 pt-2 border-t border-[#D4A85A]/20">
              <div className="flex items-center gap-2 text-[11px] font-mono">
                <Compass className="w-3.5 h-3.5 text-[#D4A85A]" />
                <span>Focus: {regions.find((r) => r.id === activeRegion)?.coords}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#D4A85A] uppercase font-bold">WGS-84 Survey Datum</span>
              </div>
            </div>
          </div>

          {/* Right Inspector & Journey Context Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-[#2B2118] border border-[#D4A85A]/40 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#D4A85A]/20">
                <span className="px-2.5 py-0.5 rounded-full bg-[#D4A85A]/20 text-[#D4A85A] text-[10px] uppercase font-bold tracking-wider">
                  Selected Landmark
                </span>
                <span className="text-xs font-mono text-[#F3EBDD]/60">{selectedMonument.period}</span>
              </div>

              <div className="relative h-44 rounded-2xl overflow-hidden border border-[#D4A85A]/30">
                <img
                  src={selectedMonument.heroImage}
                  alt={selectedMonument.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17130F] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-display text-xl font-bold text-[#F3EBDD]">
                    {selectedMonument.name}
                  </h3>
                  <p className="text-xs text-[#D4A85A] font-subheading italic">
                    {selectedMonument.tagline}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#F3EBDD]/80">
                <p className="line-clamp-3 leading-relaxed">
                  {selectedMonument.culturalSignificance}
                </p>
                <div className="p-3 rounded-xl bg-[#17130F] border border-[#D4A85A]/20 space-y-1">
                  <div className="text-[10px] font-bold text-[#D4A85A] uppercase">Dynasty & Architecture</div>
                  <div className="text-xs font-semibold text-[#F3EBDD]">{selectedMonument.dynasty} • {selectedMonument.architectureStyle}</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  id="map-view-monument-detail-btn"
                  onClick={() => onNavigate(`monument/${selectedMonument.id}`)}
                  className="w-full py-2.5 rounded-xl bg-[#17130F] border border-[#D4A85A]/40 text-[#F3EBDD] text-xs font-bold uppercase tracking-wider hover:border-[#D4A85A] hover:bg-[#2B2118] transition-all flex items-center justify-center gap-2"
                >
                  <span>Open Full Chronicle</span>
                  <ChevronRight className="w-4 h-4 text-[#D4A85A]" />
                </button>

                {selectedMonument.has3DModel && (
                  <button
                    id="map-launch-3d-btn"
                    onClick={() => onNavigate('3d-explorer')}
                    className="w-full py-2.5 rounded-xl bg-[#D4A85A] text-[#17130F] text-xs font-bold uppercase tracking-wider hover:bg-[#F3EBDD] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D4A85A]/20"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Launch 3D Spatial Twin</span>
                  </button>
                )}
              </div>
            </div>

            {/* Next Demo Step Bridge */}
            <div className="p-5 rounded-2xl bg-[#17130F] border border-[#D4A85A]/30 space-y-2">
              <div className="text-xs font-bold text-[#D4A85A] uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Final Demo Step
              </div>
              <p className="text-xs text-[#F3EBDD]/70 leading-relaxed">
                Discover the DHAROHAR Preservation Framework, responsible guidelines, and digital guardian pledge.
              </p>
              <button
                id="map-to-preservation-btn"
                onClick={() => onNavigate('preservation')}
                className="w-full mt-2 py-2 rounded-xl bg-[#2B2118] border border-[#D4A85A]/50 text-xs font-bold text-[#D4A85A] hover:bg-[#D4A85A] hover:text-[#17130F] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Go to Preservation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
