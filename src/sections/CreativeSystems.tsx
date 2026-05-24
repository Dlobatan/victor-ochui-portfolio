import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { Cpu, Repeat, Film } from 'lucide-react';

interface WorkflowStep {
  name: string;
  detail: string;
  tools?: string[];
}

interface WorkflowSystem {
  number: string;
  title: string;
  icon: any;
  process: WorkflowStep[];
  result: string;
  description: string;
}

const systems: WorkflowSystem[] = [
  {
    number: "01",
    title: "AI Video Workflow",
    icon: Cpu,
    description: "A complete generative AI pipeline tailored for cinematic outputs, maintaining high consistency and rapid turnaround.",
    process: [
      { name: "Concept Development", detail: "Developing narrative outlines, visual style sheets, and moodboards to guide generation.", tools: ["ChatGPT", "Midjourney"] },
      { name: "Prompt Engineering", detail: "Structuring precise prompts and weights for camera movements, styles, and character details.", tools: ["Midjourney", "ComfyUI"] },
      { name: "Visual Consistency", detail: "Training custom LoRAs (character models) and refining face masks to lock character attributes.", tools: ["Stable Diffusion", "Lora"] },
      { name: "AI Video Generation", detail: "Rendering high-fidelity video clips using generative diffusion, controlling motion speed and direction.", tools: ["Runway Gen-2", "Luma Dream Machine"] },
      { name: "Cinematic Post Assembly", detail: "Upscaling footage, color matching, pacing cuts, and layering premium audio scores.", tools: ["Premiere Pro", "Topaz Video AI", "Resolve"] }
    ],
    result: "High-grade cinematic clips delivered in a fraction of traditional render times."
  },
  {
    number: "02",
    title: "Scalable Content",
    icon: Repeat,
    description: "A high-output production system that converts single video assets into multiple optimized digital content files.",
    process: [
      { name: "Content Pillar Planning", detail: "Mapping out high-impact themes, hooks, and call-to-actions based on current audience trends.", tools: ["Notion", "Airtable"] },
      { name: "Batch Live Recording", detail: "Optimized, multi-angle camera sets to record 10+ content scripts in a single 2-hour shoot.", tools: ["Sony FX3", "Wireless Lavs"] },
      { name: "Automated Post Pipelines", detail: "Syncing scripts with automated multi-cam templates, custom text captions, and transitions.", tools: ["Premiere Pro", "CapCut Pro"] },
      { name: "Platform Optimization", detail: "Formatting exports for 9:16 reels, 16:9 youtube cuts, metadata tags, and custom thumb designs.", tools: ["After Effects", "Photoshop"] }
    ],
    result: "A monthly calendar of high-performing visual assets generated from a single shoot."
  },
  {
    number: "03",
    title: "Hybrid Production",
    icon: Film,
    description: "A sophisticated model blending real-world cinema tools with virtual production assets and AI overlays.",
    process: [
      { name: "Cinematography Setup", detail: "Capturing primary real-world elements, interview nodes, and closeups in ultra-high resolution.", tools: ["RED V-Raptor", "Cooke Primes"] },
      { name: "Aerial Drone Capture", detail: "Securing environmental establishing sequences, dynamic tracking shots, and bird-eye angles.", tools: ["DJI Inspire 3"] },
      { name: "Virtual Compositing", detail: "Generating complex backgrounds or composite visual effects using AI and green screens.", tools: ["Unreal Engine", "Stable Diffusion"] },
      { name: "Sound Design & Grading", detail: "Deep spatial sound mixing and rich grading to merge real and virtual elements cohesively.", tools: ["DaVinci Resolve Studio", "Pro Tools"] }
    ],
    result: "A seamless merger of documentary realism with futuristic virtual environments."
  }
];

