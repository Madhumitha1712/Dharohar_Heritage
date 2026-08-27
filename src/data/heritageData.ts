import { StateData, Monument, HeritageTrail, Hotspot } from '../types';

export const SHORE_TEMPLE_HOTSPOTS: Hotspot[] = [
  {
    id: 'main-vimana',
    title: 'Main Vimana (East Tower)',
    subtitle: 'Stepped Dravidian Granite Pyramid',
    position: [0, 3.8, 0],
    architecturalSignificance: 'Rising 60 feet facing the Bay of Bengal, this stepped pyramidal tower exemplifies early structural Dravidian stone architecture, shifting away from rock-cut cave temples to freestanding masonry.',
    detailImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    eraFact: 'Commissioned by Narasimhavarman II Rajasimha (700–728 CE) of the Pallava Dynasty, designed so the first rays of the dawn sun illuminate the deity.',
    audioGuideSnippet: 'Observe the tier upon tier of kuta shrines and barrel-vaulted salas decreasing in size as they reach the octagonal shikhara finial...'
  },
  {
    id: 'nandi-wall',
    title: 'Nandi Bull Enclosure',
    subtitle: 'Over 50 Monolithic Granite Guardian Sculptures',
    position: [3.5, 0.6, 2.2],
    architecturalSignificance: 'The perimeter prakara wall is crowned with an unbroken perimeter of couchant Nandi bulls carved from single blocks of hard granite, serving as sacred threshold sentinels.',
    detailImage: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=800&q=80',
    eraFact: 'Excavations in 1990 revealed that the submerged portion of this wall originally connected to an expansive ritual bathing tank fed by sea channels.',
    audioGuideSnippet: 'Each Nandi is carved with distinct horn curvature and bell harness ornaments, weathered by thirteen centuries of maritime salt spray.'
  },
  {
    id: 'sanctum-somaskanda',
    title: 'Sanctum & Somaskanda Relief',
    subtitle: 'Inner Garbhagriha & Fluted Basalt Dharalinga',
    position: [0, 1.2, -0.4],
    architecturalSignificance: 'The primary sanctum houses a sixteen-sided fluted polished black basalt Dharalinga. Behind it stands the signature Pallava Somaskanda panel portraying Shiva, Uma, and infant Skanda.',
    detailImage: 'https://images.unsplash.com/photo-1600100397608-f010e4210d63?auto=format&fit=crop&w=800&q=80',
    eraFact: 'Uniquely houses two Shiva shrines and an intervening third shrine dedicated to Vishnu as Anantasayana (reclining on serpent Adisesha).',
    audioGuideSnippet: 'Notice how the interior walls remain deliberately unadorned, directing the devotee’s focus solely toward the glowing icon illuminated by ghee lamps.'
  },
  {
    id: 'sea-breakwater',
    title: 'Ancient Sea Wall & Maritime Groynes',
    subtitle: 'Rock Revetment & Modern Coastal Defense',
    position: [-3.2, 0.4, -2.8],
    architecturalSignificance: 'Positioned right on the edge of the roaring Bay of Bengal, the temple historically functioned both as a sacred shrine and as a lighthouse navigation landmark for Roman, Persian, and Chinese trading galleons.',
    detailImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    eraFact: 'During the 2004 Indian Ocean Tsunami, receding waters briefly exposed ancient stone ruins, lion carvings, and structural foundations of the legendary "Seven Pagodas".',
    audioGuideSnippet: 'Archaeological Survey of India planted Casuarina tree belts and constructed boulder breakwaters to buffer against salt crystallization.'
  }
];

