import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Interactive Particle Grid Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.2 + 0.6;
        this.speedX = Math.random() * 0.15 - 0.075;
        this.speedY = Math.random() * 0.15 - 0.075;
        this.opacity = Math.random() * 0.4 + 0.1;
      }

      update(mouseX: number, mouseY: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;

        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;

        // Push particles away from cursor
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          this.x -= (dx / dist) * force * 1.2;
          this.y -= (dy / dist) * force * 1.2;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.fillStyle = `rgba(201, 168, 108, ${this.opacity})`;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
      }
    }

    const particles: Particle[] = Array.from({ length: 50 }, () => new Particle());
    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update(mouse.x, mouse.y);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.4,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    }
  };

  const title = "Victor Ochui";

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          poster="/images/hero-bg.jpg"
        >
          {/* Local dark cinematic background video */}
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle Dark Overlay to help text contrast */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </motion.div>

      {/* Interactive Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-1 pointer-events-none" 
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6"
        style={{ opacity }}
      >
        {/* Slow floating wrapper container */}
        <motion.div
          animate={{
            y: [0, -12, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Title with Gold Metallic Reveal and interactive letter springs */}
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 tracking-tight cursor-default select-none flex flex-wrap justify-center gap-y-2"
          >
            {(() => {
              let charCounter = 0;
              return title.split(' ').map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block whitespace-nowrap">
                  {word.split('').map((char, charIdx) => {
                    const currentIdx = charCounter++;
                    return (
                      <motion.span
                        key={charIdx}
                        custom={currentIdx}
                        variants={letterVariants}
                        whileHover={{ y: -15, scale: 1.1, color: '#c9a86c' }}
                        transition={{ type: "spring", stiffness: 350, damping: 15 }}
                        className="inline-block bg-gradient-to-r from-white via-gold/80 to-white/70 bg-clip-text text-transparent py-2"
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                  {/* Space between words */}
                  {wordIdx < title.split(' ').length - 1 && (
                    <span className="inline-block">&nbsp;</span>
                  )}
                </span>
              ));
            })()}
          </motion.h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/50 mb-12 font-mono"
        >
          Cinematographer & Creative Technologist
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-block px-10 py-4 border border-white/10 text-white text-xs uppercase tracking-[0.2em] font-mono overflow-hidden transition-all duration-300 hover:border-gold/30"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">View Work</span>
            <span className="absolute inset-0 bg-gold transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="w-5 h-5 text-gold/50 hover:text-gold transition-colors duration-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}
