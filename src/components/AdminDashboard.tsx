import { motion } from 'motion/react';
import { LayoutDashboard, Users, Utensils, Calendar, TrendingUp, LogOut, Bell } from 'lucide-react';

export default function AdminDashboard({ user, onLogout }: { user: { name: string }, onLogout: () => void }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 pt-32">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center text-gold border border-gold/30">
              <LayoutDashboard size={24} />
            </div>
            <div>
              <h1 className="text-4xl font-serif">Admin <span className="text-gold-gradient italic">Console</span></h1>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mt-1">System Overview • {user.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-white/40 hover:text-gold transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-gold rounded-full" />
            </button>
            <motion.button
              whileHover={{ scale: 1.05, color: '#D4AF37' }}
              onClick={onLogout}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60"
            >
              <LogOut size={16} />
              Logout
            </motion.button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Revenue', value: '€42,850', icon: TrendingUp, trend: '+12.5%' },
            { label: 'Active Tables', value: '18/24', icon: Utensils, trend: 'Busy' },
            { label: 'Reservations', value: '124', icon: Calendar, trend: 'Today' },
            { label: 'New Guests', value: '32', icon: Users, trend: '+8' },
          ].map((stat, i) => (
            <div key={i} className="glass-gold p-6 rounded-3xl border border-gold/10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-gold/10 rounded-xl text-gold">
                  <stat.icon size={18} />
                </div>
                <span className="text-[10px] text-gold font-bold">{stat.trend}</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{stat.label}</p>
              <p className="text-2xl font-serif">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-gold p-10 rounded-[2.5rem] border border-gold/10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-serif">Recent Reservations</h2>
              <button className="text-[10px] uppercase tracking-widest text-gold hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Marcus Thorne', time: '19:00', table: '04', status: 'Confirmed' },
                { name: 'Elena Rossi', time: '19:30', table: '12', status: 'Pending' },
                { name: 'Julian Vance', time: '20:00', table: '08', status: 'Arrived' },
              ].map((res, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                      {res.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-serif">{res.name}</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">{res.time} • Table {res.table}</p>
                    </div>
                  </div>
                  <span className={`text-[9px] uppercase tracking-widest px-3 py-1 rounded-full ${
                    res.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-400' :
                    res.status === 'Arrived' ? 'bg-gold/20 text-gold' : 'bg-white/10 text-white/40'
                  }`}>
                    {res.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-gold p-10 rounded-[2.5rem] border border-gold/10">
            <h2 className="text-xl font-serif mb-8">Staff Management</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-sm">Kitchen Staff</span>
                </div>
                <span className="text-xs text-white/40">12 Active</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-sm">Service Team</span>
                </div>
                <span className="text-xs text-white/40">8 Active</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-sm">Sommeliers</span>
                </div>
                <span className="text-xs text-white/40">2 On Call</span>
              </div>
              <button className="w-full mt-6 py-4 bg-gold/10 border border-gold/20 rounded-xl text-[10px] uppercase tracking-widest hover:bg-gold/20 transition-all">
                Manage Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
