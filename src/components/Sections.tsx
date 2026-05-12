import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Section, SectionHeading } from './Section';
import { SERVICES, SKILLS, EXPERIENCE, PROJECTS_AI_DATA, PROJECTS_WEB, CERTIFICATIONS, PERSONAL_INFO } from '../constants/content';

export function About() {
  return (
    <Section id="about" className="pt-0">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative aspect-square max-w-md mx-auto lg:mx-0 group"
        >
           <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
           <div className="relative z-10 glass w-full h-full rounded-3xl p-4 overflow-hidden">
              <div className="w-full h-full bg-slate-800 rounded-2xl flex items-center justify-center p-8 text-center">
                 <div>
                    <Icons.User size={80} className="text-slate-600 mb-6 mx-auto" />
                    <p className="text-2xl font-bold text-white mb-2">{PERSONAL_INFO.name}</p>
                    <p className="text-brand-blue font-mono text-sm tracking-widest font-bold">MULTIDISCIPLINARY ENGINEER</p>
                 </div>
              </div>
           </div>
           
           {/* Floating elements */}
           <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl animate-bounce duration-3000">
              <Icons.ShieldCheck className="text-green-400" />
           </div>
           <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <Icons.MapPin size={18} className="text-red-400" />
              <span className="text-xs font-bold">{PERSONAL_INFO.contact.location}</span>
           </div>
        </motion.div>

        <div>
          <SectionHeading 
            badge="The Founder"
            title="Wajid Hussain"
            subtitle="Software Engineer | Full-Stack | Data & AI Specialist"
            align="left"
          />
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            {PERSONAL_INFO.bio}
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 glass rounded-2xl">
               <h4 className="text-white font-bold mb-2">Technical Depth</h4>
               <p className="text-slate-500 text-sm italic">Engineering capability focused on scalable systems.</p>
            </div>
            <div className="p-6 glass rounded-2xl">
               <h4 className="text-white font-bold mb-2">Business Impact</h4>
               <p className="text-slate-500 text-sm italic">Startup-level execution with real-world results.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services">
      <SectionHeading 
        badge="Expertise"
        title="Solutions I Deliver"
        subtitle="Bridging the gap between software engineering, data systems, and artificial intelligence."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => {
          // @ts-ignore
          const Icon = Icons[service.icon] || Icons.Code;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-6 line-clamp-3">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-white/5 py-1 px-2 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" className="bg-slate-900/50">
      <SectionHeading 
        badge="Tech Stack"
        title="Engineering Toolkit"
        subtitle="A comprehensive suite of technologies for modern application and data engineering."
        align="left"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div 
            key={skillGroup.category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h4 className="text-brand-blue font-display font-bold uppercase tracking-widest text-xs mb-6 pb-2 border-b border-brand-blue/20">
              {skillGroup.category}
            </h4>
            <ul className="space-y-3">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-slate-300 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/40" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <div className="grid lg:grid-cols-[1fr,2fr] gap-16">
        <div>
          <SectionHeading 
            badge="History"
            title="Professional Experience"
            subtitle="My journey through enterprise engineering and data systems."
            align="left"
          />
          <div className="bg-brand-blue/5 border border-brand-blue/10 p-8 rounded-3xl mt-8">
            <h4 className="font-bold text-white mb-2">Startup Visionary</h4>
            <p className="text-slate-400 text-sm italic mb-4">Founder of AI-Powered Software & Digital Solutions</p>
            <p className="text-slate-400 text-sm">
              Applying enterprise-grade engineering principles to help startups and small businesses scale through intelligent technology.
            </p>
          </div>
        </div>

        <div className="space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue via-brand-purple to-transparent ml-4 md:ml-0" />

          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Dot */}
              <div className="absolute left-[15px] md:left-[-5px] top-0 w-3 h-3 rounded-full bg-white border-4 border-brand-blue shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              
              <div className="mb-2 text-brand-blue font-mono text-sm font-bold">{exp.period}</div>
              <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
              <div className="text-slate-400 font-medium mb-4">{exp.company}</div>
              
              <ul className="space-y-3">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="text-slate-400 flex items-start gap-3">
                     <Icons.CheckCircle2 className="text-brand-blue mt-1 shrink-0" size={16} />
                     <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading 
        badge="Portfolio"
        title="Software & Data Projects"
        subtitle="Explore my work ranging from enterprise AI systems to modern SaaS applications."
      />

      {/* AI & Data Section */}
      <div className="mb-20">
         <div className="flex items-center gap-4 mb-8">
            <Icons.Brain className="text-brand-purple" />
            <h3 className="text-2xl font-bold uppercase tracking-wider text-brand-purple">AI & Data Engineering</h3>
         </div>
         <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS_AI_DATA.map((proj, idx) => (
              <motion.div 
                key={proj.title}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl border-t-4 border-t-brand-purple"
              >
                <div className="text-xs font-bold text-brand-purple uppercase tracking-widest mb-4">{proj.type}</div>
                <h4 className="text-xl font-bold mb-4">{proj.title}</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map(t => <span key={t} className="text-[10px] font-mono text-slate-500 font-bold bg-white/5 py-1 px-2 rounded">{t}</span>)}
                </div>
                <div className="mt-6">
                  {proj.screenshots?.length ? (
                    <div className="grid grid-cols-2 gap-2">
                      {proj.screenshots.map((src, imgIdx) => (
                        <img
                          key={imgIdx}
                          src={src}
                          alt={`${proj.title} screenshot ${imgIdx + 1}`}
                          className="w-full h-28 rounded-3xl object-cover border border-white/10"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-4 text-slate-500 text-sm">
                      Add screenshot URLs inside <span className="font-semibold text-white">src/constants/content.ts</span> under this project’s <span className="font-semibold text-white">screenshots</span> field.
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
         </div>
      </div>

      {/* Web Dev Section */}
      <div>
         <div className="flex items-center gap-4 mb-8">
            <Icons.Globe className="text-brand-blue" />
            <h3 className="text-2xl font-bold uppercase tracking-wider text-brand-blue">Web Development & SaaS</h3>
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS_WEB.map((proj, idx) => (
              <motion.div 
                key={proj.title}
                whileHover={{ y: -10 }}
                className="glass group rounded-3xl overflow-hidden"
              >
                <div className="h-48 relative overflow-hidden">
                  {proj.screenshots?.length ? (
                    <img
                      src={proj.screenshots[0]}
                      alt={`Screenshot of ${proj.title}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full bg-slate-800 flex items-center justify-center">
                      <Icons.Code size={48} className="text-slate-700 opacity-20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 flex gap-2 translate-y-10 group-hover:translate-y-0 transition-transform">
                      <a href={proj.github} className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white"><Icons.Github size={18} /></a>
                      <a href={proj.link} className="p-2 bg-brand-blue hover:bg-blue-500 rounded-full text-white"><Icons.ExternalLink size={18} /></a>
                   </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-3">{proj.title}</h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-2">{proj.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map(t => <span key={t} className="text-[10px] font-mono text-slate-500 font-bold bg-white/5 py-1 px-2 rounded">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
         </div>
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section className="bg-slate-900/30">
      <SectionHeading 
        badge="Credentials"
        title="Professional Certifications"
        subtitle="Industry-leading credentials validatng my technical expertise."
      />
      <div className="flex flex-wrap justify-center gap-4">
        {CERTIFICATIONS.map((cert) => (
          <motion.div 
            key={cert}
            whileHover={{ scale: 1.05 }}
            className="glass py-4 px-6 rounded-2xl flex items-center gap-3"
          >
            <Icons.Award className="text-yellow-500" size={20} />
            <span className="text-sm font-semibold text-slate-300">{cert}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading 
            badge="Connect"
            title="Let's Build Something Revolutionary"
            subtitle="Available for freelance software development, AI automation, startup collaboration, and digital transformation projects."
            align="left"
          />
          <div className="space-y-6">
            <ContactItem icon={<Icons.Phone />} title="Call Me" detail={PERSONAL_INFO.contact.phone} href={`tel:${PERSONAL_INFO.contact.phone}`} />
            <ContactItem icon={<Icons.MessageCircle />} title="WhatsApp" detail={PERSONAL_INFO.contact.whatsappNumber} href={PERSONAL_INFO.contact.whatsapp} />
            <ContactItem icon={<Icons.Mail />} title="Email Me" detail={PERSONAL_INFO.contact.email} href={`mailto:${PERSONAL_INFO.contact.email}`} />
            <ContactItem icon={<Icons.Linkedin />} title="LinkedIn" detail="wajidhussainabro" href={PERSONAL_INFO.contact.linkedin} />
            <ContactItem icon={<Icons.MapPin />} title="Location" detail={PERSONAL_INFO.contact.location} />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-blue transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-blue transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400">Project Category</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-blue transition-colors appearance-none">
                <option>Full-Stack Development</option>
                <option>AI & Machine Learning</option>
                <option>Data Engineering</option>
                <option>Business Automation</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400">Message</label>
              <textarea placeholder="Tell me about your project..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-blue transition-colors" />
            </div>
            <button className="btn-primary w-full py-4 text-lg font-bold shadow-blue-500/40">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

function ContactItem({ icon, title, detail, href }: any) {
  const Component = href ? 'a' : 'div';
  return (
    <Component href={href} target={href ? "_blank" : undefined} className={`flex items-center gap-6 group ${href ? 'cursor-pointer' : ''}`}>
      <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-0.5">{title}</div>
        <div className="text-lg font-bold text-white group-hover:text-brand-blue transition-colors">{detail}</div>
      </div>
    </Component>
  );
}

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col">
            <span className="text-2xl font-display font-bold text-white tracking-tight">{PERSONAL_INFO.name}</span>
            <span className="text-xs text-brand-blue font-mono font-semibold uppercase tracking-widest mt-1">
              Building the Future of Software
            </span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-slate-400">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="hover:text-white transition-colors">Support</a>
          </div>

          <div className="text-slate-500 text-sm font-medium">
             © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
       </div>
    </footer>
  );
}
