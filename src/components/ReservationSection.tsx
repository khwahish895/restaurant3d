import { motion } from 'motion/react';
import { Users, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

const TABLES = [
  { id: 1, size: 2, status: 'available', x: '20%', y: '20%' },
  { id: 2, size: 4, status: 'booked', x: '50%', y: '20%' },
  { id: 3, size: 2, status: 'available', x: '80%', y: '20%' },
  { id: 4, size: 6, status: 'available', x: '20%', y: '50%' },
  { id: 5, size: 2, status: 'booked', x: '50%', y: '50%' },
  { id: 6, size: 4, status: 'available', x: '80%', y: '50%' },
  { id: 7, size: 2, status: 'available', x: '35%', y: '80%' },
  { id: 8, size: 2, status: 'available', x: '65%', y: '80%' },
];

export default function ReservationSection() {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  return (
    <section id="reservations" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-marble opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-gold p-10 rounded-3xl"
          >
            <span className="text-xs uppercase tracking-[0.5em] text-gold mb-4 block">Secure Your Experience</span>
            <h2 className="text-4xl font-serif mb-8">Make a <span className="text-gold-gradient italic">Reservation</span></h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={16} />
                    <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-gold/50 transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={16} />
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-gold/50 appearance-none">
                      <option>19:00</option>
                      <option>20:00</option>
                      <option>21:00</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={16} />
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-gold/50 appearance-none">
                    <option>2 Persons</option>
                    <option>4 Persons</option>
                    <option>6 Persons</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => alert('Reservation request received. We will contact you shortly.')}
                className="w-full py-4 bg-gold text-black font-bold uppercase tracking-[0.3em] text-xs rounded-xl mt-4"
              >
                Confirm Booking
              </motion.button>
            </div>
          </motion.div>

          {/* 3D Table Layout Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative aspect-square glass-gold rounded-3xl p-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
            
            <div className="relative h-full border border-gold/10 rounded-2xl bg-black/20 flex items-center justify-center">
              {/* Floor Grid */}
              <div className="absolute inset-0 opacity-10" style={{ 
                backgroundImage: 'linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />

              {/* Tables */}
              {TABLES.map((table) => (
                <motion.div
                  key={table.id}
                  style={{ left: table.x, top: table.y }}
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                  onClick={() => table.status === 'available' && setSelectedTable(table.id)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                    selectedTable === table.id ? 'scale-125' : ''
                  }`}
                >
                  <div className={`relative flex items-center justify-center ${
                    table.size === 2 ? 'w-12 h-12' : table.size === 4 ? 'w-16 h-16' : 'w-24 h-16'
                  } rounded-xl border-2 ${
                    table.status === 'booked' 
                      ? 'border-red-500/30 bg-red-500/10' 
                      : selectedTable === table.id
                        ? 'border-gold bg-gold/20 shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                        : 'border-gold/30 bg-gold/5 hover:border-gold/60'
                  }`}>
                    <span className="text-[10px] font-bold text-gold/50">{table.size}</span>
                    
                    {/* Table Surface Reflection */}
                    <div className="absolute inset-1 border border-white/5 rounded-lg pointer-events-none" />
                  </div>
                  
                  {/* Table Label */}
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-[8px] uppercase tracking-widest text-white/30">Table {table.id}</span>
                  </div>
                </motion.div>
              ))}

              {/* Legend */}
              <div className="absolute bottom-6 left-6 flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-[8px] uppercase tracking-widest text-white/50">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-[8px] uppercase tracking-widest text-white/50">Booked</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
