'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+97123456789'; // Replace with actual phone number
  const message = 'Hi! I\'m interested in your media production services.';

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl(phoneNumber, message), '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-2 min-w-[250px] animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">Chat with us</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Hi! How can we help you with your media production needs?
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-green-700 transition-colors duration-200"
          >
            Start Chat on WhatsApp
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