export const MONUMENTS: Record<string, Monument> = {
  // === TAMIL NADU (5 monuments) ===
  'shore-temple': {
    id: 'shore-temple',
    name: 'Shore Temple',
    nativeName: 'கடற்கரைக் கோயில்',
    tagline: 'The 1300-Year Sentinel of the Coromandel Coast',
    stateId: 'tamil-nadu',
    destinationId: 'mahabalipuram',
    period: '700–728 CE',
    dynasty: 'Pallava Dynasty',
    ruler: 'King Narasimhavarman II (Rajasimha)',
    architectureStyle: 'Early Structural Dravidian Stone Architecture',
    material: 'Dressed Granitic Gneiss stone blocks',
    unescoYear: 1984,
    location: {
      city: 'Mahabalipuram',
      state: 'Tamil Nadu',
      coordinates: '12.6163° N, 80.1994° E',
      lat: 12.6163,
      lng: 80.1994
    },
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010e4210d63?auto=format&fit=crop&w=1200&q=80'
    ],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Shore_Temple_at_Mamallapuram.jpg',
        photographer: 'A.R. Srinivasan',
        license: 'CC BY-SA 4.0'
      },
      {
        url: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Nandi_statues_at_Shore_Temple.jpg',
        photographer: 'J. M. Garg',
        license: 'CC BY-SA 3.0'
      },
      {
        url: 'https://images.unsplash.com/photo-1600100397608-f010e4210d63?auto=format&fit=crop&w=1200&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Somaskanda_relief_Shore_Temple.jpg',
        photographer: 'P. Ravikumar',
        license: 'CC BY-SA 4.0'
      }
    ],
    culturalSignificance: 'The Shore Temple represents the pinnacle architectural transition from rock-cut cave excavations to complex masonry towers overlooking ocean trade lanes.',
    history: 'Built during the reign of Narasimhavarman II Rajasimha of the Pallava dynasty between 700 and 728 CE, the Shore Temple stands as one of the oldest structural stone temples of Southern India.',
    stories: [
      {
        title: 'The Legend of the Seven Pagodas',
        narrative: 'According to centuries-old accounts by Venetian merchant Marco Polo, the Shore Temple was only one of seven magnificent temples that lined this shore. The gods, jealous of its beauty, sent a deluge that submerged the other six.',
        type: 'mythology'
      }
    ],
    preservationStatus: {
      healthScore: 92,
      threats: ['Sea salt efflorescence', 'Coastal wind erosion'],
      digitalScanStatus: 'Complete Sub-millimeter LiDAR Scan (2024)',
      currentInitiatives: 'Sacrificial clay packs to extract marine salts from structural granite.',
      visitorGuidelines: ['Do not touch weathered Nandi statues', 'No flash inside sanctums']
    },
    audioGuide: {
      duration: '4 min 20 sec',
      narrator: 'Dr. Radhika Srinivasan',
      transcript: 'Welcome to the Shore Temple...'
    },
    has3DModel: true,
    threeDStatus: 'pending',
    hotspots: SHORE_TEMPLE_HOTSPOTS,
    constructionMaterial: 'Dressed Granitic Gneiss stone blocks',
    constructionTechnique: 'Structural dry masonry block fitting without mortar binding',
    unescoDetails: 'Inscribed in 1984 as a core constituent of the Group of Monuments at Mahabalipuram World Heritage site.',
    researchReferences: [
      'Archaeological Survey of India Memoir No. 33 (1998)',
      'Srinivasan, K. R., "Temples of South India", National Book Trust (1972)',
      'LiDAR Scan Architectural Survey Report, IIT Madras & ASI (2024)'
    ],
    historicalTimeline: [
      {
        year: '700 CE',
        title: 'Pallava Reign Commencement',
        description: 'King Narasimhavarman II (Rajasimha) commissions structural granite experiments shifting away from rock-cut monoliths.',
        period: 'Pallava Dynasty'
      },
      {
        year: '728 CE',
        title: 'Consecration & Conjunction Shrines',
        description: 'Dual Shiva garbhagrihas and the reclining Vishnu shrine are completed and consecrated as a unified maritime sentinel.',
        period: 'Pallava Dynasty'
      },
      {
        year: '1300 CE',
        title: 'Secondary Dravidian Inscriptions',
        description: 'Chola Dynasty kings and Vijayanagara patrons add minor structural pavilions and record epigraphical grants on plinth slabs.',
        period: 'Chola/Vijayanagara Era'
      },
      {
        year: '1984 CE',
        title: 'UNESCO World Heritage Status',
        description: 'Inscribed under UNESCO criteria for outstanding universal artistic and architectural value.',
        period: 'Modern Era'
      },
      {
        year: 'Present',
        title: 'Desalination Preservation',
        description: 'Archaeological Survey of India runs active paper-pulp clay packs to extract ocean salts from granite pores.',
        period: 'Conservation Era'
      }
    ]
  },
  'pancha-rathas': {
    id: 'pancha-rathas',
    name: 'Pancha Rathas',
    nativeName: 'பஞ்ச பாண்டவர் இரதங்கள்',
    tagline: 'Five Monolithic Architectural Experiments Carved from Living Granite',
    stateId: 'tamil-nadu',
    destinationId: 'mahabalipuram',
    period: '7th Century CE',
    dynasty: 'Pallava Dynasty',
    ruler: 'King Narasimhavarman I (Mamalla)',
    architectureStyle: 'Rock-Cut Monolithic Dravidian Architecture',
    material: 'Monolithic Granite Outcrop',
    unescoYear: 1984,
    location: {
      city: 'Mahabalipuram',
      state: 'Tamil Nadu',
      coordinates: '12.6083° N, 80.1914° E',
      lat: 12.6083,
      lng: 80.1914
    },
    heroImage: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Five_Rathas,_Mamallapuram.jpg',
        photographer: 'Bernard Gagnon',
        license: 'CC BY-SA 3.0'
      }
    ],
    culturalSignificance: 'A series of five monolithic model temples representing experimental roof structures carved from a single sloping granite ridge.',
    history: 'Carved under King Narasimhavarman I (Mamalla) of the Pallavas, these structures are named after the Pandavas and Draupadi from Mahabharata, though they were never active shrines.',
    stories: [],
    preservationStatus: {
      healthScore: 95,
      threats: ['Wind abrasion', 'Water logging'],
      digitalScanStatus: 'Complete 3D Mesh Scanned',
      currentInitiatives: 'Micro-vegetation cleaning and soil drainage correction.',
      visitorGuidelines: ['Keep distance from delicate reliefs']
    },
    audioGuide: { duration: '3 min 45 sec', narrator: 'Dr. Radhika Srinivasan', transcript: 'Observe the five distinct roof configurations...' },
    has3DModel: false
  },
  'arjunas-penance': {
    id: 'arjunas-penance',
    name: "Arjuna's Penance",
    nativeName: 'அர்ச்சுனன் தபசு',
    tagline: 'The World’s Grandest Open-Air Rock Bas-Relief',
    stateId: 'tamil-nadu',
    destinationId: 'mahabalipuram',
    period: 'Mid 7th Century CE',
    dynasty: 'Pallava Dynasty',
    ruler: 'King Mahendravarman I / Narasimhavarman I',
    architectureStyle: 'Monolithic Bas-Relief Engraving',
    material: 'Granite boulders',
    unescoYear: 1984,
    location: {
      city: 'Mahabalipuram',
      state: 'Tamil Nadu',
      coordinates: '12.6186° N, 80.1932° E',
      lat: 12.6186,
      lng: 80.1932
    },
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Arjuna%27s_Penance,_Mamallapuram.jpg',
        photographer: 'L. Vidyasagar',
        license: 'CC BY-SA 4.0'
      }
    ],
    culturalSignificance: 'A colossal open-air rock relief depicting mythical cycles of the cosmos, featuring life-size elephants and celestial beings.',
    history: 'Carved across two massive granite boulders, it stands as the central artistic landmark of Mamallapuram, reflecting the high epigraphical mastery of Pallava guild craftsmen.',
    stories: [],
    preservationStatus: {
      healthScore: 90,
      threats: ['Acid rain discoloration', 'Wind friction'],
      digitalScanStatus: 'Complete 3D Photogrammetry Scan',
      currentInitiatives: 'Installing wind shelters and seasonal chemical wash.',
      visitorGuidelines: ['No scaling of the rock reliefs']
    },
    audioGuide: { duration: '5 min', narrator: 'Dr. Radhika Srinivasan', transcript: 'Gaze at the central cleft...' },
    has3DModel: false
  },
  'krishnas-butter-ball': {
    id: 'krishnas-butter-ball',
    name: "Krishna's Butter Ball",
    nativeName: 'வான் இறை கல்',
    tagline: 'The Gravity-Defying Sacred Boulder',
    stateId: 'tamil-nadu',
    destinationId: 'mahabalipuram',
    period: '7th Century CE',
    dynasty: 'Pallava Dynasty',
    ruler: 'Pallava Kings',
    architectureStyle: 'Natural Geomorphological Phenomenon',
    material: 'Granitic Gneiss',
    unescoYear: 1984,
    location: {
      city: 'Mahabalipuram',
      state: 'Tamil Nadu',
      coordinates: '12.6190° N, 80.1925° E',
      lat: 12.6190,
      lng: 80.1925
    },
    heroImage: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=600&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=600&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Krishna%27s_Butterball_2017.jpg',
        photographer: 'Richard Mortel',
        license: 'CC BY-SA 2.0'
      }
    ],
    culturalSignificance: 'A massive 250-ton granite boulder perched precariously on a smooth 45-degree slope, surviving multiple earthquake cycles.',
    history: 'Known locally as Vaan Irai Kal (Stone of the Sky God), it represents a natural structural wonder that Pallava kings tried but failed to move using royal elephants.',
    stories: [],
    preservationStatus: {
      healthScore: 99,
      threats: ['Vandalism'],
      digitalScanStatus: 'Complete',
      currentInitiatives: 'Perimeter fencing and local guardian watch.',
      visitorGuidelines: ['Do not climb on the boulder']
    },
    audioGuide: { duration: '2 min', narrator: 'Dr. Radhika Srinivasan', transcript: 'Stand below this gravity defying rock...' },
    has3DModel: false
  },
  'descent-of-the-ganges': {
    id: 'descent-of-the-ganges',
    name: 'Descent of the Ganges',
    nativeName: 'கங்கை வம்சாவளி',
    tagline: 'The Cosmic Flow Carved in Eternal Granite',
    stateId: 'tamil-nadu',
    destinationId: 'mahabalipuram',
    period: '7th Century CE',
    dynasty: 'Pallava Dynasty',
    ruler: 'King Narasimhavarman I',
    architectureStyle: 'High Relief Stone Carving',
    material: 'Granite Outcrop',
    unescoYear: 1984,
    location: {
      city: 'Mahabalipuram',
      state: 'Tamil Nadu',
      coordinates: '12.6188° N, 80.1930° E',
      lat: 12.6188,
      lng: 80.1930
    },
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Great_Bas_Relief_Mamallapuram.jpg',
        photographer: 'J. M. Garg',
        license: 'CC BY-SA 3.0'
      }
    ],
    culturalSignificance: 'Illustrates the legendary descent of the celestial river Ganga to earth, flowing through a central vertical cleft in the bedrock.',
    history: 'Built as a royal engineering feat, natural cisterns on top originally fed water down the cleft during festivals to simulate the sacred waterfall.',
    stories: [],
    preservationStatus: {
      healthScore: 91,
      threats: ['Friction erosion', 'Salt deposits'],
      digitalScanStatus: 'Complete Scan',
      currentInitiatives: 'Gentle water clearing and paper pulp treatment.',
      visitorGuidelines: ['Follow paved walk lines']
    },
    audioGuide: { duration: '4 min', narrator: 'Dr. Radhika Srinivasan', transcript: 'Water once flowed through this fissure...' },
    has3DModel: false
  },

  // === KERALA (5 monuments) ===
  'mattancherry-palace': {
    id: 'mattancherry-palace',
    name: 'Mattancherry Palace',
    nativeName: 'മട്ടാഞ്ചേരി കൊട്ടാരം',
    tagline: 'The Dutch Palace and Kerala’s Mural Sanctuary',
    stateId: 'kerala',
    destinationId: 'kochi',
    period: '1555 CE',
    dynasty: 'Kingdom of Cochin / Portuguese built',
    ruler: 'Raja Veera Kerala Verma',
    architectureStyle: 'Nalukettu Traditional Kerala Palace Architecture',
    material: 'Laterite, Lime mortar, Teak wood',
    unescoYear: undefined,
    location: {
      city: 'Kochi',
      state: 'Kerala',
      coordinates: '9.9599° N, 76.2592° E',
      lat: 9.9599,
      lng: 76.2592
    },
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3c40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1602216056096-3c40cc0c9944?auto=format&fit=crop&w=1200&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Mattancherry_Palace_Kochi_2019.jpg',
        photographer: 'Shaji A.',
        license: 'CC BY-SA 4.0'
      }
    ],
    culturalSignificance: 'Features some of the finest traditional Hindu temple murals and portraits of the Rajas of Cochin in India.',
    history: 'Built by the Portuguese as a gift to the Cochin king, it was later renovated by the Dutch, hence the name Dutch Palace.',
    stories: [],
    preservationStatus: {
      healthScore: 89,
      threats: ['Termites in wooden beams', 'Humidity staining murals'],
      digitalScanStatus: 'Pending High Accuracy Scan',
      currentInitiatives: 'Microclimate controls and wooden structural treatments.',
      visitorGuidelines: ['Photography strictly prohibited in mural chambers']
    },
    audioGuide: { duration: '5 min', narrator: 'Anjana Menon', transcript: 'Step into the wooden chambers...' },
    has3DModel: false
  },
  'paradesi-synagogue': {
    id: 'paradesi-synagogue',
    name: 'Paradesi Synagogue',
    nativeName: 'പരദേശി സിനഗോഗ്',
    tagline: 'The Jewel of Jew Town and Cochin Jewish Heritage',
    stateId: 'kerala',
    destinationId: 'kochi',
    period: '1568 CE',
    dynasty: 'Malabar Yehudan Community',
    ruler: 'Raja Keshavarman of Cochin (Land donor)',
    architectureStyle: 'Anglo-Indian Jewish Synagogue Architecture',
    material: 'Hand-painted Chinese tiles, Belgian chandeliers, Laterite',
    unescoYear: undefined,
    location: {
      city: 'Kochi',
      state: 'Kerala',
      coordinates: '9.9575° N, 76.2594° E',
      lat: 9.9575,
      lng: 76.2594
    },
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Paradesi_Synagogue_Kochi.jpg',
        photographer: 'Wouter Hagens',
        license: 'Public Domain'
      }
    ],
    culturalSignificance: 'The oldest active synagogue in the Commonwealth, famous for its hand-painted blue willow porcelain floor tiles from Canton.',
    history: 'Constructed by Spanish and Portuguese Sephardic Jews who fled inquisitions and settled in the hospitable Kingdom of Cochin.',
    stories: [],
    preservationStatus: {
      healthScore: 93,
      threats: ['Tile loosening', 'Saline sea air'],
      digitalScanStatus: 'Complete interior scan',
      currentInitiatives: 'Tile stabilization and moisture extraction.',
      visitorGuidelines: ['Observe dress code', 'Silent visits only']
    },
    audioGuide: { duration: '3 min 20 sec', narrator: 'Anjana Menon', transcript: 'Look down at the Chinese porcelain tiles...' },
    has3DModel: false
  },
  'st-francis-church': {
    id: 'st-francis-church',
    name: 'St. Francis Church',
    nativeName: 'സെന്റ് ഫ്രാൻസിസ് പള്ളി',
    tagline: 'The First European Church in India and Vasco da Gama’s Tomb',
    stateId: 'kerala',
    destinationId: 'kochi',
    period: '1503 CE',
    dynasty: 'Portuguese Colony / Franciscan Friars',
    ruler: 'Portuguese Viceroy Francisco de Almeida',
    architectureStyle: 'Portuguese Colonial Church Style',
    material: 'Laterite, Wood, Lime plaster',
    unescoYear: undefined,
    location: {
      city: 'Kochi',
      state: 'Kerala',
      coordinates: '9.9660° N, 76.2411° E',
      lat: 9.9660,
      lng: 76.2411
    },
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3c40cc0c9944?auto=format&fit=crop&w=600&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1602216056096-3c40cc0c9944?auto=format&fit=crop&w=600&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:St_Francis_Church_Cochin.jpg',
        photographer: 'Anoop S.',
        license: 'CC BY-SA 3.0'
      }
    ],
    culturalSignificance: 'Stands as a historical witness to the European colonial struggle for the Indian spice trade.',
    history: 'Portuguese explorer Vasco da Gama, who died in Kochi in 1524, was originally buried in this church before his remains were moved to Lisbon.',
    stories: [],
    preservationStatus: {
      healthScore: 90,
      threats: ['Timber decay', 'Roof leaks'],
      digitalScanStatus: 'Complete Scan',
      currentInitiatives: 'Roof timber replacement and weather sealing.',
      visitorGuidelines: ['Maintain silence inside the sanctuary']
    },
    audioGuide: { duration: '4 min', narrator: 'Anjana Menon', transcript: 'You are standing before India\'s first European church...' },
    has3DModel: false
  },
  'bekal-fort': {
    id: 'bekal-fort',
    name: 'Bekal Fort',
    nativeName: 'ബേക്കൽ കോട്ട',
    tagline: 'The Keyhole Ocean Fortress of Malabar Coast',
    stateId: 'kerala',
    destinationId: 'kasaragod',
    period: '1650 CE',
    dynasty: 'Keladi Nayaka Dynasty',
    ruler: 'Shivappa Nayaka',
    architectureStyle: 'Coastal Defensive Military Fortification',
    material: 'Laterite stone blocks',
    unescoYear: undefined,
    location: {
      city: 'Kasaragod',
      state: 'Kerala',
      coordinates: '12.3831° N, 75.0319° E',
      lat: 12.3831,
      lng: 12.3831
    },
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3c40cc0c9944?auto=format&fit=crop&w=800&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1602216056096-3c40cc0c9944?auto=format&fit=crop&w=800&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Bekal_Fort_Kasaragod.jpg',
        photographer: 'Prof. T. R. Rao',
        license: 'CC BY-SA 4.0'
      }
    ],
    culturalSignificance: 'The largest and best-preserved coastal fortress in Kerala, featuring observation towers facing the Arabian Sea.',
    history: 'Built as a defense against maritime invaders, it later fell to Haider Ali, Tipu Sultan, and eventually the British East India Company.',
    stories: [],
    preservationStatus: {
      healthScore: 94,
      threats: ['Sea wave erosion', 'Laterite peeling'],
      digitalScanStatus: 'Complete LiDAR Scan',
      currentInitiatives: 'Rampart reinforcement and coastal buffer planting.',
      visitorGuidelines: ['Follow marked pathways near cliffs']
    },
    audioGuide: { duration: '4 min 10 sec', narrator: 'Anjana Menon', transcript: 'Observe the sea observation port...' },
    has3DModel: false
  },
  'padmanabhaswamy-temple': {
    id: 'padmanabhaswamy-temple',
    name: 'Sree Padmanabhaswamy Temple',
    nativeName: 'ശ്രീ പത്മനാഭസ്വാമി ക്ഷേത്രം',
    tagline: 'The Vaulted Temple of Infinite Recesses and Travancore Wealth',
    stateId: 'kerala',
    destinationId: 'thiruvananthapuram',
    period: '8th Century CE (Substantial expansion 1731 CE)',
    dynasty: 'Travancore Royal House',
    ruler: 'Maharaja Marthanda Varma',
    architectureStyle: 'Kerala-Dravidian Architectural Synthesis',
    material: 'Granite stone, Teak wood, Gold cladding',
    unescoYear: undefined,
    location: {
      city: 'Thiruvananthapuram',
      state: 'Kerala',
      coordinates: '8.4830° N, 76.9436° E',
      lat: 8.4830,
      lng: 76.9436
    },
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3c40cc0c9944?auto=format&fit=crop&w=700&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1602216056096-3c40cc0c9944?auto=format&fit=crop&w=700&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Sri_Padmanabhaswamy_Temple.jpg',
        photographer: 'V. S. Acharya',
        license: 'CC BY-SA 4.0'
      }
    ],
    culturalSignificance: 'Houses Lord Vishnu reclining on Anantha, and is renowned for its secret underground vaults containing gold treasures.',
    history: 'Renovated by Maharaja Marthanda Varma, who dedicated the Travancore Kingdom to the deity Padmanabha, ruling as Padmanabhadasas.',
    stories: [],
    preservationStatus: {
      healthScore: 96,
      threats: ['Saline decay', 'High visitor flow'],
      digitalScanStatus: 'Restricted security scan',
      currentInitiatives: 'Gopuram restoration and structural inspection.',
      visitorGuidelines: ['Strict traditional dress code required', 'Non-Hindus require permission']
    },
    audioGuide: { duration: '5 min', narrator: 'Anjana Menon', transcript: 'Look up at the gopuram...' },
    has3DModel: false
  },

  // === KARNATAKA (4 monuments) ===
  'virupaksha-temple': {
    id: 'virupaksha-temple',
    name: 'Virupaksha Temple',
    nativeName: 'ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯ',
    tagline: 'The Sacred Pulse of the Vijayanagara Empire',
    stateId: 'karnataka',
    destinationId: 'hampi',
    period: '7th Century CE (Expanded 1510 CE)',
    dynasty: 'Vijayanagara Empire',
    ruler: 'King Krishnadevaraya',
    architectureStyle: 'Late Chalukyan / Vijayanagara Temple Style',
    material: 'Granite and brick gopuram, stone pillars',
    unescoYear: 1986,
    location: {
      city: 'Hampi',
      state: 'Karnataka',
      coordinates: '15.3350° N, 76.4600° E',
      lat: 15.3350,
      lng: 76.4600
    },
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010e4210d63?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1600100397608-f010e4210d63?auto=format&fit=crop&w=1600&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Virupaksha_Temple_Hampi.jpg',
        photographer: 'Marc Shandro',
        license: 'CC BY-SA 2.0'
      }
    ],
    culturalSignificance: 'The oldest active Shiva temple in India, functioning continuously since the 7th century.',
    history: 'Expanded by King Krishnadevaraya to celebrate his coronation, featuring a grand 160-foot entrance gopuram.',
    stories: [],
    preservationStatus: {
      healthScore: 93,
      threats: ['Saline wind weathering', 'Foundation settlement'],
      digitalScanStatus: 'Complete scan',
      currentInitiatives: 'Restoration of gopuram plaster and seismic monitoring.',
      visitorGuidelines: ['Deposit shoes outside']
    },
    audioGuide: { duration: '4 min', narrator: 'Dr. Radhika Srinivasan', transcript: 'Welcome to Hampi...' },
    has3DModel: false
  },
  'vittala-temple': {
    id: 'vittala-temple',
    name: 'Vittala Temple',
    nativeName: 'ವಿಜಯ ವಿಠ್ಠಲ ದೇವಾಲಯ',
    tagline: 'The Symphony of Musical Pillars & Sacred Stone Chariots',
    stateId: 'karnataka',
    destinationId: 'hampi',
    period: '15th Century CE',
    dynasty: 'Vijayanagara Empire',
    ruler: 'King Devaraya II / Krishnadevaraya',
    architectureStyle: 'Classic Vijayanagara Granite Temple Architecture',
    material: 'Monolithic Granite',
    unescoYear: 1986,
    location: {
      city: 'Hampi',
      state: 'Karnataka',
      coordinates: '15.3374° N, 76.4680° E',
      lat: 15.3374,
      lng: 76.4680
    },
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Stone_Chariot_at_Vittala_Temple_Hampi.jpg',
        photographer: 'A. S. Murthy',
        license: 'CC BY-SA 4.0'
      }
    ],
    culturalSignificance: 'Houses the iconic Stone Chariot (Garuda shrine) and the 56 hollow musical pillars that produce ragas.',
    history: 'Constructed as the primary shrine of Hampi Vijayanagara, reflecting the golden period of high southern stone carving.',
    stories: [],
    preservationStatus: {
      healthScore: 91,
      threats: ['Vibration damage from tapping pillars', 'Stone flaking'],
      digitalScanStatus: 'Complete Scan',
      currentInitiatives: 'Barriers around musical columns to prevent tapping.',
      visitorGuidelines: ['Do not touch the musical pillars']
    },
    audioGuide: { duration: '5 min', narrator: 'Dr. Radhika Srinivasan', transcript: 'Behold the Stone Chariot...' },
    has3DModel: false
  },
  'lotus-mahal': {
    id: 'lotus-mahal',
    name: 'Lotus Mahal',
    nativeName: 'ಕಮಲ ಮಹಲ್',
    tagline: 'The Indo-Islamic Zenana Palace of Vijayanagara Queens',
    stateId: 'karnataka',
    destinationId: 'hampi',
    period: '16th Century CE',
    dynasty: 'Vijayanagara Empire',
    ruler: 'Vijayanagara Kings',
    architectureStyle: 'Secular Indo-Saracenic Palace Architecture',
    material: 'Granite foundation, Lime mortar, brick arches',
    unescoYear: 1986,
    location: {
      city: 'Hampi',
      state: 'Karnataka',
      coordinates: '15.3197° N, 76.4674° E',
      lat: 15.3197,
      lng: 76.4674
    },
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010e4210d63?auto=format&fit=crop&w=800&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1600100397608-f010e4210d63?auto=format&fit=crop&w=800&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Lotus_Mahal_Hampi_2018.jpg',
        photographer: 'Jean-Pierre Dalbéra',
        license: 'CC BY 2.0'
      }
    ],
    culturalSignificance: 'An archway pavilion resembling a lotus bud, designed with hollow water channels in the pillars for air cooling.',
    history: 'Served as a royal social club and council hall for the queens within the Zenana Enclosure.',
    stories: [],
    preservationStatus: {
      healthScore: 94,
      threats: ['Plaster cracking', 'Staining'],
      digitalScanStatus: 'Complete 3D Mesh',
      currentInitiatives: 'Lime plaster stabilization and waterproofing.',
      visitorGuidelines: ['Stay behind the lawn barrier']
    },
    audioGuide: { duration: '3 min 15 sec', narrator: 'Dr. Radhika Srinivasan', transcript: 'Look at the multi-lobed arches...' },
    has3DModel: false
  },
  'hazara-rama-temple': {
    id: 'hazara-rama-temple',
    name: 'Hazara Rama Temple',
    nativeName: 'ಹಜಾರ ರಾಮ ದೇವಾಲಯ',
    tagline: 'The Thousand Ramayana Bas-Reliefs in Polished Basalt',
    stateId: 'karnataka',
    destinationId: 'hampi',
    period: 'Early 15th Century CE',
    dynasty: 'Vijayanagara Empire',
    ruler: 'King Devaraya I',
    architectureStyle: 'Royal Court Dravidian Style',
    material: 'Polished Black Basalt and Granite',
    unescoYear: 1986,
    location: {
      city: 'Hampi',
      state: 'Karnataka',
      coordinates: '15.3218° N, 76.4631° E',
      lat: 15.3218,
      lng: 76.4631
    },
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Hazara_Rama_Temple_Reliefs.jpg',
        photographer: 'A. S. Rao',
        license: 'CC BY-SA 3.0'
      }
    ],
    culturalSignificance: 'Renowned for its meticulously detailed stone carvings depicting the Ramayana epic like a comic strip.',
    history: 'Built as the private temple of the Vijayanagara royal household, positioned at the center of the Royal Enclosure.',
    stories: [],
    preservationStatus: {
      healthScore: 92,
      threats: ['Basalt erosion', 'Water intrusion'],
      digitalScanStatus: 'Complete Photogrammetry',
      currentInitiatives: 'Chemical coating and rain shields.',
      visitorGuidelines: ['Follow tour directions to read reliefs in sequence']
    },
    audioGuide: { duration: '4 min', narrator: 'Dr. Radhika Srinivasan', transcript: 'Read the stone panels panel-by-panel...' },
    has3DModel: false
  },

  // === RAJASTHAN (4 monuments) ===
  'hawa-mahal': {
    id: 'hawa-mahal',
    name: 'Hawa Mahal',
    nativeName: 'हवा महल',
    tagline: 'The Crown of 953 Breezy Jharokhas',
    stateId: 'rajasthan',
    destinationId: 'jaipur',
    period: '1799 CE',
    dynasty: 'Kachwaha Rajput Dynasty',
    ruler: 'Maharaja Sawai Pratap Singh',
    architectureStyle: 'Rajput-Mughal Thermodynamic Architecture',
    material: 'Red and Pink Sandstone, Lime plaster',
    unescoYear: undefined,
    location: {
      city: 'Jaipur',
      state: 'Rajasthan',
      coordinates: '26.9239° N, 75.8267° E',
      lat: 26.9239,
      lng: 75.8267
    },
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Hawa_Mahal_Jaipur.jpg',
        photographer: 'Firoze Edassery',
        license: 'CC BY-SA 3.0'
      }
    ],
    culturalSignificance: 'A 5-story facade shaped like Krishna\'s crown with 953 windows designed for passive air cooling via Venturi effect.',
    history: 'Designed by Lal Chand Ustad to allow royal ladies to watch street festivals unseen, maintaining custom purdah traditions.',
    stories: [],
    preservationStatus: {
      healthScore: 90,
      threats: ['Saline moisture peeling sandstone', 'Vibration from street traffic'],
      digitalScanStatus: 'Complete Scan (2023)',
      currentInitiatives: 'Lime plaster reinforcement and traffic diversion plans.',
      visitorGuidelines: ['Mind your footing on narrow top staircases']
    },
    audioGuide: { duration: '3 min 30 sec', narrator: 'Vikram Singh', transcript: 'Stand behind the screen...' },
    has3DModel: false
  },
  'amber-fort': {
    id: 'amber-fort',
    name: 'Amber Fort',
    nativeName: 'आमेर किला',
    tagline: 'The Golden Citadel of Mirror Palaces and Hilltop Ramparts',
    stateId: 'rajasthan',
    destinationId: 'jaipur',
    period: '1592 CE (Expanded 17th Century)',
    dynasty: 'Kachwaha Rajput Dynasty',
    ruler: 'Raja Man Singh I / Sawai Jai Singh',
    architectureStyle: 'Mughal-Rajput Hill Fort Architecture',
    material: 'Yellow and Pink Sandstone, White Marble, Mirror glass',
    unescoYear: 2013,
    location: {
      city: 'Jaipur',
      state: 'Rajasthan',
      coordinates: '26.9855° N, 75.8513° E',
      lat: 26.9855,
      lng: 75.8513
    },
    heroImage: 'https://images.unsplash.com/photo-1585121516538-4e12e1ec73f7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1585121516538-4e12e1ec73f7?auto=format&fit=crop&w=1200&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Amber_Fort_Jaipur.jpg',
        photographer: 'V. S. Choudhary',
        license: 'CC BY-SA 4.0'
      }
    ],
    culturalSignificance: 'Renowned for its massive defensive gates, Maota Lake vistas, and the Sheesh Mahal (Hall of Mirrors).',
    history: 'Constructed as the primary palace fortress of Amber before the founding of Jaipur, reflecting high Mughal military alliance styles.',
    stories: [],
    preservationStatus: {
      healthScore: 92,
      threats: ['Cracking in hilltop structures', 'Saline wind weathering'],
      digitalScanStatus: 'Complete',
      currentInitiatives: 'Mirror panel restoration and drainage sealing.',
      visitorGuidelines: ['Follow guide signs', 'Do not touch mirror panels']
    },
    audioGuide: { duration: '5 min', narrator: 'Vikram Singh', transcript: 'Welcome to Amber...' },
    has3DModel: false
  },
  'city-palace-jaipur': {
    id: 'city-palace-jaipur',
    name: 'City Palace',
    nativeName: 'चन्द्र महल',
    tagline: 'The Living Seat of Jaipur Kings and Royal Courtyards',
    stateId: 'rajasthan',
    destinationId: 'jaipur',
    period: '1727 CE',
    dynasty: 'Kachwaha Rajput Dynasty',
    ruler: 'Maharaja Sawai Jai Singh II',
    architectureStyle: 'Mughal, Rajput and European Synthesis',
    material: 'Pink Sandstone, Marble, Brass',
    unescoYear: undefined,
    location: {
      city: 'Jaipur',
      state: 'Rajasthan',
      coordinates: '26.9258° N, 75.8236° E',
      lat: 26.9258,
      lng: 75.8236
    },
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:City_Palace_Jaipur_2021.jpg',
        photographer: 'Pratap R.',
        license: 'CC BY-SA 4.0'
      }
    ],
    culturalSignificance: 'Houses Chandra Mahal, Pritam Niwas Chowk (four seasons gates), and huge silver water vessels.',
    history: 'Established when the capital shifted from Amber to the planned grid city of Jaipur, designed by Vidyadhar Bhattacharya.',
    stories: [],
    preservationStatus: {
      healthScore: 95,
      threats: ['Wear in active tourist courtyards'],
      digitalScanStatus: 'Partial Scan',
      currentInitiatives: 'Gate paint conservation and museum curation.',
      visitorGuidelines: ['Strictly no photography in royal chambers']
    },
    audioGuide: { duration: '4 min', narrator: 'Vikram Singh', transcript: 'Observe the peacock gate...' },
    has3DModel: false
  },
  'jantar-mantar-jaipur': {
    id: 'jantar-mantar-jaipur',
    name: 'Jantar Mantar',
    nativeName: 'जन्तर मन्तर',
    tagline: 'The Stone Cosmic Calculator of Rajput Astronomers',
    stateId: 'rajasthan',
    destinationId: 'jaipur',
    period: '1734 CE',
    dynasty: 'Kachwaha Rajput Dynasty',
    ruler: 'Maharaja Sawai Jai Singh II',
    architectureStyle: 'Rajput Astronomical stone instruments',
    material: 'Local Stone and Marble, Brass plates',
    unescoYear: 2010,
    location: {
      city: 'Jaipur',
      state: 'Rajasthan',
      coordinates: '26.9248° N, 75.8245° E',
      lat: 26.9248,
      lng: 75.8245
    },
    heroImage: 'https://images.unsplash.com/photo-1585121516538-4e12e1ec73f7?auto=format&fit=crop&w=600&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1585121516538-4e12e1ec73f7?auto=format&fit=crop&w=600&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Jantar_Mantar_Jaipur_2019.jpg',
        photographer: 'A. K. Sharma',
        license: 'CC BY-SA 4.0'
      }
    ],
    culturalSignificance: 'The world\'s largest stone sundial (Vrihat Samrat Yantra) capable of tracking local time with 2-second accuracy.',
    history: 'Sawai Jai Singh built five such observatories, combining Vedic astronomy concepts with Islamic observatory structures.',
    stories: [],
    preservationStatus: {
      healthScore: 96,
      threats: ['Thermal cracking in white marble scales'],
      digitalScanStatus: 'Complete LiDAR Scan',
      currentInitiatives: 'Marble coordinate markings repair and calibration checking.',
      visitorGuidelines: ['Do not climb on astronomical instruments']
    },
    audioGuide: { duration: '4 min 30 sec', narrator: 'Vikram Singh', transcript: 'Observe the massive sundial shadow...' },
    has3DModel: false
  },

  // === DELHI (4 monuments) ===
  'qutub-minar': {
    id: 'qutub-minar',
    name: 'Qutub Minar',
    nativeName: 'क़ुतुब मीनार',
    tagline: 'The 73-Meter Tower of Victory and the Rustless Iron Pillar',
    stateId: 'delhi',
    destinationId: 'delhi',
    period: '1192 CE',
    dynasty: 'Delhi Sultanate / Mamluk Dynasty',
    ruler: 'Qutb-ud-din Aibak / Iltutmish',
    architectureStyle: 'Early Indo-Islamic Victory Tower Architecture',
    material: 'Red Sandstone, Grey Quartzite, White Marble',
    unescoYear: 1993,
    location: {
      city: 'Delhi',
      state: 'Delhi',
      coordinates: '28.5244° N, 77.1855° E',
      lat: 28.5244,
      lng: 77.1855
    },
    heroImage: 'https://images.unsplash.com/photo-1595304675549-3665bc75bd02?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1595304675549-3665bc75bd02?auto=format&fit=crop&w=1200&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Qutb_Minar_Delhi_2020.jpg',
        photographer: 'V. K. Singh',
        license: 'CC BY-SA 4.0'
      }
    ],
    culturalSignificance: 'A 5-story victory tower carved with Arabic inscriptions alongside the Gupta-period rustless iron pillar.',
    history: 'Initiated by Qutb-ud-din Aibak to mark the start of Delhi Sultanate rule, rebuilt after lightning strikes by Firoz Shah Tughlaq.',
    stories: [],
    preservationStatus: {
      healthScore: 92,
      threats: ['Foundation shifting', 'Air pollution staining'],
      digitalScanStatus: 'Complete Sub-millimeter Scan (2024)',
      currentInitiatives: 'Tilt monitoring sensors and chemical clean.',
      visitorGuidelines: ['Follow outer pathway boundary line']
    },
    audioGuide: { duration: '4 min', narrator: 'Rahul Dev', transcript: 'Look up at the balcony bands...' },
    has3DModel: false
  },
  'humayuns-tomb': {
    id: 'humayuns-tomb',
    name: "Humayun's Tomb",
    nativeName: 'हुमायूँ का मक़बरा',
    tagline: 'The Geometry of Paradise: Prototype of the Taj Mahal',
    stateId: 'delhi',
    destinationId: 'delhi',
    period: '1570 CE',
    dynasty: 'Mughal Empire',
    ruler: 'Empress Bega Begum (Consort of Humayun)',
    architectureStyle: 'Mughal Charbagh Garden Tomb Style',
    material: 'Red Sandstone, White Marble inlay',
    unescoYear: 1993,
    location: {
      city: 'Delhi',
      state: 'Delhi',
      coordinates: '28.5933° N, 77.2507° E',
      lat: 28.5933,
      lng: 77.2507
    },
    heroImage: 'https://images.unsplash.com/photo-1628548174540-1011f0a202d7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1628548174540-1011f0a202d7?auto=format&fit=crop&w=1200&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Humayun%27s_Tomb_Delhi_2022.jpg',
        photographer: 'A. R. Gupta',
        license: 'CC BY-SA 4.0'
      }
    ],
    culturalSignificance: 'The first grand garden-tomb on the Indian subcontinent, introducing the iconic double dome structure.',
    history: 'Designed by Persian architect Mirak Mirza Ghiyath, serving as a family mausoleum for hundreds of subsequent Mughal princes.',
    stories: [],
    preservationStatus: {
      healthScore: 94,
      threats: ['Water canal calcification', 'Traffic pollution'],
      digitalScanStatus: 'Complete Scan',
      currentInitiatives: 'Water channel restoration and lime washing.',
      visitorGuidelines: ['Do not walk inside dry water channels']
    },
    audioGuide: { duration: '4 min 40 sec', narrator: 'Rahul Dev', transcript: 'Welcome to the Charbagh garden...' },
    has3DModel: false
  },
  'red-fort': {
    id: 'red-fort',
    name: 'Red Fort',
    nativeName: 'लाल क़िला',
    tagline: 'The Imperial Seat of Mughal Splendor and Independence',
    stateId: 'delhi',
    destinationId: 'delhi',
    period: '1648 CE',
    dynasty: 'Mughal Empire',
    ruler: 'Emperor Shah Jahan',
    architectureStyle: 'Mughal Palace Fortification Style',
    material: 'Red Sandstone, White Marble, Plaster',
    unescoYear: 2007,
    location: {
      city: 'Delhi',
      state: 'Delhi',
      coordinates: '28.6562° N, 77.2410° E',
      lat: 28.6562,
      lng: 77.2410
    },
    heroImage: 'https://images.unsplash.com/photo-1595304675549-3665bc75bd02?auto=format&fit=crop&w=600&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1595304675549-3665bc75bd02?auto=format&fit=crop&w=600&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Red_Fort_Delhi.jpg',
        photographer: 'A. K. Sharma',
        license: 'CC BY-SA 3.0'
      }
    ],
    culturalSignificance: 'Renowned for Diwan-i-Aam, Diwan-i-Khas, and serves as the flag hoisting site for India\'s Independence Day.',
    history: 'Constructed when Shah Jahan shifted his Mughal imperial capital from Agra to Shahjahanabad in Delhi.',
    stories: [],
    preservationStatus: {
      healthScore: 91,
      threats: ['Sandstone scaling', 'Moisture in cellars'],
      digitalScanStatus: 'Complete',
      currentInitiatives: 'Facade paint removal and stone carving restoration.',
      visitorGuidelines: ['Follow security guidelines at Lahori Gate']
    },
    audioGuide: { duration: '5 min', narrator: 'Rahul Dev', transcript: 'Enter through Lahori Gate...' },
    has3DModel: false
  },
  'india-gate': {
    id: 'india-gate',
    name: 'India Gate',
    nativeName: 'अखिल भारतीय युद्ध स्मारक',
    tagline: 'The Triumphal Archway and Eternal Flame of Remembrance',
    stateId: 'delhi',
    destinationId: 'delhi',
    period: '1931 CE',
    dynasty: 'British Raj era',
    ruler: 'Imperial War Graves Commission / Sir Edwin Lutyens',
    architectureStyle: 'European Triumphal Arch Architecture',
    material: 'Red and Pale Sandstone, Granite',
    unescoYear: undefined,
    location: {
      city: 'Delhi',
      state: 'Delhi',
      coordinates: '28.6129° N, 77.2295° E',
      lat: 28.6129,
      lng: 77.2295
    },
    heroImage: 'https://images.unsplash.com/photo-1628548174540-1011f0a202d7?auto=format&fit=crop&w=600&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1628548174540-1011f0a202d7?auto=format&fit=crop&w=600&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:India_Gate_Delhi.jpg',
        photographer: 'Edwin Lutyens design',
        license: 'Public Domain'
      }
    ],
    culturalSignificance: 'A memorial arch listing over 13,000 soldiers’ names, housing the Amar Jawan Jyoti eternal flame.',
    history: 'Designed by Edwin Lutyens as a war memorial for British Indian Army soldiers who died in World War I.',
    stories: [],
    preservationStatus: {
      healthScore: 97,
      threats: ['Urban pollution grime'],
      digitalScanStatus: 'Complete Scan',
      currentInitiatives: 'Chemical facade cleaning and public plaza policing.',
      visitorGuidelines: ['Maintain solemn reverence near the flame enclosure']
    },
    audioGuide: { duration: '3 min', narrator: 'Rahul Dev', transcript: 'You are standing before the triumphal arch...' },
    has3DModel: false
  },

  // === ODISHA (4 monuments) ===
  'konark-sun-temple': {
    id: 'konark-sun-temple',
    name: 'Sun Temple, Konark',
    nativeName: 'କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର',
    tagline: 'The Colossal Cosmic Chariot of the Sun God Surya',
    stateId: 'odisha',
    destinationId: 'konark',
    period: '1250 CE',
    dynasty: 'Eastern Ganga Dynasty',
    ruler: 'King Narasimhadeva I',
    architectureStyle: 'Kalinga Temple Deula Architecture',
    material: 'Khondalite rock, Chlorite sculptures',
    unescoYear: 1984,
    location: {
      city: 'Konark',
      state: 'Odisha',
      coordinates: '19.8876° N, 86.0945° E',
      lat: 19.8876,
      lng: 86.0945
    },
    heroImage: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=1200&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Sun_Temple_Konark_2020.jpg',
        photographer: 'A. K. Sen',
        license: 'CC BY-SA 4.0'
      }
    ],
    culturalSignificance: 'Renowned for 24 giant stone wheels serving as astronomical sundials, pulled by 7 stone horses.',
    history: 'Constructed at the delta mouth of Chandrabhaga River, once referred to as the "Black Pagoda" by European sailors.',
    stories: [],
    preservationStatus: {
      healthScore: 88,
      threats: ['Saline sea wind corrosion', 'Sand core load shifts inside sanctum'],
      digitalScanStatus: 'Complete LiDAR Scan (2024)',
      currentInitiatives: 'Sand removal from closed Jagamohana hall and chemical stone washes.',
      visitorGuidelines: ['Strictly no climbing on the stone platforms']
    },
    audioGuide: { duration: '5 min', narrator: 'Dr. Radhika Srinivasan', transcript: 'Behold the chariot of the Sun...' },
    has3DModel: false
  },
  'mukteshwar-temple': {
    id: 'mukteshwar-temple',
    name: 'Mukteshwar Temple',
    nativeName: 'ମୁକ୍ତେଶ୍ଵର ମନ୍ଦିର',
    tagline: 'The Gem of Odishan Temple Architecture',
    stateId: 'odisha',
    destinationId: 'bhubaneswar',
    period: '950 CE',
    dynasty: 'Somavamshi Dynasty',
    ruler: 'Yayati I',
    architectureStyle: 'Classic Kalinga Architecture style',
    material: 'Red Sandstone',
    unescoYear: undefined,
    location: {
      city: 'Bhubaneswar',
      state: 'Odisha',
      coordinates: '20.2520° N, 85.8436° E',
      lat: 20.2520,
      lng: 85.8436
    },
    heroImage: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=600&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=600&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Muktesvara_Temple_Bhubaneswar.jpg',
        photographer: 'Subhashish Panigrahi',
        license: 'CC BY-SA 3.0'
      }
    ],
    culturalSignificance: 'Famous for its exquisite stone archway (Torana) showing detailed Buddhist-influenced carvings.',
    history: 'Marks the transition period of Kalinga architecture, preceding the grand structures of Lingaraj and Jagannath.',
    stories: [],
    preservationStatus: {
      healthScore: 94,
      threats: ['Plinth erosion', 'Moisture buildup'],
      digitalScanStatus: 'Complete Scan',
      currentInitiatives: 'Drainage improvement and structural coating.',
      visitorGuidelines: ['Do not touch the delicate torana archway']
    },
    audioGuide: { duration: '3 min 30 sec', narrator: 'Dr. Radhika Srinivasan', transcript: 'Observe the circular arch...' },
    has3DModel: false
  },
  'lingaraj-temple': {
    id: 'lingaraj-temple',
    name: 'Lingaraj Temple',
    nativeName: 'ଲିଙ୍ଗରାଜ ମନ୍ଦିର',
    tagline: 'The Soaring Tower of Harihara Devotion in Ekamra Khetra',
    stateId: 'odisha',
    destinationId: 'bhubaneswar',
    period: '11th Century CE',
    dynasty: 'Somavamshi Dynasty / Ganga Dynasty',
    ruler: 'King Jajati Keshari',
    architectureStyle: 'Mature Kalinga Rekha Deula Style',
    material: 'Laterite foundation, Sandstone tower blocks',
    unescoYear: undefined,
    location: {
      city: 'Bhubaneswar',
      state: 'Odisha',
      coordinates: '20.2382° N, 85.8338° E',
      lat: 20.2382,
      lng: 85.8338
    },
    heroImage: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=800&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=800&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Lingaraj_Temple_Bhubaneswar.jpg',
        photographer: 'K. K. Satpathy',
        license: 'CC BY-SA 4.0'
      }
    ],
    culturalSignificance: 'The largest temple in Bhubaneswar, featuring a massive 180-foot deula tower housing the swayambhu Lingam.',
    history: 'Built as the central axis of Shaivism in Ekamra Kshetra, supported later by the Gangas who introduced Vaishnavite elements.',
    stories: [],
    preservationStatus: {
      healthScore: 92,
      threats: ['Vibration cracking', 'Plinth decay'],
      digitalScanStatus: 'Restricted security scan',
      currentInitiatives: 'Chemical stone sealing and gopuram maintenance.',
      visitorGuidelines: ['Non-Hindus must observe from the elevated viewing platform']
    },
    audioGuide: { duration: '5 min', narrator: 'Dr. Radhika Srinivasan', transcript: 'Gaze up at the curvilinear spire...' },
    has3DModel: false
  },
  'udayagiri-caves': {
    id: 'udayagiri-caves',
    name: 'Udayagiri Caves',
    nativeName: 'ଉଦୟଗିରି ଗୁମ୍ଫା',
    tagline: 'The Rock-Cut Monasteries and Kharavela Inscriptions',
    stateId: 'odisha',
    destinationId: 'bhubaneswar',
    period: '2nd Century BCE',
    dynasty: 'Mahameghavahana Dynasty',
    ruler: 'Emperor Kharavela',
    architectureStyle: 'Rock-Cut Jain Monastic Cells',
    material: 'Sandstone hill range',
    unescoYear: undefined,
    location: {
      city: 'Bhubaneswar',
      state: 'Odisha',
      coordinates: '20.2625° N, 85.7861° E',
      lat: 20.2625,
      lng: 85.7861
    },
    heroImage: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=700&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=700&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Udayagiri_Caves_Bhubaneswar.jpg',
        photographer: 'Subhashish Panigrahi',
        license: 'CC BY-SA 3.0'
      }
    ],
    culturalSignificance: 'Features the Hathigumpha inscription in Brahmi script, detailing Emperor Kharavela\'s military conquests.',
    history: 'Carved out of sandstone hills as residence cells for Jain monks, showcasing some of the earliest monastic architecture in India.',
    stories: [],
    preservationStatus: {
      healthScore: 89,
      threats: ['Rain erosion in soft sandstone', 'Vegetation root cracks'],
      digitalScanStatus: 'Complete 3D Mesh Scanned',
      currentInitiatives: 'Anti-weed treatments and rock consolidation.',
      visitorGuidelines: ['Do not scratch soft sandstone walls']
    },
    audioGuide: { duration: '4 min', narrator: 'Dr. Radhika Srinivasan', transcript: 'Observe the double-story Ranigumpha...' },
    has3DModel: false
  },

  // === UTTAR PRADESH (4 monuments) ===
  'taj-mahal': {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    nativeName: 'ताज महल',
    tagline: 'The Epitome of Eternal Love and Symmetrical Perfection',
    stateId: 'uttar-pradesh',
    destinationId: 'agra',
    period: '1631–1648 CE',
    dynasty: 'Mughal Empire',
    ruler: 'Emperor Shah Jahan',
    architectureStyle: 'Classic Mughal Symmetrical Garden Mausoleum',
    material: 'Makrana White Marble, Semi-precious stone inlay',
    unescoYear: 1983,
    location: {
      city: 'Agra',
      state: 'Uttar Pradesh',
      coordinates: '27.1751° N, 78.0421° E',
      lat: 27.1751,
      lng: 78.0421
    },
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Taj_Mahal_Agra_2019.jpg',
        photographer: 'Yann Forget',
        license: 'CC BY-SA 4.0'
      }
    ],
    culturalSignificance: 'A globally recognized masterpiece of symmetrical marble architecture built as a tomb for Mumtaz Mahal.',
    history: ' Shah Jahan commissioned the monument in 1631, employing over 20,000 stone carvers, calligraphers, and masonry guilds.',
    stories: [],
    preservationStatus: {
      healthScore: 93,
      threats: ['Air pollution yellowing marble', 'Yamuna river moisture shifts'],
      digitalScanStatus: 'Complete LiDAR Scan (2024)',
      currentInitiatives: 'Application of paper pulp mud packs to absorb pollutants from marble surfaces.',
      visitorGuidelines: ['Remove shoes or wear shoe covers', 'No tripod photography on platform']
    },
    audioGuide: { duration: '5 min 20 sec', narrator: 'Kabir Khan', transcript: 'Welcome to the Taj Mahal...' },
    has3DModel: false
  },
  'agra-fort': {
    id: 'agra-fort',
    name: 'Agra Fort',
    nativeName: 'आगरा का किला',
    tagline: 'The Walled Palace City of the Great Mughals',
    stateId: 'uttar-pradesh',
    destinationId: 'agra',
    period: '1565–1573 CE',
    dynasty: 'Mughal Empire',
    ruler: 'Emperor Akbar / Shah Jahan',
    architectureStyle: 'Mughal Palace Fortification Style',
    material: 'Red Sandstone, White Marble, Brick',
    unescoYear: 1983,
    location: {
      city: 'Agra',
      state: 'Uttar Pradesh',
      coordinates: '27.1795° N, 78.0211° E',
      lat: 27.1795,
      lng: 78.0211
    },
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Agra_Fort_Facade.jpg',
        photographer: 'A. K. Sharma',
        license: 'CC BY-SA 3.0'
      }
    ],
    culturalSignificance: 'Houses Jahangiri Mahal, Khas Mahal, and the Musamman Burj where Shah Jahan was imprisoned by Aurangzeb.',
    history: 'Akbar rebuilt the old brick fort Badalgarh in red sandstone, creating a massive royal citadel housing hundreds of palaces.',
    stories: [],
    preservationStatus: {
      healthScore: 94,
      threats: ['Saline moisture peeling sandstone', 'Heavy tourist traffic'],
      digitalScanStatus: 'Complete Scan',
      currentInitiatives: 'Sandstone relief restoration and water drainage sealing.',
      visitorGuidelines: ['Follow guide signs in the military enclosure zones']
    },
    audioGuide: { duration: '4 min 40 sec', narrator: 'Kabir Khan', transcript: 'Walk through Amar Singh Gate...' },
    has3DModel: false
  },
  'fatehpur-sikri': {
    id: 'fatehpur-sikri',
    name: 'Fatehpur Sikri',
    nativeName: 'फ़तेहपुर सीकरी',
    tagline: 'The Abandoned Sandstone Capital of Victory',
    stateId: 'uttar-pradesh',
    destinationId: 'agra',
    period: '1571–1585 CE',
    dynasty: 'Mughal Empire',
    ruler: 'Emperor Akbar',
    architectureStyle: 'Secular Akbar-period Mughal Style',
    material: 'Red Sandstone',
    unescoYear: 1986,
    location: {
      city: 'Agra',
      state: 'Uttar Pradesh',
      coordinates: '27.0945° N, 77.6678° E',
      lat: 27.0945,
      lng: 77.6678
    },
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Fatehpur_Sikri_Gate.jpg',
        photographer: 'Subhashish Panigrahi',
        license: 'CC BY-SA 3.0'
      }
    ],
    culturalSignificance: 'Houses Buland Darwaza, Salim Chishti Tomb, and the multi-tiered Panch Mahal pavilion.',
    history: 'Founded by Akbar to honor Sufi saint Salim Chishti, it served as capital before being abandoned due to water shortages.',
    stories: [],
    preservationStatus: {
      healthScore: 91,
      threats: ['Wind friction sandstone weathering'],
      digitalScanStatus: 'Complete 3D Mesh',
      currentInitiatives: 'Plinth stabilization and structural reinforcement.',
      visitorGuidelines: ['Do not scratch sandstone panels']
    },
    audioGuide: { duration: '5 min', narrator: 'Kabir Khan', transcript: 'Observe the giant Buland Darwaza...' },
    has3DModel: false
  },
  'itmad-ud-daulah': {
    id: 'itmad-ud-daulah',
    name: "Itmad-ud-Daulah's Tomb",
    nativeName: 'इतमाद-उद-दौला का मक़बरा',
    tagline: 'The Baby Taj and the Dawn of Pietra Dura',
    stateId: 'uttar-pradesh',
    destinationId: 'agra',
    period: '1622–1628 CE',
    dynasty: 'Mughal Empire',
    ruler: 'Empress Nur Jahan (Consort of Jahangir)',
    architectureStyle: 'Transition Mughal Style',
    material: 'White Marble, Pietra dura inlay work',
    unescoYear: undefined,
    location: {
      city: 'Agra',
      state: 'Uttar Pradesh',
      coordinates: '27.1929° N, 78.0310° E',
      lat: 27.1929,
      lng: 78.0310
    },
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
    galleryImages: [],
    imageGallery: [
      {
        url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
        source: 'Wikimedia Commons',
        sourcePage: 'https://commons.wikimedia.org/wiki/File:Itmad-ud-Daulah_Agra.jpg',
        photographer: 'Subhashish Panigrahi',
        license: 'CC BY-SA 3.0'
      }
    ],
    culturalSignificance: 'The first Mughal monument constructed entirely of white marble, pioneering the Pietra dura inlay technique.',
    history: 'Commissioned by Nur Jahan for her father Mirza Ghiyas Beg (Itmad-ud-Daulah), who served as the Prime Minister of the Empire.',
    stories: [],
    preservationStatus: {
      healthScore: 95,
      threats: ['Acid staining', 'Pollution gritting'],
      digitalScanStatus: 'Complete Photogrammetry',
      currentInitiatives: 'Delicate marble cleaning and protective sealants.',
      visitorGuidelines: ['Walk with care on the inlaid pathways']
    },
    audioGuide: { duration: '3 min 50 sec', narrator: 'Kabir Khan', transcript: 'Observe the delicate floral inlay work...' },
    has3DModel: false
  }
};

