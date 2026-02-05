'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F2EFE9] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Video Background/Intro */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#F2EFE9]/90 z-20" /> {/* Light Overlay */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover grayscale opacity-20"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-girl-taking-photos-of-an-ice-cream-5231/1080p.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-30 flex flex-col items-center">
                
                {/* Logo Animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                        scale: 1, 
                        opacity: 1, 
                    }}
                    transition={{ 
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="flex items-center gap-1 mb-8"
                >
                     <span className="text-4xl md:text-6xl font-bold tracking-tighter text-black font-sans">
                        pixelogik<span className="text-emerald-600 animate-pulse">*</span>
                    </span>
                </motion.div>

                {/* Loading Bar */}
                <div className="w-56 h-[2px] bg-black/10 overflow-hidden relative rounded-full">
                    <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 2.2, ease: "easeInOut" }}
                        className="absolute inset-0 bg-black"
                    />
                </div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
