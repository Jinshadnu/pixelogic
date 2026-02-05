'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/mockData';
import Button from '../ui/Button';

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-neutral-50 via-white to-emerald-50/30 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl"
          animate={{ x: [0, -15, 0], y: [0, 12, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-32 left-8 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
          animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Featured Work
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
              Selected Works
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Recent Projects
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/projects">
                <Button variant="ghost" className="text-neutral-900 hover:text-emerald-600 group text-lg bg-white/70 backdrop-blur-xl border border-neutral-200/60 px-6 py-3 rounded-xl shadow-lg shadow-neutral-900/5 hover:shadow-xl">
                    All Projects <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
            </Link>
          </motion.div>
        </div>

        {/* Projects List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-32"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Project Image */}
                <div className={`lg:col-span-8 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div 
                    className="aspect-[16/9] relative overflow-hidden rounded-2xl bg-neutral-100 shadow-xl shadow-neutral-200/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  >
                     {/* Gradient Placeholder in lieu of actual image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-200 to-emerald-50 opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                        >
                            <span className="text-neutral-900 text-xs uppercase font-bold tracking-widest">View</span>
                        </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className={`lg:col-span-4 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 text-emerald-600 text-sm font-medium uppercase tracking-widest">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "2rem" }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          viewport={{ once: true }}
                          className="h-[1px] bg-emerald-500/30"
                        />
                        <span>{project.category.replace('-', ' ')}</span>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "2rem" }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          viewport={{ once: true }}
                          className="h-[1px] bg-emerald-500/30"
                        />
                        <span>{project.year}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-neutral-600 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    <ul className="flex flex-wrap gap-2 pt-4">
                        {project.tags.slice(0,3).map((tag, tagIndex) => (
                            <motion.li 
                              key={tag} 
                              className="px-4 py-1.5 border border-neutral-200/60 rounded-full text-xs font-medium text-neutral-600 bg-white/70 backdrop-blur-xl"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.6 + tagIndex * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05, backgroundColor: "rgb(16 185 129 / 0.1)" }}
                            >
                                {tag}
                            </motion.li>
                        ))}
                    </ul>

                    <motion.div 
                      className="pt-8"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                       <Button variant="outline" className="border-neutral-300/70 text-neutral-900 bg-white/70 backdrop-blur-xl hover:bg-gradient-to-r hover:from-emerald-600 hover:to-blue-600 hover:border-transparent hover:text-white transition-all px-8 rounded-full shadow-lg shadow-neutral-900/5">
                        View Case Study
                       </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center md:hidden"
        >
            <Link href="/projects">
                <Button variant="outline" className="w-full justify-center bg-white/70 backdrop-blur-xl border-neutral-200/60">View All Projects</Button>
            </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