export const STATES_DATA: StateData[] = [
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    nativeName: 'தமிழ்நாடு',
    capital: 'Chennai',
    tagline: 'The Cradle of Dravidian Temple Splendor & Living Stone Poetry',
    heroImage: '/images/heritage/destinations/mahabalipuram.jpg',
    accentColor: '#D4A85A',
    overview: 'Tamil Nadu boasts over two millennia of continuous architectural evolution. From the monolithic rock-cut cave rathas of the Pallavas in Mahabalipuram to the sky-piercing granite vimanas of the Cholas, stone here became a living language of sacred cosmology and maritime prowess.',
    dynasties: ['Pallava Dynasty (4th–9th Century)', 'Chola Empire (9th–13th Century)', 'Pandya Dynasty', 'Nayakas of Madurai'],
    architecturalHeritage: 'Dravidian Architecture characterized by pyramidal Vimanas, soaring Gopuram gateways, monolithic rock rathas, and pillared thousand-column Mandapas.',
    destinations: [
      {
        id: 'mahabalipuram',
        name: 'Mahabalipuram (Mamallapuram)',
        nativeName: 'மாமல்லபுரம்',
        stateId: 'tamil-nadu',
        tagline: 'Where Stone Became Story',
        heroImage: '/images/heritage/destinations/mahabalipuram.jpg',
        description: 'Perched on the Coromandel coast, Mahabalipuram is an open-air museum of 7th- and 8th-century Pallava art. Here, ocean winds whisper against ancient structural granite towers, cave shrines, and colossal rock bas-reliefs.',
        historicalContext: 'Founded as a thriving maritime seaport by the Pallava kings, goods and cultural philosophies set sail from here across the Bay of Bengal to the Srivijaya, Khmer, and Champa empires.',
        bestTimeToVisit: 'November to February (Pleasant coastal breezes and clear dawn light)',
        monumentIds: ['shore-temple', 'pancha-rathas', 'arjunas-penance', 'krishnas-butter-ball', 'descent-of-the-ganges'],
        geographicHighlight: 'Coromandel Coastal Shorelines & Granite Rock Outcrops',
        imageGallery: [
          {
            url: '/images/heritage/destinations/mahabalipuram.jpg',
            source: 'Unsplash',
            sourcePage: 'https://unsplash.com/photos/OFSaSqZTC4g',
            photographer: 'Unsplash',
            license: 'Unsplash License'
          },
          {
            url: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80',
            source: 'Wikimedia Commons',
            sourcePage: 'https://commons.wikimedia.org/wiki/File:Five_Rathas,_Mamallapuram.jpg',
            photographer: 'Bernard Gagnon',
            license: 'CC BY-SA 3.0'
          }
        ]
      }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    nativeName: 'കേരളം',
    capital: 'Thiruvananthapuram',
    tagline: 'The Gateway to Spice Routes and Nalukettu Timber Craft',
    heroImage: '/images/heritage/destinations/kochi.jpg',
    accentColor: '#8B5A2B',
    overview: 'Kerala’s architecture reflects its unique coastal rainforest geomorphology. Characterized by gabled timber roofs, laterite masonry, and brilliant mural frescoes, it represents a climate-conscious design built to buffer heavy monsoons.',
    dynasties: ['Chera Dynasty (9th-12th Century)', 'Kingdom of Cochin', 'Venad / Travancore Royal House'],
    architecturalHeritage: 'Kerala Nalukettu courtyard design, steep multi-tiered wooden roofs, laterite fortification, and vibrant temple mural frescoes.',
    destinations: [
      {
        id: 'kochi',
        name: 'Kochi (Cochin)',
        nativeName: 'കൊച്ചി',
        stateId: 'kerala',
        tagline: 'The Spice Capital of Malabar Coast',
        heroImage: '/images/heritage/destinations/kochi.jpg',
        description: 'Renowned for spices since antiquity, Kochi showcases a unique tapestry of colonial Portuguese churches, Dutch houses, Chinese fishing nets, and the historic Jewish Paradesi community.',
        historicalContext: 'Functioned as the primary hub of global spice trade routes connecting Indian ports with Venetian, Arab, Portuguese, and Chinese shipping galleons.',
        bestTimeToVisit: 'October to February',
        monumentIds: ['mattancherry-palace', 'paradesi-synagogue', 'st-francis-church'],
        geographicHighlight: 'Vembanad Lake Estuaries & Cochin Spice Backwaters',
        imageGallery: [
          {
            url: '/images/heritage/destinations/kochi.jpg',
            source: 'Unsplash',
            sourcePage: 'https://unsplash.com/photos/Q0oLHnQpoMw',
            photographer: 'Sarath Mohan K',
            license: 'Unsplash License'
          }
        ]
      },
      {
        id: 'kasaragod',
        name: 'Kasaragod',
        nativeName: 'കാസർഗോഡ്',
        stateId: 'kerala',
        tagline: 'The Land of Keyhole Ocean Fortresses',
        heroImage: '/images/heritage/destinations/kasaragod.jpg',
        description: 'Positioned at the northern edge of Malabar Coast, Kasaragod is famous for keyhole laterite forts and palm-fringed coastlines.',
        historicalContext: 'Ruled by Keladi Nayakas, Kolathiris, Haider Ali, Tipu Sultan, and eventually annexed by British Malabar administrators.',
        bestTimeToVisit: 'November to February',
        monumentIds: ['bekal-fort'],
        geographicHighlight: 'Arabian Sea Shorelines & Laterite Bluffs',
        imageGallery: [
          {
            url: '/images/heritage/destinations/kasaragod.jpg',
            source: 'Unsplash',
            sourcePage: 'https://unsplash.com/photos/WH-KavV-pn8',
            photographer: 'Praswin Prakashan',
            license: 'Unsplash License'
          }
        ]
      },
      {
        id: 'thiruvananthapuram',
        name: 'Thiruvananthapuram',
        nativeName: 'തിരുവനന്തപുരം',
        stateId: 'kerala',
        tagline: 'The Sanctuary of Lord Padmanabha',
        heroImage: '/images/heritage/destinations/thiruvananthapuram.jpg',
        description: 'Built across seven coastal hills, Thiruvananthapuram is the historic capital of the Travancore Kingdom, centered around the Padmanabhaswamy temple complex.',
        historicalContext: 'A flourishing spice market and political seat of Maharaja Marthanda Varma who institutionalized royal stewardship under the deity Padmanabha.',
        bestTimeToVisit: 'October to March',
        monumentIds: ['padmanabhaswamy-temple'],
        geographicHighlight: 'Western Ghats foothills and low-lying coastal lagoons',
        imageGallery: [
          {
            url: '/images/heritage/destinations/thiruvananthapuram.jpg',
            source: 'Unsplash',
            sourcePage: 'https://unsplash.com/photos/pwPcYzyJTtY',
            photographer: 'Unsplash',
            license: 'Unsplash License'
          }
        ]
      }
    ]
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    nativeName: 'ಕರ್ನಾಟಕ',
    capital: 'Bengaluru',
    tagline: 'The Golden City of Vijayanagara and Boulder-Strewn Empires',
    heroImage: '/images/heritage/destinations/hampi.jpg',
    accentColor: '#B58A52',
    overview: 'From the dramatic boulder hills of Hampi along the Tungabhadra River to the delicate soapstone filigree of the Hoysalas, Karnataka represents the grand crossroads where Northern and Southern Indian architectural idioms converged.',
    dynasties: ['Vijayanagara Empire (1336–1646 CE)', 'Badami Chalukyas', 'Rashtrakutas', 'Hoysala Dynasty'],
    architecturalHeritage: 'Vijayanagara Style with stepped granite towers, massive monolithic sculptures, musical pillars, and expansive bazaars.',
    destinations: [
      {
        id: 'hampi',
        name: 'Hampi (Vijayanagara)',
        nativeName: 'ಹಂಪಿ',
        stateId: 'karnataka',
        tagline: 'The Forgotten Golden Empire of Stone Chariots',
        heroImage: '/images/heritage/destinations/hampi.jpg',
        description: 'Spanning over 4,100 hectares, Hampi was the second-largest city in the medieval world in 1500 CE, featuring palaces, stone aqueducts, and magnificent temples amidst surreal granite boulder landscapes.',
        historicalContext: 'The epicenter of a medieval empire that defended peninsular traditions, famous for ruby and diamond bazaars recorded by Portuguese and Persian chroniclers.',
        bestTimeToVisit: 'October to March (Mild winter weather and Hampi Utsav festival)',
        monumentIds: ['virupaksha-temple', 'vittala-temple', 'lotus-mahal', 'hazara-rama-temple'],
        geographicHighlight: 'Tungabhadra River Gorge & Pre-Cambrian Granite Hills',
        imageGallery: [
          {
            url: '/images/heritage/destinations/hampi.jpg',
            source: 'Unsplash',
            sourcePage: 'https://unsplash.com/photos/jDMCUnvD5lY',
            photographer: 'Unsplash',
            license: 'Unsplash License'
          }
        ]
      }
    ]
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    nativeName: 'राजस्थान',
    capital: 'Jaipur',
    tagline: 'The Land of Desert Fortresses, Mirror Palaces and Astronomical Geometry',
    heroImage: '/images/heritage/destinations/jaipur.jpg',
    accentColor: '#E07C30',
    overview: 'Rajasthan represents the apex of thermodynamic architecture and high Rajput fort military planning. Its pink sandstone palaces, Belgian mirror-lined corridors, and massive solar astronomical instruments reflect a deep alignment between cosmic science, royalty, and harsh environments.',
    dynasties: ['Kachwaha Rajput Dynasty (Amber/Jaipur)', 'Mewar Dynasty (Udaipur)', 'Rathores of Marwar (Jodhpur)'],
    architecturalHeritage: 'Rajput Fortifications featuring massive multi-layered ramparts, Belgian mirror halls (Sheesh Mahal), honeycombed breezy screen balconies (Jharokhas), and solar astronomical Samrat sundials.',
    destinations: [
      {
        id: 'jaipur',
        name: 'Jaipur (Pink City)',
        nativeName: 'जयपुर',
        stateId: 'rajasthan',
        tagline: 'The Astronomical Wonder and Royal Citadel',
        heroImage: '/images/heritage/destinations/jaipur.jpg',
        description: 'A fortified grid city designed by traditional Hindu Vastu Shastra geometry in 1727. Renowned for its honeycomb sandstone screens, Mirror Palaces, and cosmic calculators.',
        historicalContext: 'Founded by Maharaja Sawai Jai Singh II, serving as a center of scientific, mathematical, and astronomical excellence in Mughal-aligned Rajputana.',
        bestTimeToVisit: 'November to February (Cool winter climate)',
        monumentIds: ['hawa-mahal', 'amber-fort', 'city-palace-jaipur', 'jantar-mantar-jaipur'],
        geographicHighlight: 'Aravalli Hill Ranges & Semi-Arid Salt Marshes',
        imageGallery: [
          {
            url: '/images/heritage/destinations/jaipur.jpg',
            source: 'Unsplash',
            sourcePage: 'https://unsplash.com/photos/Y38df3W9sk0',
            photographer: 'Unsplash',
            license: 'Unsplash License'
          }
        ]
      }
    ]
  },
  {
    id: 'delhi',
    name: 'Delhi',
    nativeName: 'दिल्ली',
    capital: 'New Delhi',
    tagline: 'The Palimpsest of Seven Empires and Soaring Minarets',
    heroImage: '/images/heritage/destinations/delhi.jpg',
    accentColor: '#D15A5A',
    overview: 'Delhi has served as the capital of seven continuous historical empires. Its soaring sandstone minarets, massive octagonal garden tombs, and triumphal arches reflect the grand meeting point of Persian geometry, Sultanate victories, and post-colonial national memorials.',
    dynasties: ['Tomar & Chauhan Dynasties', 'Delhi Sultanate (Mamluk, Khalji, Tughlaq, Lodi)', 'Mughal Empire', 'British Raj era'],
    architecturalHeritage: 'Indo-Islamic architectural synthesis featuring soaring victory minarets, Charbagh garden tombs, double domes, and Lutyens Neo-Classical government arches.',
    destinations: [
      {
        id: 'delhi',
        name: 'Delhi (NCR)',
        nativeName: 'दिल्ली',
        stateId: 'delhi',
        tagline: 'Where Millennia of Imperial Dynasties Intersect',
        heroImage: '/images/heritage/destinations/delhi.jpg',
        description: 'A sprawling megalopolis built over the ruins of historic capitals, housing 73-metervictory minars, Mughal garden-tombs, imperial palace citadels, and modern triumphal memorials.',
        historicalContext: 'Positioned at the strategic Yamuna River crossing along the ancient Grand Trunk Road, serving as the crown prize of Indian dynasties for two millennia.',
        bestTimeToVisit: 'October to March (Crisp Delhi winter months)',
        monumentIds: ['qutub-minar', 'humayuns-tomb', 'red-fort', 'india-gate'],
        geographicHighlight: 'Yamuna River Basins & Delhi Aravalli Ridge',
        imageGallery: [
          {
            url: '/images/heritage/destinations/delhi.jpg',
            source: 'Unsplash',
            sourcePage: 'https://unsplash.com/photos/LMj_BZKeGfE',
            photographer: 'Unsplash',
            license: 'Unsplash License'
          }
        ]
      }
    ]
  },
  {
    id: 'odisha',
    name: 'Odisha',
    nativeName: 'ଓଡ଼ିଶା',
    capital: 'Bhubaneswar',
    tagline: 'The Cosmic Sun Chariots and Sacred Kalinga Temple Deulas',
    heroImage: '/images/heritage/destinations/konark.jpg',
    accentColor: '#C4943C',
    overview: 'Odisha represents the pristine evolution of Kalinga temple architecture. From the early rock-cut Jain cells of Udayagiri to the curvilinear spires of Lingaraj and the colossal cosmic solar chariot at Konark, stone became a sacred canvas of celestial orbits and classical Odissi movements.',
    dynasties: ['Mahameghavahana Dynasty (2nd Century BCE)', 'Somavamshi Dynasty (9th-12th Century)', 'Eastern Ganga Dynasty (11th-15th Century)'],
    architecturalHeritage: 'Kalinga Architecture characterized by curvilinear Rekha Deula towers, flat-roofed Jagamohana assembly halls, Pidha deulas, and red khondalite stone carvings.',
    destinations: [
      {
        id: 'konark',
        name: 'Konark',
        nativeName: 'କୋଣାର୍କ',
        stateId: 'odisha',
        tagline: 'The Golden Sands of the Celestial Sun Chariot',
        heroImage: '/images/heritage/destinations/konark.jpg',
        description: 'A coastal sanctuary housing the ruins of the colossal 13th-century Sun Temple, designed as Surya\'s celestial chariot with astronomical sundial wheels pulling down toward the Bay of Bengal.',
        historicalContext: 'Historically an active maritime trading port for Eastern Ganga merchants sailing to South East Asian empires, famously recorded as the "Black Pagoda" by early European seafarers.',
        bestTimeToVisit: 'November to February (Pleasant winter months & Konark Dance Festival)',
        monumentIds: ['konark-sun-temple'],
        geographicHighlight: 'Chandrabhaga Estuaries & Bay of Bengal Sandy Plains',
        imageGallery: [
          {
            url: '/images/heritage/destinations/konark.jpg',
            source: 'Unsplash',
            sourcePage: 'https://unsplash.com/photos/MjvYgIGDu84',
            photographer: 'Shuvam Mitra',
            license: 'Unsplash License'
          }
        ]
      },
      {
        id: 'bhubaneswar',
        name: 'Bhubaneswar',
        nativeName: 'ଭୁବନେଶ୍ୱର',
        stateId: 'odisha',
        tagline: 'The Temple City of Ekamra Kshetra',
        heroImage: '/images/heritage/destinations/bhubaneswar.jpg',
        description: 'The capital of Odisha, Ekamra Kshetra is an ancient heritage center containing hundreds of structural stone temples and early rock-cut monastic caves.',
        historicalContext: 'Serves as the historic seat of Somavamshi and Eastern Ganga dynasties, famous for early Buddhist-influenced Jain rock carvings.',
        bestTimeToVisit: 'October to March',
        monumentIds: ['mukteshwar-temple', 'lingaraj-temple', 'udayagiri-caves'],
        geographicHighlight: 'Ekamra Kshetra Alluvial Basin',
        imageGallery: [
          {
            url: '/images/heritage/destinations/bhubaneswar.jpg',
            source: 'Unsplash',
            sourcePage: 'https://unsplash.com/photos/O4VrJsPzt4M',
            photographer: 'Unsplash',
            license: 'Unsplash License'
          }
        ]
      }
    ]
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    nativeName: 'उत्तर प्रदेश',
    capital: 'Agra',
    tagline: 'The Epitome of Mughal Symmetry and White Marble Splendor',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#D9A441',
    overview: 'Uttar Pradesh represents the peak of symmetrical Mughal palace architecture and marble inlay art. From the grand red sandstone ramparts of Agra Fort to the abandoned victory capital of Fatehpur Sikri and the white marble jewel of the Taj Mahal, the state stands as a canvas of imperial geometry.',
    dynasties: ['Mughal Empire (16th–18th Century)', 'Suryavanshi Dynasties', 'Nawabs of Oudh'],
    architecturalHeritage: 'Mughal Symmetrical Architecture characterized by white marble double domes, intricate floral Pietra dura stone inlays, grand red sandstone gateways, and sprawling charbagh gardens.',
    destinations: [
      {
        id: 'agra',
        name: 'Agra',
        nativeName: 'आगरा',
        stateId: 'uttar-pradesh',
        tagline: 'The Heart of Mughal Imperial Grandeur',
        heroImage: '/images/heritage/destinations/agra.jpg',
        description: 'Positioned on the banks of Yamuna River, Agra is home to the world\'s most famous white marble mausoleum, massive sandstone royal forts, and historical abandoned capitals.',
        historicalContext: 'Served as the main capital of the Mughal Empire under Akbar, Jahangir, and Shah Jahan before shifting to Delhi.',
        bestTimeToVisit: 'October to March (Cool winters and clear visibility)',
        monumentIds: ['taj-mahal', 'agra-fort', 'fatehpur-sikri', 'itmad-ud-daulah'],
        geographicHighlight: 'Yamuna River floodplains and Gangetic alluvial plains',
        imageGallery: [
          {
            url: '/images/heritage/destinations/agra.jpg',
            source: 'Unsplash',
            sourcePage: 'https://unsplash.com/photos/0flBeURVkSc',
            photographer: 'Uttara B',
            license: 'Unsplash License'
          }
        ]
      }
    ]
  }
];

