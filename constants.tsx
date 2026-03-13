
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
      title: 'Flash',
      description: 'Race through three unique islands and conquer the Endless Land in Flash!, a fast-paced 3D runner where speed and reflexes are everything. Dodge obstacles, sprint across stunning environments, and see how far you can run in the ultimate test of speed!',
      imageUrl: '/artraid-assets/Flash_GameIcon.jpg',
      status: GameStatus.LIVE,
      links: {
        steam: 'https://store.steampowered.com',
        web: 'https://artraid.com/neon-odyssey'
      }
    },
    {
      id: '3',
      title: 'RopeRush',
      description: 'Help the character grab what they need in Rope Rush, a fun puzzle game where you cut ropes at the right moment to guide the hanging object to them. Think fast, slice smart, and solve clever rope puzzles to make sure the item safely reaches the character!',
      imageUrl: '/artraid-assets/Logo_Roperush.jpg',
      status: GameStatus.LIVE,
      links: {
        playStore: 'https://play.google.com',
        appStore: 'https://apple.com/app-store'
      }
    },
    {
      id: '2',
      title: 'More Worlds on the Horizon',
      description: 'Great stories are never told all at once. While you explore the experiences already available, our team is quietly crafting new adventures behind the scenes. Stay connected and keep an eye on this space—fresh worlds, bold ideas, and unforgettable gameplay moments are on their way. The journey has only just begun.',
      imageUrl: 'https://i.fbcd.co/products/resized/resized-1500-1000/c-1000-designbundle-game-background-game-05-02-08-5e3e1bc9ab59f291ad2699895a675f455452ef08af754a828c3b840ea3ff4bb3.webp',
      status: GameStatus.COMING_SOON,
      links: {}
    }
  ],
  team: [
    { id: 't1', name: 'MAGESH', role: 'Founder', imageUrl: '/artraid-assets/Magesh_ArtRaid.png' },
    { id: 't2', name: 'HARINI', role: 'Co-Founder & Art Director', imageUrl: '/artraid-assets/Harini_ArtRaid.png' },
    { id: 't3', name: 'KAVIYA', role: '2D Artist', imageUrl: '/artraid-assets/Kavya_Creative Head.png' }
  ],
  testimonials: [
    { id: 'test1', name: 'Mounika', testimonial: 'Working with this game asset company was such a smooth and rewarding experience. The quality of their assets truly stood out — beautifully designed, highly detailed, and perfectly optimized for game development. Everything integrated seamlessly into my project, which saved me a lot of time.', imageUrl: '/artraid-assets/Female_Testimonial.png' },
    { id: 'test2', name: 'Robin', testimonial: 'Working with this game asset company has been a great experience from start to finish. The level of detail and craftsmanship in their assets is impressive, and everything was optimized and production-ready. It made integrating them into my project straightforward and efficient.', imageUrl: '/artraid-assets/Male_Testimonial.png' }
  ]
};
