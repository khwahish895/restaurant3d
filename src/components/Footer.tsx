import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 px-6 border-t border-gold/10 overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover brightness-30">
        <source src="footer.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-gold-gradient italic">Fine Dining</h3>
            <p className="text-sm text-white/40 leading-relaxed">
              Crafting unforgettable culinary experiences since 1924. Join us for a journey through the finest flavors of Paris.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href={i === 0 ? "https://www.instagram.com/khwahish5632/?hl=en" : "#"}
                  target={i === 0 ? "_blank" : undefined}
                  rel={i === 0 ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -3, color: '#D4AF37' }}
                  className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-white/60 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'About', 'Reservations', 'Gallery'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-white/40 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/40">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>658-A sumer nagar, mansarovar, jaipur</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+91 7424988589</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <Mail size={18} className="text-gold shrink-0" />
                <span>khwahishsingh2005@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold">Newsletter</h4>
            <p className="text-sm text-white/40">Subscribe to receive updates on seasonal menus and exclusive events.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-gold/50"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gold text-black text-[10px] font-bold uppercase px-4 py-2 rounded-full">
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
              © 2024 Fine Dining. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