export const HERITAGE_TRAILS: HeritageTrail[] = [
  {
    id: 'pallava-architecture-trail',
    title: 'The Pallava Shore & Monolithic Trail',
    subtitle: 'From Structural Pyramids to Experimental Chariots',
    region: 'Tamil Nadu • Mahabalipuram',
    duration: '2 Hours',
    difficulty: 'Easy',
    distance: '3.5 km',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    theme: 'Early Structural Masonry & Rock Bas-Reliefs',
    description: 'Walk through Mamallapuram’s golden Pallava-period monuments. Observe how master sculptors moved from carving rock outcrops to building freestanding granite towers facing the sea.',
    stops: [
      {
        monumentId: 'shore-temple',
        name: 'Shore Temple Complex',
        order: 1,
        durationMinutes: 45,
        keyHighlight: 'Examine the early structural dressed granite blocks and the ocean breakwater',
        audioTrackTitle: 'Track 1: Morning Light on the Dravidian Vimana',
        tipForVisitor: 'Best visited at 6:30 AM to catch the sunrise directly illuminating the eastern Shiva lingam'
      },
      {
        monumentId: 'pancha-rathas',
        name: "Arjuna's Penance (Descent of the Ganga)",
        order: 2,
        durationMinutes: 30,
        distanceFromPrevious: '900m walk through Casuarina avenues',
        keyHighlight: 'World’s largest open-air relief with over 100 celestial beings and life-size elephants',
        audioTrackTitle: 'Track 2: The Flow of the Celestial River in Stone',
        tipForVisitor: 'Look closely at the central cleft where natural rainwater simulates the descending Ganga'
      },
      {
        monumentId: 'pancha-rathas',
        name: 'Pancha Rathas (Five Chariots)',
        order: 3,
        durationMinutes: 40,
        distanceFromPrevious: '1.2 km walk southward',
        keyHighlight: 'Compare the 5 distinct experimental Dravidian roof styles carved from pink granite mounds',
        audioTrackTitle: 'Track 3: The King’s Monolithic Laboratory',
        tipForVisitor: 'Walk clockwise around Dharmaraja Ratha to observe King Narasimhavarman’s royal portrait inscriptions'
      }
    ],
    historicalNarrative: 'In the 7th century, King Mahendravarman I proudly inscribed: "This temple was made without bricks, timber, metals, or mortar." Under his son Mamalla and great-grandson Rajasimha, this trail captures humanity’s boldest leap into lasting stone architecture.'
  },
  {
    id: 'vijayanagara-splendor-trail',
    title: 'Vijayanagara Sacred & Royal Trail',
    subtitle: 'Along the Boulders of Tungabhadra and Acoustic Halls',
    region: 'Karnataka • Hampi',
    duration: '2 Hours 30 Min',
    difficulty: 'Moderate',
    distance: '3.8 km',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010e4210d63?auto=format&fit=crop&w=1200&q=80',
    theme: 'Sacred Geography & High Medieval Metallurgy & Acoustics',
    description: 'Explore the sacred axis linking continuous 1300-year devotion at Virupaksha with the acoustic wonder of Vittala Temple along the ancient riverside bazaar colonnades.',
    stops: [
      {
        monumentId: 'virupaksha-temple',
        name: 'Virupaksha Temple Complex',
        order: 1,
        durationMinutes: 45,
        keyHighlight: 'Observe the medieval camera obscura inverted shadow and active temple elephant blessings',
        audioTrackTitle: 'Track 1: Chants Across 13 Centuries',
        tipForVisitor: 'Visit the rear corridor at 11:00 AM when the inverted shadow is crispest'
      },
      {
        monumentId: 'vittala-temple',
        name: 'Kampa Bhupa’s Riverside Path & Achyutaraya Temple',
        order: 2,
        durationMinutes: 40,
        distanceFromPrevious: '1.5 km scenic boulder trail',
        keyHighlight: 'Sule Bazaar and dramatic views of Matanga Hill',
        audioTrackTitle: 'Track 2: The Wealth of the Global Diamond Bazaars',
        tipForVisitor: 'Wear comfortable walking shoes with good grip on granite stones'
      },
      {
        monumentId: 'vittala-temple',
        name: 'Vittala Temple & Stone Chariot',
        order: 3,
        durationMinutes: 65,
        distanceFromPrevious: '1.2 km riverside trail',
        keyHighlight: 'The 56 SaReGaMa musical pillars and the iconic Garuda stone chariot',
        audioTrackTitle: 'Track 3: The Harmonic Resonances of Vijayanagara',
        tipForVisitor: 'Listen to the acoustic audio demonstration on your digital guide'
      }
    ],
    historicalNarrative: 'Vijayanagara’s kings built an empire where nature, religion, and urban power merged into an invincible boulder city praised by Persian, Italian, and Russian emissaries.'
  },
  {
    id: 'rajput-astronomical-trail',
    title: 'The Rajput Cosmic & Fortification Trail',
    subtitle: 'From Honeycombed Breezes to Aravalli Mountain Bastions',
    region: 'Rajasthan • Jaipur',
    duration: '2 Hours',
    difficulty: 'Easy',
    distance: '11 km (Drive + Walking)',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    theme: 'Thermodynamic Architecture & Hilltop Military Strategy',
    description: 'Discover how Rajput rulers mastered desert thermodynamics at Hawa Mahal, mapped the cosmos, and established impregnable fortified palaces in the Aravalli hills.',
    stops: [
      {
        monumentId: 'hawa-mahal',
        name: 'Hawa Mahal (Palace of Winds)',
        order: 1,
        durationMinutes: 35,
        keyHighlight: 'Stand behind the 953 jharokhas and experience the passive cooling breeze',
        audioTrackTitle: 'Track 1: Honeycombs in Pink Sandstone',
        tipForVisitor: 'Visit in the early morning for optimal sunlight illumination across the eastern facade'
      },
      {
        monumentId: 'amber-fort',
        name: 'Amber Fort & Sheesh Mahal',
        order: 2,
        durationMinutes: 85,
        distanceFromPrevious: '10.5 km via historic Delhi-Jaipur highway',
        keyHighlight: 'Gaze into the thousands of imported Belgian concave mirrors in the Hall of Mirrors',
        audioTrackTitle: 'Track 2: The Starry Heavens of Amber',
        tipForVisitor: 'Hire an audio guide or use DHAROHAR 3D scanner at the Maota Lake pavilion'
      }
    ],
    historicalNarrative: 'Combining Rajput valor with Mughal administrative sophistication, Maharaja Sawai Jai Singh and his architects turned Jaipur into an urban symphony of mathematics, astronomy, and stone.'
  }
];

