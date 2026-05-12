import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/content';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-xl font-display font-bold text-white tracking-tight leading-none">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-[10px] text-brand-blue font-mono mt-1 font-semibold uppercase tracking-widest">
            ENGINEERING & AI
          </span>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-4 pl-4 border-l border-white/10">
             <a href={PERSONAL_INFO.contact.linkedin} target="_blank" className="text-slate-400 hover:text-white transition-colors">
               <Linkedin size={18} />
             </a>
             <a href="#contact" className="btn-primary py-2 px-6 text-sm">
               Hire Me
             </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-white/10 overflow-hidden"
          >
            <ul className="p-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-slate-300 hover:text-brand-blue"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 flex gap-6">
                <a href={PERSONAL_INFO.contact.linkedin} className="text-slate-400 hover:text-white"><Linkedin /></a>
                <a href={PERSONAL_INFO.contact.github} className="text-slate-400 hover:text-white"><Github /></a>
                <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="text-slate-400 hover:text-white"><Mail /></a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
