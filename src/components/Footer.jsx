import React from 'react';

// Icons ko humne hardcode kar diya hai taaki koi library error na aaye
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Suraj Kumar Saw</p>
        
        <div className="flex gap-6">
          <a href="https://github.com/suraj8521-saw" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/suraj-kumar-384182215" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 transition-colors">
            <LinkedinIcon />
          </a>
          <a href="mailto:suraj71442@gmail.com" className="text-neutral-600 hover:text-red-500 dark:text-neutral-400 transition-colors">
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}