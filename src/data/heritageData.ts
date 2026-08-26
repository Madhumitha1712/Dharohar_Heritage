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
      'https://images.unsplash.com/photo-1600100397608-f010e4210d63?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80'
    ],
    culturalSignificance: 'The Shore Temple stands as one of the oldest structural stone temples of Southern India, representing the pinnacle transition from cave excavations to complex masonry towers overlooking the historic maritime trade routes.',
    history: 'Built during the reign of Narasimhavarman II Rajasimha of the Pallava dynasty between 700 and 728 CE, the Shore Temple is a complex of three shrines. For over thirteen centuries, it served as both a landmark for seafarers arriving at the bustling Pallava port of Mamallapuram and as an active pilgrimage sanctum. European travelers once called this coast the land of the "Seven Pagodas", believing six sister temples were swallowed by the ocean.',
    stories: [
      {
        title: 'The Legend of the Seven Pagodas',
        narrative: 'According to centuries-old maritime folklore and accounts by Venetian merchant Marco Polo, the Shore Temple was only one of seven magnificent temples that lined this shore. The gods, jealous of its ethereal beauty, allegedly sent a massive deluge that submerged the other six. In the 2004 tsunami, as the sea receded by 500 meters minutes before the wave struck, tourists and archaeologists witnessed massive carved lions and temple wall foundations emerging from the seabed.',
        type: 'mythology'
      },
      {
        title: 'The Tsunami That Revealed History',
        narrative: 'When the devastating December 2004 tsunami hit, the massive granite groynes installed by the ASI miraculously shielded the main tower from collapsing. As the floodwaters washed away centuries of compacted beach sand, archaeologists uncovered a buried 7th-century rock-cut temple complex just 200 meters south of the main precinct.',
        type: 'discovery'
      },
      {
        title: 'The Mystery of the Reclining Vishnu',
        narrative: 'Between the two towering Shiva vimanas lies a smaller flat-roofed shrine housing an image of Lord Vishnu reclining on the serpent Sesha. Unlike typical representations, Vishnu here is depicted without weapons, carved directly in situ from a natural bedrock outcrop around which the entire granite temple was meticulously built.',
        type: 'architectural_feat'
      }
    ],
    preservationStatus: {
      healthScore: 92,
      threats: ['Sea salt efflorescence', 'Coastal wind erosion', 'High humidity & moisture absorption', 'Rising sea levels'],
      digitalScanStatus: 'Complete Sub-millimeter LiDAR & Photogrammetry Scan (2024)',
      currentInitiatives: 'Application of sacrificial clay packs (paper pulp) to extract deeply embedded salt crystals without abrading ancient granite carvings.',
      visitorGuidelines: [
        'Do not touch or lean on the weathered Nandi statues',
        'Strictly no flash photography inside the sanctums',
        'Maintain quiet reverence within the inner enclosure',
        'Footwear must be deposited at the heritage entrance kiosk'
      ]
    },
    audioGuide: {
      duration: '4 min 20 sec',
      narrator: 'Dr. Radhika Srinivasan, Classical Heritage Archaeologist',
      transcript: 'Welcome to the Shore Temple of Mamallapuram. You are standing before one of the foundational masterpieces of South Indian architecture. Look up at the pyramidal tower known as the Vimana. As the morning sun rises over the Bay of Bengal, its golden light bathes these thirteen-hundred-year-old granitic blocks...'
    },
    has3DModel: true,
    hotspots: SHORE_TEMPLE_HOTSPOTS
  },

  'pancha-rathas': {
    id: 'pancha-rathas',
    name: 'Pancha Rathas',
    nativeName: 'பஞ்ச பாண்டவர் இரதங்கள்',
    tagline: 'Five Monolithic Architectural Experiments Carved from Living Granite',
    stateId: 'tamil-nadu',
    destinationId: 'mahabalipuram',
    period: '630–668 CE',
    dynasty: 'Pallava Dynasty',
    ruler: 'King Narasimhavarman I (Mamalla)',
    architectureStyle: 'Rock-Cut Monolithic Dravidian Prototypes',
    material: 'Pinkish Granite bedrock outcrop',
    unescoYear: 1984,
    location: {
      city: 'Mahabalipuram',
      state: 'Tamil Nadu',
      coordinates: '12.6148° N, 80.1925° E',
      lat: 12.6148,
      lng: 80.1925
    },
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80'
    ],
    culturalSignificance: 'An unparalleled outdoor laboratory of Indian architectural styles carved top-to-bottom from single boulders, defining the canonical forms of Hindu temple towers.',
    history: 'Carved during the reign of King Narasimhavarman I, these monolithic monuments are named after the five Pandavas and Draupadi from the Mahabharata, though they were never consecrated as working temples. Each chariot represents a distinct architectural design: square stepped pyramid (Dharmaraja), barrel vault (Bhima), curvilinear hut (Draupadi), and apsidal elephant-back (Nakula-Sahadeva).',
    stories: [
      {
        title: 'The Unfinished Architectural Masterclass',
        narrative: 'Sculptors carved every single chariot from top to bottom directly from existing whale-backed granite mounds, requiring zero scaffolding or joint mortar. When Narasimhavarman died in 668 CE, work abruptly halted, leaving tool marks and rough guidelines still visible today.',
        type: 'historical_event'
      }
    ],
    preservationStatus: {
      healthScore: 94,
      threats: ['Monsoon rainwater pooling', 'Foot traffic abrasion'],
      digitalScanStatus: '3D High-Density Terrestrial Laser Scanned (ASI)',
      currentInitiatives: 'Subsurface drainage channels and laser cleaning of lichen deposits.',
      visitorGuidelines: ['Stay within marked flagstone pathways', 'Do not climb onto the elephant or lion monoliths']
    },
    audioGuide: {
      duration: '3 min 45 sec',
      narrator: 'Dr. Radhika Srinivasan',
      transcript: 'Notice the monumental life-size elephant standing beside the Nakula-Sahadeva Ratha. Carved from a single boulder, its contours capture the breathing grace of living stone...'
    }
  },

  'virupaksha-temple': {
    id: 'virupaksha-temple',
    name: 'Virupaksha Temple',
    nativeName: 'ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯ',
    tagline: 'The Sacred Pulse of the Vijayanagara Empire',
    stateId: 'karnataka',
    destinationId: 'hampi',
    period: '7th Century onwards (Expanded 1510 CE)',
    dynasty: 'Vijayanagara Empire & Early Chalukyas',
    ruler: 'King Krishnadevaraya',
    architectureStyle: 'Vijayanagara & Late Dravidian Grandeur',
    material: 'Granite & Stucco gopuram superstructure',
    unescoYear: 1986,
    location: {
      city: 'Hampi',
      state: 'Karnataka',
      coordinates: '15.3350° N, 76.4600° E',
      lat: 15.3350,
      lng: 76.4600
    },
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010e4210d63?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600100397608-f010e4210d63?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80'
    ],
    culturalSignificance: 'One of India’s longest continuously worshipped temples, Virupaksha sits on the banks of the sacred Tungabhadra River, preserving ancient rituals amidst the ruins of a golden metropolis.',
    history: 'What started as a modest shrine in the 7th century transformed under Emperor Krishnadevaraya into an architectural marvel boasting a 50-meter-high eastern gopuram, pillared halls with mythical yali creatures, and intricate ceiling murals.',
    stories: [
      {
        title: 'The Medieval Camera Obscura',
        narrative: 'Inside the northern sanctum corridor, an ingenious natural pinhole aperture in the stone wall casts an inverted, living shadow of the giant 50-meter outer gopuram upon the temple wall—a testament to 15th-century optical engineering.',
        type: 'architectural_feat'
      }
    ],
    preservationStatus: {
      healthScore: 89,
      threats: ['Heavy pilgrim footfalls', 'Structural stress on upper stucco tiers'],
      digitalScanStatus: 'Full drone photogrammetry & internal 3D structural model active',
      currentInitiatives: 'Traditional lime plaster restoration of the main entrance gopuram.',
      visitorGuidelines: ['Follow customary circumambulation pathways', 'Remove footwear before the inner Raja Gopuram']
    },
    audioGuide: {
      duration: '4 min 10 sec',
      narrator: 'Prof. Ananth Murthy, Vijayanagara Historian',
      transcript: 'As you step through the monumental Raja Gopuram into the outer courtyard, listen closely to the resonant chants echoing through granite pillared mandapas...'
    }
  },

  'vittala-temple': {
    id: 'vittala-temple',
    name: 'Vittala Temple & Stone Chariot',
    nativeName: 'ವಿಟ್ಟಲ ದೇವಾಲಯ ಮತ್ತು ಕಲ್ಲಿನ ರಥ',
    tagline: 'The Symphony of Musical Pillars & Sacred Stone Chariots',
    stateId: 'karnataka',
    destinationId: 'hampi',
    period: '15th Century (1513–1550 CE)',
    dynasty: 'Vijayanagara Empire',
    ruler: 'King Krishnadevaraya & Achyuta Deva Raya',
    architectureStyle: 'High Vijayanagara Architectural Zenith',
    material: 'Fine-grain Resonant Granite',
    unescoYear: 1986,
    location: {
      city: 'Hampi',
      state: 'Karnataka',
      coordinates: '15.3418° N, 76.4754° E',
      lat: 15.3418,
      lng: 76.4754
    },
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80'
    ],
    culturalSignificance: 'The iconic Stone Chariot (Garuda Shrine) on the Indian 50-rupee currency note and the 56 SaReGaMa musical stone pillars represent the ultimate virtuosity of South Indian stonemasons.',
    history: 'Constructed in the 16th century, the Vittala complex is dedicated to Vittala, an aspect of Krishna. Its sprawling courtyard houses the famous stone chariot whose granite wheels were once designed to turn on their axles, and the Maha Mandapa whose colonnades produce acoustic harmonic notes.',
    stories: [
      {
        title: 'The SaReGaMa Musical Pillars',
        narrative: 'The main hall features 56 monolithic musical pillars. When gently tapped with the fingers, each surrounding slender colonnette resonates with precise musical frequencies (Seven Swaras). British colonial engineers were so baffled that they cut open two pillars to inspect for hidden metal bells, finding only solid granite.',
        type: 'architectural_feat'
      }
    ],
    preservationStatus: {
      healthScore: 91,
      threats: ['Visitor tapping of fragile acoustic columns', 'Dust erosion'],
      digitalScanStatus: 'Acoustic resonance mapped & 3D micro-geometry digitized',
      currentInitiatives: 'Protective glass barricades and vibration sensors installed.',
      visitorGuidelines: ['Tapping musical pillars is strictly prohibited by law', 'Do not climb onto the stone chariot platform']
    },
    audioGuide: {
      duration: '3 min 50 sec',
      narrator: 'Prof. Ananth Murthy',
      transcript: 'You are standing before the jewel of Hampi. The stone chariot before you is in fact a dedicated shrine to Garuda, the celestial mount of Vishnu...'
    }
  },

  'hawa-mahal': {
    id: 'hawa-mahal',
    name: 'Hawa Mahal',
    nativeName: 'हवा महल',
    tagline: 'The Crown of 953 Breezy Jharokhas',
    stateId: 'rajasthan',
    destinationId: 'jaipur',
    period: '1799 CE',
    dynasty: 'Kachhwaha Rajput Dynasty',
    ruler: 'Maharaja Sawai Pratap Singh',
    architectureStyle: 'Rajput & Mughal Fusion Architecture',
    material: 'Red and Pink Sandstone with white quicklime trim',
    unescoYear: 2019,
    location: {
      city: 'Jaipur',
      state: 'Rajasthan',
      coordinates: '26.9239° N, 75.8267° E',
      lat: 26.9239,
      lng: 75.8267
    },
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80'
    ],
    culturalSignificance: 'Designed in the shape of Lord Krishna’s crown, Hawa Mahal is a five-story architectural marvel of passive environmental air conditioning and royal privacy.',
    history: 'Built in 1799 by Maharaja Sawai Pratap Singh and designed by Lal Chand Ustad, the palace features 953 intricately carved casements (jharokhas). These allowed the royal women of the zenana to observe street festivities and daily city life unnoticed.',
    stories: [
      {
        title: 'The Venturi Natural Cooling Physics',
        narrative: 'The facade utilizes the Venturi airflow effect: hot Rajasthani desert wind is channeled through narrow honeycomb lattices and across interior water fountains, cooling the entire structure by 5–8°C even in peak 45°C summer heat.',
        type: 'architectural_feat'
      }
    ],
    preservationStatus: {
      healthScore: 95,
      threats: ['Urban vehicular emissions', 'Sandstone micro-fracturing'],
      digitalScanStatus: 'Full structural point-cloud 3D scan complete',
      currentInitiatives: 'Chemical stone consolidation and pedestrianization of the front street corridor.',
      visitorGuidelines: ['Watch steep ramps inside the palace', 'No leaning over original wooden casements']
    },
    audioGuide: {
      duration: '3 min 30 sec',
      narrator: 'Kunwar Raghavendra Singh, Rajput Heritage Trust',
      transcript: 'Look up at the honeycombed pink sandstone facade. Notice how the structure is only one room thick at its upper tiers...'
    }
  },

  'amber-fort': {
    id: 'amber-fort',
    name: 'Amber Fort & Palace',
    nativeName: 'आमेर क़िला',
    tagline: 'The Golden Citadel of Mirror Palaces and Hilltop Ramparts',
    stateId: 'rajasthan',
    destinationId: 'jaipur',
    period: '1592 CE onwards',
    dynasty: 'Kachhwaha Dynasty',
    ruler: 'Raja Man Singh I',
    architectureStyle: 'Fortified Rajput-Mughal Palatial',
    material: 'Yellow Sandstone, White Marble, and Inlaid Belgian Glass',
    unescoYear: 2013,
    location: {
      city: 'Jaipur',
      state: 'Rajasthan',
      coordinates: '26.9855° N, 75.8513° E',
      lat: 26.9855,
      lng: 75.8513
    },
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80'
    ],
    culturalSignificance: 'Rising majestically above Maota Lake, Amber Fort is an epitome of defensive military grandeur containing the world-renowned Sheesh Mahal (Hall of Mirrors).',
    history: 'Constructed by Raja Man Singh I atop the Cheel ka Teela (Hill of Eagles) in the Aravalli hills, Amber served as the Rajput capital before the founding of Jaipur. The palace is renowned for its Diwan-i-Aam, Sukh Niwas water channels, and the dazzling mirror palace.',
    stories: [
      {
        title: 'The Magic of Sheesh Mahal',
        narrative: 'The Sheesh Mahal is adorned with thousands of concave convex imported glass mirrors. Legends state that lighting a single ghee candle inside this hall reflects across the ceiling like an entire galaxy of twinkling stars.',
        type: 'architectural_feat'
      }
    ],
    preservationStatus: {
      healthScore: 93,
      threats: ['Groundwater seepage near Maota Lake', 'Mirror silvering oxidation'],
      digitalScanStatus: 'Full digital twin LiDAR survey completed (2023)',
      currentInitiatives: 'Humidity-controlled microclimate monitoring in the Sheesh Mahal.',
      visitorGuidelines: ['Follow designated one-way courtyard routes', 'Do not touch mirror mosaic inlays']
    },
    audioGuide: {
      duration: '4 min 15 sec',
      narrator: 'Kunwar Raghavendra Singh',
      transcript: 'Welcome to the Suraj Pol (Sun Gate). In the days of the Maharajas, victorious armies returned through this grand portal to the fanfare of kettle drums...'
    }
  },

  'humayuns-tomb': {
    id: 'humayuns-tomb',
    name: "Humayun's Tomb",
    nativeName: 'मक़बरा-ए-हुमायूँ',
    tagline: 'The Geometry of Paradise: Prototype of the Taj Mahal',
    stateId: 'delhi',
    destinationId: 'delhi',
    period: '1565–1572 CE',
    dynasty: 'Mughal Empire',
    ruler: 'Empress Bega Begum & Emperor Akbar',
    architectureStyle: 'Mughal Charbagh Garden Tomb Architecture',
    material: 'Red Sandstone dressed with White Marble inlay',
    unescoYear: 1993,
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      coordinates: '28.5933° N, 77.2507° E',
      lat: 28.5933,
      lng: 77.2507
    },
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80'
    ],
    culturalSignificance: 'The first substantial example of Mughal garden-tomb architecture in the Indian subcontinent, establishing the double dome and symmetric Charbagh layout.',
    history: 'Commissioned by Humayun’s chief consort Empress Bega Begum and designed by Persian architect Mirak Mirza Ghiyas, this monument stands in the middle of a 30-acre quadrilateral Persian Charbagh garden symbolizing the rivers of paradise.',
    stories: [
      {
        title: 'Dormitory of the House of Timur',
        narrative: 'Over 150 Mughal royal family members are interred in the cells of the grand basement plinth, earning it the historical title "Dormitory of the Mughals". In 1857, the last Mughal Emperor Bahadur Shah Zafar was captured here by British forces.',
        type: 'historical_event'
      }
    ],
    preservationStatus: {
      healthScore: 97,
      threats: ['Urban air pollution particulate deposition', 'Garden irrigation water table balancing'],
      digitalScanStatus: 'Aga Khan Trust for Culture & ASI full digital restoration baseline',
      currentInitiatives: 'Restoration of hydraulic water channels using traditional lime mortar.',
      visitorGuidelines: ['Keep to the paved pathways', 'Respect the quiet sanctity around tomb cenotaphs']
    },
    audioGuide: {
      duration: '3 min 55 sec',
      narrator: 'Dr. Sohail Hashmi, Delhi Cultural Historian',
      transcript: 'Stand at the central water channel and gaze upward at the majestic high double dome of white marble rising above the red sandstone pishtaq...'
    }
  },

  'qutub-minar': {
    id: 'qutub-minar',
    name: 'Qutub Minar Complex',
    nativeName: 'क़ुतुब मीनार',
    tagline: 'The 73-Meter Tower of Victory and the Rustless Iron Pillar',
    stateId: 'delhi',
    destinationId: 'delhi',
    period: '1192–1220 CE',
    dynasty: 'Mamluk / Delhi Sultanate',
    ruler: 'Qutb-ud-din Aibak & Iltutmish',
    architectureStyle: 'Indo-Islamic Fluted Tower Architecture',
    material: 'Red and Buff Sandstone with white marble upper storeys',
    unescoYear: 1993,
    location: {
      city: 'Mehrauli, New Delhi',
      state: 'Delhi',
      coordinates: '28.5245° N, 77.1855° E',
      lat: 28.5245,
      lng: 77.1855
    },
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80'
    ],
    culturalSignificance: 'The world’s tallest brick minaret, surrounded by early Islamic monuments and the enigmatic 1600-year-old rustless Iron Pillar of Chandragupta II.',
    history: 'Started by Qutb-ud-din Aibak in 1199 and completed by his successor Iltutmish, the five-storey minaret features delicate muqarnas balcony brackets, Quranic calligraphy bands, and alternating angular and rounded flutings.',
    stories: [
      {
        title: 'The 1600-Year Rustless Metallurgical Miracle',
        narrative: 'In the courtyard stands a 7-meter high iron pillar forged in the 4th century CE during the Gupta Empire. Despite being exposed to monsoons, extreme sun, and Delhi humidity for 1,600 years, it has not rusted due to a thin protective layer of crystalline iron hydrogen phosphate formed by ancient blacksmiths.',
        type: 'discovery'
      }
    ],
    preservationStatus: {
      healthScore: 94,
      threats: ['Seismic ground tremors', 'Acid rain discoloration'],
      digitalScanStatus: 'Real-time tilt and structural sensor monitoring network deployed',
      currentInitiatives: 'Laser cleaning of Quranic calligraphy bands and structural anchoring.',
      visitorGuidelines: ['Maintain safety distance from monument perimeter', 'No littering on manicured heritage lawns']
    },
    audioGuide: {
      duration: '4 min 05 sec',
      narrator: 'Dr. Sohail Hashmi',
      transcript: 'Look up at the five distinct storeys of Qutub Minar. Each tier is marked by a projecting balcony supported by exquisite stone stalactite corbels...'
    }
  },

  'konark-sun-temple': {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple',
    nativeName: 'କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର',
    tagline: 'The Colossal Cosmic Chariot of the Sun God Surya',
    stateId: 'odisha',
    destinationId: 'konark',
    period: '1250 CE',
    dynasty: 'Eastern Ganga Dynasty',
    ruler: 'King Narasimhadeva I',
    architectureStyle: 'Kalinga (Odishan) Rekha & Pidha Deula Architecture',
    material: 'Khondalite stone & Chlorite sculptures',
    unescoYear: 1984,
    location: {
      city: 'Konark, Puri District',
      state: 'Odisha',
      coordinates: '19.8876° N, 86.0945° E',
      lat: 19.8876,
      lng: 86.0945
    },
    heroImage: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80'
    ],
    culturalSignificance: 'Conceived as a colossal celestial chariot with 24 exquisitely carved stone wheels pulled by seven galloping horses, Konark is the grandest architectural achievement of the Kalinga school.',
    history: 'Built around 1250 CE by King Narasimhadeva I on the shores of the Bay of Bengal, the temple was engineered so that the rising sun would strike through the Natya Mandapa into the inner sanctuary. European sailors called it the "Black Pagoda" because its massive magnetic crown was said to pull ships toward shore.',
    stories: [
      {
        title: 'The Astronomical Sundial Wheels',
        narrative: 'The 24 wheels are not merely ornamental—they are precise astronomical chronometers. Each wheel has 8 major spokes representing the 8 prahars (3-hour periods) of the day. By placing a finger at the center of the axle and noting where the shadow falls on the bead carvings, one can read the exact solar time to the minute.',
        type: 'architectural_feat'
      },
      {
        title: 'The Sacrifice of 12-Year-Old Dharmapada',
        narrative: 'Legend tells of 1,200 master craftsmen who worked for 12 years but could not fix the heavy magnetic kalasha pinnacle on top of the sanctum tower. Dharmapada, the 12-year-old prodigy son of chief architect Bisu Maharana, climbed the tower and solved the engineering puzzle, then leaped into the sea to save the craftsmen from royal execution.',
        type: 'mythology'
      }
    ],
    preservationStatus: {
      healthScore: 88,
      threats: ['Saline coastal wind erosion', 'Soft Khondalite stone weathering'],
      digitalScanStatus: 'High-precision internal endoscopy & 3D structural modeling ongoing',
      currentInitiatives: 'Carefully removing interior sand ballast filled by the British in 1903 to structurally reinforce the sanctum with stainless steel supports.',
      visitorGuidelines: ['Follow circumambulatory boardwalks', 'Do not touch wheel spoke relief carvings']
    },
    audioGuide: {
      duration: '4 min 30 sec',
      narrator: 'Pravat Mohapatra, Odishan Epigraphist',
      transcript: 'You stand before the cosmic chariot of Surya. Look at the immense 24 wheels carved along the base platform, each representing the fortnights of the year...'
    }
  },

  'mukteshwar-temple': {
    id: 'mukteshwar-temple',
    name: 'Mukteshwar Temple',
    nativeName: 'ମୁକ୍ତେଶ୍ୱର ମନ୍ଦିର',
    tagline: 'The Gem of Odishan Temple Architecture',
    stateId: 'odisha',
    destinationId: 'konark',
    period: '950–975 CE',
    dynasty: 'Somavamshi Dynasty',
    ruler: 'King Yayati I',
    architectureStyle: 'Classical Odishan Kalinga Temple Prototype',
    material: 'Fine Reddish Sandstone',
    location: {
      city: 'Bhubaneswar',
      state: 'Odisha',
      coordinates: '20.2425° N, 85.8335° E',
      lat: 20.2425,
      lng: 85.8335
    },
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010e4210d63?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600100397608-f010e4210d63?auto=format&fit=crop&w=1200&q=80'
    ],
    culturalSignificance: 'Famous for its singular arched Torana gate influenced by Buddhist art, Mukteshwar marks the golden transitional epoch of Odishan temple architecture.',
    history: 'Constructed in the late 10th century, Mukteshwar (meaning "Lord who bestows liberation through meditation") features a miniature 35-foot rekha deula vimana with intricate diamond lattice windows, dancing maidens, and Panchatantra fable reliefs.',
    stories: [
      {
        title: 'The Iconic Torana Archway',
        narrative: 'The entrance Torana gateway is unique in all of Kalinga architecture: a freestanding semicircular arch resting on two thick fluted pillars, decorated with grinning smiling yakshis and floral arabesques.',
        type: 'architectural_feat'
      }
    ],
    preservationStatus: {
      healthScore: 96,
      threats: ['Urban groundwater fluctuations', 'Lichen growth in monsoon'],
      digitalScanStatus: 'High-density 3D photogrammetric scan completed (2024)',
      currentInitiatives: 'Biocide treatment and ancient tank water purification.',
      visitorGuidelines: ['Remove footwear at the Torana entrance', 'Silence mobile phones in the sanctum']
    },
    audioGuide: {
      duration: '3 min 20 sec',
      narrator: 'Pravat Mohapatra',
      transcript: 'Notice the arched Torana framing the temple entrance. Its gentle curving lines bridge Buddhist torana traditions with classical Hindu temple sanctums...'
    }
  }
};

