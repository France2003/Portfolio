import { Github, Heart } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm flex items-center gap-1">
          Made with <Heart size={14} className="text-cyan-400 fill-cyan-400" /> by{' '}
          <span className="text-cyan-400 font-medium ml-1">{personalInfo.name}</span>
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
        <p className="text-slate-600 text-xs">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
