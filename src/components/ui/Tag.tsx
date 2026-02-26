interface TagProps {
  label: string;
  variant?: 'cyan' | 'indigo' | 'slate';
}

export function Tag({ label, variant = 'cyan' }: TagProps) {
  const variants = {
    cyan: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20 hover:bg-cyan-400/20',
    indigo: 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20 hover:bg-indigo-400/20',
    slate: 'bg-slate-400/10 text-slate-300 border-slate-400/20 hover:bg-slate-400/20',
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium border rounded-full transition-colors duration-200 ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
