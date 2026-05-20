import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  GraduationCap, Calendar, Code2, Database, Terminal, ShieldCheck, Laptop 
} from 'lucide-react';

export default function AboutView() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 100 } }
  };

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 300, damping: 40 });

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-5xl mx-auto px-4 relative z-10 py-6 space-y-24"
    >
      
      {/* SECTION 1: ABOUT HERO */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
        
        <motion.div variants={itemVariants} className="md:col-span-5 flex justify-center relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400 via-pink-400 to-purple-500 opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-500 scale-105" />
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-68 md:h-68 rounded-full overflow-hidden border border-[var(--text-muted)]/20 shadow-2xl backdrop-blur-md z-10">
            <img 
              src="/surajprofile.jpg" 
              alt="Suraj Kumar Saw" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
                document.getElementById('about-avatar-fallback').style.display = 'flex';
              }}
            />
            <div id="about-avatar-fallback" className="hidden absolute inset-0 bg-neutral-800 text-white font-serif text-4xl items-center justify-center">SKS</div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-7 space-y-4 text-center md:text-left px-2 sm:px-0">
          {/* Subheading: Authority & Vision */}
<span className="text-xs uppercase tracking-[0.3em] font-black text-[var(--accent-gold)] block mb-2">
  Engineered for Impact
</span>

{/* Heading: Bold Startup Focus */}
<h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black text-[var(--text-main)] leading-tight mb-8">
  Bridging Complex Logic with <br />
  <span className="font-sans font-medium italic text-[var(--accent-gold)]">Intelligent Web Solutions.</span>
</h2>

{/* Paragraph: Sharp & Technical */}
<p className="text-[var(--text-main)] text-sm sm:text-lg font-medium leading-relaxed max-w-3xl">
  I transform complex technical challenges into scalable, intelligent software architectures. 
  By fusing MERN-stack expertise with AI/ML integration, I build high-performance systems 
  that don't just solve current problems—they anticipate future scale. 
  Dedicated to eliminating technical debt through clean, modular, and performance-first engineering.
