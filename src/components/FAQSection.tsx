import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { PageType } from '../App';

interface FAQSectionProps {
  onNavigate: (page: PageType) => void;
}

const FAQS = [
  {
    question: "What is the dress code at L'Éclat Doré?",
    answer: "We kindly request our guests to adhere to a formal or smart-casual dress code. Jackets are preferred for gentlemen, though not mandatory."
  },
  {
    question: "Do you offer vegetarian or vegan options?",
    answer: "Yes, our menu includes a selection of curated vegetarian and vegan dishes. Please inform your server of any dietary requirements."
  },
  {
    question: "How far in advance should I book a table?",
    answer: "We recommend booking at least 2-3 weeks in advance for weekend dinners. For special events, please contact our concierge."
  }
];

export default function FAQSection({ onNavigate }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover brightness-30">
        <source src="FAQ.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.5em] text-gold mb-4 block"
          >
            Common Inquiries
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-4xl font-serif"
          >
            Frequently Asked <span className="text-gold-gradient italic">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="glass-gold rounded-2xl border border-gold/10 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gold/5 transition-colors"
              >
                <span className="text-sm font-serif tracking-wide">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="text-gold"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-xs text-white/50 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
