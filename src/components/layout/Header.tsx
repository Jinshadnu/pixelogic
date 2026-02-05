'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled || isMenuOpen ? 'bg-[#F2EFE9]/80 backdrop-blur-xl border-b border-black/5 py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group z-50 relative">
            <span className="text-2xl font-bold tracking-tighter text-black font-sans">
              pixelogik<span className="text-emerald-600">*</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-black/70 hover:text-black transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="primary" size="sm" className="bg-black text-white hover:bg-black/80 rounded-full px-6">
                Book a call
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#F2EFE9] pt-32 px-6">
          <div className="flex flex-col space-y-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-4xl font-serif italic text-black hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-8 border-t border-black/10">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full py-6 text-lg rounded-full bg-black text-white hover:bg-black/90">
                  Book a call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
