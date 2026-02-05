'use client';

import { motion } from 'framer-motion';
import { Award, Users, Heart, Target, Zap, Sparkles, Play } from 'lucide-react';
import { testimonials } from '@/data/mockData';
import Button from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about visual storytelling and creating memorable experiences.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering exceptional quality.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to bring their vision to life.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace new technologies and creative approaches to stay ahead.',
    },
  ];

  const stats = [
    { value: '8+', label: 'Years in Business' },
    { value: '500+', label: 'Projects Completed' },
    { value: '200+', label: 'Happy Clients' },
    { value: '15+', label: 'Team Members' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-neutral-50 via-white to-emerald-50/30 pt-28 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-32 left-10 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 right-8 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
          animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
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
            Who We Are
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 tracking-tight">
            About Pixelogik
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Our Story
            </span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            For 8 years, we have been Abu Dhabi's trusted partner in visual storytelling, 
            helping brands connect with their audiences through compelling media content.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24"
        >
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">Our Journey</h2>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Founded in 2018, Pixelogik began as a small team of passionate creatives 
              with a vision to transform how brands tell their stories. Over the years, 
              we have grown into a full-service media production house, serving clients 
              across Abu Dhabi, the UAE, and beyond.
            </p>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Our journey has been marked by continuous innovation, technological advancement, 
              and an unwavering commitment to quality. From covering major events like 
              Abu Dhabi Business Week to producing compelling commercial content for 
              international brands, we have consistently delivered excellence.
            </p>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Today, Pixelogik stands as a testament to the power of visual storytelling, 
              combining creative vision with technical expertise to create content that 
              resonates, inspires, and drives results.
            </p>
          </motion.div>
          <motion.div 
            className="relative group cursor-pointer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-video bg-neutral-100 rounded-2xl overflow-hidden shadow-xl shadow-neutral-200/50">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-emerald-600 ml-1" />
                </div>
              </motion.div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-neutral-900 font-bold text-lg">Our Journey</p>
                <p className="text-neutral-600 text-sm">Watch our 8-year retrospective</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-12 border-y border-neutral-200/60"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-neutral-600 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.div 
            className="text-center mb-12"
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
              <Heart className="w-4 h-4 mr-2" />
              Core Principles
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">Our Values</h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="text-center h-full bg-white/80 backdrop-blur-xl border-0 shadow-xl shadow-neutral-900/5 hover:shadow-2xl hover:shadow-neutral-900/10 transition-all duration-500">
                    <CardHeader className="pt-8">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-8 h-8 text-emerald-600" />
                      </motion.div>
                      <CardTitle className="mb-2">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 leading-relaxed text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">What Clients Say</h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white/70 backdrop-blur-xl border-0 shadow-lg shadow-neutral-900/5 hover:shadow-xl hover:shadow-neutral-900/10 transition-all duration-500 h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                        >
                          <Award className="w-5 h-5 text-emerald-500 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <blockquote className="text-neutral-700 mb-8 italic text-lg leading-relaxed flex-grow">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    <div className="flex items-center">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full flex items-center justify-center text-emerald-600 font-bold mr-4 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {testimonial.name.charAt(0)}
                      </motion.div>
                      <div>
                        <div className="font-bold text-neutral-900">{testimonial.name}</div>
                        <div className="text-neutral-600 text-sm uppercase tracking-wide">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
          <motion.div
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                Ready to Create Something Amazing?
            </h2>
            <p className="text-neutral-300 text-xl mb-10 max-w-2xl mx-auto">
                Let us discuss your project and see how we can help bring your vision to life.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
                <Button size="lg" className="rounded-full px-8 py-6 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-semibold shadow-lg shadow-emerald-500/25">
                Start Your Project
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 border-neutral-600 text-white hover:bg-white/10 hover:text-white hover:border-white bg-white/5 backdrop-blur-xl">
                Schedule a Consultation
                </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
