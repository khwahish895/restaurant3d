import { motion } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import React, { useState } from 'react';

const NAV_LINKS_LEFT = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Reservation', href: '#reservations' },
  { name: 'Order Online', href: '#order' },
];

const NAV_LINKS_RIGHT = [
  { name: 'Gallery', href: '#gallery' },
  { name: 'Events', href: '#events' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ user }: { user?: { role: string, name: string } | null }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (window.location.hash === '#home' || window.location.hash === '') {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('go-home'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const NavItem = ({ item, onClick }: { item: { name: string, href: string }, onClick?: (e: React.MouseEvent) => void, key?: string }) => (
    <motion.a
      href={item.href}
      onClick={onClick}
      whileHover={{ 
        y: -4, 
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(212,175,55,0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 rounded-lg glass-gold border border-gold/10 text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-gold hover:border-gold/30 transition-all duration-300 relative group overflow-hidden"
    >
      <span className="relative z-10">{item.name}</span>
      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      {/* 3D Bevel Effect */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-black/20" />
    </motion.a>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-6"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        
        {/* Left Links */}
        <div className="hidden xl:flex items-center gap-3 flex-1 justify-end">
          {NAV_LINKS_LEFT.map((item) => (
            <NavItem 
              key={item.name} 
              item={item} 
              onClick={item.name === 'Home' ? handleHomeClick : undefined}
            />
          ))}
        </div>

        {/* Central Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          onClick={() => window.dispatchEvent(new CustomEvent('go-home'))}
          className="flex flex-col items-center cursor-pointer px-8"
        >
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 border border-gold/50 rounded-full animate-spin-slow" />
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 20h20" />
              <path d="M20 20A8 8 0 0 0 4 20" />
              <path d="M12 4v4" />
              <circle cx="12" cy="3" r="1" />
            </svg>
          </div>
          <span className="text-sm font-serif text-gold-gradient italic mt-1 whitespace-nowrap">L'Éclat Doré</span>
        </motion.div>

        {/* Right Links */}
        <div className="hidden xl:flex items-center gap-3 flex-1 justify-start">
          {NAV_LINKS_RIGHT.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(212,175,55,0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (user) {
                window.dispatchEvent(new CustomEvent('go-dashboard'));
              } else {
                window.dispatchEvent(new CustomEvent('open-auth'));
              }
            }}
            className="ml-4 px-6 py-2 border border-gold/30 text-gold-light text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg glass-gold"
          >
            {user ? 'Dashboard' : 'Login'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 p-2 text-gold-light hover:text-gold transition-colors glass-gold rounded-full border border-gold/20"
          >
            <ShoppingBag size={18} />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="xl:hidden flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="p-2 text-gold-light glass-gold rounded-full border border-gold/20"
          >
            <ShoppingBag size={18} />
          </motion.button>
          <button 
            className="text-gold p-2 glass-gold rounded-lg border border-gold/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="xl:hidden absolute top-24 left-6 right-6 glass-gold rounded-3xl p-8 border border-gold/20 shadow-2xl"
        >
          <div className="grid grid-cols-2 gap-4">
            {[...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] uppercase tracking-widest text-white/60 hover:text-gold py-3 border-b border-white/5"
                onClick={(e) => {
                  if (item.name === 'Home') handleHomeClick(e);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setIsOpen(false);
              document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full mt-8 py-4 bg-gold text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl shadow-[0_10px_20px_rgba(212,175,55,0.3)]"
          >
            Book A Table
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
}
