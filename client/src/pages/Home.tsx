/*
 * DHAROHAR / Archive of Light
 * This page follows the contemporary Indian editorialism direction: carved whitespace,
 * burnished saffron accents, architectural rules, and calm museum-like interactions.
 *
 * Expanded with: WHY DHAROHAR, EXPLORE PATHWAYS, HERITAGE REGIONS, 3D EXPERIENCE,
 * HERITAGE TRAILS, AI GUIDE, HERITAGE MAP, PRESERVATION, and full FOOTER.
 */
import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Eye,
  Globe,
  Map,
  MapPin,
  Menu,
  MessageCircle,
  Move3D,
  Play,
  Route,
  Shield,
  Sparkles,
  User,
  Users,
  X,
} from "lucide-react";
import { toast } from "sonner";

/* ─── DATA ─────────────────────────────────────────────────── */

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Explore", href: "#discover" },
  { label: "Heritage Trails", href: "#trails" },
  { label: "3D Explorer", href: "#experience-3d" },
  { label: "AI Guide", href: "#guide" },
  { label: "Heritage Map", href: "#map" },
  { label: "Preservation", href: "#preserve" },
  { label: "About", href: "#about" },
];

const whyPillars = [
  { icon: Eye, label: "DISCOVER", text: "Explore heritage destinations beyond the guidebook." },
  { icon: BookOpen, label: "UNDERSTAND", text: "Learn historical and architectural context in depth." },
  { icon: Move3D, label: "EXPERIENCE", text: "Interact with detailed 3D heritage models." },
  { icon: Route, label: "NAVIGATE", text: "Follow curated heritage trails across regions." },
  { icon: Shield, label: "PRESERVE", text: "Understand responsible heritage stewardship." },
];

const pathways = [
  {
    index: "01",
    icon: User,
    title: "Traveller / Tourist",
    description:
      "Discover heritage destinations, explore monuments, navigate historic places and experience them through interactive stories and immersive exploration.",
    cta: "Begin Journey",
    href: "#discover",
  },
  {
    index: "02",
    icon: BookOpen,
    title: "Student / Researcher",
    description:
      "Explore monuments virtually, investigate architecture and history, compare heritage sites and build a research collection.",
    cta: "Begin Research",
    href: "#discover",
  },
  {
    index: "03",
    icon: Users,
    title: "Administrator",
    description:
      "Manage, verify and publish the digital heritage information that powers DHAROHAR.",
    cta: "Manage Portal",
    href: "#about",
  },
];

const heritageRegions = [
  {
    id: "tamil-nadu",
    state: "Tamil Nadu",
    stateNative: "தமிழ்நாடு",
    destination: "Mahabalipuram",
    description:
      "The Cradle of Dravidian Temple Splendour & Living Stone Poetry",
    dynasty: "Pallava Dynasty (4th–9th Century)",
    image: "/tamil-nadu.png",
    href: "#discover",
  },
  {
    id: "kerala",
    state: "Kerala",
    stateNative: "കേരളം",
    destination: "Kochi",
    description: "The Gateway to Spice Routes and Nalukettu Timber Craft",
    dynasty: "Chera Dynasty (9th–12th Century)",
    image: "/kerala.png",
    href: "#discover",
  },
  {
    id: "karnataka",
    state: "Karnataka",
    stateNative: "ಕರ್ನಾಟಕ",
    destination: "Hampi",
    description:
      "The Golden City of Vijayanagara and Boulder-Strewn Empires",
    dynasty: "Vijayanagara Empire (1336–1646 CE)",
    image: "/karnataka.png",
    href: "#discover",
  },
  {
    id: "rajasthan",
    state: "Rajasthan",
    stateNative: "राजस्थान",
    destination: "Jaipur",
    description: "The Pink City of Rajput Palaces and Desert Fortresses",
    dynasty: "Rajput Kingdoms (7th–19th Century)",
    image: "/rajasthan.png",
    href: "#discover",
  },
  {
    id: "delhi",
    state: "Delhi",
    stateNative: "दिल्ली",
    destination: "Delhi NCR",
    description: "Seven Cities of Power, Sultans and Mughal Grandeur",
    dynasty: "Delhi Sultanate & Mughal Empire (1206–1857 CE)",
    image: "/delhi.png",
    href: "#discover",
  },
  {
    id: "odisha",
    state: "Odisha",
    stateNative: "ଓଡ଼ିଶା",
    destination: "Konark",
    description: "The Sun Temple State of Kalinga Sculpture and Coastal Craft",
    dynasty: "Ganga Dynasty (11th–15th Century)",
    image: "/odisha.png",
    href: "#discover",
  },
];

