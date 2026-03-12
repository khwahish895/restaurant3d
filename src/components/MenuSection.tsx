import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { PageType } from '../App';

interface MenuSectionProps {
  onNavigate: (page: PageType) => void;
}

const MENU_CATEGORIES = [
  {
    name: "Starters",
    items: [
      { id: 1, name: "Truffle Tagliatelle", description: "Hand-rolled pasta, black truffle, aged parmesan.", price: "₹42", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800", tag: "Chef's Special" },
      { id: 2, name: "Wagyu Ribeye", description: "A5 Miyazaki Wagyu, bone marrow butter, gold leaf.", price: "₹120", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800", tag: "Bestseller" },
      { id: 3, name: "Lobster Thermidor", description: "Atlantic lobster, cognac cream, gruyère crust.", price: "₹85", image: "https://images.unsplash.com/photo-1533682805518-48d1f5b8cd3a?auto=format&fit=crop&q=80&w=800", tag: "Premium" },
      { id: 4, name: "Golden Risotto", description: "Persian saffron, gold flakes, sea scallops.", price: "₹58", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800", tag: "Signature" },
      { id: 5, name: "Foie Gras", description: "House-made, brioche toast, fig compote.", price: "₹65", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800", tag: "Premium" },
      { id: 6, name: "Seared Scallops", description: "Pan-seared, cauliflower purée, truffle oil.", price: "₹45", image: "https://images.unsplash.com/photo-1599021456807-25db0f974333?auto=format&fit=crop&q=80&w=800", tag: "Signature" }
    ]
  },
  {
    name: "Appetizers",
    items: [
      { id: 7, name: "Tuna Tartare", description: "Fresh yellowfin, avocado, sesame, ponzu.", price: "₹38", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=800", tag: "Fresh" },
      { id: 8, name: "Burrata Caprese", description: "Fresh burrata, heirloom tomatoes, basil oil.", price: "₹28", image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=800", tag: "Classic" },
      { id: 9, name: "Beef Carpaccio", description: "Thinly sliced beef, arugula, parmesan.", price: "₹32", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800", tag: "Classic" },
      { id: 10, name: "Oysters", description: "Fresh atlantic, mignonette, lemon.", price: "₹48", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800", tag: "Fresh" },
      { id: 11, name: "Caviar Service", description: "Beluga caviar, blini, crème fraîche.", price: "₹120", image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=800", tag: "Premium" },
      { id: 12, name: "Shrimp Cocktail", description: "Jumbo shrimp, cocktail sauce, lemon.", price: "₹36", image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=800", tag: "Classic" }
    ]
  },
  {
    name: "Soups & Salads",
    items: [
      { id: 13, name: "French Onion", description: "Caramelized onions, gruyère crouton.", price: "₹18", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800", tag: "Classic" },
      { id: 14, name: "Lobster Bisque", description: "Fresh lobster, brandy cream, chives.", price: "₹24", image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=800", tag: "Premium" },
      { id: 15, name: "Caesar Salad", description: "Romaine, parmesan, anchovy dressing.", price: "₹16", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800", tag: "Classic" },
      { id: 16, name: "Beet Salad", description: "Golden beets, goat cheese, arugula.", price: "₹20", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800", tag: "Fresh" },
      { id: 17, name: "Wedge Salad", description: "Iceberg, blue cheese, bacon, tomatoes.", price: "₹18", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800", tag: "Classic" },
      { id: 18, name: "Spinach Salad", description: "Baby spinach, warm bacon dressing.", price: "₹17", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800", tag: "Fresh" }
    ]
  },
  {
    name: "Seafood",
    items: [
      { id: 19, name: "Grilled Salmon", description: "Atlantic salmon, lemon beurre blanc.", price: "₹52", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800", tag: "Fresh" },
      { id: 20, name: "Pan-Roasted Halibut", description: "Wild halibut, saffron risotto.", price: "₹68", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800", tag: "Premium" },
      { id: 21, name: "Seared Sea Bass", description: "Mediterranean, olive tapenade.", price: "₹72", image: "https://images.unsplash.com/photo-1518516248106-349f2a9d11c4?auto=format&fit=crop&q=80&w=800", tag: "Signature" },
      { id: 22, name: "King Crab Legs", description: "Alaska king crab, drawn butter.", price: "₹95", image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=800", tag: "Premium" },
      { id: 23, name: "Maine Lobster", description: "2 lb Maine lobster, drawn butter.", price: "₹145", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800", tag: "Signature" },
      { id: 24, name: "Swordfish Steak", description: "Grilled swordfish, capers.", price: "₹58", image: "https://images.unsplash.com/photo-1518516248106-349f2a9d11c4?auto=format&fit=crop&q=80&w=800", tag: "Fresh" }
    ]
  },
  {
    name: "Main Course",
    items: [
      { id: 25, name: "Duck Confit", description: "Slow-cooked duck leg, apple purée.", price: "₹65", image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&q=80&w=800", tag: "Signature" },
      { id: 26, name: "Beef Wellington", description: "Prime beef, mushroom duxelles.", price: "₹95", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800", tag: "Classic" },
      { id: 27, name: "Lamb Rack", description: "New Zealand lamb, rosemary jus.", price: "₹88", image: "https://images.unsplash.com/photo-1514516345959-29f1cc0b0474?auto=format&fit=crop&q=80&w=800", tag: "Premium" },
      { id: 28, name: "Filet Mignon", description: "8oz prime filet, truffle butter.", price: "₹78", image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800", tag: "Bestseller" },
      { id: 29, name: "Porterhouse Steak", description: "32oz for two, herb butter.", price: "₹125", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800", tag: "Premium" },
      { id: 30, name: "Veal Chop", description: "Grilled veal, mushroom ragout.", price: "₹72", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800", tag: "Signature" }
    ]
  },
  {
    name: "Vegetarian",
    items: [
      { id: 31, name: "Wild Mushroom Risotto", description: "Arborio rice, porcini, truffle.", price: "₹38", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800", tag: "Signature" },
      { id: 32, name: "Eggplant Parmesan", description: "Breaded eggplant, marinara.", price: "₹32", image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&q=80&w=800", tag: "Classic" },
      { id: 33, name: "Veg Wellington", description: "Seasonal vegetables, puff pastry.", price: "₹42", image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&q=80&w=800", tag: "Signature" },
      { id: 34, name: "Truffle Pasta", description: "Fresh pasta, black truffle.", price: "₹45", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800", tag: "Signature" },
      { id: 35, name: "Stuffed Squash", description: "Butternut squash, quinoa.", price: "₹28", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800", tag: "Fresh" },
      { id: 36, name: "Artichoke Hearts", description: "Stuffed artichoke, breadcrumbs.", price: "₹26", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800", tag: "Classic" }
    ]
  },
  {
    name: "Drinks",
    items: [
      { id: 37, name: "Champagne Royale", description: "Dom Pérignon, fresh berries.", price: "₹45", image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80&w=800", tag: "Premium" },
      { id: 38, name: "Old Fashioned", description: "Woodford Reserve, orange peel.", price: "₹22", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800", tag: "Classic" },
      { id: 39, name: "Signature Martini", description: "Grey Goose, elderflower.", price: "₹28", image: "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&q=80&w=800", tag: "Signature" },
      { id: 40, name: "Red Wine", description: "Château Margaux 2015.", price: "₹180", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800", tag: "Rare" },
      { id: 41, name: "White Wine", description: "Puligny-Montrachet.", price: "₹95", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800", tag: "Premium" },
      { id: 42, name: "Cognac XO", description: "Remy Martin Louis XIII.", price: "₹85", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800", tag: "Premium" }
    ]
  },
  {
    name: "Desserts",
    items: [
      { id: 43, name: "Chocolate Fondant", description: "Valrhona, molten center.", price: "₹24", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800", tag: "Popular" },
      { id: 44, name: "Crème Brûlée", description: "Madagascar vanilla, caramelized.", price: "₹18", image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&q=80&w=800", tag: "Classic" },
      { id: 45, name: "Gold Leaf Tiramisu", description: "Espresso, mascarpone, gold flakes.", price: "₹32", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800", tag: "Signature" },
      { id: 46, name: "Seasonal Fruit", description: "Fresh exotic fruits.", price: "₹20", image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80&w=800", tag: "Fresh" },
      { id: 47, name: "Soufflé", description: "Grand Marnier or Chocolate.", price: "₹28", image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&q=80&w=800", tag: "Signature" },
      { id: 48, name: "Ice Cream Sundae", description: "Premium, hot fudge, cream.", price: "₹16", image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80&w=800", tag: "Classic" }
    ]
  }
];

export default function MenuSection({ onNavigate }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCategory = MENU_CATEGORIES[activeCategory];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentCategory.items.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [currentCategory.items.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % currentCategory.items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + currentCategory.items.length) % currentCategory.items.length);
  };

  return (
    <section id="menu" className="py-24 px-6 relative overflow-hidden min-h-screen">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover brightness-40">
        <source src="/menu.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-wrap justify-center gap-2">
            {MENU_CATEGORIES.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => { setActiveCategory(index); setCurrentIndex(0); }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212,175,55,0.8)" }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all cursor-pointer pointer-events-auto z-20 ${
                  activeCategory === index
                    ? 'bg-gold text-black shadow-[0_0_35px_rgba(212,175,55,0.9)]'
                    : 'bg-white/10 text-white/80 hover:bg-white/25 border border-white/20 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="relative h-[500px] flex items-center justify-center">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={prevSlide} className="absolute left-4 z-20 w-14 h-14 rounded-full bg-black/50 border border-gold/40 flex items-center justify-center text-gold hover:text-white transition-all">
            <ChevronLeft size={28} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={nextSlide} className="absolute right-4 z-20 w-14 h-14 rounded-full bg-black/50 border border-gold/40 flex items-center justify-center text-gold hover:text-white transition-all">
            <ChevronRight size={28} />
          </motion.button>

          <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
            {currentCategory.items.map((item, index) => {
              const offset = (index - currentIndex + currentCategory.items.length) % currentCategory.items.length;
              const isActive = offset === 0;
              const isPrev = offset === currentCategory.items.length - 1;
              const isNext = offset === 1;
              
              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -350 : isNext ? 350 : 0,
                    scale: isActive ? 1 : 0.7,
                    opacity: isActive ? 1 : 0.4,
                    rotateY: isActive ? 0 : isPrev ? 30 : isNext ? -30 : 0,
                    zIndex: isActive ? 10 : 5
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={isActive ? { scale: 1.02, boxShadow: "0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.4)" } : {}}
                  className="absolute w-80 md:w-96"
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                >
                  <div
                    onClick={() => alert(`${item.name} added to cart!`)}
                    className="relative overflow-hidden rounded-3xl gold-border bg-black/80 backdrop-blur-sm cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <motion.img whileHover={{ scale: 1.15 }} transition={{ duration: 0.5 }} src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="absolute top-4 left-4 px-3 py-1 bg-gold/90 rounded-full">
                        <span className="text-xs font-bold text-black uppercase">{item.tag}</span>
                      </motion.div>
                    </div>
                    <div className="p-6 text-center">
                      <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-2xl font-serif text-white mb-2">{item.name}</motion.h3>
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/60 text-sm mb-4 line-clamp-2">{item.description}</motion.p>
                      <div className="flex items-center justify-center gap-4">
                        <span className="text-2xl font-serif text-gold">{item.price}</span>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => alert(`${item.name} added to cart!`)} className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
                          +
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {currentCategory.items.map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'w-2 bg-white/30 hover:bg-white/50'}`} />
          ))}
        </div>

        <div className="text-center mt-10">
          <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.5)" }} whileTap={{ scale: 0.95 }} className="px-10 py-4 bg-gold text-black font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            View Full Menu
          </motion.button>
        </div>
      </div>
    </section>
  );
}
