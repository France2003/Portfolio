import { GraduationCap, Award, Star } from 'lucide-react';
import { education, certificates } from '../data/portfolio';
import { SectionTitle } from '../components/ui/SectionTitle';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionTitle title="Học Vấn & Chứng Chỉ" />
        </AnimatedSection>

        {/* Education timeline */}
        <div className="relative mb-10">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-indigo-400/20" />

          {education.map((edu, i) => (
            <AnimatedSection key={edu.id} delay={i * 100} direction="left">
              <div className="relative pl-16 pb-8">
                <div className="absolute left-[17px] top-1 w-5 h-5 rounded-full bg-indigo-400 border-4 border-navy-900 shadow-lg shadow-indigo-400/30" />

                <div className="glass rounded-2xl p-7 glow-hover transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-400/10 flex items-center justify-center shrink-0">
                        <GraduationCap size={18} className="text-indigo-400" />
                      </div>
                      <h3 className="text-white font-bold text-base">{edu.school}</h3>
                    </div>
                    <span className="text-indigo-400 text-sm font-medium bg-indigo-400/10 px-3 py-1 rounded-full shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-slate-300 font-semibold text-sm mb-4 ml-12">
                    Chuyên ngành: {edu.major}
                  </p>
                  <div className="ml-12 space-y-2">
                    {edu.gpa && (
                      <div className="flex items-center gap-2">
                        <Star size={13} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-slate-400 text-sm">GPA: {edu.gpa}</span>
                      </div>
                    )}
                    {edu.thesis && (
                      <p className="text-slate-400 text-sm">
                        <span className="text-slate-500">Đồ án TN: </span>
                        <em className="text-slate-300">{edu.thesis}</em>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certificates */}
        <AnimatedSection delay={100}>
          <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
            <Award size={20} className="text-cyan-400" /> Chứng Chỉ
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="glass rounded-xl p-5 border border-cyan-400/10 glow-hover transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0">
                    <Award size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {cert.issuer} ({cert.year})
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">{cert.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