export const STATES_DATA: StateData[] = [
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    nativeName: 'தமிழ்நாடு',
    capital: 'Chennai',
    tagline: 'The Cradle of Dravidian Temple Splendor & Living Stone Poetry',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=85',
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
        heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
        description: 'Perched on the Coromandel coast, Mahabalipuram is an open-air museum of 7th- and 8th-century Pallava art. Here, ocean winds whisper against ancient structural granite towers, cave shrines, and colossal rock bas-reliefs.',
        historicalContext: 'Founded as a thriving maritime seaport by the Pallava kings, goods and cultural philosophies set sail from here across the Bay of Bengal to the Srivijaya, Khmer, and Champa empires.',
        bestTimeToVisit: 'November to February (Pleasant coastal breezes and clear dawn light)',
        monumentIds: ['shore-temple', 'pancha-rathas'],
        geographicHighlight: 'Coromandel Coastal Shorelines & Granite Rock Outcrops'
      }
    ]
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    nativeName: 'ಕರ್ನಾಟಕ',
    capital: 'Bengaluru',
    tagline: 'The Golden City of Vijayanagara and Boulder-Strewn Empires',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010e4210d63?auto=format&fit=crop&w=1600&q=80',
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
        heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
        description: 'Spanning over 4,100 hectares, Hampi was the second-largest city in the medieval world in 1500 CE, featuring palaces, stone aqueducts, and magnificent temples amidst surreal granite boulder landscapes.',
        historicalContext: 'The epicenter of a medieval empire that defended peninsular traditions, famous for ruby and diamond bazaars recorded by Portuguese and Persian chroniclers.',
        bestTimeToVisit: 'October to March (Mild winter weather and Hampi Utsav festival)',
        monumentIds: ['virupaksha-temple', 'vittala-temple'],
        geographicHighlight: 'Tungabhadra River Gorge & Pre-Cambrian Granite Hills'
      }
    ]
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    nativeName: 'राजस्थान',
    capital: 'Jaipur',
    tagline: 'The Land of Desert Fortresses, Mirror Palaces and Astronomical Geometry',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#D4A85A',
    overview: 'Rajasthan’s architectural legacy is a testament to royal valor, desert engineering, and aesthetic sophistication. Hill forts, water stepwells (baolis), and sandstone palaces merge military fortification with celestial harmony.',
    dynasties: ['Kachhwaha Rajputs', 'Sisodia Rajputs of Mewar', 'Rathores of Marwar'],
    architecturalHeritage: 'Rajput Architecture with ornate Jharokha casements, Chhatri cenotaphs, Sheesh Mahal glass mosaics, and massive defense ramparts.',
    destinations: [
      {
        id: 'jaipur',
        name: 'Jaipur (The Pink City)',
        nativeName: 'जयपुर',
        stateId: 'rajasthan',
        tagline: 'The Astronomical Wonder and Royal Citadel',
        heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
        description: 'Planned according to Vedic Vastu Shastra by Maharaja Sawai Jai Singh II in 1727, Jaipur is a UNESCO World Heritage city renowned for its terracotta-pink facade and hilltop fortresses.',
        historicalContext: 'One of the first planned cities in modern Asia, bridging classical Indian urban planning with 18th-century astronomical precision.',
        bestTimeToVisit: 'October to March (Pleasant dry desert days)',
        monumentIds: ['hawa-mahal', 'amber-fort'],
        geographicHighlight: 'Aravalli Mountain Ridge & Maota Lake Basins'
      }
    ]
  },
  {
    id: 'delhi',
    name: 'Delhi',
    nativeName: 'दिल्ली',
    capital: 'New Delhi',
    tagline: 'The Palimpsest of Seven Empires and Soaring Minarets',
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#B58A52',
    overview: 'Delhi has risen, fallen, and been rebuilt across seven distinct historical cities over a thousand years. Its skyline bridges ancient rustless iron metallurgy with soaring Sultanate minarets and sublime Mughal Charbagh garden tombs.',
    dynasties: ['Tomar Rajputs & Chauhans', 'Delhi Sultanate (Mamluk, Khalji, Tughlaq)', 'Mughal Empire'],
    architecturalHeritage: 'Indo-Islamic & Mughal Architecture featuring marble double-domes, symmetrical garden quadripartites, red sandstone pishtaq portals, and intricate muqarnas.',
    destinations: [
      {
        id: 'delhi',
        name: 'Delhi Heritage Precincts',
        nativeName: 'दिल्ली ऐतिहासिक क्षेत्र',
        stateId: 'delhi',
        tagline: 'Where Millennia of Imperial Dynasties Intersect',
        heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
        description: 'From the peaceful shaded avenues of Mehrauli to the grand riverside axis of Humayun’s Tomb, Delhi preserves some of the world’s most significant monuments in an energetic metropolis.',
        historicalContext: 'The seat of power that linked the Silk Road trade with peninsular India for over eight centuries.',
        bestTimeToVisit: 'November to February (Cool sunny afternoons)',
        monumentIds: ['humayuns-tomb', 'qutub-minar'],
        geographicHighlight: 'Yamuna River Floodplains & Delhi Ridge'
      }
    ]
  },
  {
    id: 'odisha',
    name: 'Odisha',
    nativeName: 'ଓଡ଼ିଶା',
    capital: 'Bhubaneswar',
    tagline: 'The Cosmic Sun Chariots and Sacred Kalinga Temple Deulas',
    heroImage: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#D4A85A',
    overview: 'Odisha’s Kalinga architectural style developed independently over a millennium, reaching its zenith in the colossal sun temple of Konark and the spiritual deulas of Bhubaneswar, where stone is carved with the softness of warm wax.',
    dynasties: ['Eastern Ganga Dynasty', 'Somavamshi Dynasty', 'Bhauma-Kara Dynasty', 'Gajapati Empire'],
    architecturalHeritage: 'Kalinga Architecture consisting of the Deula (tower sanctuary), Jagamohana (assembly hall), Natya Mandapa (dancing pavilion), and Bhoga Mandapa.',
    destinations: [
      {
        id: 'konark',
        name: 'Konark & Temple Triangle',
        nativeName: 'କୋଣାର୍କ',
        stateId: 'odisha',
        tagline: 'The Golden Sands of the Celestial Sun Chariot',
        heroImage: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80',
        description: 'Home to the Black Pagoda on Chandrabhaga beach, Konark embodies cosmic time through 24 astronomical stone wheels carved with microscopic mythological detail.',
        historicalContext: 'Erected by King Narasimhadeva I following military victories to celebrate the life-giving vitality of Surya the Sun God.',
        bestTimeToVisit: 'December to February (Konark Dance Festival season)',
        monumentIds: ['konark-sun-temple', 'mukteshwar-temple'],
        geographicHighlight: 'Bay of Bengal Coastal Estuaries & Golden Beach Sands'
      }
    ]
  }
];

export const HERITAGE_TRAILS: HeritageTrail[] = [
  {
    id: 'pallava-architecture-trail',
    title: 'The Pallava Architecture Trail: Evolution in Stone',
    subtitle: 'From Living Bedrock Monoliths to Freestanding Ocean Towers',
    region: 'Tamil Nadu • Mahabalipuram',
    duration: '1 Hour 45 Min',
    difficulty: 'Easy',
    distance: '2.4 km',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    theme: 'Evolution from Cave Sculpting to Structural Granite Vimanas',
    description: 'Walk through 150 years of rapid architectural metamorphosis in 7th-century South India, tracing how Pallava master stonemasons progressed from carving directly into hill bedrock to engineering freestanding structural towers that defied ocean tides.',
    stops: [
      {
        monumentId: 'shore-temple',
        name: 'Shore Temple',
        order: 1,
        durationMinutes: 35,
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
