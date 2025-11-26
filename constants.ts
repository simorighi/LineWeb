import { Property, TeamMember } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Villa Serenity',
    location: 'Como, Italy',
    price: '€12,500,000',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-e495e91ba0b8?q=80&w=2000&auto=format&fit=crop',
    beds: 6,
    baths: 7,
    sqft: 8500,
    type: 'Villa',
    featured: true
  },
  {
    id: '2',
    title: 'The Royal Penthouse',
    location: 'Dubai, UAE',
    price: '$24,000,000',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop',
    beds: 4,
    baths: 5,
    sqft: 5200,
    type: 'Penthouse',
    featured: true
  },
  {
    id: '3',
    title: 'Beverly Hills Estate',
    location: 'Los Angeles, USA',
    price: '$35,000,000',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop',
    beds: 8,
    baths: 10,
    sqft: 12000,
    type: 'Mansion',
    featured: true
  },
  {
    id: '4',
    title: 'Skyline Residence',
    location: 'New York, USA',
    price: '$18,500,000',
    imageUrl: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?q=80&w=2000&auto=format&fit=crop',
    beds: 3,
    baths: 3,
    sqft: 3400,
    type: 'Apartment',
    featured: false
  },
  {
    id: '5',
    title: 'Azure Coast Villa',
    location: 'Nice, France',
    price: '€9,200,000',
    imageUrl: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe868?q=80&w=2000&auto=format&fit=crop',
    beds: 5,
    baths: 6,
    sqft: 6000,
    type: 'Villa',
    featured: false
  },
  {
    id: '6',
    title: 'Kyoto Zen Garden Home',
    location: 'Kyoto, Japan',
    price: '¥850,000,000',
    imageUrl: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2000&auto=format&fit=crop',
    beds: 4,
    baths: 4,
    sqft: 4200,
    type: 'Villa',
    featured: false
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Alexander Sterling',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Victoria Vance',
    role: 'Head of International Sales',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Julian Thorne',
    role: 'Senior Broker',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop'
  }
];

export const NAV_LINKS = [
  { label: 'Collection', path: '/properties' },
  { label: 'Agency', path: '/about' },
  { label: 'Contact', path: '/contact' },
];
