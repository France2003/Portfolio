import { Mail, Phone, MapPin, Github, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { personalInfo, hobbies } from '../data/portfolio';
import { SectionTitle } from '../components/ui/SectionTitle';
import { AnimatedSection } from '../components/ui/AnimatedSection';

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
}

function ContactCard({ icon, label, value, href, copyable }: ContactCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass rounded-2xl p-6 glow-hover transition-all duration-300 flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center shrink-0 text-cyan-400">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{label}</p>
        {href ? (
          <a
            href={href}
            className="text-slate-200 text-sm font-medium hover:text-cyan-400 transition-colors break-all"
          >
            {value}
          </a>
        ) : (
          <p className="text-slate-200 text-sm font-medium break-all">{value}</p>
        )}
      </div>
      {copyable && (
        <button
          onClick={handleCopy}
          className="text-slate-500 hover:text-cyan-400 transition-colors shrink-0"
          title="Copy"
        >
          {copied ? <Check size={15} className="text-green-400" /> : <Copy size={15} />}
        </button>
      )}
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionTitle title="Liên Hệ" subtitle="Hãy cùng nhau tạo ra điều gì đó tuyệt vời!" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          <AnimatedSection delay={80} direction="left">
            <ContactCard
              icon={<Phone size={22} />}
              label="Điện thoại"
              value={personalInfo.phone}
              href={`tel:${personalInfo.phone}`}
              copyable
            />
          </AnimatedSection>
          <AnimatedSection delay={160} direction="right">
            <ContactCard
              icon={<Mail size={22} />}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
              copyable
            />
          </AnimatedSection>
          <AnimatedSection delay={240} direction="left">
            <ContactCard
              icon={<MapPin size={22} />}
              label="Địa chỉ"
              value={personalInfo.address}
            />
          </AnimatedSection>
          <AnimatedSection delay={320} direction="right">
            <ContactCard
              icon={<Github size={22} />}
              label="GitHub"
              value="github.com/France2003"
              href={personalInfo.github}
            />
          </AnimatedSection>
        </div>

        {/* Hobbies */}
        <AnimatedSection delay={100}>
          <div className="glass rounded-2xl p-7">
            <h3 className="text-white font-bold text-lg mb-4">Sở Thích</h3>
            <div className="flex flex-wrap gap-3">
              {hobbies.map((h) => (
                <span
                  key={h}
                  className="px-4 py-2 rounded-full glass border border-cyan-400/20 text-slate-300 text-sm hover:border-cyan-400/40 hover:text-cyan-400 transition-colors cursor-default"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
