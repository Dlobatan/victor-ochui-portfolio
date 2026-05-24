import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  Camera, 
  Film, 
  Lightbulb, 
  Cpu, 
  Scissors, 
  FileVideo, 
  Workflow, 
  Sparkles 
} from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: "Cinematography",
    description: "Crafting visual narratives through camera work and lighting"
  },
  {
    icon: Film,
    title: "Video Production",
    description: "End-to-end production from concept to final delivery"
  },
  {
    icon: Lightbulb,
    title: "Creative Direction",
    description: "Guiding the visual vision and creative strategy"
  },
  {
    icon: Cpu,
    title: "AI Video Creation",
    description: "Leveraging AI tools for innovative visual content"
  },
  {
    icon: Scissors,
    title: "Video Editing",
    description: "Seamless post-production and motion design"
  },
  {
    icon: FileVideo,
    title: "Documentary Production",
    description: "Authentic storytelling that resonates"
  },
  {
    icon: Workflow,
    title: "Creative Systems",
    description: "Building scalable workflows and processes"
  },
  {
    icon: Sparkles,
    title: "Motion Design",
    description: "Dynamic graphics and visual effects"
  }
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  
  const background = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      rgba(201, 168, 108, 0.12),
      transparent 80%
    )
  `;

  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.div
        className="group relative p-6 sm:p-8 bg-white/[0.015] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        onMouseMove={handleMouseMove}
      >
        {/* Dynamic Glow Layer */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background }}
        />

        {/* Icon */}
        <motion.div
          className="relative z-10 mb-6"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="w-8 h-8 text-gold/70 group-hover:text-gold transition-colors" strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <h3 className="relative z-10 font-display text-xl text-white mb-3 group-hover:text-gold transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="relative z-10 text-sm text-white/50 leading-relaxed">
          {service.description}
        </p>
      </motion.div>
    </ScrollReveal>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 lg:py-40 relative overflow-hidden bg-black border-t border-white/5">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.06] grayscale pointer-events-none"
        style={{ backgroundImage: `url('/images/bg-concert.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-xs uppercase tracking-[0.15em] text-white/50">Services</span>
            <div className="w-12 h-px bg-white/20" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white">
            What I Do
          </h2>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
