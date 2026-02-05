export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  images: string[];
  videoUrl?: string;
  tags: string[];
  client?: string;
  year: number;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export type ProjectCategory = 'all' | 'events-exhibitions' | 'commercial-production' | 'corporate' | 'content-production' | 'live-streaming' | '2d-3d-animation' | 'aerial' | 'timelapse' | 'branding';
