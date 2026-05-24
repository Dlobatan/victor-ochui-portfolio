import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';

export function CreativePhilosophy() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden bg-black border-t border-white/5">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.06] grayscale pointer-events-none"
        style={{ backgroundImage: `url('/images/bg-movie-shoot.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div>
            <ScrollReveal direction="left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-white/20" />
                <span className="text-xs uppercase tracking-[0.15em] text-white/50">Philosophy</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                Story First.<br />
                <span className="text-white/40">Technology Second.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                Great storytelling has always been the foundation of cinema. Technology 
                expands what creators can achieve.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                My work combines cinematic craft with emerging technologies such as 
                artificial intelligence to design powerful visual experiences that 
                connect with audiences.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <p className="text-lg text-white/60 leading-relaxed">
                Every project begins with a story, a clear message, and a visual strategy.
              </p>
            </ScrollReveal>
          </div>

          {/* Visual Element */}
          <ScrollReveal direction="right" delay={0.2} className="relative">
            <motion.div
              className="relative aspect-square max-w-md mx-auto lg:max-w-none"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              {/* Decorative Quote Mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -top-8 -left-4 text-[200px] font-display text-white/5 leading-none select-none"
              >
                "
              </motion.div>

              {/* Content Card */}
              <div className="relative bg-white/[0.02] border border-white/10 p-8 sm:p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-gold text-2xl font-display">01</span>
                    <div>
                      <h4 className="text-white font-medium mb-1">Concept</h4>
                      <p className="text-white/50 text-sm">Every story starts with a clear vision</p>
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-white/10" />
                  
                  <div className="flex items-start gap-4">
                    <span className="text-gold text-2xl font-display">02</span>
                    <div>
                      <h4 className="text-white font-medium mb-1">Craft</h4>
                      <p className="text-white/50 text-sm">Cinematic execution with precision</p>
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-white/10" />
                  
                  <div className="flex items-start gap-4">
                    <span className="text-gold text-2xl font-display">03</span>
                    <div>
                      <h4 className="text-white font-medium mb-1">Innovation</h4>
                      <p className="text-white/50 text-sm">Technology that serves the story</p>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/30" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/30" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/30" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/30" />
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
