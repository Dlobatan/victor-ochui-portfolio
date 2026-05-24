import { useCountUp } from '../hooks/useCountUp';
import { ScrollReveal } from '../components/ScrollReveal';

interface StatItemProps {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

function StatItem({ end, suffix = '', label, delay = 0 }: StatItemProps) {
  const { count, ref } = useCountUp({ end, duration: 2000 });

  return (
    <ScrollReveal delay={delay} className="text-center">
      <div ref={ref} className="relative">
        <span className="font-display text-6xl sm:text-7xl lg:text-8xl text-white mb-4 block">
          {count}{suffix}
        </span>
        <span className="text-xs uppercase tracking-[0.15em] text-white/50">
          {label}
        </span>
      </div>
    </ScrollReveal>
  );
}

export function CreativeImpact() {
  const stats = [
    { end: 10, suffix: '+', label: 'Years of Experience' },
    { end: 100, suffix: '+', label: 'Video Projects Produced' },
    { end: 50, suffix: '+', label: 'Documentary & Brand Productions' },
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden bg-black border-t border-white/5">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.06] grayscale pointer-events-none"
        style={{ backgroundImage: `url('/images/bg-production.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-xs uppercase tracking-[0.15em] text-white/50">Impact</span>
            <div className="w-12 h-px bg-white/20" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white">
            Creative Impact
          </h2>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Expertise Tags */}
        <ScrollReveal delay={0.4} className="mt-16 sm:mt-20">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4 block">
              Expertise Areas
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              {['Cinematography', 'AI Video', 'Digital Media', 'Film Production', 'Motion Design'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-white/10 text-sm text-white/60 hover:border-gold/30 hover:text-gold/70 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
