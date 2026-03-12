import { motion } from 'motion/react';

export default function Logo({ className = "", showTagline = false }: { className?: string, showTagline?: boolean }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Ornamental Swirls (Simulated with SVGs) */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-gold opacity-40 animate-pulse">
          <path d="M20,50 Q20,20 50,20 T80,50 T50,80 T20,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M30,50 Q30,30 50,30 T70,50 T50,70 T30,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        
        {/* Golden Crest / Circle */}
        <div className="absolute inset-0 border-2 border-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
        
        {/* Serving Dome (Cloche) Icon */}
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-gold"
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 20h20" />
            <path d="M20 20A8 8 0 0 0 4 20" />
            <path d="M12 4v4" />
            <circle cx="12" cy="3" r="1" />
          </svg>
        </motion.div>
      </div>
      
      <h1 className="mt-4 text-3xl font-serif font-bold tracking-[0.1em] text-gold-gradient uppercase">
        L'Éclat Doré
      </h1>
      
      {showTagline && (
        <p className="mt-1 text-[10px] font-serif italic tracking-[0.3em] text-gold-light opacity-80">
          Fine Dining Reimagined
        </p>
      )}
    </div>
  );
}
