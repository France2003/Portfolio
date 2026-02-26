import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolio';
import { SectionTitle } from '../components/ui/SectionTitle';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Tag } from '../components/ui/Tag';

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-navy-800/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionTitle title="Dự Án Tiêu Biểu" subtitle="Những sản phẩm tôi đã xây dựng" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <AnimatedSection key={proj.id} delay={i * 120} direction={i % 2 === 0 ? 'left' : 'right'}>
              <article className="glass rounded-2xl p-7 h-full flex flex-col glow-hover transition-all duration-300 group">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="text-white font-bold text-base leading-snug flex-1">
                      {proj.title}
                    </h3>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors shrink-0 glass px-3 py-1.5 rounded-full border border-white/10 hover:border-cyan-400/30"
                      aria-label="GitHub repository"
                    >
                      <Github size={13} />
                      <ExternalLink size={11} />
                    </a>
                  </div>
                  {proj.subtitle && (
                    <span className="text-cyan-400/80 text-xs font-medium">{proj.subtitle}</span>
                  )}
                </div>

                {/* Period & Role */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-cyan-400/10 text-cyan-400 text-xs px-2.5 py-1 rounded-full font-medium">
                    {proj.period}
                  </span>
                  <span className="bg-indigo-400/10 text-indigo-400 text-xs px-2.5 py-1 rounded-full font-medium">
                    {proj.role}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{proj.description}</p>

                {/* Achievement */}
                <div className="flex items-start gap-2 mb-5 p-3 rounded-xl bg-cyan-400/5 border border-cyan-400/10">
                  <CheckCircle2 size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  <p className="text-slate-300 text-xs leading-relaxed">{proj.achievement}</p>
                </div>

                {/* Tech tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {proj.technologies.map((tech) => (
                    <Tag key={tech} label={tech} variant="slate" />
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
