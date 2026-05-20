import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function AmbientBackground() {
  const { isDarkMode } = useTheme();

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const springConfig = { stiffness: 30, damping: 20, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const oppositeX = useTransform(smoothX, (x) => 100 - x);
  const oppositeY = useTransform(smoothY, (y) => 100 - y);

  const orb1Left = useMotionTemplate`${smoothX}%`;
  const orb1Top = useMotionTemplate`${smoothY}%`;
  
  const orb2Left = useMotionTemplate`${oppositeX}%`;
  const orb2Top = useMotionTemplate`${oppositeY}%`;

  useEffect(() => {
    const handleMove = (e) => {
      const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY;

      const xPct = (clientX / window.innerWidth) * 100;
      const yPct = (clientY / window.innerHeight) * 100;

      mouseX.set(xPct);
      mouseY.set(yPct);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* 🔮 ORB 1: Soothing Cyan for Light Mode, Sky Blue for Dark Mode */}
      <motion.div
        style={{ left: orb1Left, top: orb1Top }}
        className={`absolute w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full blur-[100px] md:blur-[120px] -translate-x-1/2 -translate-y-1/2 transition-colors duration-1000
          ${isDarkMode ? 'bg-sky-500/20' : 'bg-cyan-400/35'}`}
      />

      {/* 🔮 ORB 2: Soft Indigo for Light Mode, Purple for Dark Mode */}
      <motion.div
        style={{ left: orb2Left, top: orb2Top }}
        className={`absolute w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full blur-[90px] md:blur-[120px] -translate-x-1/2 -translate-y-1/2 transition-colors duration-1000
          ${isDarkMode ? 'bg-purple-600/20' : 'bg-indigo-400/35'}`}
      />
      
    </div>
  );
}