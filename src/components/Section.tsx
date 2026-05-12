import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-6 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ title, subtitle, badge, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-brand-blue uppercase rounded-full bg-brand-blue/10 border border-brand-blue/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