const trailStops = [
  {
    num: "01",
    name: "Shore Temple",
    desc: "7th-century granite marvel rising at the Bay of Bengal's edge.",
  },
  {
    num: "02",
    name: "Arjuna's Penance",
    desc: "The world's largest bas-relief; a cosmic tableau carved in rock.",
  },
  {
    num: "03",
    name: "Pancha Rathas",
    desc: "Five monolithic chariot temples, each cut from a single boulder.",
  },
];

const aiQuestions = [
  "Why was this monument built?",
  "What makes its architecture unique?",
  "Who commissioned it and when?",
  "What stories are connected to this place?",
  "Explain this monument in Tamil.",
];

const footerRegions = [
  { state: "Tamil Nadu", native: "தமிழ்நாடு" },
  { state: "Kerala", native: "കേരളം" },
  { state: "Karnataka", native: "ಕರ್ನಾಟಕ" },
  { state: "Rajasthan", native: "राजस्थान" },
  { state: "Delhi", native: "दिल्ली" },
  { state: "Odisha", native: "ଓଡ଼ିଶା" },
];

const footerExperiences = [
  "3D Heritage Explorer",
  "Heritage Trails",
  "AI Heritage Guide",
  "Interactive Heritage Map",
];

const footerStewardship = [
  "Responsible Visitor Code",
  "Digital Preservation",
  "Heritage Awareness",
];

/* ─── HELPERS ───────────────────────────────────────────────── */

