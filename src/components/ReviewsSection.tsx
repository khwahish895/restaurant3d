import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: "Eleanor Vance",
    role: "Food Critic",
    content: "An absolute masterpiece of a dining experience. The Truffle Tagliatelle is something I will dream about for years.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Entrepreneur",
    content: "The atmosphere is unmatched. From the moment you walk in, you feel like royalty. The service is impeccable.",
    rating: 5
  },
  {
    name: "Sophia Loren",
    role: "Artist",
    content: "A symphony of flavors and visual art. Every dish is a canvas. Truly the pinnacle of Parisian dining.",
    rating: 5
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-6 bg-marble">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.5em] text-gold mb-4 block"
          >
            Guest Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Voices of <span className="text-gold-gradient italic">Excellence</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-gold p-10 rounded-3xl relative group"
            >
              <Quote className="absolute top-6 right-6 text-gold/10 group-hover:text-gold/20 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="text-white/70 leading-relaxed italic mb-8">"{review.content}"</p>
              
              <div>
                <h4 className="text-lg font-serif text-gold">{review.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/30">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
