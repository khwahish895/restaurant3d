import { motion } from 'motion/react';

const EVENTS = [
  {
    title: "Jazz Night",
    date: "Every Friday",
    description: "Experience live jazz performances while enjoying our signature cocktails.",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Wine Tasting",
    date: "March 25, 2024",
    description: "A curated journey through the finest vineyards of Bordeaux.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800"
  }
];

export default function EventsSection() {
  return (
    <section id="events" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.5em] text-gold mb-4 block">Exclusive Gatherings</span>
          <h2 className="text-4xl md:text-6xl font-serif">Upcoming <span className="text-gold-gradient italic">Events</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {EVENTS.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="relative aspect-[16/9] rounded-3xl overflow-hidden gold-border group cursor-pointer"
            >
              <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-xs text-gold font-bold uppercase tracking-widest mb-2 block">{event.date}</span>
                <h3 className="text-3xl font-serif mb-4">{event.title}</h3>
                <p className="text-sm text-white/60 max-w-md">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
