import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Terminal, Database, Code2, ShieldAlert, Mail, ArrowUpRight, Cloud, Layers
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // Import this to force the correct colors

export default function HomeView({ setActiveSection }) {
  // Pull the current theme state directly
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 100 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-10 px-4 relative z-10 select-none"
    >
      
      {/* 1. Live Status & Role */}
      <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
        <div className={`relative flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-md ${isDarkMode ? 'border-neutral-700/50 bg-neutral-900/40' : 'border-slate-300/50 bg-white/40'}`}>
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDarkMode ? 'bg-sky-400' : 'bg-purple-600'}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isDarkMode ? 'bg-sky-400' : 'bg-purple-600'}`}></span>
          </span>
          <span className={`text-[10px] sm:text-xs font-black uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>
            Available for Opportunities
          </span>
        </div>
        
        <h2 className={`text-center text-xs md:text-sm uppercase tracking-[0.4em] font-black ${isDarkMode ? 'text-sky-400' : 'text-[#7e22ce]'}`}>
  Full-Stack & AI/ML Developer
</h2>
      </motion.div>

      {/* 2. Big Name & Polished Crisp Intro */}
      <motion.div variants={itemVariants} className="text-center space-y-5 w-full">
        <h1 className={`text-5xl sm:text-7xl md:text-8xl font-serif font-black tracking-tight leading-[1.1] ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>
          Suraj Kumar <span className={`font-sans font-medium italic ${isDarkMode ? 'text-sky-400' : 'text-[#7e22ce]'}`}>Saw.</span>
        </h1>
        <p className={`max-w-2xl mx-auto text-sm sm:text-base font-bold leading-relaxed tracking-wide ${isDarkMode ? 'text-slate-300' : 'text-[#334155]'}`}>
          I engineer exceptional digital experiences. By bridging robust backend architectures with seamless frontend interfaces, I transform complex problems into elegant, production-ready solutions.
        </p>
      </motion.div>

      {/* 3. Social Media Connectivity Row */}
      <motion.div variants={itemVariants} className="flex items-center gap-5">
        <SocialIcon tooltip="GitHub" link="https://github.com/suraj8521-saw" isDarkMode={isDarkMode} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>} />
        <SocialIcon tooltip="LinkedIn" link="https://www.linkedin.com/in/suraj-kumar-384182215" isDarkMode={isDarkMode} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>} />
        <SocialIcon tooltip="Twitter / X" link="https://twitter.com/SurajKu87439668" isDarkMode={isDarkMode} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>} />
        <SocialIcon tooltip="Email" link="mailto:suraj71442@gmail.com" isDarkMode={isDarkMode} icon={<Mail className="w-5 h-5" />} />
      </motion.div>

      {/* 4. Action Buttons */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-2">
        <button 
          onClick={() => setActiveSection('projects')}
          className={`group relative px-8 py-3.5 rounded-full font-black tracking-wide text-sm flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer ${isDarkMode ? 'bg-white text-slate-900' : 'bg-[#0f172a] text-white'}`}
        >
          Explore Work
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <button onClick={() => window.open('https://drive.google.com/file/d/159BjI-557-47K4bxNQtAzfgU9AjDW8sV/view?usp=sharing', '_blank')}
          className={`px-8 py-3.5 rounded-full border backdrop-blur-sm font-black tracking-wide text-sm transition-all duration-300 cursor-pointer ${isDarkMode ? 'border-neutral-700/50 bg-white/10 text-white hover:bg-white/20' : 'border-slate-300 dark:border-neutral-700/50 bg-white/30 text-[#0f172a] hover:bg-white/50'}`}
        >
          View Resume
        </button>
      </motion.div>

      {/* 5. Core Arsenal Grid */}
      <motion.div variants={itemVariants} className="w-full pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <TechCard isDarkMode={isDarkMode} icon={<Terminal className="w-5 h-5" />} title="FULL-STACK SYSTEMS" desc="Engineering secure web ecosystems utilizing FastAPI, Advanced Java, and C#." />
          <TechCard isDarkMode={isDarkMode} icon={<Code2 className="w-5 h-5" />} title="CORE LANGUAGES" desc="Proficient in C/C++, Java, Python, JavaScript, and R with strong OOPs architecture." />
          <TechCard isDarkMode={isDarkMode} icon={<Cloud className="w-5 h-5" />} title="CLOUD & AI" desc="Developing predictive models using Python ML frameworks integrated with AWS Cloud AI ecosystems." />
          <TechCard isDarkMode={isDarkMode} icon={<Layers className="w-5 h-5" />} title="MERN STACK" desc="Architecting scalable single-page applications and RESTful APIs using MongoDB, Express, React, and Node.js." />
          <TechCard isDarkMode={isDarkMode} icon={<ShieldAlert className="w-5 h-5" />} title="DATA & SECURITY" desc="SQL/NoSQL pipelines, DB schemas, ethical hacking, and vulnerability assessments." />
        </div>
      </motion.div>

    </motion.div>
  );
}

// Custom Sub-components: Social Icons
function SocialIcon({ icon, link, tooltip, isDarkMode }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group relative p-3 rounded-full border backdrop-blur-sm transition-all duration-300 ${isDarkMode ? 'border-neutral-700/50 bg-white/5 text-slate-300 hover:bg-white hover:text-slate-900' : 'border-slate-300/50 bg-white/40 text-[#334155] hover:bg-[#0f172a] hover:text-white'}`}
      aria-label={tooltip}
    >
      {icon}
      <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-black tracking-widest whitespace-nowrap pointer-events-none ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>
        {tooltip}
      </span>
    </a>
  );
}

// Upgraded Interactive TechCard Sub-component
function TechCard({ icon, title, desc, isDarkMode }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.04, y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`group relative p-5 rounded-2xl border backdrop-blur-sm transition-colors duration-300 cursor-pointer flex flex-col items-center sm:items-start text-center sm:text-left gap-4 overflow-hidden ${isDarkMode ? 'border-neutral-700/50 bg-neutral-900/40' : 'border-slate-300/50 bg-white/30'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="w-full flex items-center justify-between">
        <div className={`p-2 rounded-xl border shadow-sm transition-all duration-300 ${isDarkMode ? 'bg-neutral-800 text-sky-400 border-transparent group-hover:bg-white group-hover:text-slate-900' : 'bg-white/60 text-[#7e22ce] border-slate-300/50 group-hover:bg-[#0f172a] group-hover:text-white'}`}>
          {icon}
        </div>
        <ArrowUpRight className={`w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 hidden sm:block ${isDarkMode ? 'text-sky-400' : 'text-[#7e22ce]'}`} />
      </div>

      <div className="space-y-1 relative z-10">
        <h3 className={`text-sm font-black tracking-wide transition-colors duration-300 ${isDarkMode ? 'text-white group-hover:text-sky-400' : 'text-[#0f172a] group-hover:text-[#7e22ce]'}`}>
          {title}
        </h3>
        <p className={`text-[11px] sm:text-xs font-bold leading-normal ${isDarkMode ? 'text-slate-400' : 'text-[#334155]'}`}>
          {desc}
        </p>
      </div>
    </motion.div>
  );
}