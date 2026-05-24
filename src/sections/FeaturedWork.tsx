import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { ProjectModal, type ProjectType } from '../components/ProjectModal';

const projects: ProjectType[] = [
  {
    title: "Iyan: The King of African Cuisine",
    category: "Documentary",
    role: "Director / Cinematographer / Editor",
    image: "/images/project-iyan.jpg",
    videoUrl: "https://player.vimeo.com/video/1039868779", // Premium cinematic food drone/vlog reel
    duration: "5m 24s",
    year: "2024",
    client: "African Food Network",
    challenge: "To document the traditional, labor-intensive process of preparing Iyan (pounded yam) in Western Nigeria, capturing the deep cultural heritage and emotional significance behind the dish.",
    approach: "Shot on location using RED cinema cameras and high-speed primes. We focused heavily on slow-motion closeups, natural steam diffusion, and immersive ambient field recordings to create a sensory culinary experience.",
    outcome: "The documentary was screened at three international food film festivals, receiving high praise for its tactile cinematography and authentic representation of West African culture.",
    tools: ["RED V-Raptor", "Cooke Anamorphic Lenses", "DaVinci Resolve", "Adobe Premiere Pro"]
  },
  {
    title: "Eko Tech Brand Stories",
    category: "Brand Films",
    role: "Creative Director / Editor",
    image: "/images/project-brand.jpg",
    videoUrl: "/drift-security.mp4",
    duration: "2m 15s",
    year: "2023",
    client: "Eko Tech Hub",
    challenge: "To craft a compelling launch film that highlights Eko Tech Hub's contribution to building Nigeria's tech talent pipeline, while maintaining a gritty, modern, and high-energy urban aesthetic.",
    approach: "Blending fast-paced motion graphics with intimate live-action shots of developers and creators, utilizing custom industrial sound design to synchronize with kinetic typography reveals.",
    outcome: "The video generated over 250k impressions on launch day, driving a 40% increase in talent registrations and establishing a premium brand identity for the hub.",
    tools: ["Sony FX3", "DZOFilm Vespid Lenses", "Adobe After Effects", "DaVinci Resolve Studio"],
    aspectRatio: "16:9"
  },
  {
    title: "Kinetic Motion Studies",
    category: "Experimental",
    role: "Cinematographer / Motion Designer",
    image: "/images/project-motion.jpg",
    videoUrl: "https://player.vimeo.com/video/343058863", // Fluid dynamics and particle study reel
    duration: "1m 40s",
    year: "2023",
    client: "Self-Directed",
    challenge: "An aesthetic exploration of fluid dynamics, mechanical movements, and lighting contrasts to study the visual perception of motion in physical spaces.",
    approach: "Combining macro photography with heavy color correction and digital particle simulators, driven by an atmospheric modular synthesizer soundtrack.",
    outcome: "Selected as a Vimeo Staff Pick and featured in several design blogs as a reference for kinetic storytelling and texture manipulation.",
    tools: ["Canon R5 C", "Macro Lenses", "Cinema 4D", "X-Particles", "After Effects"]
  },
  {
    title: "AI Narrative Brand Systems",
    category: "AI Generated Video",
    role: "AI Systems Builder",
    image: "/images/project-ai.jpg",
    videoUrl: "/father-and-daughter.mp4",
    duration: "3m 10s",
    year: "2024",
    client: "Future Labs Corp",
    challenge: "Constructing a coherent storytelling workflow using AI video generators, overcoming temporal inconsistency and visual artifacts across scenes.",
    approach: "Designed a hybrid pipeline linking Stable Diffusion, Midjourney, and Runway Gen-2. Custom control nets and face-restoration techniques were implemented to keep characters uniform.",
    outcome: "A proof-of-concept cinematic sci-fi trailer that proved generative AI could yield production-ready narrative assets with 80% lower rendering budgets.",
    tools: ["Stable Diffusion", "Midjourney", "Runway Gen-2", "ComfyUI", "Topaz Video AI"],
    aspectRatio: "9:16"
  }
];

function ProjectCard({ 
  project, 
  index, 
  onSelect 
}: { 
  project: ProjectType; 
  index: number; 
  onSelect: (p: ProjectType) => void;
}) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        className="group relative aspect-video overflow-hidden cursor-pointer bg-neutral-900 border border-white/5"
        whileHover="hover"
        onClick={() => onSelect(project)}
        data-cursor="VIEW"
      >
        {/* Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
          variants={{
            hover: { scale: 1.06 }
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <motion.div
            variants={{
              hover: { y: -8 }
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold mb-2 block">
              {project.category}
            </span>
            <h3 className="font-display text-xl sm:text-2xl text-white mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-white/50 tracking-wider">
              {project.role}
            </p>
          </motion.div>
        </div>

        {/* Cinematic Corner Accents (Slide in on hover) */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/0 group-hover:border-gold/40 transition-colors duration-500" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold/0 group-hover:border-gold/40 transition-colors duration-500" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold/0 group-hover:border-gold/40 transition-colors duration-500" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/0 group-hover:border-gold/40 transition-colors duration-500" />

        {/* Border Overlay */}
        <motion.div
          className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500"
        />
      </motion.div>
    </ScrollReveal>
  );
}

export function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32 lg:py-40 relative overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.06] grayscale pointer-events-none"
        style={{ backgroundImage: `url('/images/bg-camera-setup.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="mb-16 sm:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-white/25" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-gold">Portfolio</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Selected Projects
          </h2>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed font-light">
            A collection of cinematic work, brand storytelling, and AI-driven video projects 
            exploring the intersection of film, culture, and emerging technology.
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              onSelect={setSelectedProject} 
            />
          ))}
        </div>

        {/* Categories */}
        <ScrollReveal delay={0.4} className="mt-16 sm:mt-20">
          <div className="flex flex-wrap gap-3">
            {['Documentary', 'Brand Films', 'Commercial Video', 'AI Generated Video', 'Experimental Film'].map((category) => (
              <span
                key={category}
                className="px-4 py-2 border border-white/10 text-xs font-mono uppercase tracking-[0.15em] text-white/50 hover:border-gold/30 hover:text-gold transition-all duration-300 cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Case Study Details Modal */}
      <ProjectModal 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </section>
  );
}

