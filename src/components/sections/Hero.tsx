'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
    return (
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#F2EFE9] pt-20">
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply filter contrast-[0.9] brightness-[1.1]"
            >
                <source src="https://cdn.coverr.co/videos/coverr-cloudy-sky-2765/1080p.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#F2EFE9]/40 backdrop-blur-[1px]" />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
                {/* Social Proof / Icons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4"
                >
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F2EFE9] bg-gray-200" />
                        ))}
                    </div>
                    <div className="flex gap-3 text-black/60">
                        <Instagram className="w-5 h-5" />
                        <Linkedin className="w-5 h-5" />
                        <Twitter className="w-5 h-5" />
                    </div>
                </motion.div>

                {/* Headline */}
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-black leading-[0.85] relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative inline-block"
                  >
                    <motion.span
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.8, ease: "circOut" as const }}
                        className="absolute bottom-4 left-0 h-[0.3em] bg-emerald-300/40 -z-10 -rotate-1 rounded-sm"
                    />
                    Short form
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <span className="font-serif italic font-normal text-emerald-600 relative inline-block">
                        done right
                    </span>
                    <span className="text-4xl md:text-6xl animate-pulse text-emerald-600">●</span>
                  </motion.div>
                </h1>

                {/* Subtext */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl text-black/60 max-w-lg leading-relaxed relative z-10"
                >
                    We help brands build authority and generate leads through <span className="relative inline-block px-1"><motion.span initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 0.8, delay: 1.5, ease: "circOut" as const }} className="absolute bottom-1 left-0 h-[0.4em] bg-yellow-200/60 -z-10 -rotate-1 rounded-sm" />strategic short-form content.</span> No fluff, just results.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="pt-4 relative z-10"
                >
                    <Button size="lg" className="rounded-full px-10 py-7 text-xl bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-105 transition-all shadow-xl shadow-emerald-600/20 ring-4 ring-emerald-100">
                        Get in touch
                    </Button>
                </motion.div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="lg:col-span-5 relative">
                <div className="relative z-10 perspective-[2000px]">
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotateX: 10 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" as const }}
                    >
                        <motion.div
                            animate={{ 
                                y: [-15, 15, -15],
                                rotateY: [-5, 5, -5],
                            }}
                            transition={{ 
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut" as const
                            }}
                            className="relative mx-auto w-[320px] h-[650px] bg-black rounded-[3.5rem] border-[8px] border-black shadow-2xl overflow-hidden ring-1 ring-black/5 transform-preserve-3d"
                        >
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />
                            
                            {/* Screen Content */}
                            <div className="w-full h-full bg-neutral-900 relative">
                                <video 
                                    autoPlay 
                                    muted 
                                    loop 
                                    playsInline 
                                    className="w-full h-full object-cover"
                                    poster="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop"
                                >
                                    <source src="https://cdn.coverr.co/videos/coverr-girl-taking-photos-of-an-ice-cream-5231/1080p.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Overlay Gradient (Subtle) */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 pointer-events-none" />

                                {/* UI Elements */}
                                <div className="absolute top-8 left-4 right-4 flex justify-between items-center z-20">
                                     <div className="flex gap-1.5">
                                        <div className="w-8 h-1 bg-white/40 rounded-full" />
                                        <div className="w-8 h-1 bg-white/40 rounded-full" />
                                        <div className="w-8 h-1 bg-white rounded-full" />
                                     </div>
                                     <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md" />
                                </div>

                                <div className="absolute bottom-10 right-4 flex flex-col gap-4 z-20">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center animate-pulse">
                                        <ArrowRight className="w-5 h-5 text-white -rotate-45" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Decorative Elements behind phone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] border border-black/5 rounded-[3.5rem] -rotate-6 z-0" />
            
            </div>

          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