export function CreativeSystems() {
  const [activeSystemIndex, setActiveSystemIndex] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeSystem = systems[activeSystemIndex];

  return (
    <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden bg-black border-t border-white/5">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.06] grayscale pointer-events-none"
        style={{ backgroundImage: `url('/images/bg-lens.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-gold">Workflows</span>
            <div className="w-12 h-px bg-white/20" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Creative Systems & Workflows
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            I design production architectures that unify traditional filmmaking, motion graphics, and state-of-the-art AI generators.
          </p>
        </ScrollReveal>

        {/* Dynamic Workflow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: System Selection Tabs (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 mb-2">
              Select Production System
            </span>
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 lg:overflow-x-visible scrollbar-none">
              {systems.map((system, idx) => {
                const IconComponent = system.icon;
                const isActive = activeSystemIndex === idx;
                
                return (
                  <button
                    key={system.number}
                    onClick={() => {
                      setActiveSystemIndex(idx);
                      setActiveStepIndex(0);
                    }}
                    className={`flex-shrink-0 lg:flex-shrink text-left p-6 border relative transition-colors duration-300 w-[260px] lg:w-full select-none border-white/5 ${
                      isActive ? 'text-white font-medium' : 'text-white/40 hover:text-white/80'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSystemHighlight"
                        className="absolute inset-0 bg-white/[0.03] border border-gold shadow-glow pointer-events-none"
                        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                      />
                    )}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`font-display text-2xl ${isActive ? 'text-gold' : 'text-white/20'}`}>
                          {system.number}
                        </span>
                        <IconComponent className={`w-5 h-5 ${isActive ? 'text-gold' : 'text-white/30'}`} />
                      </div>
                      <h3 className="font-display text-lg mb-2 font-medium">{system.title}</h3>
                      <p className="text-xs line-clamp-2 text-white/40 leading-relaxed font-light">{system.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Timeline Panel (lg:col-span-8) */}
          <div className="lg:col-span-8 bg-white/[0.01] border border-white/5 p-8 sm:p-12 relative min-h-[500px] flex flex-col justify-between">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gold/5 blur-[80px] pointer-events-none" />

            <div>
              {/* Timeline Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5 mb-8">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold">Interactive Timeline</span>
                  <h3 className="font-display text-2xl text-white mt-1">{activeSystem.title}</h3>
                </div>
                <div className="px-4 py-2 bg-gold/5 border border-gold/10 text-[10px] font-mono tracking-widest text-gold uppercase rounded-none">
                  Result: {activeSystem.result}
                </div>
              </div>

              {/* Vertical Interactive Stepper */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Steps Navigation (Left on desktop) */}
                <div className="md:col-span-5 relative space-y-4">
                  {/* Vertical connecting line */}
                  <div className="absolute left-4 top-4 bottom-4 w-px bg-white/10 hidden md:block" />

                  {activeSystem.process.map((step, idx) => {
                    const isStepActive = activeStepIndex === idx;
                    
                    return (
                      <button
                        key={step.name}
                        onClick={() => setActiveStepIndex(idx)}
                        className="flex items-start gap-4 text-left w-full group relative focus:outline-none"
                      >
                        {/* Timeline Node */}
                        <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black border border-white/10 group-hover:border-gold transition-colors duration-300">
                          {isStepActive ? (
                            <motion.div 
                              layoutId="activeTimelineNode"
                              className="w-3.5 h-3.5 rounded-full bg-gold"
                            />
                          ) : (
                            <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-gold/60" />
                          )}
                        </div>

                        {/* Step Label */}
                        <div className="py-1">
                          <span className={`text-[10px] font-mono block ${isStepActive ? 'text-gold' : 'text-white/30'}`}>
                            Step {idx + 1}
                          </span>
                          <span className={`text-sm font-medium transition-colors duration-300 ${
                            isStepActive ? 'text-white' : 'text-white/50 group-hover:text-white'
                          }`}>
                            {step.name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Step Detail Card (Right on desktop) */}
                <div className="md:col-span-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStepIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/[0.02] border border-white/5 p-6 h-full flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gold block mb-2">
                          Workflow Detail — Step {activeStepIndex + 1}
                        </span>
                        <h4 className="font-display text-lg text-white mb-4">
                          {activeSystem.process[activeStepIndex].name}
                        </h4>
                        <p className="text-sm text-white/60 leading-relaxed font-light mb-6">
                          {activeSystem.process[activeStepIndex].detail}
                        </p>
                      </div>

                      {activeSystem.process[activeStepIndex].tools && (
                        <div className="pt-6 border-t border-white/5">
                          <span className="block text-[10px] font-mono uppercase tracking-[0.15em] text-white/30 mb-3">
                            Production Tools Used
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {activeSystem.process[activeStepIndex].tools?.map((tool) => (
                              <span 
                                key={tool}
                                className="px-2.5 py-1 bg-white/[0.04] border border-white/5 text-[10px] font-mono text-gold/80"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>

            {/* Stepper Progress bar footer */}
            <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-white/30 font-mono">
              <div className="flex gap-1.5">
                {activeSystem.process.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1 transition-all duration-300 ${
                      idx <= activeStepIndex ? 'w-6 bg-gold' : 'w-2 bg-white/10'
                    }`} 
                  />
                ))}
              </div>
              <div>
                {activeStepIndex + 1} / {activeSystem.process.length} steps completed
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
