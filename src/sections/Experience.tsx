import { Briefcase, CheckCircle2 } from 'lucide-react';
import { workExperiences } from '../data/portfolio';
import { SectionTitle } from '../components/ui/SectionTitle';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-navy-800/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionTitle title="Kinh Nghiệm Làm Việc" subtitle="Hành trình nghề nghiệp của tôi" />
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-cyan-400/20" />

          {workExperiences.map((job, i) => (
            <AnimatedSection key={job.id} delay={i * 120} direction="left">
              <div className="relative pl-16 pb-10">
                {/* Timeline dot */}
                <div className="absolute left-[17px] top-1 w-5 h-5 rounded-full bg-cyan-400 border-4 border-navy-900 shadow-lg shadow-cyan-400/30" />

                <div className="glass rounded-2xl p-7 glow-hover transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0">
                        <Briefcase size={16} className="text-cyan-400" />
                      </div>
                      <h3 className="text-white font-bold text-lg">{job.company}</h3>
                    </div>
                    <span className="text-cyan-400 text-sm font-medium shrink-0 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-slate-300 font-semibold text-sm mb-5 ml-12">{job.role}</p>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3">
                        <CheckCircle2 size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                        <span className="text-slate-400 text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
