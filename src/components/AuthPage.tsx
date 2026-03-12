import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, ShieldCheck, Mail, Lock, ArrowLeft, UserPlus, LogIn } from 'lucide-react';
import Logo from './Logo';

type AuthMode = 'login' | 'register';
type UserRole = 'customer' | 'admin';

export default function AuthPage({ onBack, onLogin }: { onBack: () => void, onLogin: (user: { role: 'customer' | 'admin', name: string }) => void, key?: string }) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [role, setRole] = useState<UserRole>('customer');

  const handleAuth = () => {
    // Mock authentication
    onLogin({ 
      role, 
      name: role === 'admin' ? 'Administrator' : 'Julian Marcelle' 
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] bg-marble flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Back Button */}
      <motion.button
        whileHover={{ x: -5, color: '#D4AF37' }}
        onClick={onBack}
        className="absolute top-10 left-10 flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest transition-colors z-20"
      >
        <ArrowLeft size={16} />
        Back to Restaurant
      </motion.button>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full max-w-md relative z-10"
      >
        <div className="mb-12 flex justify-center">
          <Logo className="scale-90" />
        </div>

        <div className="glass-gold rounded-[2.5rem] p-10 border border-gold/20 shadow-2xl relative overflow-hidden">
          {/* 3D Bevel Highlight */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10" />
          
          {/* Role Selection */}
          <div className="flex p-1 bg-black/40 rounded-2xl mb-8 relative">
            <motion.div
              className="absolute inset-y-1 bg-gold rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              initial={false}
              animate={{ 
                x: role === 'customer' ? 0 : '100%',
                width: '50%'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setRole('customer')}
              className={`flex-1 py-3 text-[10px] uppercase tracking-[0.2em] font-bold relative z-10 transition-colors ${role === 'customer' ? 'text-black' : 'text-white/40'}`}
            >
              <div className="flex items-center justify-center gap-2">
                <User size={14} />
                Customer
              </div>
            </button>
            <button
              onClick={() => setRole('admin')}
              className={`flex-1 py-3 text-[10px] uppercase tracking-[0.2em] font-bold relative z-10 transition-colors ${role === 'admin' ? 'text-black' : 'text-white/40'}`}
            >
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck size={14} />
                Admin
              </div>
            </button>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif text-gold-gradient italic">
              {mode === 'login' ? 'Welcome Back' : 'Join the Legacy'}
            </h2>
            <p className="text-[10px] uppercase tracking-widest text-white/30 mt-2">
              {role === 'admin' ? 'Administrative Access' : 'Exclusive Guest Access'}
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleAuth(); }}>
            <AnimatePresence mode="wait">
              {mode === 'register' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40" size={16} />
                    <input 
                      type="text" 
                      placeholder="Julian Marcelle"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-gold/50 transition-all"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40" size={16} />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-gold/50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-4 mr-4">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Password</label>
                {mode === 'login' && (
                  <button className="text-[9px] uppercase tracking-widest text-gold/60 hover:text-gold transition-colors">Forgot?</button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40" size={16} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-gold/50 transition-all"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(212,175,55,0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gold text-black font-bold uppercase tracking-[0.3em] text-xs rounded-2xl mt-4 flex items-center justify-center gap-2"
            >
              {mode === 'login' ? <LogIn size={16} /> : <UserPlus size={16} />}
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className="text-[10px] uppercase tracking-widest text-white/40 hover:text-gold transition-colors"
            >
              {mode === 'login' ? "Don't have an account? Join Us" : "Already a member? Sign In"}
            </button>
          </div>
        </div>

        {/* Security Note */}
        <p className="mt-8 text-center text-[9px] uppercase tracking-[0.2em] text-white/20">
          Secure encrypted connection • 256-bit SSL
        </p>
      </motion.div>
    </div>
  );
}
