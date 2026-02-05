import Link from 'next/link';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F2EFE9] text-black border-t border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
        
        {/* Huge CTA */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
                    Your <span className="font-serif italic font-normal">viral</span> journey <br />
                    starts right here.
                </h2>
                <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-black text-white hover:bg-black/80">
                    Book a call
                </Button>
            </div>
        </div>

        {/* 4 Column Standard Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-black/10 pt-16 mb-16">
            
            {/* Column 1: Brand */}
            <div className="col-span-2 md:col-span-1">
                 <div className="flex items-center space-x-1 mb-6">
                    <span className="text-xl font-bold tracking-tighter">pixelogik<span className="text-emerald-600">*</span></span>
                 </div>
                 <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                        <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                        <Twitter className="w-4 h-4" />
                    </a>
                 </div>
            </div>

            {/* Links Columns */}
            <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-6">Navigate</h3>
                <ul className="space-y-4">
                    <li><Link href="/" className="text-black/70 hover:text-black transition-colors">Home</Link></li>
                    <li><Link href="/about" className="text-black/70 hover:text-black transition-colors">About</Link></li>
                    <li><Link href="/services" className="text-black/70 hover:text-black transition-colors">Services</Link></li>
                    <li><Link href="/work" className="text-black/70 hover:text-black transition-colors">Work</Link></li>
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-6">Connect</h3>
                <ul className="space-y-4">
                    <li><Link href="/contact" className="text-black/70 hover:text-black transition-colors">Contact</Link></li>
                    <li><Link href="/careers" className="text-black/70 hover:text-black transition-colors">Careers</Link></li>
                    <li><Link href="mailto:hello@pixelogik.ae" className="text-black/70 hover:text-black transition-colors">hello@pixelogik.ae</Link></li>
                </ul>
            </div>
            
             <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-6">Legal</h3>
                <ul className="space-y-4">
                    <li><Link href="/privacy" className="text-black/70 hover:text-black transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="text-black/70 hover:text-black transition-colors">Terms of Service</Link></li>
                </ul>
            </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 text-xs text-black/40 font-medium">
            <p>&copy; {currentYear} Pixelogik Media.</p>
            <p>Designed by Pixelogik</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
