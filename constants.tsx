
import { GameStatus, CMSData } from './types';

export const INITIAL_CMS_DATA: CMSData = {
  hero: {
    title: "WE CRAFT DIGITAL UNIVERSES",
    subtitle: "Artraid is an indie studio dedicated to building immersive, playful, and unforgettable gaming experiences.",
    visualUrl: "/artraid-assets/Landpage_Artraid.jpg",
    visualType: 'image'
  },
  games: [
    {
      id: '1',
      title: 'Neon Odyssey',
      description: 'A fast-paced synthwave racing adventure through a crumbling digital dimension.',
      imageUrl: 'https://picsum.photos/seed/neon/800/600',
      status: GameStatus.LIVE,
      links: {
        steam: 'https://store.steampowered.com',
        web: 'https://artraid.com/neon-odyssey'
      }
    },
    {
      id: '2',
      title: 'Void Weaver',
      description: 'Strategic puzzle solving where you manipulate gravity and time to escape the abyss.',
      imageUrl: 'https://picsum.photos/seed/void/800/600',
      status: GameStatus.COMING_SOON,
      links: {}
    },
    {
      id: '3',
      title: 'Pixel Punks',
      description: 'The ultimate 2D brawler with a deep customization system and chaotic multiplayer.',
      imageUrl: 'https://picsum.photos/seed/punk/800/600',
      status: GameStatus.LIVE,
      links: {
        playStore: 'https://play.google.com',
        appStore: 'https://apple.com/app-store'
      }
    }
  ],
  team: [
    { id: 't1', name: 'MAGESH', role: 'Founder & Creative Lead', imageUrl: '/artraid-assets/Magesh_ArtRaid.png' },
    { id: 't2', name: 'HARINI', role: 'Lead Developer', imageUrl: '/artraid-assets/Harini_ArtRaid.png' },
    { id: 't3', name: 'KAVIYA', role: 'Art Director', imageUrl: '/artraid-assets/Kavya_Creative Head.png' }
  ],
  testimonials: [
    { id: 'test1', name: 'Mounika', testimonial: 'Working with this game asset company was such a smooth and rewarding experience. The quality of their assets truly stood out — beautifully designed, highly detailed, and perfectly optimized for game development. Everything integrated seamlessly into my project, which saved me a lot of time.', imageUrl: '/artraid-assets/Female_Testimonial.png' },
    { id: 'test2', name: 'Robin', testimonial: 'Working with this game asset company has been a great experience from start to finish. The level of detail and craftsmanship in their assets is impressive, and everything was optimized and production-ready. It made integrating them into my project straightforward and efficient.', imageUrl: '/artraid-assets/Male_Testimonial.png' }
  ]
};
