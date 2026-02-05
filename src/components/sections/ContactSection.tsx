'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, MessageCircle, ArrowRight, Building, Users, Award, Zap } from 'lucide-react';
import { validateEmail, validatePhone } from '@/lib/utils';
import { ContactForm } from '@/types';
import Button from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'Events & Exhibitions',
    'Commercial Production',
    'Corporate Photography',
    'Content Production',
    'Live Streaming',
    '2D/3D Animation',
    'Aerial Photography',
    'Timelapse Production',
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+971 2 XXX XXXX', '+971 5X XXX XXXX'],
      action: 'tel:+9712XXXXXXXX',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@pixelogik.ae', 'projects@pixelogik.ae'],
      action: 'mailto:info@pixelogik.ae',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['Abu Dhabi, UAE', 'Business Hours: 9AM - 6PM'],
      action: '#',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+971 5X XXX XXXX', 'Quick response guaranteed'],
      action: 'https://wa.me/9715XXXXXXXX',
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-neutral-50 via-white to-emerald-50/30 pt-28 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl" />
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
            <Zap className="w-4 h-4 mr-2" />
            Get In Touch
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 tracking-tight">
            Let's Create Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Extraordinary Together
            </span>
          </h1>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Our team of creative experts is here to transform your ideas into compelling visual stories that captivate and inspire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <Card className="border-0 bg-white/80 backdrop-blur-xl shadow-2xl shadow-neutral-900/10">
                <CardHeader className="border-b border-neutral-100/50 bg-gradient-to-r from-emerald-50 to-blue-50">
                    <CardTitle className="text-2xl text-neutral-900 flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                            <Send className="w-5 h-5 text-white" />
                        </div>
                        Send Us a Message
                    </CardTitle>
                    <p className="text-neutral-600 mt-2">We'll respond within 24 hours</p>
                </CardHeader>
                <CardContent className="p-8">
                    {submitSuccess ? (
                    <div className="text-center py-12">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <Send className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                            Message Sent Successfully!
                        </h3>
                        <p className="text-neutral-600 mb-8 max-w-md mx-auto text-lg">
                            Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                        </p>
                        <Button
                            variant="outline"
                            onClick={() => setSubmitSuccess(false)}
                            className="rounded-full px-8 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                        >
                            Send Another Message
                        </Button>
                    </div>
                    ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-neutral-700 mb-2">
                            Name *
                            </label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3.5 rounded-xl bg-white/60 backdrop-blur-sm border text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
                                errors.name ? 'border-red-500 bg-red-50' : 'border-neutral-200'
                            }`}
                            placeholder="John Doe"
                            />
                            {errors.name && (
                            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-neutral-700 mb-2">
                            Email *
                            </label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3.5 rounded-xl bg-white/60 backdrop-blur-sm border text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
                                errors.email ? 'border-red-500 bg-red-50' : 'border-neutral-200'
                            }`}
                            placeholder="john@example.com"
                            />
                            {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                            )}
                        </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-bold text-neutral-700 mb-2">
                            Phone
                            </label>
                            <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3.5 rounded-xl bg-white/60 backdrop-blur-sm border text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
                                errors.phone ? 'border-red-500 bg-red-50' : 'border-neutral-200'
                            }`}
                            placeholder="+971 50 123 4567"
                            />
                            {errors.phone && (
                            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-sm font-bold text-neutral-700 mb-2">
                            Company
                            </label>
                            <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                            placeholder="Your Company Ltd."
                            />
                        </div>
                        </div>

                        <div>
                        <label htmlFor="service" className="block text-sm font-bold text-neutral-700 mb-2">
                            Service Interest
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-200 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                            <option key={service} value={service}>
                                {service}
                            </option>
                            ))}
                        </select>
                        </div>

                        <div>
                        <label htmlFor="message" className="block text-sm font-bold text-neutral-700 mb-2">
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            className={`w-full px-4 py-3.5 rounded-xl bg-white/60 backdrop-blur-sm border text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none transition-all ${
                            errors.message ? 'border-red-500 bg-red-50' : 'border-neutral-200'
                            }`}
                            placeholder="Tell us about your project and vision..."
                        />
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                        )}
                        </div>

                        <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white rounded-xl py-4 font-semibold shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30"
                        loading={isSubmitting}
                        >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>
                    )}
                </CardContent>
                </Card>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5">
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                            <Award className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-neutral-900">15+</div>
                        <div className="text-sm text-neutral-600">Years Experience</div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-neutral-900">500+</div>
                        <div className="text-sm text-neutral-600">Happy Clients</div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                            <Building className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-neutral-900">1000+</div>
                        <div className="text-sm text-neutral-600">Projects Done</div>
                    </motion.div>
                </div>

                <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6 tracking-tight">Get in Touch</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                    {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                        <Card key={index} className="border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <CardContent className="p-6">
                            <div className="flex items-start space-x-5">
                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                                <Icon className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="font-bold text-neutral-900 mb-1">{info.title}</h3>
                                {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-neutral-500 text-sm">
                                    {detail}
                                </p>
                                ))}
                                <a href={info.action} className="text-emerald-600 text-xs font-bold uppercase tracking-wider mt-2 inline-flex items-center hover:underline">
                                    Connect <ArrowRight className="w-3 h-3 ml-1" />
                                </a>
                            </div>
                            </div>
                        </CardContent>
                        </Card>
                    );
                    })}
                </div>
                </div>

                {/* Office Hours */}
                <Card className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white border-0 shadow-2xl">
                <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Office Hours</h3>
                    </div>
                    <div className="space-y-4 text-white/90">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="font-medium">Monday - Friday</span>
                        <span className="font-bold text-emerald-400">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="font-medium">Saturday</span>
                        <span className="font-bold text-emerald-400">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg opacity-60">
                        <span>Sunday</span>
                        <span>Closed</span>
                    </div>
                    <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                        <p className="text-sm text-emerald-300 flex items-center">
                            <Zap className="w-4 h-4 mr-2" />
                            Emergency projects available 24/7 with prior arrangement
                        </p>
                    </div>
                    </div>
                </CardContent>
                </Card>
            </motion.div>
          </div>
        </div>

        {/* Google Maps Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight">Find Us</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Visit our office in Abu Dhabi. We're located in the heart of the city, ready to serve your media production needs.
            </p>
          </div>
          
          <Card className="overflow-hidden border-neutral-200 shadow-xl">
            <CardContent className="p-0">
              {/* Google Maps Embed */}
              <div className="relative w-full h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps?q=Pixelogik%20Media%20%26%20Advertising%20Abu%20Dhabi&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Pixelogik Media & Advertising Location"
                />
                
                {/* Map Overlay with Location Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                        <div>
                          <h3 className="font-bold text-lg mb-2 text-emerald-400">Address</h3>
                          <p className="text-sm text-white/90">
                            Lamar Tower - Level 05<br />
                            Al Nahyan - E25<br />
                            Abu Dhabi - United Arab Emirates
                          </p>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2 text-emerald-400">Rating</h3>
                          <div className="flex items-center space-x-2">
                            <div className="flex text-yellow-400">
                              {'★'.repeat(5)}
                            </div>
                            <span className="text-sm text-white/90">4.9 (36 reviews)</span>
                          </div>
                        </div>
                        <div className="flex items-end">
                          <a
                            href="https://maps.google.com/?q=Pixelogik+Media+Abu+Dhabi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors inline-flex items-center"
                          >
                            View Larger Map
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
