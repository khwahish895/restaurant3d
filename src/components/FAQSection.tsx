import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.5em] text-gold mb-4 block">Common Inquiries</span>
          <h2 className="text-4xl font-serif">Frequently Asked <span className="text-gold-gradient italic">Questions</span></h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="glass-gold rounded-2xl border border-gold/10 overflow-hidden">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
