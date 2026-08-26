export type Language = 'en' | 'ta' | 'hi';

export interface Hotspot {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  position: [number, number, number];
  architecturalSignificance: string;
  audioGuideSnippet?: string;
  detailImage?: string;
  eraFact: string;
}

export interface Monument {
  id: string;
  name: string;
  nativeName: string;
  tagline: string;
  stateId: string;
  destinationId: string;
  period: string;
  dynasty: string;
  ruler: string;
  architectureStyle: string;
  material: string;
  unescoYear?: number;
  location: {
    city: string;
    state: string;
    coordinates: string;
    lat: number;
    lng: number;
  };
  heroImage: string;
  galleryImages: string[];
  culturalSignificance: string;
  history: string;
  stories: {
    title: string;
    narrative: string;
    type: 'mythology' | 'historical_event' | 'architectural_feat' | 'discovery';
  }[];
  preservationStatus: {
    healthScore: number;
    threats: string[];
    digitalScanStatus: string;
    currentInitiatives: string;
    visitorGuidelines: string[];
  };
  audioGuide: {
    duration: string;
    narrator: string;
    transcript: string;
  };
  has3DModel?: boolean;
  hotspots?: Hotspot[];
}

export interface Destination {
  id: string;
  name: string;
  nativeName: string;
  stateId: string;
  tagline: string;
  heroImage: string;
  description: string;
  historicalContext: string;
  bestTimeToVisit: string;
  monumentIds: string[];
  geographicHighlight: string;
}

export interface StateData {
  id: string;
  name: string;
  nativeName: string;
  capital: string;
  tagline: string;
  heroImage: string;
  accentColor: string;
  overview: string;
  dynasties: string[];
  architecturalHeritage: string;
  destinations: Destination[];
}

export interface TrailStop {
  monumentId: string;
  name: string;
  order: number;
  durationMinutes: number;
  distanceFromPrevious?: string;
  keyHighlight: string;
  audioTrackTitle: string;
  tipForVisitor: string;
}

export interface HeritageTrail {
  id: string;
  title: string;
  subtitle: string;
  region: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'In-depth';
  distance: string;
  heroImage: string;
  theme: string;
  description: string;
  stops: TrailStop[];
  historicalNarrative: string;
}

export interface TrailPreferences {
  duration: '15min' | '30min' | '1hour' | '2hours';
  interests: ('Architecture' | 'History' | 'Culture' | 'Photography')[];
  pace: 'relaxed' | 'moderate' | 'brisk';
  accessibility: boolean;
}
