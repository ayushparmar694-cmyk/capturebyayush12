export type FilmCategory =
  | 'ALL'
  | 'WEDDINGS'
  | 'HALDI'
  | 'RECEPTION'
  | 'AUTOMOTIVE'
  | 'EVENTS'
  | 'BRAND FILMS'
  | 'CINEMATIC REELS';

export interface FilmItem {
  id: string;
  title: string;
  category: FilmCategory;
  subtitle: string;
  duration: string;
  aspectRatio: '16:9' | '9:16';
  thumbnailUrl: string;
  videoUrl?: string; // MP4 URL or embed
  youtubeId?: string;
  instagramUrl?: string;
  description: string;
  gearUsed: string;
  location: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  tags: string[];
  features: string[];
  deliverables: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  shootDuration: string;
  budget: string;
  message: string;
}
