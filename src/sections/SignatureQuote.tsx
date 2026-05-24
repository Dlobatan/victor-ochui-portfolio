import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function SignatureQuote() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24 sm:py-32"
    >
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.08] grayscale pointer-events-none"
          style={{ backgroundImage: `url('/images/bg-cinema-hall.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        
        {/* Subtle Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity, scale }}
      >
        {/* Quote Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <span className="font-display text-8xl sm:text-9xl text-gold/20 leading-none">"</span>
        </motion.div>

        {/* Quote Text */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-10 italic"
        >
          Designing the future of storytelling through cinema and artificial intelligence.
        </motion.blockquote>

        {/* Attribution */}
        <motion.cite
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm uppercase tracking-[0.2em] text-white/40 not-italic"
        >
          — Victor Ochui
        </motion.cite>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </section>
  );
}
