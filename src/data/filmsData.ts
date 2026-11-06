import { FilmItem } from '../types';

/**
 * CAPTURE BY AYUSH - FILM PORTFOLIO CONFIGURATION
 * ----------------------------------------------------
 * To replace placeholders with your own actual shoots:
 * 1. For MP4 video: Set `videoUrl: 'path/to/your/video.mp4'` or an online URL.
 * 2. For YouTube: Set `youtubeId: 'your-youtube-video-id'` (e.g. 'dQw4w9WgXcQ').
 * 3. For Instagram: Set `instagramUrl: 'https://www.instagram.com/reel/...'`.
 * 4. Replace `thumbnailUrl` with your high-res frame grab or poster image.
 */

export const FILMS_DATA: FilmItem[] = [
  {
    id: 'film-1',
    title: 'Eternal Golden Vows',
    category: 'WEDDINGS',
    subtitle: 'The Royal Wedding Story',
    duration: '04:12',
    aspectRatio: '16:9',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    description:
      'A deeply emotional cinematic wedding film set during golden hour. Focused on subtle glances, emotional vows, and majestic slow-motion fireworks.',
    gearUsed: 'iPhone 16 Pro Max · 4K 24fps Apple ProRes Log · DJI Ronin Mobile',
    location: 'Nagpur Heritage Palace',
    featured: true,
  },
  {
    id: 'film-2',
    title: 'Marigold Symphony',
    category: 'HALDI',
    subtitle: 'Traditional Celebrations & Flower Showers',
    duration: '01:45',
    aspectRatio: '9:16',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description:
      'High-energy 120fps slow-motion flower showers, playful splashes, and infectious laughter captured in vivid Kodachrome-inspired color grading.',
    gearUsed: 'iPhone 16 Pro Max · 4K 120fps ProRes · DaVinci Resolve Studio',
    location: 'Ramtek Garden Resort, Nagpur',
    featured: true,
  },
  {
    id: 'film-3',
    title: 'Midnight Shadow AMG',
    category: 'AUTOMOTIVE',
    subtitle: 'Urban Supercar Delivery & Night Rolling Film',
    duration: '01:10',
    aspectRatio: '16:9',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1400&q=85',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    description:
      'A moody, bass-boosted automotive aesthetic film. Featuring street lighting reflections, high-speed car-to-car tracking, and crisp exhaust note audio.',
    gearUsed: 'iPhone 16 Pro Max · Beastgrip Anamorphic 1.33x · DJI RS3 Gimbal',
    location: 'Nagpur Ring Road Expressway',
    featured: true,
  },
  {
    id: 'film-4',
    title: 'The Grand Ballroom',
    category: 'RECEPTION',
    subtitle: 'Chandelier Romance & Ring Ceremony',
    duration: '03:20',
    aspectRatio: '16:9',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    description:
      'An opulent evening under glittering crystal lights. Capturing the intimate ring exchange, the first dance, and heartfelt family speeches.',
    gearUsed: 'iPhone 16 Pro Max · 4K 30fps Cinematic Mode · DaVinci Film LUT',
    location: 'Radisson Blu Ballroom, Nagpur',
    featured: false,
  },
  {
    id: 'film-5',
    title: 'Monochrome Editorial',
    category: 'CINEMATIC REELS',
    subtitle: 'High-Fashion Portrait Reel',
    duration: '00:45',
    aspectRatio: '9:16',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    description:
      'Striking black-and-white editorial reel with high micro-contrast, stylized light flares, and sync-to-the-beat cutting for maximum social media engagement.',
    gearUsed: 'iPhone 16 Pro Max · 4K 60fps · Custom B&W Tri-X LUT',
    location: 'Studio Loft, Nagpur',
    featured: true,
  },
  {
    id: 'film-6',
    title: 'Boutique Atelier',
    category: 'BRAND FILMS',
    subtitle: 'Luxury Lifestyle Commercial',
    duration: '02:00',
    aspectRatio: '16:9',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    description:
      'Elevated brand film exploring the fine craftsmanship of bespoke fashion. Rich macro textures, soft ambient morning light, and voiceover storytelling.',
    gearUsed: 'iPhone 16 Pro Max · Moment 58mm Tele Lens · DaVinci Resolve',
    location: 'Civil Lines, Nagpur',
    featured: false,
  },
  {
    id: 'film-7',
    title: 'Neon Pulse Festival',
    category: 'EVENTS',
    subtitle: 'Live Concert & Nightlife Coverage',
    duration: '01:30',
    aspectRatio: '9:16',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    description:
      'Adrenaline-packed event film with laser beams, bass drops, crowd euphoria, and rapid shutter speed cuts capturing the electric night.',
    gearUsed: 'iPhone 16 Pro Max · 4K ProRes · DJI Mobile Gimbal',
    location: 'Nagpur Arena',
    featured: false,
  },
  {
    id: 'film-8',
    title: 'Velvet Horizon',
    category: 'WEDDINGS',
    subtitle: 'Pre-Wedding Sunset Film in the Hills',
    duration: '02:40',
    aspectRatio: '16:9',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    description:
      'Gentle winds, golden twilight, and a couple walking through sprawling grasslands. A quiet, poetic visual love letter.',
    gearUsed: 'iPhone 16 Pro Max · 4K 24fps · PolarPro Variable ND Filter',
    location: 'Pench Scenic Hills',
    featured: true,
  },
  {
    id: 'film-9',
    title: 'Porsche 911 GT3 Silhouette',
    category: 'AUTOMOTIVE',
    subtitle: 'Trackside Sound & Motion Study',
    duration: '00:55',
    aspectRatio: '9:16',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4',
    description:
      'Fast-paced speed ramps, carbon fiber close-ups, and aggressive rev matches tuned specifically for Instagram Reels and YouTube Shorts.',
    gearUsed: 'iPhone 16 Pro Max · 4K 60fps · Rode Wireless PRO Audio',
    location: 'Nagpur Circuit Grounds',
    featured: false,
  },
];
