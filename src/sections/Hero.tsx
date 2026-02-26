import { Github, Mail, Phone, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';
import avatar from '../assets/p.jpg'
const TITLES = [
  'Front-End Developer',
  'UI/UX Craftsman',
  'AI Automation Builder',
];

export function Hero() {
  const typed = useTypewriter(TITLES, 75, 2000);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div
            className="relative"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-cyan-400/40 glow">
              <img
                src={avatar}
                alt="Bùi Đình Pháp"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Status dot */}
            <span className="absolute bottom-3 right-3 w-5 h-5 bg-green-400 border-2 border-navy-900 rounded-full" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
          {personalInfo.name}
        </h1>

        {/* Typing title */}
        <div className="text-xl sm:text-2xl font-semibold mb-8 h-8">
          <span className="text-gradient">{typed}</span>
          <span className="cursor-blink text-cyan-400 ml-0.5">|</span>
        </div>

        {/* Short tagline */}
        <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Fresher Front-End Developer chuyên ReactJS & TailwindCSS,
          đam mê xây dựng giao diện đẹp và tích hợp AI thông minh.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 bg-cyan-400 text-navy-900 font-bold rounded-full hover:bg-cyan-300 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-cyan-400/20"
          >
            Xem dự án
          </button>
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-8 py-3 glass border border-cyan-400/30 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400/10 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <span className="flex items-center gap-2">
              <Mail size={16} /> Liên hệ ngay
            </span>
          </a>
        </div>

        {/* Social quick links */}
        <div className="flex items-center justify-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <Github size={18} /> GitHub
          </a>
          <span className="text-slate-700">|</span>
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <Phone size={18} /> {personalInfo.phone}
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors"
        aria-label="Scroll down"
        style={{ animation: 'bounce 2s infinite' }}
      >
        <ChevronDown size={28} />
      </button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
      `}</style>
    </section>
  );
}
