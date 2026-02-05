'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Button from '../ui/Button';

const faqs = [
    {
        question: "What platforms do you manage?",
        answer: "We specialize in TikTok, Instagram Reels, and YouTube Shorts. These are the platforms where organic reach is currently highest."
    },
    {
        question: "Do you shoot the content?",
        answer: "Yes, we offer both remote editing services (you shoot, we edit) and full-service production where our team handles the filming."
    },
    {
        question: "How many videos do I get?",
        answer: "Our standard packages start at 12 videos per month, but we scale up to 30+ depending on your aggressveness and goals."
    },
    {
        question: "What is your turnaround time?",
        answer: "Typically 48-72 hours per video. We work in batches to ensure you always have content ready to post."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-[#F2EFE9] relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl border-x border-black/5 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
                        Common <span className="font-serif italic text-emerald-600 font-normal">questions</span>
                    </h2>
                    <p className="text-black/60">Everything you need to know about working with us.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="border border-black/10 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 group"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-xl font-medium tracking-tight pr-8">{faq.question}</span>
                                <span className={`p-2 rounded-full border border-black/10 transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : 'group-hover:rotate-90'}`}>
                                    <Plus className="w-4 h-4" />
                                </span>
                            </button>
                            
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-black/60 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-black/50 mb-6">Still have questions?</p>
                    <Button variant="outline" className="rounded-full border-black/10 hover:bg-black hover:text-white transition-colors">
                        Contact Support
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default FAQ;
