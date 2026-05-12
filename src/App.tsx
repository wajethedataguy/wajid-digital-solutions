/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { 
  About,
  Services, 
  Skills, 
  Experience, 
  Projects, 
  Certifications, 
  Contact, 
  Footer 
} from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-main selection:bg-brand-blue/30 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      
      {/* Global Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-purple/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}

