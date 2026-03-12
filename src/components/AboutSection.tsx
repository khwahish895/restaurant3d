import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden gold-border">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800" 
                alt="Chef" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-2xl overflow-hidden border-4 border-[#050505] hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600" 
                alt="Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="text-xs uppercase tracking-[0.5em] text-gold">Our Heritage</span>
            <h2 className="text-4xl md:text-6xl font-serif">A Legacy of <br /><span className="text-gold-gradient italic">Culinary Art</span></h2>
            <p className="text-white/60 leading-relaxed tracking-wide">
              Founded in the heart of Paris in 1924, L'Éclat Doré has been a beacon of gastronomic excellence for over a century. Our philosophy is simple: to honor the finest ingredients through innovative techniques and impeccable service.
            </p>
            <p className="text-white/60 leading-relaxed tracking-wide">
              Under the vision of Executive Chef Julian Marcelle, we continue to push the boundaries of fine dining, creating immersive experiences that engage all the senses.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <h4 className="text-3xl font-serif text-gold mb-2">100+</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Years of Excellence</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-gold mb-2">3</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Michelin Stars</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-gold mb-2">50k+</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Happy Guests</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
