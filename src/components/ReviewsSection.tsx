import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { PageType } from '../App';

interface ReviewsSectionProps {
  onNavigate: (page: PageType) => void;
}

const REVIEWS = [
  {
    name: "Eleanor Vance",
    role: "Food Critic",
    content: "An absolute masterpiece of a dining experience. The Truffle Tagliatelle is something I will dream about for years.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Entrepreneur",
    content: "The atmosphere is unmatched. From the moment you walk in, you feel like royalty. The service is impeccable.",
    rating: 5
  },
  {
    name: "Sophia Loren",
    role: "Artist",
    content: "A symphony of flavors and visual art. Every dish is a canvas. Truly the pinnacle of Parisian dining.",
    rating: 5
  },
  {
    name: "James Mitchell",
    role: "Celebrity Chef",
    content: "As a chef myself, I rarely am impressed. But this restaurant redefines culinary excellence. Each dish tells a story.",
    rating: 5
  },
  {
    name: "Isabella Chen",
    role: "Travel Blogger",
    content: "The most memorable dining experience of my life. The attention to detail in every element is remarkable.",
    rating: 5
  },
  {
    name: "Alexander Roy",
    role: "Wine Connoisseur",
    content: "An extraordinary selection of wines paired perfectly with each course. A paradise for wine lovers.",
    rating: 5
  }
];

export default function ReviewsSection({ onNavigate }: ReviewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-24 px-6 relative overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover brightness-30">
        <source src="review.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.5em] text-gold mb-4 block"
          >
            Guest Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Voices of <span className="text-gold-gradient italic">Excellence</span>
          </motion.h2>
        </div>

        <div className="relative">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-black/50 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
          >
            ←
          </motion.button>

          <div className="overflow-hidden px-12">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[0, 1, 2].map((offset) => {
                const index = (currentIndex + offset) % REVIEWS.length;
                const review = REVIEWS[index];
                const isCenter = offset === 1;
                
                return (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ 
                      opacity: isCenter ? 1 : 0.6,
                      y: 0,
                      scale: isCenter ? 1 : 0.85,
                    }}
                    transition={{ delay: offset * 0.1 }}
                    whileHover={{ 
                      scale: isCenter ? 1.05 : 0.9,
                      y: -10,
                    }}
                    className={`glass-gold p-8 md:p-10 rounded-3xl relative group ${isCenter ? 'z-10' : 'z-0'}`}
                  >
                    <Quote className="absolute top-6 right-6 text-gold/10 group-hover:text-gold/30 transition-colors" size={48} />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <Star size={14} className="text-gold fill-gold" />
                        </motion.div>
                      ))}
                    </div>

                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-white/70 leading-relaxed italic mb-8"
                    >
                      "{review.content}"
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="text-lg font-serif text-gold">{review.name}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-white/30">{review.role}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-black/50 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
          >
            →
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-2 mt-10"
        >
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentIndex === i 
                  ? 'w-10 bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)]' 
                  : 'w-4 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-white/30 text-sm">{REVIEWS.length} Reviews</p>
        </motion.div>
      </div>
    </section>
  );
}
