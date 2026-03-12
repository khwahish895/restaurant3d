import { motion } from 'motion/react';
import { User, ShoppingBag, Heart, Clock, Settings, LogOut } from 'lucide-react';

export default function CustomerDashboard({ user, onLogout }: { user: { name: string }, onLogout: () => void }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 pt-32">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-serif">Welcome, <span className="text-gold-gradient italic">{user.name}</span></h1>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mt-2">Your Exclusive Guest Portal</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, color: '#D4AF37' }}
            onClick={onLogout}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60"
          >
            <LogOut size={16} />
            Sign Out
          </motion.button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stats */}
          <div className="glass-gold p-8 rounded-3xl border border-gold/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gold/10 rounded-xl text-gold">
                <ShoppingBag size={20} />
              </div>
              <h3 className="text-sm font-serif">Recent Orders</h3>
            </div>
            <p className="text-2xl font-serif">3 <span className="text-xs text-white/40 font-sans">Active</span></p>
          </div>

          <div className="glass-gold p-8 rounded-3xl border border-gold/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gold/10 rounded-xl text-gold">
                <Heart size={20} />
              </div>
              <h3 className="text-sm font-serif">Favorites</h3>
            </div>
            <p className="text-2xl font-serif">12 <span className="text-xs text-white/40 font-sans">Items</span></p>
          </div>

          <div className="glass-gold p-8 rounded-3xl border border-gold/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gold/10 rounded-xl text-gold">
                <Clock size={20} />
              </div>
              <h3 className="text-sm font-serif">Reservations</h3>
            </div>
            <p className="text-2xl font-serif">1 <span className="text-xs text-white/40 font-sans">Upcoming</span></p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-gold p-10 rounded-[2.5rem] border border-gold/10">
            <h2 className="text-xl font-serif mb-6">Upcoming Reservation</h2>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-widest text-white/40">Date & Time</span>
                <span className="text-sm text-gold">March 25, 2024 • 19:30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-white/40">Guests</span>
                <span className="text-sm text-gold">2 Persons</span>
              </div>
            </div>
            <button className="w-full mt-8 py-4 border border-gold/20 rounded-xl text-[10px] uppercase tracking-widest hover:bg-gold/5 transition-colors">
              Manage Reservation
            </button>
          </div>

          <div className="glass-gold p-10 rounded-[2.5rem] border border-gold/10">
            <h2 className="text-xl font-serif mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-6 bg-black/40 rounded-2xl border border-white/5 hover:border-gold/30 transition-all text-center group">
                <User className="mx-auto mb-3 text-white/40 group-hover:text-gold transition-colors" size={24} />
                <span className="text-[10px] uppercase tracking-widest">Profile</span>
              </button>
              <button className="p-6 bg-black/40 rounded-2xl border border-white/5 hover:border-gold/30 transition-all text-center group">
                <Settings className="mx-auto mb-3 text-white/40 group-hover:text-gold transition-colors" size={24} />
                <span className="text-[10px] uppercase tracking-widest">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
