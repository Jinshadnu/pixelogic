'use client';

import { motion } from 'framer-motion';
import { Camera, Video, Image, PlayCircle, Radio, Box, Plane, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { services } from '@/data/mockData';
import Button from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

const iconMap = {
  camera: Camera,
  video: Video,
  image: Image,
  'play-circle': PlayCircle,
  radio: Radio,
  box: Box,
  plane: Plane,
  clock: Clock,
};

const ServicesPreview = () => {
  const featuredServices = services.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-neutral-50 via-white to-emerald-50/30 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] mix-blend-multiply"
            animate={{ scale: [1, 1.1, 1], x: [0, 10, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] mix-blend-multiply"
            animate={{ scale: [1, 1.15, 1], y: [0, -15, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
            >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Our Expertise
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
                Crafting visual narratives that 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                  define industries
                </span>
            </h2>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <Button variant="outline" className="rounded-full px-8 border-neutral-200/70 bg-white/70 backdrop-blur-xl text-neutral-900 hover:border-emerald-500 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all shadow-lg shadow-neutral-900/5">
                    View All Services
                </Button>
            </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredServices.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <Card className="h-full bg-white/80 backdrop-blur-xl border-0 overflow-hidden shadow-xl shadow-neutral-900/5 hover:shadow-2xl hover:shadow-neutral-900/10 transition-all duration-500">
                  <CardContent className="p-8 flex flex-col h-full">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl flex items-center justify-center mb-8 text-neutral-900 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-blue-600 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-emerald-500/30"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {Icon && <Icon className="w-6 h-6" />}
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-emerald-600 transition-colors">{service.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-8 flex-grow group-hover:text-neutral-700 transition-colors">
                      {service.description}
                    </p>
                    
                    <motion.div 
                      className="pt-8 border-t border-neutral-200/60 w-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                        <span className="text-xs uppercase tracking-widest text-neutral-500 group-hover:text-neutral-900 transition-colors flex items-center font-medium">
                            Explore <ArrowRight className="w-3 h-3 ml-2 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                        </span>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
