import { useEffect, useState } from 'react';

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Fade in on mount
    setTimeout(() => setIsVisible(true), 100);

    // Start exit after 4 seconds
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 1000);
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity duration-1000 ease-in-out ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      >
        <source src="/splash.mp4" type="video/mp4" />
      </video>
      
      {/* Logo image in center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/splash.png" 
          alt="Splash Logo" 
          className="w-64 h-64 object-contain"
        />
      </div>
    </div>
  );
}
