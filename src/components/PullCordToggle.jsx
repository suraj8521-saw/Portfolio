import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function PullCordToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  const dragY = useMotionValue(0);

  const stringHeight = useTransform(dragY, (latest) => 40 + latest);

  const handleDragEnd = () => {
    if (dragY.get() > 25) {
      toggleTheme();
    }
  };

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-12 h-40 flex flex-col items-center select-none pointer-events-none z-50 mt-[-2px]">
      
      {/* Ceiling Metal Anchor */}
      <div className="w-2.5 h-1 bg-neutral-400 dark:bg-amber-600/80 rounded-b shrink-0" />

      {/* Realtime Stretching Rope */}
      <motion.div 
        style={{ height: stringHeight }}
        className="w-[1.5px] bg-neutral-400 dark:bg-amber-500/40 pointer-events-none origin-top"
      />

      {/* Grabbable Bulb Node */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 45 }}
        dragElastic={0.1}
        dragSnapToOrigin
        onDragEnd={handleDragEnd}
        style={{ y: dragY }}
        className="absolute top-[37px] flex flex-col items-center pointer-events-auto cursor-grab active:cursor-grabbing touch-none p-2 group"
      >
        {/* Brass Cap */}
        <div className="w-2 h-1.5 bg-neutral-400 dark:bg-amber-700/80 rounded-t-sm shrink-0 shadow-sm transition-colors duration-500" />

        {/* Subtle & Elegant Glowing Bulb */}
        <div className={`w-4 h-7 rounded-b-full rounded-t-sm border transition-all duration-700 flex items-center justify-center
          ${isDarkMode 
            ? 'bg-amber-400/90 border-amber-300 shadow-[0_0_8px_rgba(245,158,11,0.4)]' 
            : 'bg-neutral-200/80 border-neutral-300 shadow-sm'
          }`}
        >
          {/* Inner Filament */}
          <div className={`w-[1px] h-2.5 transition-colors duration-500 ${isDarkMode ? 'bg-amber-100' : 'bg-neutral-400'}`} />
        </div>
      </motion.div>
    </div>
  );
}