import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Users, MapPin } from 'lucide-react';
import { useState } from 'react';
import type { PageType } from '../App';

interface EventsSectionProps {
  onNavigate: (page: PageType) => void;
}

const EVENTS = [
  {
    title: "Jazz Night",
    date: "Every Friday",
    time: "8:00 PM - 11:00 PM",
    guests: "Up to 50 guests",
    location: "Main Lounge",
    price: "₹2,500 per person",
    description: "Experience live jazz performances while enjoying our signature cocktails. Our house band performs classic jazz standards and modern interpretations in an intimate setting.",
    fullDescription: "Join us every Friday for an unforgettable evening of live jazz music. Our talented quartet performs everything from smooth jazz to upbeat swing, creating the perfect ambiance for a night out. Complimentary appetizers included with your cover charge.",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Wine Tasting",
    date: "March 25, 2024",
    time: "6:00 PM - 9:00 PM",
    guests: "Limited to 20 guests",
    location: "Wine Cellar",
    price: "₹5,000 per person",
    description: "A curated journey through the finest vineyards of Bordeaux.",
    fullDescription: "Embark on a tasting journey through the legendary wines of Bordeaux. Our sommelier will guide you through a selection of premier and grand cru wines, perfectly paired with artisanal cheeses and gourmet canapés.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Chef's Table",
    date: "Every Saturday",
    time: "7:00 PM - 10:00 PM",
    guests: "12 seats only",
    location: "Private Kitchen",
    price: "₹15,000 per person",
    description: "An intimate dining experience with our executive chef preparing a 7-course tasting menu.",
    fullDescription: "An exclusive behind-the-scenes culinary experience. Watch our executive chef prepare a personalized 7-course tasting menu featuring seasonal ingredients and innovative techniques. Wine pairings included.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Rooftop Cocktails",
    date: "Every Thursday",
    time: "6:00 PM - 11:00 PM",
    guests: "Up to 40 guests",
    location: "Rooftop Terrace",
    price: "₹1,500 per person",
    description: "Enjoy handcrafted cocktails with panoramic city views at our exclusive rooftop bar.",
    fullDescription: "Every Thursday, our rooftop transforms into an exclusive cocktail lounge. Enjoy panoramic city views while our master bartenders craft signature cocktails. Live DJ from 8 PM onwards.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Wine & Cheese Pairing",
    date: "April 5, 2024",
    time: "5:00 PM - 8:00 PM",
    guests: "24 guests max",
    location: "Private Dining Room",
    price: "₹4,500 per person",
    description: "Discover the art of pairing fine wines with artisanal cheeses from around the world.",
    fullDescription: "Learn the intricacies of wine and cheese pairing from our expert sommelier. Sample 6 premium wines perfectly matched with artisan cheeses from France, Italy, and Switzerland.",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Live Piano Evening",
    date: "Every Sunday",
    time: "7:00 PM - 10:00 PM",
    guests: "Up to 30 guests",
    location: "Piano Lounge",
    price: "₹2,000 per person",
    description: "Relax with classical piano performances while savoring our dessert menu.",
    fullDescription: "Unwind with evening classical piano performances by renowned local musicians. Enjoy our special dessert tasting menu featuring house-made pastries and premium coffee.",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cigar Lounge Night",
    date: "April 12, 2024",
    time: "7:00 PM - 11:00 PM",
    guests: "16 guests only",
    location: "Cigar Lounge",
    price: "₹8,000 per person",
    description: "Experience premium cigars paired with cognac in our exclusive cigar lounge.",
    fullDescription: "An evening of refined indulgence. Sample a curated selection of premium cigars from Cuba and beyond, paired with aged cognacs and fine armagnacs. Light appetizers provided.",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Culinary Workshop",
    date: "April 20, 2024",
    time: "11:00 AM - 3:00 PM",
    guests: "15 participants",
    location: "Cooking Studio",
    price: "₹6,000 per person",
    description: "Learn cooking techniques from our chefs in this hands-on culinary experience.",
    fullDescription: "Roll up your sleeves and learn professional cooking techniques. Our chefs will guide you through preparing a 3-course meal that you can recreate at home. Includes recipe booklet and ingredients to take home.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Champagne Brunch",
    date: "Every Sunday",
    time: "12:00 PM - 3:00 PM",
    guests: "Up to 60 guests",
    location: "Main Restaurant",
    price: "₹3,500 per person",
    description: "Indulge in unlimited champagne and our award-winning brunch buffet.",
    fullDescription: "The ultimate Sunday brunch experience. Enjoy unlimited champagne, fresh oysters, sushi, carving stations, and our famous dessert buffet. Live jazz accompanies your meal.",
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Private Dining",
    date: "Available Daily",
    time: "Flexible",
    guests: "10-40 guests",
    location: "Private Room",
    price: "Custom quote",
    description: "Book our private dining room for corporate events and special celebrations.",
    fullDescription: "Host your special occasions in our elegant private dining room. Whether it's a corporate dinner, birthday celebration, or anniversary, our team will create a customized menu and experience just for you.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Mixology Masterclass",
    date: "April 28, 2024",
    time: "5:00 PM - 8:00 PM",
    guests: "20 participants",
    location: "Bar Area",
    price: "₹4,000 per person",
    description: "Master the art of cocktail making with our expert bartenders.",
    fullDescription: "Learn the secrets of cocktail craft from our award-winning bartenders. You'll master 3 classic cocktails, learn bar techniques, and enjoy your creations paired with canapés. Take home a cocktail kit.",
    image: "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Truffle Dinner",
    date: "May 5, 2024",
    time: "7:30 PM - 10:30 PM",
    guests: "24 guests only",
    location: "Chef's Table",
    price: "₹12,000 per person",
    description: "A special black truffle themed tasting menu featuring rare ingredients.",
    fullDescription: "An extraordinary dining event featuring black truffles from Umbria. Our chef has crafted a 6-course tasting menu showcasing the aromatic wonder of fresh black truffles, paired with exceptional Italian wines.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800"
  }
];

