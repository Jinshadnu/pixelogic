'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Search, Grid, List, Play, ExternalLink, Calendar, Tag, ArrowRight } from 'lucide-react';
import { projects } from '@/data/mockData';
import { ProjectCategory } from '@/types';
import { cn } from '@/lib/utils';
import Button from '../ui/Button';
import { Card, CardContent } from '../ui/Card';

const categories: { value: ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'events-exhibitions', label: 'Events' },
  { value: 'commercial-production', label: 'Commercial' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'content-production', label: 'Content' },
  { value: 'live-streaming', label: 'Streaming' },
  { value: '2d-3d-animation', label: 'Animation' },
];

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
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

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="relative py-32 bg-[#F2EFE9] min-h-screen">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 tracking-tighter leading-[0.9]">
            Selected <span className="font-serif italic font-normal text-emerald-600">works.</span>
          </h1>
          <p className="text-xl text-black/60 max-w-2xl font-light leading-relaxed">
            A curation of our finest moments in visual storytelling, event coverage, and brand narratives.
          </p>
        </motion.div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-black/10 pb-8">
            
            {/* Categories */}
            <div className="flex flex-wrap gap-x-8 gap-y-4">
                {categories.map((category) => (
                <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={cn(
                        'text-lg transition-all duration-300 relative group',
                        selectedCategory === category.value
                            ? 'text-black font-medium'
                            : 'text-black/40 hover:text-black/70'
                    )}
                >
                    {category.label}
                    {selectedCategory === category.value && (
                        <motion.div 
                            layoutId="underline" 
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600" 
                        />
                    )}
                </button>
                ))}
            </div>

            {/* View Toggle & Search */}
            <div className="flex items-center gap-4">
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40 group-focus-within:text-black transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-white border border-black/5 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/20 w-48 transition-all"
                    />
                </div>
            </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchQuery}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200 mb-6">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Use a fallback gradient if image fails
                        target.style.display = 'none';
                        target.parentElement?.classList.add('bg-gradient-to-br', 'from-neutral-800', 'to-neutral-900');
                      }}
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                         <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                            {project.videoUrl ? (
                                <Play className="w-8 h-8 text-black ml-1 fill-black" />
                            ) : (
                                <ArrowRight className="w-8 h-8 text-black" />
                            )}
                         </div>
                    </div>

                    {/* Category Label */}
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md text-black text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                            {project.category.split('-')[0]}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-black group-hover:text-emerald-600 transition-colors">
                            {project.title}
                        </h3>
                        <span className="text-sm font-medium text-black/40">{project.year}</span>
                    </div>
                    <p className="text-black/60 font-light line-clamp-2 leading-relaxed">
                        {project.description}
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                        {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-xs text-black/40 border border-black/10 px-2 py-1 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-32">
            <h3 className="text-2xl font-bold text-black/20">No projects found.</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;