</p>
        </motion.div>
      </div>

      {/* SECTION 2: EDUCATION TIMELINE */}
      <motion.div variants={itemVariants} className="space-y-10">
        <div className="text-center md:text-left space-y-2 px-2">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--accent-gold)] block">My Journey</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-black text-[var(--text-main)]">Education & Milestones</h3>
        </div>

        <div ref={timelineRef} className="relative ml-2 sm:ml-6 md:ml-8 pl-6 sm:pl-8 space-y-8">
          
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-[var(--text-muted)] opacity-30 rounded-full" />
          
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-0 top-2 bottom-2 w-[2px] bg-[var(--accent-gold)] origin-top rounded-full z-10" 
          />
          
          <TimelineItem 
            year="2025 — 2027"
            degree="Master of Computer Applications (MCA)"
            institution="Galgotias University | Postgraduate Degree"
            description="Focusing on enterprise full-stack architecture, machine learning with Python, and building secure, cloud-integrated ecosystems."
            progressTrack={scrollYProgress}
            range={[0, 0.25]}
          />

          <TimelineItem 
            year="2022 — 2025"
            degree="Bachelor of Computer Applications (BCA)"
            institution="Graduate Degree | Vinoba Bhave University"
            description="Built strong foundations in core Data Structures, Object-Oriented Programming (OOPs), Software Engineering models, and Relational Databases."
            progressTrack={scrollYProgress}
            range={[0.25, 0.5]}
          />

          <TimelineItem 
            year="2020 — 2022"
            degree="Higher Secondary School (12th Grade)"
            institution="Science Stream"
            description="Deepened my analytical and logical problem-solving skills through core Mathematics, Physics, and Chemistry."
            progressTrack={scrollYProgress}
            range={[0.5, 0.75]}
          />

          <TimelineItem 
            year="2020"
            degree="Secondary School (10th Grade)"
            institution="General Board"
            description="Gained fundamental quantitative aptitude and initial logical foundations."
            progressTrack={scrollYProgress}
            range={[0.75, 1]}
          />

        </div>
      </motion.div>

      {/* SECTION 3: MY TECH TOOLKIT */}
      <motion.div variants={itemVariants} className="space-y-10">
        <div className="text-center md:text-left space-y-2 px-2">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--accent-gold)] block">My Weapon of Choice</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-black text-[var(--text-main)]">Technical Toolkit</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-2 sm:px-0">
          <SkillCard icon={<Terminal className="w-5 h-5" />} category="Web Development" skills={["React.js & Hooks", "Node.js (Backend)", "Express.js Engine", "RESTful APIs / JSON", "Tailwind CSS Engine"]} />
          <SkillCard icon={<Code2 className="w-5 h-5" />} category="Programming" skills={["C,C++,Java (Programming)", "Python (Data Tools)", "Core Java / OOPs", "R Language Basics"]} />
          <SkillCard icon={<Database className="w-5 h-5" />} category="Databases" skills={["MongoDB Systems", "MySQL Databases", "Database Schema Design", "Query Optimization", "Data Integrity Mapping"]} />
          <SkillCard icon={<ShieldCheck className="w-5 h-5" />} category="Security & Logic" skills={["Ethical Hacking Basics", "AI Tool Integrations", "System Logic Design", "Software Debugging", "Security Best Practices"]} />
        </div>

        <motion.div 
          variants={itemVariants}
          className="mx-2 sm:mx-0 p-5 sm:p-6 rounded-2xl border border-[var(--text-muted)]/20 bg-[var(--text-muted)]/10 backdrop-blur-lg flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[var(--text-muted)]/10 text-[var(--accent-gold)] shrink-0 border border-[var(--text-muted)]/20">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-[var(--text-main)] tracking-wide">Developer Tools & Platforms</h4>
              <p className="text-xs text-[var(--text-muted)] font-bold">Ecosystem I use daily to build, test, and ship code.</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 max-w-xl justify-start md:justify-end">
            {["Git", "GitHub", "Postman API", "VS Code", "Vite Tools", "Command Line", "Prompt Engineering"].map((tool, index) => (
              <span 
                key={index} 
                className="text-[11px] font-mono font-bold bg-[var(--text-muted)]/10 text-[var(--text-main)] px-3 py-1 rounded-full border border-[var(--text-muted)]/30 transition-colors duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

      </motion.div>

    </motion.div>
  );
}

function TimelineItem({ year, degree, institution, description, progressTrack, range }) {
  const isCurrentSection = useTransform(progressTrack, range, [true, true]);

  return (
    <div className="relative group pr-1">
      <div className="absolute -left-[30px] sm:-left-[38px] md:-left-[40px] top-4 w-4 h-4 rounded-full border-2 border-[var(--text-muted)]/50 bg-[var(--bg-surface)] transition-colors duration-300 flex items-center justify-center z-20">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] group-hover:bg-[var(--accent-gold)] transition-colors duration-300" />
      </div>

      <motion.div 
        whileHover={{ scale: 1.01, x: 2 }}
        className="p-4 sm:p-5 rounded-xl border border-[var(--text-muted)]/20 bg-[var(--text-muted)]/10 backdrop-blur-lg space-y-2 shadow-sm relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h4 className="text-sm sm:text-base font-black text-[var(--text-main)] tracking-wide">{degree}</h4>
          
          <span className="text-[10px] sm:text-xs font-mono font-bold text-[var(--accent-gold)] flex items-center gap-1 bg-[var(--text-muted)]/10 px-2 py-0.5 rounded-md w-fit shrink-0 border border-[var(--text-muted)]/20">
            <Calendar className="w-3 h-3" /> {year}
          </span>
        </div>
        <p className="text-xs font-black text-[var(--text-muted)] tracking-wide uppercase">{institution}</p>
        <p className="text-xs text-[var(--text-main)] font-bold leading-relaxed tracking-wide">{description}</p>
      </motion.div>
    </div>
  );
}

function SkillCard({ icon, category, skills }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="p-5 rounded-2xl border border-[var(--text-muted)]/20 bg-[var(--text-muted)]/10 backdrop-blur-lg flex flex-col gap-4 overflow-hidden shadow-sm group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="w-fit p-2 rounded-xl bg-[var(--text-muted)]/10 text-[var(--accent-gold)] border border-[var(--text-muted)]/20">
        {icon}
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-black text-[var(--text-main)] tracking-wide">{category}</h4>
        
        <ul className="space-y-2 relative z-10">
          {skills.map((skill, idx) => (
            <li key={idx} className="text-xs text-[var(--text-main)] font-bold flex items-center gap-2 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}