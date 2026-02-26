import { Code2, Monitor, Server, Bot, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skillCategories } from '../data/portfolio';
import { SectionTitle } from '../components/ui/SectionTitle';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Tag } from '../components/ui/Tag';

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Monitor,
  Server,
  Bot,
  Wrench,
};

const TAG_VARIANTS: Array<'cyan' | 'indigo' | 'slate'> = ['cyan', 'indigo', 'slate', 'cyan', 'indigo'];

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionTitle title="Kỹ Năng Chuyên Môn" subtitle="Công nghệ & công cụ tôi thành thạo" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon] ?? Code2;
            return (
              <AnimatedSection key={cat.id} delay={i * 80} direction="up">
                <div className="glass rounded-2xl p-6 h-full glow-hover transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-400/20 transition-colors">
                      <Icon size={20} className="text-cyan-400" />
                    </div>
                    <h3 className="text-white font-semibold text-sm leading-snug">{cat.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <Tag key={skill} label={skill} variant={TAG_VARIANTS[i % TAG_VARIANTS.length]} />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
