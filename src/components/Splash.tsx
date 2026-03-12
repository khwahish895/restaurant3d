import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] bg-marble"
        >
          <div className="relative flex flex-col items-center">
            {/* Golden Particles Simulation */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: Math.random() * 200 - 100, 
                    y: Math.random() * 200 - 100, 
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{ 
                    x: Math.random() * 800 - 400, 
                    y: Math.random() * 800 - 400, 
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                  className="absolute w-1 h-1 bg-gold rounded-full blur-[1px]"
                />
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative z-10"
            >
              <Logo showTagline={true} className="scale-125" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
