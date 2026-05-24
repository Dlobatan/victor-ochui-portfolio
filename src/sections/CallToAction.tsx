import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { Download, Send, CheckCircle2, Loader2, Mail, MapPin } from 'lucide-react';

interface FormFieldProps {
  label: string;
  type?: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  isTextArea?: boolean;
}

function FloatingInput({ label, type = 'text', id, value, onChange, isTextArea = false }: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isFilled = value.length > 0;

  return (
    <div className="relative mb-6">
      {isTextArea ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={4}
          className="w-full bg-white/[0.015] border-b border-white/10 py-3 text-sm text-white placeholder-transparent focus:outline-none resize-none font-light"
          required
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-white/[0.015] border-b border-white/10 py-3 text-sm text-white placeholder-transparent focus:outline-none font-light"
          required
        />
      )}
      
      {/* Floating Label */}
      <motion.label
        htmlFor={id}
        initial={{ y: 8, scale: 1 }}
        animate={{ 
          y: (isFocused || isFilled) ? -16 : 8,
          scale: (isFocused || isFilled) ? 0.8 : 1,
          color: isFocused ? '#c9a86c' : (isFilled ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)')
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute left-0 top-0 text-xs font-mono uppercase tracking-wider pointer-events-none origin-left"
      >
        {label}
      </motion.label>

      {/* Focus Line Sweep */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-gold"
        initial={{ width: '0%' }}
        animate={{ width: isFocused ? '100%' : '0%' }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export function CallToAction() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Documentary');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setProjectType('Documentary');
    }, 1800);
  };

  const projectTypes = ['Documentary', 'Brand Films', 'AI Video', 'Other'];

  return (
    <section id="contact" className="relative py-24 sm:py-32 lg:py-40 bg-black overflow-hidden border-t border-white/5">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.06] grayscale pointer-events-none"
        style={{ backgroundImage: `url('/images/bg-studio.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Context (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-white/20" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-gold">Contact</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Let's Create<br />Something Powerful
              </h2>
              <p className="text-lg text-white/50 leading-relaxed font-light mb-8">
                If you are looking to build a brand narrative, direct a documentary, or experiment with custom AI video pipelines, let's connect and make it happen.
              </p>
            </ScrollReveal>

            {/* Quick Contact Links */}
            <ScrollReveal delay={0.2} className="space-y-4">
              <a 
                href="mailto:Lobatanpictures@gmail.com"
                className="flex items-center gap-4 text-white/60 hover:text-gold transition-colors duration-300 font-mono text-sm"
              >
                <Mail className="w-4 h-4 text-gold/80" />
                Lobatanpictures@gmail.com
              </a>
              <div className="flex items-center gap-4 text-white/60 font-mono text-sm">
                <MapPin className="w-4 h-4 text-gold/80" />
                Lagos, Nigeria (Available Globally)
              </div>
            </ScrollReveal>

            {/* Media Kit CTA */}
            <ScrollReveal delay={0.3} className="pt-8 border-t border-white/5">
              <a
                href="#"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-white text-xs font-mono uppercase tracking-[0.15em] hover:border-gold/30 hover:text-gold transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                Download Media Kit
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form (lg:col-span-7) */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal delay={0.1}>
              <div className="relative bg-white/[0.01] border border-white/5 p-8 sm:p-12 backdrop-blur-md">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form 
                      key="contact-form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="font-display text-xl text-white mb-8">Send a Message</h3>
                      
                      <FloatingInput
                        label="Your Name"
                        id="name"
                        value={name}
                        onChange={setName}
                      />
                      
                      <FloatingInput
                        label="Email Address"
                        type="email"
                        id="email"
                        value={email}
                        onChange={setEmail}
                      />

                      {/* Custom Toggle Chips for Project Type */}
                      <div className="mb-8">
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-white/40 mb-3">
                          Project Focus
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {projectTypes.map((type) => {
                            const isSelected = projectType === type;
                            return (
                              <button
                                key={type}
                                type="button"
                                onClick={() => setProjectType(type)}
                                className={`px-4 py-2 border text-[10px] font-mono uppercase tracking-wider transition-all duration-300 ${
                                  isSelected 
                                    ? 'bg-gold/10 border-gold text-gold shadow-xs' 
                                    : 'bg-white/[0.005] border-white/5 text-white/50 hover:border-white/15 hover:text-white'
                                }`}
                              >
                                {type}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <FloatingInput
                        label="Tell me about your project"
                        id="message"
                        value={message}
                        onChange={setMessage}
                        isTextArea
                      />

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-3 py-4 bg-white text-black text-xs font-mono uppercase tracking-[0.2em] font-semibold hover:bg-gold transition-colors duration-300 disabled:opacity-50 group overflow-hidden"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-black" />
                            <span>Transmitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            <span>Dispatch Request</span>
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success-screen"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-16 text-center space-y-6 flex flex-col items-center justify-center h-full min-h-[400px]"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                      >
                        <CheckCircle2 className="w-16 h-16 text-gold mb-2" strokeWidth={1} />
                      </motion.div>
                      <h3 className="font-display text-2xl text-white">Transmission Successful</h3>
                      <p className="text-sm text-white/50 max-w-sm leading-relaxed font-light">
                        Thank you for reaching out, your message has been logged. I will respond to your workspace coordinates within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="text-xs font-mono uppercase tracking-wider text-gold hover:text-white transition-colors pt-4"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
