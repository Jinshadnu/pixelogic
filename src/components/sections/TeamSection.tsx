'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamMembers } from '@/data/mockData';
import Image from 'next/image';
import { X, Linkedin, Mail, Instagram } from 'lucide-react';
import { TeamMember } from '@/types';

const TeamSection = () => {
  // Using the first 3 members to match the 3-column design of the reference
  const displayMembers = teamMembers.slice(0, 3);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Map for unsplash images to ensure consistent ordering
  const memberImages = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop"
  ];

  return (
    <section className="py-32 bg-[#F2EFE9] relative overflow-hidden">
        
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 cursor-default">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 rounded-full bg-black/5 text-sm font-medium tracking-widest uppercase mb-8"
            >
                Our Team
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-bold tracking-tighter text-black leading-[0.9]"
            >
                Meet the team <br />
                <span className="font-serif italic font-normal text-emerald-600">behind your success.</span>
            </motion.h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayMembers.map((member, index) => (
                <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] mb-6 filter grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                         <Image
                            src={memberImages[index]}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Overlay Gradient (Subtle) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-2xl font-bold tracking-tight text-black group-hover:text-emerald-600 transition-colors">
                            {member.name}
                        </h3>
                        <p className="text-black/50 font-medium uppercase tracking-widest text-sm">
                            {member.role}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>

      {/* Team Details Modal */}
      <AnimatePresence>
        {selectedMember && (
            <>
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedMember(null)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                />
                
                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                >
                    <div className="bg-white pointer-events-auto w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
                        
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-6 right-6 z-20 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                        >
                            <X className="w-6 h-6 text-black" />
                        </button>

                        {/* Image Side */}
                        <div className="w-full md:w-5/12 relative min-h-[400px] md:min-h-[600px] filter grayscale">
                            <Image
                                src={memberImages[Number(selectedMember.id) - 1] || memberImages[0]} 
                                alt={selectedMember.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center">
                            <div className="mb-8">
                                <span className="text-xs font-bold tracking-[0.2em] text-black/30 uppercase mb-4 block">
                                    Leadership
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-black mb-2 tracking-tight">
                                    {selectedMember.name}
                                </h2>
                                <p className="text-xl text-emerald-600 font-medium italic serif">
                                    {selectedMember.role}
                                </p>
                            </div>

                            <div className="prose prose-lg text-black/60 font-light leading-relaxed mb-12">
                                <p>
                                    {selectedMember.bio}
                                </p>
                                <p className="mt-4">
                                    Adam was a founding partner of OMNIA in 2000 in the UK and has been fundamental in growing the agency globally. Adam brings over 36 years of in-depth expertise across design, marketing & communications, digital and enterprise delivery.
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {selectedMember.socialLinks?.linkedin && (
                                    <a 
                                        href={selectedMember.socialLinks.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-emerald-600 transition-colors"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                )}
                                {selectedMember.socialLinks?.email && (
                                    <a 
                                        href={`mailto:${selectedMember.socialLinks.email}`}
                                        className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-emerald-600 transition-colors"
                                    >
                                        <Mail className="w-5 h-5" />
                                    </a>
                                )}
                                {selectedMember.socialLinks?.instagram && (
                                    <a 
                                        href={selectedMember.socialLinks.instagram}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-emerald-600 transition-colors"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>

                    </div>
                </motion.div>
            </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
