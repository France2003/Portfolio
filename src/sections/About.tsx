import { MapPin, Mail, Phone, Calendar, Target } from 'lucide-react';
import { personalInfo, careerObjective } from '../data/portfolio';
import { SectionTitle } from '../components/ui/SectionTitle';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export function About() {
  return (
    <section id="about" className="section-padding bg-navy-800/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionTitle title="Về Tôi" subtitle="Mục tiêu nghề nghiệp & Thông tin cá nhân" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Career objective */}
          <AnimatedSection delay={100} direction="left">
            <div className="glass rounded-2xl p-8 glow-hover transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                  <Target size={20} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-xl">Mục tiêu nghề nghiệp</h3>
              </div>
              <div className="space-y-4">
                {careerObjective.map((para, i) => (
                  <p key={i} className="text-slate-400 leading-relaxed text-sm sm:text-base">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Personal info */}
          <AnimatedSection delay={200} direction="right">
            <div className="glass rounded-2xl p-8 glow-hover transition-all duration-300">
              <h3 className="text-white font-bold text-xl mb-6">Thông tin cá nhân</h3>
              <ul className="space-y-4">
                <InfoRow icon={<Phone size={16} />} label="Điện thoại" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
                <InfoRow icon={<Calendar size={16} />} label="Ngày sinh" value={personalInfo.dob} />
                <InfoRow icon={<Mail size={16} />} label="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
                <InfoRow icon={<MapPin size={16} />} label="Địa chỉ" value={personalInfo.address} />
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a href={href} className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm break-all">
      {value}
    </a>
  ) : (
    <span className="text-slate-300 text-sm">{value}</span>
  );

  return (
    <li className="flex items-start gap-3">
      <div className="mt-0.5 text-cyan-400 shrink-0">{icon}</div>
      <div>
        <span className="text-slate-500 text-xs uppercase tracking-wider block mb-0.5">{label}</span>
        {content}
      </div>
    </li>
  );
}
