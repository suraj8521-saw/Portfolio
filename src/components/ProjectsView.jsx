import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Rocket, BookOpen, StickyNote, Database, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function ProjectsView() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 100 } }
  };

  const projects = [
    {
      id: 1,
      title: "ResuRanker",
      subtitle: "AI Resume Analyzer (B2B & B2C)",
      description: "A dual-tier AI platform engineered for both individual professionals and enterprise HR teams. Powered by custom Machine Learning models and a scalable FastAPI backend, it provides candidates with real-time actionable feedback while enabling enterprises to parse, grade, and streamline bulk candidate pipelines against strict ATS standards.",
      tags: ["React.js", "FastAPI", "Python ML", "Dual-Tier Architecture"],
      image: "/resuranker.jpg", 
      fallbackIcon: <Rocket className="w-12 h-12 text-white/80" />,
      fallbackGradient: "from-sky-500 to-blue-700",
      github: "https://github.com/suraj8521-saw/ResuRanker-Frontend",
      live: "https://resuranker.vercel.app/"
    },
    {
      id: 2,
      title: "E-Book Management System",
      subtitle: "Digital Marketplace & Library",
      description: "A complete end-to-end digital marketplace engineered for buying, reselling, and managing e-books. Built on a robust Advanced Java architecture, it features distinct administrative and user panels, secure transaction handling via integrated Payment Gateways, and automated notification systems using Jakarta Mail and WebSockets.",
      tags: ["Advanced Java", "JSP & Servlets", "MySQL", "Payment Gateway Integration","Websocket"],
      image: "/ebook.jpg", 
      fallbackIcon: <BookOpen className="w-12 h-12 text-white/80" />,
      fallbackGradient: "from-purple-600 to-pink-600",
      github: "https://github.com/suraj8521-saw/E-BookManagement_2",
      live: "https://e-bookmanagement2-production.up.railway.app"
    },
    {
      id: 3,
      title: "Easy Notes",
      subtitle: "Secure Cloud Note-Taking App",
      description: "A fast and highly responsive web application for managing personal notes. Features rich text formatting, secure JWT-based user authentication, and real-time database synchronization for seamless access across all devices.",
      tags: ["React.js", "FastAPI", "JWT Auth", "Responsive UI"],
      image: "/easynotes.jpg",
      fallbackIcon: <StickyNote className="w-12 h-12 text-white/80" />,
      fallbackGradient: "from-teal-400 to-emerald-600",
      github: "https://github.com/suraj8521-saw/easynotes-frontend",
      live: "https://easynotes-frontend-pam4.vercel.app/"
    },
    {
      id: 4,
      title: "Pizza Sales & Management",
      subtitle: "Enterprise Backend Architecture",
      description: "A robust sales and inventory tracking system built with strict object-oriented principles. Engineered a reliable relational database schema to handle concurrent orders and complex sales analytics without latency drops.",
      tags: ["C#", ".NET", "MySQL", "OOPs Architecture"],
      image: " " ,
      fallbackIcon: <Database className="w-12 h-12 text-white/80" />,
      fallbackGradient: "from-amber-500 to-orange-600",
      github: "#",
      live: "#"
    }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full max-w-6xl mx-auto px-4 relative z-10 py-12 space-y-20"
    >
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--accent-gold)]">Development Track Record</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--text-main)] tracking-tight">
          Featured Projects
        </h2>
        <p className="text-[var(--text-main)] text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
          A comprehensive look at systems I've engineered to solve complex problems, combining dynamic frontend interfaces with resilient, cloud-powered backends.
        </p>
      </motion.div>

      <div className="space-y-16 md:space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="relative rounded-[2rem] border border-[var(--text-muted)]/20 bg-[var(--text-muted)]/5 backdrop-blur-xl overflow-hidden group shadow-2xl transition-all duration-500"
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch h-full`}>
        
        <div className={`w-full md:w-5/12 relative min-h-[250px] sm:min-h-[300px] md:min-h-full overflow-hidden shrink-0 bg-gradient-to-br ${project.fallbackGradient} flex items-center justify-center`}>
          <img 
            src={project.image} 
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-10"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="hidden absolute inset-0 items-center justify-center z-0 flex-col gap-4">
            {project.fallbackIcon}
            <span className="text-white/60 text-xs font-mono tracking-widest uppercase">Image Pending</span>
          </div>
          <div className={`absolute inset-0 bg-gradient-to-t md:${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-[var(--bg-surface)] via-transparent to-transparent opacity-80 md:opacity-40 z-20 pointer-events-none`} />
        </div>

        <div className="w-full md:w-7/12 p-6 sm:p-10 lg:p-12 flex flex-col justify-center relative z-30">
          <div className="space-y-4">
            <div>
              <p className="text-xs sm:text-sm font-bold text-[var(--accent-gold)] tracking-widest uppercase mb-2">
                {project.subtitle}
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-main)] tracking-tight">
                {project.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[var(--text-main)] font-medium leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-8 mt-8">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-[11px] sm:text-xs font-bold bg-[var(--text-muted)]/10 text-[var(--text-main)] px-3.5 py-1.5 rounded-md border border-[var(--text-muted)]/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-sm font-bold text-[var(--text-main)] hover:text-[var(--accent-gold)] transition-colors px-4 py-2.5 rounded-full border border-[var(--text-muted)]/30 hover:border-[var(--accent-gold)]"
              >
                <GithubIcon /> 
                <span>Source Code</span>
              </a>
              <a 
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-[var(--bg-surface)] bg-[var(--text-main)] px-6 py-2.5 rounded-full hover:scale-105 transition-transform"
              >
                <ExternalLink className="w-4 h-4" /> 
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:scale-110 transition-transform">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}