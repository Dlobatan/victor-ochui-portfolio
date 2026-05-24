import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export function AboutPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" ref={containerRef} className="py-24 sm:py-32 lg:py-40 relative overflow-hidden bg-black border-t border-white/5">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.06] grayscale pointer-events-none"
        style={{ backgroundImage: `url('/images/bg-editing-interface.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left" className="relative order-2 lg:order-1">
            <motion.div
              className="relative aspect-[3/4] overflow-hidden"
              style={{ y: imageY }}
            >
              <img
                src="/images/about-portrait.png"
                alt="Victor Ochui - Creative Technologist and Cinematographer"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-black border border-white/10 p-6"
            >
              <span className="block font-display text-4xl text-gold mb-1">10+</span>
              <span className="text-xs uppercase tracking-[0.15em] text-white/50">Years Experience</span>
            </motion.div>
          </ScrollReveal>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <ScrollReveal direction="right">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-white/20" />
                <span className="text-xs uppercase tracking-[0.15em] text-white/50">About</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl text-white mb-8 leading-tight">
                A Decade of Cinematic Storytelling
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                Victor Ochui is a Creative Technologist and Cinematographer with more than 
                ten years of experience in visual storytelling, filmmaking, video editing, 
                photography, and motion design.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                His work explores the intersection of cinema, artificial intelligence, and 
                creative systems. Victor designs visual experiences and AI-powered workflows 
                that allow creators and brands to produce powerful stories across modern 
                digital platforms.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <a
                href="#"
                className="group inline-flex items-center gap-3 text-white hover:text-gold transition-colors"
              >
                <span className="text-sm uppercase tracking-[0.15em]">Read full story</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
