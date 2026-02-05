'use client';

import { services } from '@/data/mockData';
import { Camera, Video, Image, PlayCircle, Radio, Box, Plane, Clock } from 'lucide-react';

// Map icon strings from mockData to Lucide components
const iconMap: { [key: string]: any } = {
  'camera': Camera,
  'video': Video,
  'image': Image,
  'play-circle': PlayCircle,
  'radio': Radio,
  'box': Box,
  'plane': Plane,
  'clock': Clock,
};

const ServicesList = () => {
    return (
        <section className="py-32 bg-[#F2EFE9] border-t border-black/5">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="mb-24 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-6">
                        How we can help you <span className="font-serif italic font-normal text-emerald-600">grow.</span>
                    </h2>
                    <p className="text-xl text-black/60 max-w-2xl mx-auto font-light">
                        Comprehensive media solutions tailored to elevate your brand presence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || Camera;
                        
                        return (
                            <div key={service.id} className="group p-10 border border-black/5 rounded-[2.5rem] bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden">
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:video-emerald-500/5 group-hover:to-emerald-500/10 transition-all duration-500" />
                                
                                {/* Icon Container - Mimicking 3D feel with shadows/gradients */}
                                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-neutral-100 to-white border border-white shadow-xl shadow-black/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                    <IconComponent className="w-8 h-8 text-black group-hover:text-emerald-600 transition-colors duration-300" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl font-bold tracking-tight mb-4 text-black relative z-10">{service.title}</h3>
                                
                                <p className="text-black/60 leading-relaxed font-light text-base relative z-10">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default ServicesList;
