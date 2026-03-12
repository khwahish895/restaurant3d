import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-marble">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.5em] text-gold mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-serif">Contact <span className="text-gold-gradient italic">Information</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="glass-gold p-8 rounded-3xl border border-gold/10 flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-serif mb-2">Our Location</h4>
                <p className="text-sm text-white/50 leading-relaxed">123 Avenue des Champs-Élysées, Paris, France</p>
              </div>
            </div>

            <div className="glass-gold p-8 rounded-3xl border border-gold/10 flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-serif mb-2">Phone Number</h4>
                <p className="text-sm text-white/50 leading-relaxed">+33 1 23 45 67 89</p>
              </div>
            </div>

            <div className="glass-gold p-8 rounded-3xl border border-gold/10 flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-lg font-serif mb-2">Opening Hours</h4>
                <p className="text-sm text-white/50 leading-relaxed">Mon - Fri: 18:00 - 23:00</p>
                <p className="text-sm text-white/50 leading-relaxed">Sat - Sun: 12:00 - 00:00</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-gold p-10 rounded-3xl border border-gold/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-gold/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-gold/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-gold/50" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-gold/50 resize-none"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gold text-black font-bold uppercase tracking-[0.3em] text-xs rounded-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
