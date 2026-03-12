import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { PageType } from '../App';

interface GallerySectionProps {
  onNavigate: (page: PageType) => void;
}

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1533682805518-48d1f5b8cd3a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1599021456807-25db0f974333?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518516248106-349f2a9d11c4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1514516345959-29f1cc0b0474?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1533682805518-48d1f5b8cd3a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1599021456807-25db0f974333?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518516248106-349f2a9d11c4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1514516345959-29f1cc0b0474?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
];

export default function GallerySection({ onNavigate }: GallerySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <section id="gallery" className="py-24 px-6 relative overflow-hidden min-h-screen">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover brightness-30"
      >
        <source src="gallery.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs uppercase tracking-[0.5em] text-gold mb-4 block w-full"
            >
              Visual Journey
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              className="text-4xl md:text-6xl font-serif mb-6 w-full"
            >
              The <span className="text-gold-gradient italic">Gallery</span>
            </motion.h2>
          </motion.div>
        </div>

        <div className="relative h-[500px] flex items-center justify-center">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={prevSlide} className="absolute left-4 z-20 w-14 h-14 rounded-full bg-black/50 border border-gold/40 flex items-center justify-center text-gold hover:text-white transition-all">
            <ChevronLeft size={28} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={nextSlide} className="absolute right-4 z-20 w-14 h-14 rounded-full bg-black/50 border border-gold/40 flex items-center justify-center text-gold hover:text-white transition-all">
            <ChevronRight size={28} />
          </motion.button>

          <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
            {GALLERY_IMAGES.map((src, index) => {
              const offset = (index - currentIndex + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
              const isActive = offset === 0;
              const isPrev = offset === GALLERY_IMAGES.length - 1;
              const isNext = offset === 1;
              
              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -350 : isNext ? 350 : 0,
                    scale: isActive ? 1 : 0.7,
                    opacity: isActive ? 1 : 0.4,
                    rotateY: isActive ? 0 : isPrev ? 30 : isNext ? -30 : 0,
                    zIndex: isActive ? 10 : 5
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={isActive ? { scale: 1.02, boxShadow: "0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.4)" } : {}}
                  className="absolute w-80 md:w-96"
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                >
                  <div
                    className="relative overflow-hidden rounded-3xl gold-border bg-black/80 backdrop-blur-sm cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <motion.img whileHover={{ scale: 1.15 }} transition={{ duration: 0.5 }} src={src} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    </div>
                    <div className="p-6 text-center">
                      <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-2xl font-serif text-white mb-2">Gallery Image {index + 1}</motion.h3>
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/60 text-sm mb-4">Experience our beautiful restaurant atmosphere</motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {GALLERY_IMAGES.slice(0, 20).map((_, index) => (
            <motion.button 
              key={index} 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setCurrentIndex(index)} 
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'w-2 bg-white/30 hover:bg-white/50'}`} 
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-10"
        >
          <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.5)" }} whileTap={{ scale: 0.95 }} className="px-10 py-4 bg-gold text-black font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            View All Photos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
