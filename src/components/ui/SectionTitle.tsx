interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
    </div>
  );
}
