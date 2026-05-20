import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import PullCordToggle from './PullCordToggle';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleNavigation = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed z-50 transition-all duration-500 
      top-0 left-0 w-full h-[72px] rounded-none border-b border-neutral-200/80 dark:border-neutral-800/80
      md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-[92%] md:max-w-5xl md:h-16 md:rounded-full md:border
      bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl 
      shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]"
    >
      <div className="w-full h-full px-5 md:px-8 flex items-center justify-between relative">
        
        <motion.div 
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  onClick={() => handleNavigation('home')}
  className="cursor-pointer select-none flex items-center"
>
  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-neutral-200 dark:border-neutral-700 shadow-md">
    <img 
      src="/surajprofile.jpg" 
      alt="Suraj Kumar Saw" 
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-1 bg-neutral-100/90 dark:bg-neutral-900/80 p-1.5 rounded-full border border-neutral-200/80 dark:border-neutral-800/80 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`relative px-4 lg:px-5 py-1.5 text-[10px] lg:text-xs font-bold uppercase tracking-widest transition-colors duration-300 rounded-full cursor-pointer select-none
                    ${isActive 
                      ? 'text-white dark:text-slate-900' 
                      : 'text-slate-700 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-white'
                    }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full shadow-md border border-neutral-800 dark:border-neutral-700"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          
          <div className="relative w-8 h-8 flex items-center justify-center pl-1">
            <PullCordToggle />
          </div>
        </div>

        <div className="flex md:hidden items-center h-full gap-2">
          {!isOpen ? (
            <div className="relative flex items-center gap-2">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg text-slate-900 dark:text-white cursor-pointer relative z-10 border border-neutral-200 dark:border-neutral-800 shadow-sm"
              >
                <Menu className="w-5 h-5" />
              </button>
              <PullCordToggle />
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 relative z-50"
            >
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-slate-900 dark:text-white bg-white/80 dark:bg-neutral-900/80 cursor-pointer flex items-center justify-center shadow-md"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-500" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-900 dark:text-white bg-neutral-100 dark:bg-neutral-900 rounded-lg cursor-pointer flex items-center justify-center border border-neutral-200 dark:border-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="absolute top-[80px] left-4 right-4 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl rounded-2xl p-4 flex flex-col md:hidden z-40 space-y-2"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`block w-full text-center px-4 py-4 text-xs uppercase tracking-[0.2em] font-bold rounded-xl transition-all border
                    ${activeSection === item.id
                      ? 'bg-slate-900 border-neutral-800 text-white dark:text-slate-900 dark:bg-white dark:border-white shadow-sm'
                      : 'border-transparent text-slate-800 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}