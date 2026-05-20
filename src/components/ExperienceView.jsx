import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Building, Code2, Terminal, ShieldCheck, CheckCircle2, ExternalLink, Cloud } from 'lucide-react';

export default function ExperienceView() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 100 } }
  };

  // 📈 TRACKING LOGIC ADDED
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end center"]
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 300, damping: 40 });

  const experiences = [
    {
      id: 1,
      role: "IT Analyst Trainee",
      company: "Cognizant",
      duration: "Dec 2025",
      icon: <Building className="w-6 h-6" />,
      themeColor: "text-blue-600 dark:text-blue-400",
      themeBg: "bg-blue-600/10",
      certLink: "#",
      points: [
        "Successfully cleared all rounds of the online trainee assessment via the Superset portal.",
        "Received Letter of Intent (LOI) for the IT Analyst pipeline.",
        "Opted to defer joining to pursue and complete a regular Master of Computer Applications (MCA) degree."
      ]
    },
    {
      id: 2,
      role: "Full-Stack Development Intern",
      company: "Biyoans Pvt. Ltd.",
      duration: "April 2025 — June 2025",
      icon: <Code2 className="w-6 h-6" />,
      themeColor: "text-purple-600 dark:text-sky-400",
      themeBg: "bg-purple-600/10 dark:bg-sky-400/10",
      certLink: "https://drive.google.com/file/d/1VzXCj25ZoLCqnWl3yb3Q2AAsZ9oiuQXx/view?usp=sharing",
      points: [
        "Specialized in Advanced Java and Servlets, focusing on full-stack development architecture.",
        "Developed core modules for the E-Book Management System.",
        "Integrated MySQL databases via phpMyAdmin, Payment Gateway APIs, and Jakarta Mail Web Sockets."
      ]
    },
    {
      id: 3,
      role: "Frontend Developer Intern",
      company: "Sutantra Technologies",
      duration: "March 2025 — April 2025",
      icon: <Terminal className="w-6 h-6" />,
      themeColor: "text-sky-600 dark:text-teal-400",
      themeBg: "bg-sky-600/10 dark:bg-teal-400/10",
      certLink: "https://certifications.sutantratechnologies.com/course/certificate/zMXDX1cpPjkV726VkwcB/Z1eBncYJFaNiV8V4QRc0BnUtJH83",
      points: [
        "Focused exclusively on frontend architecture and user interface design.",
        "Built highly responsive and dynamic web interfaces utilizing React.js.",
        "Implemented modern styling and layout components using Tailwind CSS."
      ]
    },
    {
      id: 4,
      role: "Backend & Dev Intern",
      company: "SecureHat Private Limited",
      duration: "Sep 2024 — Jan 2025",
      icon: <ShieldCheck className="w-6 h-6" />,
      themeColor: "text-emerald-600 dark:text-emerald-400",
      themeBg: "bg-emerald-600/10",
      certLink: "https://drive.google.com/file/d/1p0ZP7nwqgg07YMS7OUSZj7qFD8kRX_Id/view?usp=sharing",
      points: [
        "Gained practical, hands-on experience in backend software logic.",
        "Utilized C# for foundational development and system structuring.",
        "Assisted in testing and integrating logical workflows within existing codebases."
      ]
    }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="w-full max-w-6xl mx-auto px-4 relative z-10 py-12 space-y-24"
    >
      <div className="space-y-16">
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--accent-gold)]">Corporate Footprint</span>
          <h2 className="text-4xl md:text-5xl font-serif font-black text-[var(--text-main)] tracking-tight">
            Professional Experience
          </h2>
          <p className="text-[var(--text-muted)] font-bold">My journey through tech internships to enterprise-level training.</p>
        </motion.div>

        {/* 📈 TIMELINE WITH TRACKING */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto pb-10">
          <div className="absolute left-6 md:left-1/2 top-4 bottom-0 w-[2px] bg-[var(--text-muted)]/30 rounded-full md:-translate-x-1/2" />
          {/* Active Progress Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-6 md:left-1/2 top-4 bottom-0 w-[2px] bg-[var(--accent-gold)] rounded-full md:-translate-x-1/2 z-10" 
          />
          
          <div className="space-y-12 md:space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--accent-gold)]">Verifications</span>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-[var(--text-main)] tracking-tight">
            Certifications & Bootcamps
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="p-6 sm:p-8 rounded-3xl border border-[var(--text-muted)]/20 bg-[var(--text-muted)]/10 backdrop-blur-md flex flex-col gap-5 shadow-lg group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF9900] to-[#FFB952] flex items-center justify-center text-white shadow-inner">
              <Cloud className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[var(--text-main)] leading-tight">AWS Academy Graduate - Machine Learning Foundations</h3>
              <p className="text-sm font-bold text-[var(--text-muted)] mt-2">Amazon Web Services Training & Certification</p>
            </div>
            <p className="text-sm text-[var(--text-main)] font-bold leading-relaxed">
              Earned official badge recognizing foundational proficiency in AWS Machine Learning. Member of the AWS Emerging Talent Community for continuous cloud learning.
            </p>
            <a href="https://www.credly.com/go/RFkk6FhF32ucy2F3NW7Gdg" target="_blank" rel="noreferrer" className="mt-2 w-fit text-sm font-black text-[var(--accent-gold)] flex items-center gap-2 hover:underline">
              View Credly Badge <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="p-6 sm:p-8 rounded-3xl border border-[var(--text-muted)]/20 bg-[var(--text-muted)]/10 backdrop-blur-md flex flex-col gap-5 shadow-lg group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-inner">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[var(--text-main)] leading-tight">5-Day Intensive Bootcamp on Ethical Hacking & AI</h3>
              <p className="text-sm font-bold text-[var(--text-muted)] mt-2">Galgotias University</p>
            </div>
            <p className="text-sm text-[var(--text-main)] font-bold leading-relaxed">
              Participated in a rigorous hands-on cybersecurity training program. Covered modern ethical hacking frameworks, penetration testing, and AI-driven security controls.
            </p>
            <a href="https://drive.google.com/file/d/1OjNkTbKqDwFikDiYwCSyATy5M8-ZdWAq/view?usp=sharing" target="_blank" rel="noreferrer" className="mt-2 w-fit text-sm font-black text-[var(--accent-gold)] flex items-center gap-2 hover:underline">
              View Certificate <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ exp, index }) {
  const isEven = index % 2 === 0;
  return (
    <div className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center justify-between w-full group`}>
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-[var(--bg-surface)] bg-[var(--text-muted)]/20 items-center justify-center z-10">
        <Briefcase className="w-5 h-5 text-[var(--text-muted)]" />
      </div>
      <motion.div whileHover={{ scale: 1.02 }} className={`w-full md:w-[46%] pl-14 md:pl-0 py-2 ${isEven ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}>
        <div className="p-6 sm:p-8 rounded-3xl border border-[var(--text-muted)]/20 bg-[var(--text-muted)]/10 backdrop-blur-lg shadow-lg text-left">
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-xl ${exp.themeBg} ${exp.themeColor} shadow-sm shrink-0`}>{exp.icon}</div>
            <div>
              <h3 className="text-xl font-black text-[var(--text-main)] leading-tight">{exp.role}</h3>
              <p className="text-sm font-bold text-[var(--text-muted)] mt-0.5">{exp.company}</p>
            </div>
          </div>
          <div className="mb-4 inline-block">
            <p className="text-[11px] sm:text-xs font-black text-[var(--text-muted)] bg-[var(--text-muted)]/10 px-3 py-1.5 rounded-md border border-[var(--text-muted)]/20">
              {exp.duration}
            </p>
          </div>
          <ul className="space-y-3 mb-5">
            {exp.points.map((point, idx) => (
              <li key={idx} className="text-sm text-[var(--text-main)] font-bold flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
          <a href={exp.certLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--accent-gold)] hover:underline">
            View Certificate <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
      <div className="hidden md:block w-[46%]" />
    </div>
  );
}