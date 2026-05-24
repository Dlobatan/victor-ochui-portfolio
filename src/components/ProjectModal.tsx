import { Dialog, DialogContent } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { X, Play, Film, User } from 'lucide-react';
import { useState } from 'react';

export interface ProjectType {
  title: string;
  category: string;
  role: string;
  image: string;
  videoUrl?: string;
  duration?: string;
  year?: string;
  client?: string;
  challenge: string;
  approach: string;
  outcome: string;
  tools: string[];
  gallery?: string[];
  aspectRatio?: '16:9' | '9:16';
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectType | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        showCloseButton={false}
        className="max-w-6xl w-[92vw] h-[85vh] bg-black/95 border border-white/10 p-0 overflow-y-auto scrollbar-thin rounded-none"
      >
        <div className="relative flex flex-col lg:flex-row h-full min-h-[85vh]">
          
          {/* Close button (Premium style) */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-3 bg-black/60 border border-white/10 text-white/70 hover:text-white hover:border-white/30 rounded-full transition-all duration-300 group"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Cinematic Media Section (Left/Top) */}
          <div className="w-full lg:w-[60%] bg-[#050505] relative flex items-center justify-center overflow-hidden min-h-[350px] lg:min-h-0 border-b lg:border-b-0 lg:border-r border-white/10">
            {/* Blurred Background Layer for premium aesthetic */}
            <div 
              className="absolute inset-0 bg-cover bg-center blur-2xl opacity-25 scale-105 pointer-events-none"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            {/* Centered Media Player Container with exact aspect ratio */}
            <div className="relative z-10 w-full h-full max-h-full flex items-center justify-center p-4 lg:p-8">
              <div className={`w-full bg-black shadow-2xl relative overflow-hidden border border-white/10 ${
                project.aspectRatio === '9:16' 
                  ? 'aspect-[9/16] max-h-[70vh] max-w-[290px] sm:max-w-[340px] md:max-w-[380px]' 
                  : 'aspect-video w-full max-w-full'
              }`}>
                {isPlaying && project.videoUrl ? (
                  project.videoUrl.endsWith('.mp4') || project.videoUrl.startsWith('/') ? (
                    <video
                      src={project.videoUrl}
                      autoPlay
                      controls
                      className="w-full h-full object-contain bg-black"
                    />
                  ) : (
                    <iframe
                      src={`${project.videoUrl}?autoplay=1&muted=0`}
                      title={project.title}
                      className="w-full h-full object-contain"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  )
                ) : (
                  <>
                    {/* Poster Background */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    
                    {/* Visual Overlays */}
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/20">
                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          if (project.videoUrl) setIsPlaying(true);
                        }}
                        className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white text-black hover:bg-gold hover:text-black transition-colors duration-300 shadow-glow mb-4"
                      >
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
                      </motion.button>
                      <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/80 font-mono">
                        {project.videoUrl ? "Play Reel / Trailer" : "Cinematic Case Study"}
                      </span>
                      {project.duration && (
                        <span className="text-[9px] sm:text-[10px] text-white/50 tracking-wider font-mono mt-1">
                          Duration: {project.duration}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Details Section (Right/Bottom) */}
          <div className="w-full lg:w-[40%] p-8 sm:p-10 lg:p-12 flex flex-col justify-between overflow-y-auto bg-black">
            <div>
              {/* Category & Title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-[0.15em] text-gold font-mono">{project.category}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-xs uppercase tracking-[0.15em] text-white/40 font-mono">{project.year}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-white mb-6 tracking-tight leading-tight">
                {project.title}
              </h2>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-6 p-4 border border-white/5 bg-white/[0.01] mb-8 font-mono text-[11px] uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-gold/60" />
                  <div>
                    <span className="block text-white/30 text-[9px]">Client</span>
                    <span className="text-white/80 font-medium">{project.client || "Self-Directed"}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Film className="w-3.5 h-3.5 text-gold/60" />
                  <div>
                    <span className="block text-white/30 text-[9px]">Role</span>
                    <span className="text-white/80 font-medium truncate max-w-[150px]">{project.role.split(' / ')[0]}</span>
                  </div>
                </div>
              </div>

              {/* Text Blocks */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-2 font-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" /> The Challenge
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed font-light">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-2 font-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" /> Creative Approach
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed font-light">
                    {project.approach}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-2 font-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" /> Outcome
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed font-light">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </div>

            {/* Tools/Tags Footer */}
            <div className="mt-12 pt-8 border-t border-white/5">
              <span className="block text-xs uppercase tracking-[0.15em] text-white/40 mb-3 font-mono">
                Visual Toolkit
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span 
                    key={tool}
                    className="px-3 py-1 bg-white/[0.03] border border-white/10 text-[10px] uppercase font-mono tracking-wider text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
