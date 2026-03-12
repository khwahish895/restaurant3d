import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import AuthPage from './components/AuthPage';
import CustomerDashboard from './components/CustomerDashboard';
import AdminDashboard from './components/AdminDashboard';

import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import EventsSection from './components/EventsSection';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState<{ role: 'customer' | 'admin', name: string } | null>(null);
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleOpenAuth = () => setShowAuth(true);
    const handleGoHome = () => setView('landing');
    const handleGoDashboard = () => setView('dashboard');

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('open-auth', handleOpenAuth);
    window.addEventListener('go-home', handleGoHome);
    window.addEventListener('go-dashboard', handleGoDashboard);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('open-auth', handleOpenAuth);
      window.removeEventListener('go-home', handleGoHome);
      window.removeEventListener('go-dashboard', handleGoDashboard);
    };
  }, []);

  const handleLogin = (userData: { role: 'customer' | 'admin', name: string }) => {
    setUser(userData);
    setShowAuth(false);
    setView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setView('landing');
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
        ) : showAuth ? (
          <AuthPage key="auth" onBack={() => setShowAuth(false)} onLogin={handleLogin} />
        ) : view === 'dashboard' && user ? (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Navbar user={user} />
            {user.role === 'admin' ? (
              <AdminDashboard user={user} onLogout={handleLogout} />
            ) : (
              <CustomerDashboard user={user} onLogout={handleLogout} />
            )}
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Navbar user={user} />
            <main>
              <Hero />
              <MenuSection />
              <AboutSection />
              <ReservationSection />
              <EventsSection />
              <ReviewsSection />
              <GallerySection />
              <FAQSection />
              <ContactSection />
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
