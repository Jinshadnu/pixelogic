'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { services } from '@/data/mockData';

const PixelsInFocus = () => {
    // We'll use the services data but focus on the top 6 for the grid
    const featuredServices = services.slice(0, 6);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="py-24 bg-neutral-900 text-white overflow-hidden">
             <div className="max-w-7xl mx-auto px-6">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                        Pixels in Focus
                    </h2>
                    <div className="h-1 w-24 bg-white/20 mx-auto rounded-full" />
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {featuredServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className="group relative cursor-pointer"
                        >
                            {/* Card Container */}
                            <div className="aspect-video relative overflow-hidden rounded-2xl bg-neutral-800 border border-white/10 shadow-2xl">
                                {/* Image Placeholder (Gradient or Actual Image if available) */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800 group-hover:scale-105 transition-transform duration-700">
                                     {/* Use Unsplash source based on service type as we don't have real images yet */}
                                    <img 
                                        src={`https://source.unsplash.com/800x600/?${service.title.replace(' ', ',').toLowerCase()}`}
                                        alt={service.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop'; // Fallback
                                        }}
                                    />
                                </div>
                                
                                {/* Overlay Content */}
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                     {/* Play Button */}
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-lg">
                                        <Play className="w-6 h-6 fill-current ml-1" />
                                    </div>
                                </div>
                            </div>

                             {/* Title Below */}
                            <div className="mt-4 text-center">
                                <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                                    {service.title}
                                </h3>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>

             </div>
        </section>
    );
};

export default PixelsInFocus;
