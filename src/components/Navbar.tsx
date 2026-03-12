import { motion } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import React, { useState } from 'react';
import type { PageType } from '../App';

const NAV_LINKS_LEFT = [
  { name: 'Home', page: 'home' as PageType },
  { name: 'About', page: 'about' as PageType },
  { name: 'Menu', page: 'menu' as PageType },
  { name: 'Reservation', page: 'reservations' as PageType },
];

const NAV_LINKS_RIGHT = [
  { name: 'Gallery', page: 'gallery' as PageType },
  { name: 'Events', page: 'events' as PageType },
  { name: 'Reviews', page: 'reviews' as PageType },
  { name: 'FAQ', page: 'faq' as PageType },
  { name: 'Contact', page: 'contact' as PageType },
];

interface NavbarProps {
  user?: { role: string, name: string } | null;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Navbar({ user, currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ item, isActive }: { item: { name: string, page: PageType }, isActive: boolean }) => (
    <motion.button
      onClick={() => onNavigate(item.page)}
      whileHover={{ 
        y: -4, 
        scale: 1.05,
        boxShadow: "0 0 20px rgba(212,175,55,0.4), 0 10px 30px rgba(212,175,55,0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 rounded-lg border text-[10px] uppercase tracking-[0.2em] transition-all duration-300 relative group overflow-hidden ${
        isActive 
          ? 'bg-gold/30 border-gold text-gold shadow-[0_0_20px_rgba(212,175,55,0.5)]' 
          : 'glass-gold border-gold/10 text-white/70 hover:text-gold hover:border-gold/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]'
      }`}
    >
      <span className="relative z-10">{item.name}</span>
      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-black/20" />
    </motion.button>
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
              item={item} 
              isActive={currentPage === item.page}
            />
          ))}
        </div>

        {/* Central Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          onClick={() => onNavigate('home')}
          className="flex flex-col items-center cursor-pointer px-8"
        >
          <div className="relative w-20 h-20 flex items-center justify-center">
            <img 
              src="/splash.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Right Links */}
        <div className="hidden xl:flex items-center gap-3 flex-1 justify-start">
          {NAV_LINKS_RIGHT.map((item) => (
            <NavItem item={item} isActive={currentPage === item.page} />
          ))}
          
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(212,175,55,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 p-2 text-gold-light hover:text-gold transition-colors glass-gold rounded-full border border-gold/20 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          >
            <ShoppingBag size={18} />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="xl:hidden flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(212,175,55,0.5)" }}
            className="p-2 text-gold-light glass-gold rounded-full border border-gold/20 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          >
            <ShoppingBag size={18} />
          </motion.button>
          <button 
            className="text-gold p-2 glass-gold rounded-lg border border-gold/20 hover:shadow-[0_0_10px_rgba(212,175,55,0.3)]"
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
              <button
                key={item.name}
                onClick={() => {
                  onNavigate(item.page);
                  setIsOpen(false);
                }}
                className={`text-[10px] uppercase tracking-widest py-3 border-b border-white/5 text-left ${
                  currentPage === item.page ? 'text-gold' : 'text-white/60 hover:text-gold'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setIsOpen(false);
              onNavigate('reservations');
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
