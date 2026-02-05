
export enum GameStatus {
  LIVE = 'Live',
  COMING_SOON = 'Coming Soon'
}

export interface GameLinks {
  steam?: string;
  playStore?: string;
  appStore?: string;
  web?: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  status: GameStatus;
  links: GameLinks;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  visualUrl: string; // Video or image URL
  visualType: 'video' | 'image';
  fallbackImageUrl?: string; // Optional fallback image URL for video
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  testimonial: string;
  imageUrl: string;
}

export interface CMSData {
  hero: HeroContent;
  games: Game[];
  team: TeamMember[];
  testimonials: Testimonial[];
}