function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ─── SCROLL REVEAL HOOK ────────────────────────────────────── */

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("sr-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── SECTION WRAPPER ───────────────────────────────────────── */

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`sr-block ${className}`}
      style={{ "--sr-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* ─── MAIN COMPONENT ────────────────────────────────────────── */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [aiTyping, setAiTyping] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handlePlaceholder = (label: string) => {
    toast(`${label} is being prepared`, {
      description: "The archive is growing. Check back soon for the next layer.",
    });
  };

  const mockResponses: Record<string, string> = {
    "Why was this monument built?":
      "The Shore Temple at Mahabalipuram was built by the Pallava king Rajasimha (Narasimhavarman II) in the 8th century as a structural temple — one of the earliest in South India. It served both as a place of worship for Shiva and Vishnu and as a landmark for sailors arriving by sea. The site also reflects the Pallavas' ambition to establish Mahabalipuram as a thriving port city.",
    "What makes its architecture unique?":
      "The Shore Temple represents a pivotal shift from rock-cut cave architecture to free-standing structural temples. It features the characteristic Dravidian vimana (tower) form, intricate bas-relief carvings of Shaivite iconography, and its deliberate orientation eastward — so the rising sun illuminates the deity within at dawn each day.",
  };

  const handleAiQuestion = (q: string) => {
    setAiInput(q);
    setAiTyping(true);
    setAiResponse("");
    const response =
      mockResponses[q] ||
      "DHAROHAR is processing your query through its cultural knowledge base. This monument holds centuries of stories waiting to be explored — from its founding dynasty to the craftsmen who shaped each stone.";
    let i = 0;
    const interval = setInterval(() => {
      setAiResponse(response.slice(0, i));
      i += 3;
      if (i > response.length) {
        setAiResponse(response);
        setAiTyping(false);
        clearInterval(interval);
      }
    }, 18);
  };

  return (
    <main className="site-shell">
      {/* ── ANNOUNCEMENT BAR ─────────────────────────────────── */}
      <div className="announcement-bar" aria-label="Platform announcement">
        <span className="announcement-dot" />
        <span>Now opening: the first digital collection of living heritage</span>
        <a href="#discover" onClick={() => setMenuOpen(false)}>
          Enter the archive <ArrowRight size={13} strokeWidth={1.7} />
        </a>
      </div>

      {/* ── HEADER ───────────────────────────────────────────── */}
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Dharohar home">
          <span className="brand-wordmark">dharohar</span>
        </a>

        <nav
          className={`desktop-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
              {item.label === "3D Explorer" && (
                <span className="nav-live-badge">LIVE 3D</span>
              )}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} strokeWidth={1.5} /> : <Menu size={21} strokeWidth={1.5} />}
        </button>

        <button className="header-cta" type="button" onClick={() => scrollToId("#discover")}>
          <span>Begin exploring</span>
          <ArrowRight size={16} strokeWidth={1.5} />
        </button>
      </header>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-section" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow reveal-up" style={{ "--delay": "80ms" } as CSSProperties}>
            <span className="eyebrow-rule" />
            DIGITAL INDIAN HERITAGE
          </div>
          <h1
            id="hero-title"
            className="hero-title reveal-up"
            style={{ "--delay": "160ms" } as CSSProperties}
          >
            Explore the past.<br />
            <em>Experience it in 3D.</em><br />
            Preserve it for the future.
          </h1>
          <p
            className="hero-description reveal-up"
            style={{ "--delay": "250ms" } as CSSProperties}
          >
            Dharohar is a living digital archive of India's most meaningful places — where stories
            become spatial, discovery becomes personal, and preservation becomes something we can
            all take part in.
          </p>
          <div
            className="hero-actions reveal-up"
            style={{ "--delay": "340ms" } as CSSProperties}
          >
            <button
              className="button button-primary"
              type="button"
              onClick={() => scrollToId("#discover")}
            >
              Begin exploration <ArrowRight size={16} strokeWidth={1.6} />
            </button>
            <a className="text-link" href="#experience-3d">
              <span className="play-circle">
                <Play size={10} fill="currentColor" strokeWidth={1.3} />
              </span>
              Explore heritage
            </a>
          </div>
          <div
            className="hero-actions hero-action-secondary reveal-up"
            style={{ "--delay": "410ms" } as CSSProperties}
          >
            <a className="button button-outline hero-map-btn" href="#map">
              <MapPin size={14} strokeWidth={1.5} />
              Explore Heritage Map
            </a>
            <a className="button button-outline hero-map-btn" href="#experience-3d">
              <Sparkles size={14} strokeWidth={1.5} />
              Launch 3D Explorer
            </a>
          </div>
          <div
            className="hero-footnote reveal-up"
            style={{ "--delay": "490ms" } as CSSProperties}
          >
            <span>01 / 06</span>
            <span className="footnote-line" />
            <span>Curated places, deeper stories</span>
          </div>
        </div>

        <div className="hero-visual" id="model" aria-label="Interactive Taj Mahal 3D model">
          <div className="visual-wash" aria-hidden="true" />
          <div className="hero-arc hero-arc-one" aria-hidden="true" />
          <div className="hero-arc hero-arc-two" aria-hidden="true" />
          <div className="visual-coordinate coordinate-top" aria-hidden="true">27° 10′ 29″ N</div>
          <div className="visual-coordinate coordinate-bottom" aria-hidden="true">77° 59′ 02″ E</div>
          <div className="model-halo" aria-hidden="true" />
          <iframe
            className={`taj-iframe ${iframeLoaded ? "is-ready" : ""}`}
            title="Taj Mahal 3D Model"
            src="https://sketchfab.com/models/7b43e635cbfb47719d5a124302b78579/embed?autostart=1&preload=1&ui_infos=0&ui_watermark=0&ui_help=0&ui_settings=0&ui_share=0&transparent=1&autospin=0.05"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
            onLoad={() => setIframeLoaded(true)}
          />
          <div className="model-label" aria-hidden="true">
            <span className="model-label-dot" />
            <span>LIVE 3D MODEL</span>
          </div>
          <div className="model-instruction" aria-hidden="true">
            <Move3D size={15} strokeWidth={1.25} />
            <span>Move to explore</span>
          </div>
          <div className="model-caption">
            <span className="caption-number">01</span>
            <span>
              <strong>Taj Mahal</strong>
              <small>Agra · 1632—1653</small>
            </span>
          </div>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span className="scroll-cue-line" />
          <span>Scroll to discover</span>
        </div>
      </section>

      {/* ── WHY DHAROHAR ─────────────────────────────────────── */}
      <section className="why-section section-shell" id="why">
        <ScrollReveal className="why-label-wrap">
          <p className="section-kicker">
            <span className="eyebrow-rule" />
            WHY DHAROHAR
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80} className="why-heading-wrap">
          <h2 className="why-heading">
            Google Maps tells you{" "}
            <em>where to go.</em>
            <br />
            <span className="why-contrast">
              DHAROHAR tells you what to experience,<br />
              what it means, and why it matters.
            </span>
          </h2>
        </ScrollReveal>
        <div className="why-pillars">
          {whyPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.label} delay={i * 70} className="why-pillar">
                <div className="pillar-icon-wrap">
                  <Icon size={20} strokeWidth={1.25} />
                </div>
                <strong className="pillar-label">{p.label}</strong>
                <p className="pillar-text">{p.text}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ── EXPLORE PATHWAYS ─────────────────────────────────── */}
      <section className="pathways-section" id="pathways">
        <div className="pathways-inner section-shell">
          <ScrollReveal className="pathways-header">
            <p className="section-kicker pathways-kicker">
              <Compass size={13} strokeWidth={1.7} />
              SELECT YOUR PATHWAY
            </p>
            <h2 className="pathways-heading">
              How would you like<br />
              <em>to explore?</em>
            </h2>
            <p className="pathways-sub">
              Select a dedicated experience configured to your specific journey needs.
            </p>
          </ScrollReveal>
          <div className="pathways-grid">
            {pathways.map((pw, i) => {
              const Icon = pw.icon;
              return (
                <ScrollReveal key={pw.index} delay={i * 100} className="pathway-card-wrap">
                  <div className="pathway-card">
                    <div className="pathway-card-top">
                      <span className="pathway-number">{pw.index}</span>
                      <span className="pathway-icon-circle">
                        <Icon size={17} strokeWidth={1.25} />
                      </span>
                    </div>
                    <h3 className="pathway-title">{pw.title}</h3>
                    <p className="pathway-desc">{pw.description}</p>
                    <a className="button button-primary pathway-btn" href={pw.href}>
                      {pw.cta} <ArrowRight size={14} strokeWidth={1.6} />
                    </a>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HERITAGE REGIONS ─────────────────────────────────── */}
      <section className="regions-section" id="discover">
        <div className="section-shell">
          <ScrollReveal className="regions-header">
            <p className="section-kicker">
              <span className="eyebrow-rule" />
              ARCHITECTURAL ATLAS
            </p>
            <div className="regions-title-row">
              <h2 className="regions-heading">
                Explore India by<br />
                <em>Heritage Region</em>
              </h2>
              <a className="regions-view-all underlined-link" href="#discover">
                View all states <ArrowRight size={14} strokeWidth={1.4} />
              </a>
            </div>
            <p className="regions-sub">
              Discover India's architectural legacy, one region at a time.
            </p>
          </ScrollReveal>
          <div className="regions-grid">
            {heritageRegions.map((r, i) => (
              <ScrollReveal key={r.id} delay={i * 60} className="region-card-wrap">
                <a className="region-card" href={r.href}>
                  <div className="region-image-wrap">
                    <img
                      src={r.image}
                      alt={`${r.state} heritage`}
                      className="region-image"
                      loading="lazy"
                    />
                    <div className="region-image-overlay" />
                    <span className="region-dest-tag">{r.destination}</span>
                  </div>
                  <div className="region-card-body">
                    <div className="region-name-row">
                      <strong className="region-name">{r.state}</strong>
                      <span className="region-native">{r.stateNative}</span>
                    </div>
                    <p className="region-desc">{r.description}</p>
                    <div className="region-card-footer">
                      <span className="region-dynasty">{r.dynasty}</span>
                      <span className="region-explore">
                        Explore <ArrowRight size={12} strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3D EXPERIENCE ────────────────────────────────────── */}
      <section className="experience-section" id="experience-3d">
        <div className="experience-inner section-shell">
          <ScrollReveal className="experience-copy">
            <p className="section-kicker">
              <span className="eyebrow-rule" />
              3D HERITAGE EXPLORER
            </p>
            <h2>
              Experience heritage<br />
              <em>in three dimensions.</em>
            </h2>
            <p className="experience-desc">
              Step beyond photographs. Explore heritage architecture as an interactive digital
              artifact — rotate, zoom and uncover every carved detail as it was intended to be seen.
            </p>
            <div className="experience-features">
              {[
                { icon: Move3D, text: "High-fidelity 3D spatial scans" },
                { icon: Eye, text: "360° architectural walkthroughs" },
                { icon: Globe, text: "Accessible from anywhere in the world" },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div className="exp-feature" key={f.text}>
                    <span className="exp-feature-icon">
                      <Icon size={15} strokeWidth={1.3} />
                    </span>
                    <span>{f.text}</span>
                  </div>
                );
              })}
            </div>
            <button
              className="button button-primary"
              type="button"
              onClick={() => scrollToId("#model")}
            >
              Explore 3D Heritage <ArrowRight size={16} strokeWidth={1.6} />
            </button>
          </ScrollReveal>
          <ScrollReveal delay={120} className="experience-visual-wrap">
            <div className="experience-visual">
              <div className="experience-arc experience-arc-1" aria-hidden="true" />
              <div className="experience-arc experience-arc-2" aria-hidden="true" />
              <div className="experience-glow" aria-hidden="true" />
              <div className="experience-monument-card">
                <div className="exp-card-badge">
                  <span className="model-label-dot" />
                  LIVE 3D — TAJ MAHAL
                </div>
                <div className="exp-card-coords">
                  <MapPin size={11} strokeWidth={1.3} />
                  Agra, Uttar Pradesh · 27°10′N 77°59′E
                </div>
                <div className="exp-card-meta-row">
                  <span className="exp-meta-pill">Mughal Empire</span>
                  <span className="exp-meta-pill">1632–1653 CE</span>
                  <span className="exp-meta-pill">UNESCO Heritage</span>
                </div>
                <p className="exp-card-desc">
                  Commissioned by Emperor Shah Jahan in memory of Mumtaz Mahal. A perfection of
                  symmetry in white marble — a monument to eternal devotion.
                </p>
                <button
                  className="button button-outline exp-card-btn"
                  type="button"
                  onClick={() => scrollToId("#model")}
                >
                  View 3D Model <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HERITAGE TRAILS ──────────────────────────────────── */}
      <section className="trails-section" id="trails">
        <div className="trails-image-wrap">
          <div className="trails-image-bg" aria-hidden="true" />
          <div className="image-stamp">
            <span>DH</span>
            <span>ARCHIVE<br />NO. 01</span>
          </div>
          <div className="trail-preview-card">
            <div className="trail-preview-header">
              <span className="trail-preview-kicker">FEATURED TRAIL</span>
              <span className="trail-preview-region">Tamil Nadu · Pallava Heritage</span>
            </div>
            <h3 className="trail-preview-title">Pallava Architecture Trail</h3>
            <div className="trail-stops">
              {trailStops.map((stop) => (
                <div className="trail-stop" key={stop.num}>
                  <span className="trail-stop-num">{stop.num}</span>
                  <div>
                    <strong className="trail-stop-name">{stop.name}</strong>
                    <p className="trail-stop-desc">{stop.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="trail-preview-meta">
              <span className="trail-meta-item"><Route size={12} strokeWidth={1.3} /> 3 stops</span>
              <span className="trail-meta-item"><Move3D size={12} strokeWidth={1.3} /> ~4.2 km</span>
              <span className="trail-meta-item"><Compass size={12} strokeWidth={1.3} /> 2–3 hours</span>
            </div>
          </div>
        </div>
        <div className="trails-copy">
          <p className="section-kicker">HERITAGE TRAILS</p>
          <h2>
            Discover heritage<br />
            <em>as a journey.</em>
          </h2>
          <p>
            Move beyond the landmark. Trace the people, craft and living cultures that surround each
            place — monument by monument, story by story.
          </p>
          <p className="trails-secondary-text">
            From a carved threshold in Ahmedabad to the living courtyards of Jaipur — build a trail
            that holds the visible and the almost forgotten.
          </p>
          <button
            className="button button-outline"
            type="button"
            onClick={() => handlePlaceholder("Heritage Trails")}
          >
            Explore Heritage Trails <ArrowRight size={16} strokeWidth={1.5} />
          </button>
          <div className="trail-meta">
            <span>08</span>
            <span>routes currently forming</span>
          </div>
        </div>
      </section>

      {/* ── AI GUIDE ─────────────────────────────────────────── */}
      <section className="guide-section section-shell" id="guide">
        <div className="guide-rule" aria-hidden="true" />
        <div className="guide-content-wrap">
          <ScrollReveal className="guide-copy">
            <p className="section-kicker">YOUR AI HERITAGE GUIDE</p>
            <h2>
              Ask the place<br />
              <em>what it remembers.</em>
            </h2>
            <p className="guide-desc">
              Not a search box. A way to stay with the question a little longer. Ask about
              architecture, history, dynasty, craft and cultural meaning — in any language.
            </p>
            <button
              className="button button-outline"
              type="button"
              onClick={() => handlePlaceholder("AI Guide")}
            >
              Meet the Heritage Guide <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </ScrollReveal>
          <ScrollReveal delay={100} className="guide-interactive">
            <div className="guide-chat-card">
              <div className="guide-chat-header">
                <div className="guide-chat-avatar">
                  <Sparkles size={16} strokeWidth={1.25} />
                </div>
                <div>
                  <strong className="guide-chat-name">Sutradhar</strong>
                  <span className="guide-chat-subtitle">AI Heritage Guide · DHAROHAR</span>
                </div>
                <span className="guide-online-dot" />
              </div>
              <div className="guide-chat-body">
                {aiResponse ? (
                  <div className="guide-response">
                    {aiInput && (
                      <div className="guide-user-bubble">{aiInput}</div>
                    )}
                    <div className="guide-ai-bubble">
                      {aiResponse}
                      {aiTyping && <span className="guide-cursor" />}
                    </div>
                  </div>
                ) : (
                  <div className="guide-welcome">
                    <p className="guide-welcome-text">
                      "Ask me about any heritage site, its architectural style, the dynasty that
                      built it, or the stories that surround it."
                    </p>
                    <span className="guide-welcome-attr">— Sutradhar, AI Heritage Guide</span>
                  </div>
                )}
              </div>
              <div className="guide-questions">
                <p className="guide-questions-label">Suggested questions</p>
                <div className="guide-question-list">
                  {aiQuestions.map((q) => (
                    <button
                      key={q}
                      className="guide-question-pill"
                      type="button"
                      onClick={() => handleAiQuestion(q)}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HERITAGE MAP ─────────────────────────────────────── */}
      <section className="map-section" id="map">
        <div className="map-inner section-shell">
          <ScrollReveal className="map-copy">
            <p className="section-kicker">
              <span className="eyebrow-rule" />
              HERITAGE, CONNECTED
            </p>
            <h2>
              Every monument,<br />
              <em>every story, on one map.</em>
            </h2>
            <p className="map-desc">
              DHAROHAR connects states, destinations, monuments and heritage trails in one
              interconnected geographic experience. Discover the breadth of India's architectural
              legacy, from the Himalayas to Kanyakumari.
            </p>
            <div className="map-flow">
              {["States", "Destinations", "Monuments", "Heritage Trails"].map((step, i, arr) => (
                <span key={step} className="map-flow-wrap">
                  <span className="map-flow-step">{step}</span>
                  {i < arr.length - 1 && (
                    <ArrowRight size={13} strokeWidth={1.3} className="map-flow-arrow" />
                  )}
                </span>
              ))}
            </div>
            <button
              className="button button-primary"
              type="button"
              onClick={() => handlePlaceholder("Heritage Map")}
            >
              <Map size={15} strokeWidth={1.4} />
              Explore Heritage Map
            </button>
          </ScrollReveal>
          <ScrollReveal delay={100} className="map-visual-wrap">
            <div className="map-visual">
              <div className="map-grid-lines" aria-hidden="true" />
              <div className="map-outline" aria-hidden="true">
                <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="india-outline">
                  <path
                    d="M95 10 L140 22 L158 38 L165 58 L155 78 L162 95 L158 118 L148 132 L150 150 L138 165 L125 178 L115 195 L105 210 L100 230 L95 210 L82 195 L72 178 L60 165 L48 150 L50 132 L40 118 L36 95 L42 78 L32 58 L39 38 L57 22 Z"
                    stroke="var(--gold)"
                    strokeWidth="1.5"
                    fill="rgba(170,123,63,0.06)"
                  />
                </svg>
                {heritageRegions.map((r, i) => {
                  const positions = [
                    { top: "58%", left: "52%" },  // Tamil Nadu
                    { top: "62%", left: "35%" },  // Kerala
                    { top: "52%", left: "42%" },  // Karnataka
                    { top: "30%", left: "28%" },  // Rajasthan
                    { top: "20%", left: "52%" },  // Delhi
                    { top: "45%", left: "68%" },  // Odisha
                  ];
                  const pos = positions[i];
                  return (
                    <div
                      key={r.id}
                      className="map-pin"
                      style={{ top: pos.top, left: pos.left } as CSSProperties}
                      title={r.state}
                    >
                      <span className="map-pin-dot" />
                      <span className="map-pin-label">{r.state}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PRESERVATION ─────────────────────────────────────── */}
      <section className="preservation-section" id="preserve">
        <div className="preserve-texture" aria-hidden="true" />
        <div className="preserve-content section-shell">
          <ScrollReveal>
            <p className="section-kicker" style={{ color: "#dfb878" }}>PRESERVE WHAT WE INHERIT</p>
            <h2 className="preserve-heading">
              What we keep<br />
              <em>keeps us.</em>
            </h2>
            <p className="preserve-intro">
              From digital archiving to responsible visitor practices — discover how modern
              technology and mindful tourism safeguard ancient monuments for the next thousand years.
            </p>
          </ScrollReveal>
          <div className="preserve-guidelines">
            <ScrollReveal delay={80} className="preserve-col">
              <div className="preserve-col-header preserve-col-respect">
                <Shield size={18} strokeWidth={1.3} />
                <strong>RESPECT</strong>
              </div>
              <ul className="preserve-list">
                {[
                  "Follow designated visitor paths",
                  "Respect cultural and religious practices",
                  "Protect the integrity of historical structures",
                  "Support local heritage custodians",
                ].map((item) => (
                  <li key={item} className="preserve-item">
                    <span className="preserve-dot respect" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={160} className="preserve-col">
              <div className="preserve-col-header preserve-col-avoid">
                <X size={18} strokeWidth={1.3} />
                <strong>AVOID</strong>
              </div>
              <ul className="preserve-list">
                {[
                  "Touching fragile sculptures or carvings",
                  "Climbing on monument structures",
                  "Littering within heritage precincts",
                  "Damaging or defacing heritage surfaces",
                ].map((item) => (
                  <li key={item} className="preserve-item">
                    <span className="preserve-dot avoid" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={240} className="preserve-col preserve-col-digital">
              <div className="preserve-col-header preserve-col-digital-h">
                <Globe size={18} strokeWidth={1.3} />
                <strong>DHAROHAR PRESERVES</strong>
              </div>
              <ul className="preserve-list">
                {[
                  "High-fidelity 3D spatial scans",
                  "Digital epigraphy and inscriptions",
                  "Architectural documentation archives",
                  "Cultural knowledge preservation",
                ].map((item) => (
                  <li key={item} className="preserve-item">
                    <span className="preserve-dot digital" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={100} className="preserve-cta-row">
            <button
              className="button button-light"
              type="button"
              onClick={() => handlePlaceholder("Preservation Guidelines")}
            >
              Learn How to Preserve <ArrowRight size={16} strokeWidth={1.5} />
            </button>
            <button
              className="button button-outline preserve-outline-btn"
              type="button"
              onClick={() => handlePlaceholder("Digital Preservation Charter")}
            >
              Digital Preservation Charter
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FINAL CTA / ABOUT ────────────────────────────────── */}
      <section className="about-section section-shell" id="about">
        <div className="about-emblem">
          <img src="/manus-storage/dharohar-seal_e8a46ee4.png" alt="" aria-hidden="true" />
        </div>
        <div className="about-heading">
          <p className="section-kicker">A NOTE FROM DHAROHAR</p>
          <h2>
            Begin with a place.<br />
            <em>Leave with a deeper sense of time.</em>
          </h2>
          <p className="about-text">
            A high-fidelity digital heritage sanctuary dedicated to the epigraphy, astronomy and
            architectural marvels of Indian temple civilisations and dynastic monuments.
            <br /><br />
            Dedicated to the living memory of India's master stonemasons and architects.
          </p>
          <div className="about-actions">
            <button
              className="button button-primary"
              type="button"
              onClick={() => scrollToId("#discover")}
            >
              Begin Exploring <ArrowRight size={16} strokeWidth={1.6} />
            </button>
            <button
              className="button button-outline"
              type="button"
              onClick={() => handlePlaceholder("Digital Preservation Charter")}
            >
              <Shield size={14} strokeWidth={1.4} />
              Preservation Charter
            </button>
          </div>
        </div>
        <div className="about-meta">
          <span>INDIA</span>
          <span>20.5937° N</span>
          <span>78.9629° E</span>
          <span className="about-year">© 2026</span>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="site-footer-expanded">
        <div className="footer-inner section-shell">
          <div className="footer-brand-col">
            <span className="brand-wordmark footer-brand-word">dharohar</span>
            <span className="footer-brand-tag">Digital Indian Heritage</span>
            <p className="footer-brand-tagline">
              "Explore the past.<br />Experience it in 3D.<br />Preserve it for the future."
            </p>
            <div className="footer-brand-actions">
              <button
                className="footer-action-btn"
                type="button"
                onClick={() => handlePlaceholder("Digital Preservation Charter")}
              >
                <Shield size={12} strokeWidth={1.3} />
                Digital Preservation Charter
              </button>
              <button
                className="footer-action-btn"
                type="button"
                onClick={() => handlePlaceholder("Spatial 3D Archive")}
              >
                <Move3D size={12} strokeWidth={1.3} />
                Spatial 3D Archive
              </button>
            </div>
          </div>

          <div className="footer-nav-col">
            <strong className="footer-col-title">Navigation</strong>
            <ul className="footer-link-list">
              {navItems.map((n) => (
                <li key={n.label}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-col">
            <strong className="footer-col-title">Regional Heritage</strong>
            <ul className="footer-link-list">
              {footerRegions.map((r) => (
                <li key={r.state} className="footer-region-item">
                  <a href="#discover">{r.state}</a>
                  <span className="footer-native">{r.native}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-col">
            <strong className="footer-col-title">Experiences</strong>
            <ul className="footer-link-list">
              {footerExperiences.map((e) => (
                <li key={e}>
                  <button
                    className="footer-link-btn"
                    type="button"
                    onClick={() => handlePlaceholder(e)}
                  >
                    {e}
                  </button>
                </li>
              ))}
            </ul>
            <strong className="footer-col-title footer-col-title-mt">Stewardship</strong>
            <ul className="footer-link-list">
              {footerStewardship.map((s) => (
                <li key={s}>
                  <button
                    className="footer-link-btn"
                    type="button"
                    onClick={() => handlePlaceholder(s)}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="section-shell footer-bottom-inner">
            <span className="footer-copy">
              © 2026 DHAROHAR · Dedicated to the living memory of India's master stonemasons and
              architects.
            </span>
            <span className="footer-craft">Crafted with reverence for Indian Heritage</span>
            <button
              className="footer-scroll-top"
              type="button"
              onClick={() => scrollToId("#top")}
              aria-label="Back to top"
            >
              ↑
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
