import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import EventsSection from './components/EventsSection';

export type PageType = 'home' | 'about' | 'menu' | 'reservations' | 'gallery' | 'events' | 'reviews' | 'faq' | 'contact' | 'landing';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageType>('landing');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleNavigate = (e: CustomEvent<PageType>) => {
      setCurrentPage(e.detail);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('navigate', handleNavigate as EventListener);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('navigate', handleNavigate as EventListener);
    };
  }, []);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={navigateTo} />;
      case 'about':
        return <AboutSection onNavigate={navigateTo} />;
      case 'menu':
        return <MenuSection onNavigate={navigateTo} />;
      case 'reservations':
        return <ReservationSection onNavigate={navigateTo} />;
      case 'gallery':
        return <GallerySection onNavigate={navigateTo} />;
      case 'events':
        return <EventsSection onNavigate={navigateTo} />;
      case 'reviews':
        return <ReviewsSection onNavigate={navigateTo} />;
      case 'faq':
        return <FAQSection onNavigate={navigateTo} />;
      case 'contact':
        return <ContactSection onNavigate={navigateTo} />;
      case 'landing':
      default:
        return <Hero onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-gold selection:text-black">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] mix-blend-difference"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      >
        <div className="w-full h-full border border-gold rounded-full flex items-center justify-center">
          <div className="w-1 h-1 bg-gold rounded-full" />
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {loading ? (
          <Splash onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Navbar currentPage={currentPage} onNavigate={navigateTo} />
            <main>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  {renderPage()}
                </motion.div>
              </AnimatePresence>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-marble opacity-20" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/20 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gold/10 rounded-full blur-[150px]" 
        />
      </div>
    </div>
  );
}
