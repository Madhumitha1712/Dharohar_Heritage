/**
 * DHAROHAR - Digital Heritage Platform
 * “Explore the past. Experience it in 3D. Preserve it for the future.”
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { Language } from './types';

// Pages
import { LandingPage } from './pages/LandingPage';
import { ExplorePage } from './pages/ExplorePage';
import { StatePage } from './pages/StatePage';
import { DestinationPage } from './pages/DestinationPage';
import { MonumentDetailPage } from './pages/MonumentDetailPage';
import { ThreeDExplorerPage } from './pages/ThreeDExplorerPage';
import { AIGuidePage } from './pages/AIGuidePage';
import { HeritageTrailsPage } from './pages/HeritageTrailsPage';
import { PersonalizedTrailPage } from './pages/PersonalizedTrailPage';
import { HeritageMapPage } from './pages/HeritageMapPage';
import { PreservationPage } from './pages/PreservationPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('landing');
  const [language, setLanguage] = useState<Language>('en');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  // Navigate helper
  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
  };

  // Render active page based on route pattern
  const renderPage = () => {
    if (currentRoute === 'landing' || currentRoute === '') {
      return <LandingPage onNavigate={handleNavigate} language={language} />;
    }

    if (currentRoute === 'explore') {
      return <ExplorePage onNavigate={handleNavigate} language={language} />;
    }

    if (currentRoute.startsWith('state/')) {
      const stateId = currentRoute.split('/')[1] || 'tamil-nadu';
      return <StatePage stateId={stateId} onNavigate={handleNavigate} language={language} />;
    }

    if (currentRoute.startsWith('destination/')) {
      const destId = currentRoute.split('/')[1] || 'mahabalipuram';
      return <DestinationPage destinationId={destId} onNavigate={handleNavigate} language={language} />;
    }

    if (currentRoute.startsWith('monument/')) {
      const monumentId = currentRoute.split('/')[1] || 'shore-temple';
      return <MonumentDetailPage monumentId={monumentId} onNavigate={handleNavigate} language={language} />;
    }

    if (currentRoute === '3d-explorer') {
      return <ThreeDExplorerPage onNavigate={handleNavigate} language={language} />;
    }

    if (currentRoute === 'ai-guide') {
      return <AIGuidePage onNavigate={handleNavigate} language={language} />;
    }

    if (currentRoute === 'trails') {
      return <HeritageTrailsPage onNavigate={handleNavigate} language={language} />;
    }

    if (currentRoute === 'personalized-trail') {
      return <PersonalizedTrailPage onNavigate={handleNavigate} language={language} />;
    }

    if (currentRoute === 'heritage-map') {
      return <HeritageMapPage onNavigate={handleNavigate} language={language} />;
    }

    if (currentRoute === 'preservation') {
      return <PreservationPage onNavigate={handleNavigate} language={language} />;
    }

    if (currentRoute === 'about') {
      return <AboutPage onNavigate={handleNavigate} language={language} />;
    }

    // Default Fallback
    return <LandingPage onNavigate={handleNavigate} language={language} />;
  };

  return (
    <div className="min-h-screen bg-[#17130F] text-[#F3EBDD] flex flex-col font-body selection:bg-[#D4A85A] selection:text-[#17130F]">
      {/* Top Architectural Navigation Bar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={setLanguage}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Global Architectural Footer */}
      <Footer onNavigate={handleNavigate} language={language} />

      {/* Global Instant Search & Jump Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
