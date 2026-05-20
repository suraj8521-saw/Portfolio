import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import AmbientBackground from './components/AmbientBackground';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProjectsView from './components/ProjectsView';
import ExperienceView from './components/ExperienceView';
import ContactView from './components/ContactView';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    // 💡 overflow-x-hidden use kiya taaki content cut na ho aur footer dikhe
    <div className="min-h-screen flex flex-col bg-[var(--bg-surface)] text-[var(--text-main)] relative overflow-x-hidden">
      
      <AmbientBackground />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-grow pt-36 pb-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="w-full"
          >
            {/* 🎯 Navigation ke liye IDs add kar di hain */}
            <div className="flex flex-col gap-20 sm:gap-32 w-full">
               <div id="home">
                <HomeView setActiveSection={setActiveSection} />
              </div>
              
              <div id="about">
                <AboutView />
              </div>

              <div id="projects">
                <ProjectsView />
              </div>

              <div id="experience">
                <ExperienceView />
              </div>

              <div id="contact">
                <ContactView />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
<Footer />
<Analytics />
    </div>
    
  );
}