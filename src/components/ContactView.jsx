import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

export default function ContactView() {
  // 1. Form state aur API response handling ke liye states
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 100 } }
  };

  // 2. Input values change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Vercel API hit karne ke liye submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: 'Message transmitted successfully!', error: null });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Form clear karne ke liye
      } else {
        setStatus({ loading: false, success: null, error: data.error || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: 'Network error! Please try again later.' });
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full max-w-6xl mx-auto px-4 relative z-10 py-12"
    >
      
      {/* 📬 SECTION HEADER */}
      <motion.div variants={itemVariants} className="text-center space-y-4 mb-16">
        <span className="text-xs uppercase tracking-[0.3em] font-black text-[var(--accent-gold)]">Initiate Connection</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[var(--text-main)] tracking-tight">
          Let's Build Something.
        </h2>
        <p className="text-[var(--text-main)] text-sm sm:text-base font-bold max-w-2xl mx-auto leading-relaxed">
          Currently open for new opportunities, collaborations, or tech discussions. Send a message and let's engineer the next big thing.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        
        {/* 🌍 LEFT PANEL: Contact Details */}
        <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-center space-y-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-[var(--text-main)]">Direct Channels</h3>
            
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-[var(--text-muted)]/10 flex items-center justify-center text-[var(--accent-gold)] group-hover:bg-[var(--text-main)] group-hover:text-[var(--bg-surface)] transition-colors duration-300 shadow-sm shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black tracking-widest text-[var(--text-muted)] uppercase mb-1">Email</p>
                <a href="mailto:suraj71442@gmail.com" className="text-base sm:text-lg font-black text-[var(--text-main)] hover:text-[var(--accent-gold)] transition-colors">
                  suraj71442@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-[var(--text-muted)]/10 flex items-center justify-center text-[var(--accent-gold)] group-hover:bg-[var(--text-main)] group-hover:text-[var(--bg-surface)] transition-colors duration-300 shadow-sm shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black tracking-widest text-[var(--text-muted)] uppercase mb-1">Base of Operations</p>
                <p className="text-base sm:text-lg font-black text-[var(--text-main)]">
                  Jharkhand & Uttar Pradesh, India
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-[var(--text-muted)]/20 bg-[var(--text-muted)]/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <h4 className="font-black text-[var(--text-main)]">Status: Available</h4>
            </div>
            <p className="text-sm font-bold text-[var(--text-muted)]">
              Actively crafting full-stack solutions and exploring innovations in AI & Machine Learning.
            </p>
          </div>
        </motion.div>

        {/* ✉️ RIGHT PANEL: The Glassmorphism Form */}
        <motion.div variants={itemVariants} className="lg:col-span-7">
          <div className="p-6 sm:p-10 rounded-[2.5rem] border border-[var(--text-muted)]/20 bg-[var(--text-muted)]/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            
            {/* Form submit link function logic connected */}
            <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField label="Your Name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                <InputField label="Email Address" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" type="email" />
              </div>
              
              <InputField label="Project / Subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Full-Stack Developer Role" />
              
              <div className="space-y-2">
                <label className="text-xs font-black tracking-wider text-[var(--text-muted)] uppercase pl-2">Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Hello Suraj..." className="w-full px-5 py-4 rounded-2xl bg-[var(--text-muted)]/10 border border-[var(--text-muted)]/20 text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-gold)] transition-all font-bold resize-none"></textarea>
              </div>

              {/* Status Notice Notifications */}
              {status.success && <p className="text-sm font-bold text-emerald-500 pl-2">{status.success}</p>}
              {status.error && <p className="text-sm font-bold text-rose-500 pl-2">{status.error}</p>}

              <button type="submit" disabled={status.loading} className="group mt-2 w-full sm:w-auto self-end flex items-center justify-center gap-3 bg-[var(--text-main)] text-[var(--bg-surface)] px-8 py-4 rounded-2xl font-black hover:scale-[1.02] transition-all shadow-xl disabled:opacity-50">
                <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                {status.loading ? 'Sending...' : 'Connect Me'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// 4. InputField modified with tracking props
function InputField({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-black tracking-wider text-[var(--text-muted)] uppercase pl-2">{label}</label>
      <input required name={name} value={value} onChange={onChange} type={type} placeholder={placeholder} className="w-full px-5 py-4 rounded-2xl bg-[var(--text-muted)]/10 border border-[var(--text-muted)]/20 text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-gold)] transition-all font-bold" />
    </div>
  );
}

function GithubIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
}

function LinkedinIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
}