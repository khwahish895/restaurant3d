import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
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
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      {/* Floating Ingredients (Simulated with high-quality images/icons) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img
          style={{ y: y1, rotate }}
          src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=200"
          className="absolute top-[20%] left-[15%] w-24 h-24 object-cover rounded-full border border-gold/30 shadow-2xl blur-[1px]"
          alt="Ingredient"
          referrerPolicy="no-referrer"
        />
        <motion.img
          style={{ y: y2, rotate: -rotate }}
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=200"
          className="absolute bottom-[20%] right-[15%] w-32 h-32 object-cover rounded-full border border-gold/30 shadow-2xl"
          alt="Ingredient"
          referrerPolicy="no-referrer"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-[20%] w-16 h-16 bg-gold/10 rounded-full border border-gold/20 backdrop-blur-sm"
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-xs uppercase tracking-[0.5em] text-gold-light mb-4 block">
            Est. 1924 • Paris
          </span>
          <h1 className="text-6xl md:text-9xl font-serif leading-none mb-8">
            Experience <br />
            <span className="text-gold-gradient italic">Fine Dining</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-base text-white/60 leading-relaxed tracking-wide mb-10">
            A symphony of flavors crafted with precision, served in an atmosphere of timeless elegance. 
            Discover the art of culinary excellence.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gold text-black font-bold uppercase tracking-[0.2em] text-xs rounded-full"
            >
              Explore Menu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(212,175,55,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.dispatchEvent(new CustomEvent('open-auth'))}
              className="px-10 py-4 border border-gold/30 text-gold-light font-bold uppercase tracking-[0.2em] text-xs rounded-full backdrop-blur-sm"
            >
              Order Online
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