function EventCard({ event, index, onLearnMore }: { event: typeof EVENTS[0]; index: number; onLearnMore: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 15 : 0,
          rotateX: isHovered ? -10 : 0,
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -20 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative aspect-[3/4] rounded-3xl overflow-hidden gold-border"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-black" />
        <motion.img
          src={event.image}
          alt={event.title}
          animate={{ scale: isHovered ? 1.2 : 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div 
          animate={{ opacity: isHovered ? 0.3 : 0.5 }}
          className="absolute inset-0 bg-black"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <motion.div
          animate={{ opacity: isHovered ? 0.3 : 0, x: isHovered ? 100 : -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        />
        <div className="absolute inset-0 p-6 flex flex-col justify-end" style={{ transform: 'translateZ(30px)' }}>
          <motion.div animate={{ y: isHovered ? 0 : 10 }} transition={{ duration: 0.3 }}>
            <span className="text-xs text-gold font-bold uppercase tracking-widest mb-2 block">{event.date}</span>
            <h3 className="text-2xl font-serif mb-2">{event.title}</h3>
            <motion.p 
              animate={{ opacity: isHovered ? 1 : 0.7, height: isHovered ? 'auto' : '2.5em' }}
              className="text-sm text-white/70 overflow-hidden"
            >
              {event.description}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ delay: 0.1 }}
            className="mt-4"
          >
            <button 
              onClick={onLearnMore}
              className="px-6 py-2 bg-gold text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors"
            >
              Learn More
            </button>
          </motion.div>
        </div>
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 rounded-3xl border-2 border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          style={{ transform: 'translateZ(1px)' }}
        />
      </motion.div>
    </motion.div>
  );
}

function EventModal({ event, onClose }: { event: typeof EVENTS[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#0a0a0a] rounded-3xl overflow-hidden gold-border"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="relative h-64">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs text-gold font-bold uppercase tracking-widest">{event.date}</span>
            <h2 className="text-3xl font-serif mt-1">{event.title}</h2>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <p className="text-white/80 leading-relaxed">{event.fullDescription}</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
              <Calendar className="text-gold" size={20} />
              <div>
                <p className="text-xs text-white/50 uppercase">Date</p>
                <p className="text-sm text-white">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
              <Clock className="text-gold" size={20} />
              <div>
                <p className="text-xs text-white/50 uppercase">Time</p>
                <p className="text-sm text-white">{event.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
              <Users className="text-gold" size={20} />
              <div>
                <p className="text-xs text-white/50 uppercase">Guests</p>
                <p className="text-sm text-white">{event.guests}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
              <MapPin className="text-gold" size={20} />
              <div>
                <p className="text-xs text-white/50 uppercase">Location</p>
                <p className="text-sm text-white">{event.location}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div>
              <p className="text-xs text-white/50 uppercase">Price</p>
              <p className="text-2xl font-serif text-gold">{event.price}</p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gold text-black font-bold uppercase tracking-wider rounded-full"
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function EventsSection({ onNavigate }: EventsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<typeof EVENTS[0] | null>(null);
  const visibleEvents = showAll ? EVENTS : EVENTS.slice(0, 6);

  return (
    <section id="events" className="py-24 px-6 relative overflow-hidden min-h-screen">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover brightness-30">
        <source src="events.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.5em] text-gold mb-4 block"
          >
            Exclusive Gatherings
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-4xl md:text-6xl font-serif"
          >
            Upcoming <span className="text-gold-gradient italic">Events</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleEvents.map((event, index) => (
            <EventCard 
              event={event} 
              index={index} 
              onLearnMore={() => setSelectedEvent(event)}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.5)" }} 
            whileTap={{ scale: 0.95 }} 
            onClick={() => setShowAll(!showAll)}
            className="px-10 py-4 bg-gold text-black font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            {showAll ? 'Show Less' : 'View All Events'}
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
