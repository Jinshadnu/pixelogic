import { projects, services, teamMembers, testimonials } from '@/data/mockData';
import type { Project, Service, TeamMember, Testimonial } from '@/types';
import { isStrapiEnabled, strapiFetch } from '@/lib/strapi';

type StrapiCollectionResponse<T> = {
  data: Array<{
    id: number;
    attributes: T;
  }>;
};

export async function getProjects(): Promise<Project[]> {
  if (!isStrapiEnabled()) return projects;

  const token = process.env.STRAPI_TOKEN;

  const res = await strapiFetch<StrapiCollectionResponse<Project>>({
    path: '/api/projects',
    query: {
      'pagination[pageSize]': 100,
    },
    token,
    next: { revalidate: 60 },
  });

  return res.data.map((item) => ({
    ...item.attributes,
    id: String(item.id),
  }));
}

export async function getServices(): Promise<Service[]> {
  if (!isStrapiEnabled()) return services;

  const token = process.env.STRAPI_TOKEN;

  const res = await strapiFetch<StrapiCollectionResponse<Service>>({
    path: '/api/services',
    query: {
      'pagination[pageSize]': 100,
    },
    token,
    next: { revalidate: 300 },
  });

  return res.data.map((item) => ({
    ...item.attributes,
    id: String(item.id),
  }));
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  if (!isStrapiEnabled()) return teamMembers;

  const token = process.env.STRAPI_TOKEN;

  const res = await strapiFetch<StrapiCollectionResponse<TeamMember>>({
    path: '/api/team-members',
    query: {
      'pagination[pageSize]': 100,
    },
    token,
    next: { revalidate: 300 },
  });

  return res.data.map((item) => ({
    ...item.attributes,
    id: String(item.id),
  }));
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!isStrapiEnabled()) return testimonials;

  const token = process.env.STRAPI_TOKEN;

  const res = await strapiFetch<StrapiCollectionResponse<Testimonial>>({
    path: '/api/testimonials',
    query: {
      'pagination[pageSize]': 100,
    },
    token,
    next: { revalidate: 600 },
  });

  return res.data.map((item) => ({
    ...item.attributes,
    id: String(item.id),
  }));
}
