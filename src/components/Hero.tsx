import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import type { PageType } from '../App';

interface HeroProps {
  onNavigate: (page: PageType) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section id="home" ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      >
        <source src="/home.mp4" type="video/mp4" />
      </video>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating 3D Cubes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 1000 - 500, 
              y: Math.random() * 800 - 400,
              rotateX: Math.random() * 360,
              rotateY: Math.random() * 360,
              opacity: 0
            }}
            animate={{ 
              x: [Math.random() * 1000 - 500, Math.random() * 1000 - 500, Math.random() * 1000 - 500],
              y: [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400],
              rotateX: [0, 360, 720],
              rotateY: [0, 360, 720],
              opacity: [0, 0.3, 0.5, 0.3, 0]
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
            className="absolute w-20 h-20 border border-gold/30"
          >
            <div className="absolute inset-0 bg-gold/5 backdrop-blur-sm" 
              style={{ 
                transform: 'translateZ(40px)',
                boxShadow: '0 0 20px rgba(212,175,55,0.2)'
              }} 
            />
            <div className="absolute inset-0 bg-gold/5 backdrop-blur-sm border border-gold/30"
              style={{ 
                transform: 'rotateX(90deg) translateZ(20px)'
              }} 
            />
            <div className="absolute inset-0 bg-gold/5 backdrop-blur-sm border border-gold/30"
              style={{ 
                transform: 'rotateY(90deg) translateZ(20px)'
              }} 
            />
          </motion.div>
        ))}

        {/* Floating Spheres */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`sphere-${i}`}
            initial={{ 
              x: Math.random() * 1000 - 500, 
              y: Math.random() * 800 - 400,
              scale: 0,
              opacity: 0
            }}
            animate={{ 
              x: [Math.random() * 1000 - 500, Math.random() * 1000 - 500],
              y: [Math.random() * 800 - 400, Math.random() * 800 - 400],
              scale: [0, 1.5, 1.5, 0],
              opacity: [0, 0.6, 0.6, 0]
            }}
            transition={{ 
              duration: 8 + Math.random() * 7, 
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            className="absolute rounded-full border border-gold/20 bg-gold/5"
            style={{
              width: 60 + Math.random() * 80,
              height: 60 + Math.random() * 80,
              transformStyle: 'preserve-3d',
              boxShadow: '0 0 30px rgba(212,175,55,0.1), inset 0 0 30px rgba(212,175,55,0.1)'
            }}
          />
        ))}

        {/* Golden Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            initial={{ 
              x: Math.random() * 1200 - 600, 
              y: Math.random() * 800 - 400,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              y: [Math.random() * 800 - 400, Math.random() * 800 - 800],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{ 
              duration: 4 + Math.random() * 4, 
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
            className="absolute w-2 h-2 bg-gold rounded-full blur-[1px]"
            style={{
              boxShadow: '0 0 10px rgba(212,175,55,0.8)'
            }}
          />
        ))}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      {/* Floating Ingredients with 3D Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img
          style={{ y: y1, rotate }}
          initial={{ opacity: 0, scale: 0.5, rotateX: -180 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          whileHover={{ scale: 1.2, rotate: 15, z: 50 }}
          src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=200"
          className="absolute top-[20%] left-[15%] w-24 h-24 object-cover rounded-full border-2 border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          alt="Ingredient"
          referrerPolicy="no-referrer"
        />
        <motion.img
          style={{ y: y2, rotate: -rotate }}
          initial={{ opacity: 0, scale: 0.5, rotateX: 180 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotateX: 0,
            rotateZ: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 1.5, 
            delay: 0.7,
            rotateZ: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ 
            scale: 1.4, 
            rotate: -20, 
            z: 50,
            boxShadow: "0 0 50px rgba(212,175,55,0.8), 0 0 80px rgba(212,175,55,0.4)"
          }}
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=200"
          className="absolute bottom-[20%] right-[15%] w-32 h-32 object-cover rounded-full border-2 border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          alt="Ingredient"
          referrerPolicy="no-referrer"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[20%] w-20 h-20 bg-gold/20 rounded-full border border-gold/40 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-xs uppercase tracking-[0.5em] text-gold mb-4 block">
            Est. 1924 • Paris
          </span>
          
          {/* 3D Animated Title */}
          <h1 className="text-6xl md:text-9xl font-serif leading-none mb-8 relative">
            <motion.span
              initial={{ opacity: 0, rotateX: -90, y: 50 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="block text-white"
              style={{ 
                textShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 60px rgba(212,175,55,0.3)',
                transformStyle: 'preserve-3d'
              }}
            >
              Experience
            </motion.span>
            <motion.span
              initial={{ opacity: 0, rotateX: -90, y: 50 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="block text-gold-gradient italic"
              style={{ 
                textShadow: '0 10px 40px rgba(212,175,55,0.5), 0 0 80px rgba(212,175,55,0.4)',
                transformStyle: 'preserve-3d'
              }}
            >
              Fine Dining
            </motion.span>
            
            {/* 3D Effect Layer */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)',
                transform: 'translateZ(20px)',
                opacity: 0.5
              }}
            />
          </h1>
          
          {/* 3D Animated Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-xl mx-auto text-sm md:text-base text-white/60 leading-relaxed tracking-wide mb-10"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              transform: 'translateZ(10px)'
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              A symphony of flavors crafted with precision, served in an atmosphere of timeless elegance.
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="block mt-2 text-gold/80"
            >
              Discover the art of culinary excellence.
            </motion.span>
          </motion.p>
          
          {/* 3D Animated Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px rgba(212,175,55,0.6), 0 0 80px rgba(212,175,55,0.3), 0 20px 40px rgba(0,0,0,0.3)",
                rotateY: 5
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('menu')}
              className="px-10 py-4 bg-gold text-black font-bold uppercase tracking-[0.2em] text-xs rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              Explore Menu
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 1.4, type: "spring" }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(212,175,55,0.1)",
                boxShadow: "0 0 40px rgba(212,175,55,0.5), 0 0 80px rgba(212,175,55,0.2), 0 20px 40px rgba(0,0,0,0.3)",
                rotateY: -5
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('reservations')}
              className="px-10 py-4 border border-gold/30 text-gold-light font-bold uppercase tracking-[0.2em] text-xs rounded-full backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              Book a Table
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.3em] text-gold/50">Scroll</span>
      </motion.div>
    </section>
  );
}
