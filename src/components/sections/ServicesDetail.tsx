'use client';

import { motion } from 'framer-motion';
import { Camera, Video, Image, PlayCircle, Radio, Box, Plane, Clock, CheckCircle, Sparkles } from 'lucide-react';
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

const ServicesDetail = () => {
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
    <section className="relative py-20 bg-gradient-to-br from-neutral-50 via-white to-emerald-50/30 pt-28 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-40 left-12 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl"
          animate={{ x: [0, 25, 0], y: [0, -18, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            What We Do
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 tracking-tight">
            Our Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Complete Solutions
            </span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive media production services designed to elevate your brand 
            and engage your audience across all platforms.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-xl border-0 shadow-xl shadow-neutral-900/5 hover:shadow-2xl hover:shadow-neutral-900/10 transition-all duration-500">
                  <CardHeader className="pb-4 pt-8 px-8">
                    <motion.div 
                      className="flex items-center space-x-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl flex items-center justify-center text-emerald-600"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {Icon && <Icon className="w-8 h-8" />}
                      </motion.div>
                      <div>
                        <CardTitle className="text-2xl mb-1">{service.title}</CardTitle>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "3rem" }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          viewport={{ once: true }}
                          className="h-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="space-y-8 px-8 pb-8">
                    <p className="text-neutral-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Service Image Placeholder */}
                    <motion.div 
                      className="aspect-video bg-neutral-100 rounded-xl overflow-hidden relative group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-200 to-emerald-50 opacity-100 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-neutral-500 font-medium uppercase tracking-widest text-sm">Service Visualization</span>
                        </div>
                    </motion.div>

                    {/* Features List */}
                    <motion.div 
                      className="space-y-4 bg-white/70 backdrop-blur-xl p-6 rounded-xl border border-neutral-200/60"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold text-neutral-900 mb-2">What is Included:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-600 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Button className="w-full bg-gradient-to-r from-neutral-900 to-neutral-800 text-white hover:from-emerald-600 hover:to-blue-600 transition-all py-6 text-lg shadow-lg shadow-neutral-900/20 hover:shadow-emerald-500/25">
                        Learn More About {service.title}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200/60 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Background Animation */}
          <motion.div
            className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div 
            className="text-center mb-16 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6"
            >
              <Clock className="w-4 h-4 mr-2" />
              How We Work
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-neutral-900">
              Our Process
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                From Concept to Delivery
              </span>
            </h2>
            <p className="text-neutral-600 text-xl max-w-3xl mx-auto leading-relaxed">
              From concept to delivery, we follow a streamlined process to ensure 
              your project exceeds expectations.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10"
          >
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent -z-0 mx-20" />

            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision and requirements' },
              { step: '02', title: 'Planning', description: 'Creating a detailed project roadmap' },
              { step: '03', title: 'Production', description: 'Bringing your vision to life' },
              { step: '04', title: 'Delivery', description: 'Final delivery and support' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center relative z-10"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-32 h-32 mx-auto bg-white rounded-full border-4 border-neutral-100 flex items-center justify-center mb-6 shadow-lg shadow-neutral-200/50"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">{item.step}</span>
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">{item.title}</h3>
                <p className="text-neutral-600 text-sm max-w-[200px] mx-auto">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDetail;
