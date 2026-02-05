'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/mockData';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] mix-blend-multiply" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
            <span className="text-emerald-600 font-medium tracking-widest text-sm uppercase mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900">Trusted by Industry Leaders</h2>
        </div>

        {/* Testimonial Display */}
        <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                     <Quote className="w-16 h-16 text-emerald-500/20 mx-auto mb-8" />
                     
                     <blockquote className="text-3xl md:text-5xl font-light text-neutral-800 leading-tight mb-12 max-w-4xl mx-auto">
                        "{testimonials[activeTestimonial].content}"
                     </blockquote>

                     <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-white mb-4 border border-neutral-100 flex items-center justify-center text-xl font-bold text-emerald-600 shadow-md">
                             {testimonials[activeTestimonial].name.charAt(0)}
                        </div>
                        <cite className="not-italic text-lg font-medium text-neutral-900 block mb-1">
                            {testimonials[activeTestimonial].name}
                        </cite>
                        <span className="text-emerald-600/80 text-sm tracking-wider uppercase">
                            {testimonials[activeTestimonial].company}
                        </span>
                     </div>
                </motion.div>
            </AnimatePresence>

             {/* Navigation Overlay */}
            <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
                <button 
                    onClick={prevTestimonial}
                    className="pointer-events-auto p-4 rounded-full border border-neutral-200 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all text-neutral-400 hover:scale-110"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" /></svg>
                </button>
                
                <button 
                    onClick={nextTestimonial}
                    className="pointer-events-auto p-4 rounded-full border border-neutral-200 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all text-neutral-400 hover:scale-110"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-16 h-[2px] w-full bg-neutral-200 rounded-full overflow-hidden max-w-xs mx-auto">
             <motion.div 
                className="h-full bg-emerald-600"
                initial={{ width: "0%" }}
                animate={{ width: `${((activeTestimonial + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.3 }}
             />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
