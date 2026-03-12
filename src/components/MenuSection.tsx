import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 1,
    name: "Truffle Tagliatelle",
    description: "Hand-rolled pasta, black winter truffle, 36-month aged parmesan.",
    price: "$42",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800",
    tag: "Chef's Special"
  },
  {
    id: 2,
    name: "Wagyu Ribeye",
    description: "A5 Grade Miyazaki Wagyu, smoked bone marrow butter, gold leaf.",
    price: "$120",
    image: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=800",
    tag: "Bestseller"
  },
  {
    id: 3,
    name: "Lobster Thermidor",
    description: "Atlantic lobster, cognac cream, gruyère crust, micro-herbs.",
    price: "$85",
    image: "https://images.unsplash.com/photo-1533682805518-48d1f5b8cd3a?auto=format&fit=crop&q=80&w=800",
    tag: "Premium"
  },
  {
    id: 4,
    name: "Golden Saffron Risotto",
    description: "Acquerello rice, Persian saffron, edible gold flakes, sea scallops.",
    price: "$58",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800",
    tag: "Signature"
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 px-6 bg-marble">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.5em] text-gold mb-4 block"
          >
            Culinary Masterpieces
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            The <span className="text-gold-gradient italic">Signature</span> Menu
          </motion.h2>
          <div className="w-24 h-[1px] bg-gold/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl gold-border glass-gold">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={12} className="text-gold fill-gold" />
                    <span className="text-[10px] uppercase tracking-widest text-gold-light">{item.tag}</span>
                  </div>
                  <h3 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">{item.name}</h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-serif text-gold">{item.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => alert(`${item.name} added to cart.`)}
                      className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
                    >
                      +
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* 3D Pop-out effect simulation */}
              <div className="absolute -inset-2 bg-gold/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('Full menu is coming soon!')}
            className="px-12 py-4 border border-gold/30 text-gold-light text-xs font-bold uppercase tracking-[0.3em] rounded-full hover:bg-gold/5 transition-colors"
          >
            View Full Menu
          </motion.button>
        </div>
      </div>
    </section>
  );
}
