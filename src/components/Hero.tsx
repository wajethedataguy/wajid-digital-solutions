import { motion } from 'motion/react';
import { MousePointer2, ArrowRight, Github, Code, Brain, Database, Rocket } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/content';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-300">Available for Freelance & Projects</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            {PERSONAL_INFO.hero.mainHeading.split(' ').map((word, i) => (
              <span key={i} className={i > 5 ? "text-gradient block" : ""}>{word}{' '}</span>
            ))}
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            {PERSONAL_INFO.hero.subheading}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary flex items-center gap-2 group">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-outline">
              Hire Me
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors ml-2">
              <Github size={20} />
              <span className="text-sm font-medium">Source Code</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/5 pt-8">
            {PERSONAL_INFO.hero.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-dark rounded-3xl p-2 border border-white/10 shadow-2xl overflow-hidden aspect-square flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 via-transparent to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Central Icon */}
            <div className="relative z-20 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center p-0.5 shadow-2xl animate-pulse">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-5xl font-display font-bold text-gradient">WH</span>
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-bold">{PERSONAL_INFO.name}</h3>
              <p className="text-slate-500 font-mono text-sm mt-1">THE TECH GUY</p>
            </div>

            {/* Floating Badges */}
            <FloatingBadge icon={<Brain className="text-cyan-400" />} text="AI/ML" className="top-12 left-10" delay={0.2} />
            <FloatingBadge icon={<Database className="text-blue-400" />} text="Software & Data Engineer" className="top-24 right-10" delay={0.4} />
            <FloatingBadge icon={<Code className="text-purple-400" />} text="React/Next" className="bottom-20 left-12" delay={0.6} />
            <FloatingBadge icon={<Rocket className="text-orange-400" />} text="Automation" className="bottom-12 right-12" delay={0.8} />
          </div>

          {/* Decorative Rings */}
          <div className="absolute -inset-10 border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute -inset-20 border border-white/5 rounded-full pointer-events-none opacity-50" />
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Scroll To Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-slate-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingBadge({ icon, text, className, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className={`absolute z-30 glass py-2 px-4 rounded-2xl flex items-center gap-3 shadow-xl cursor-default pointer-events-auto ${className}`}
    >
      <div className="p-1.5 bg-white/5 rounded-lg">{icon}</div>
      <span className="text-sm font-semibold text-white whitespace-nowrap">{text}</span>
    </motion.div>
  );
}