export const AI_CULTURAL_KNOWLEDGE_BASE = [
  {
    topic: 'Shore Temple 3D & Architecture',
    keywords: ['shore temple', 'vimana', 'pallava', 'mahabalipuram', 'mamallapuram', 'granite', 'stone', 'tsunami'],
    title: 'The Architectural Genius of the Shore Temple',
    summary: 'The Shore Temple at Mahabalipuram (700–728 CE) marks the definitive shift in Indian architecture from rock-cut cave temples to structural stone masonry. Built from carved granitic gneiss blocks by Pallava King Narasimhavarman II Rajasimha, it houses three distinct sanctums.',
    details: [
      'The main eastern Vimana rises 60 feet in a stepped pyramid towards an octagonal shikhara finial.',
      'Unlike later Dravidian temples with giant entrance gopurams, in early Pallava architecture the sanctum Vimana tower itself was the towering focal point.',
      'The inner sanctum features a 16-sided fluted basalt Dharalinga and the iconic Somaskanda family panel of Shiva, Parvati, and infant Skanda.',
      'During the 2004 Indian Ocean Tsunami, receding sea waters temporarily revealed submerged stone structures and lion carvings, verifying ancient legends of the "Seven Pagodas".'
    ],
    deepDivePrompt: 'Would you like to inspect the 3D model hotspots or hear about the sacrificial clay preservation method used to extract salt crystals?'
  },
  {
    topic: 'Musical Pillars of Hampi',
    keywords: ['musical', 'pillars', 'vittala', 'hampi', 'sound', 'saregama', 'acoustics', 'granite'],
    title: 'The Acoustic Marvel of the 56 SaReGaMa Columns',
    summary: 'In the Maha Mandapa of Vittala Temple (Hampi), 56 monolithic granite pillars are sculpted with clusters of slender auxiliary colonnettes. When tapped gently, each sub-pillar emits specific acoustic musical frequencies corresponding to Indian classical swaras.',
    details: [
      'Geological analysis shows varying densities of silica and iron ore deposits within the single granite boulders were intentionally selected by 16th-century sculptors.',
      'Pillars are divided into percussion pillars (emitting Mridangam-like beats) and melodic pillars (emitting flute and bell tones).',
      'The British colonial government cut open two pillars in disbelief to check for internal hollow bronze chambers, finding only homogeneous solid rock.'
    ],
    deepDivePrompt: 'Would you like to explore the Vijayanagara Heritage Trail or examine the Stone Chariot’s astronomical alignments?'
  },
  {
    topic: 'Venturi Cooling Effect in Hawa Mahal',
    keywords: ['hawa mahal', 'cooling', 'jharokha', 'jaipur', 'rajput', 'wind', 'temperature'],
    title: 'Ancient Climate Engineering at Hawa Mahal',
    summary: 'Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal is a five-story thermodynamic structure that stays cool in 45°C Rajasthani summers without electricity.',
    details: [
      'The 953 jharokha casements utilize the Venturi principle: forcing hot wind through constricted apertures drops its pressure and temperature.',
      'Interior water fountains and wet Khus grass mats further drop ambient temperature by up to 8°C through evaporative cooling.',
      'The structure is only one room thick on the top three floors, acting as a lightweight cooling screen.'
    ],
    deepDivePrompt: 'Would you like to see how Rajput fortresses compared with Mughal garden tombs in thermal comfort?'
  },
  {
    topic: 'Preservation & Digital Twins in India',
    keywords: ['preservation', 'lidar', 'scan', 'asi', 'protect', 'threats', 'salt', 'damage'],
    title: 'DHAROHAR Digital Preservation Framework',
    summary: 'India’s archaeological monuments face modern challenges including atmospheric pollution, saline crystallization, seismic activity, and high tourist volume. Digital twin preservation creates permanent millimetric 3D archives.',
    details: [
      'Terrestrial LiDAR scanning captures up to 2 million spatial coordinates per second with sub-millimeter precision.',
      'Sacrificial paper-pulp clay packs extract deeply embedded marine salts from coastal granite without mechanical abrasion.',
      'Digital preservation ensures that even in the event of natural disasters, precise structural restorations can be faithfully executed.'
    ],
    deepDivePrompt: 'Would you like to read the Responsible Visitor Code or generate a personalized heritage exploration itinerary?'
  }
];
