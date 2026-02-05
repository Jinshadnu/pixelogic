'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '../ui/Button';

const Showreel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);

  // Handle Autoplay when in view
  useEffect(() => {
    if (autoPlayEnabled && isInView && videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else if (!isInView && videoRef.current && autoPlayEnabled) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isInView, autoPlayEnabled]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Autoplay Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-600 font-medium tracking-widest text-sm uppercase mb-4 block">Showreel</span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              Behind The Scenes
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 bg-neutral-100 p-2 rounded-full"
          >
            <span className="text-sm font-medium text-neutral-600 pl-4">Auto Play</span>
            <button
              onClick={() => setAutoPlayEnabled(!autoPlayEnabled)}
              className={cn(
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                autoPlayEnabled ? "bg-emerald-600" : "bg-neutral-300"
              )}
            >
              <span
                className={cn(
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                  autoPlayEnabled ? "translate-x-5" : "translate-x-0"
                )}
              />
            </button>
          </motion.div>
        </div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200/50 aspect-video group"
        >
          <video
            ref={videoRef}
            loop
            muted={isMuted}
            poster="/video-poster.jpg"
            className="w-full h-full object-cover"
          >
            {/* Cinematic Filmmaking Sample Video */}
            <source src="https://cdn.coverr.co/videos/coverr-filmmaking-process-5347/1080p.mp4" type="video/mp4" />
          </video>

          {/* Controls Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <button
                onClick={togglePlay}
                className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-emerald-600 transition-all transform hover:scale-110"
             >
                {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
             </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
                <h3 className="text-white font-bold text-lg">Cinematic Production Process</h3>
                <p className="text-white/80 text-sm">A glimpse into how we craft stories.</p>
            </div>
            <button
                onClick={toggleMute}
                className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-neutral-900 transition-colors"
            >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Showreel;
