'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Mail } from 'lucide-react';
import { TeamMember } from '@/types';

interface TeamModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const TeamModal = ({ member, isOpen, onClose }: TeamModalProps) => {
  if (!member) return null;

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            variants={contentVariants}
            className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-neutral-600" />
            </button>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Image Section */}
              <div className="relative h-full min-h-[400px] bg-gradient-to-br from-neutral-100 to-neutral-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-neutral-300 font-bold text-4xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12">
                <div className="space-y-6">
                  {/* Name and Role */}
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-2">
                      {member.name}
                    </h2>
                    <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-neutral-900">About</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Experience/Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-neutral-900">Experience</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      With over a decade of experience in the media and advertising industry, 
                      {member.name.split(' ')[0]} has led numerous high-profile campaigns and 
                      projects for Fortune 500 companies and government entities. Their expertise 
                      spans strategic planning, creative direction, and team leadership, making 
                      them an invaluable asset to our organization.
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-neutral-200">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-neutral-500">Connect:</span>
                      <div className="flex space-x-3">
                        {member.socialLinks.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.socialLinks.email && (
                          <a
                            href={`mailto:${member.socialLinks.email}`}
                            className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transition-colors"
                            aria-label="Email"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamModal;
