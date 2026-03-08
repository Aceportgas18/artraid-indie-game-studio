import React from 'react';
import { motion } from 'framer-motion';

const ArtGallery: React.FC = () => {
  const artImages = [
    { src: '/artraid-assets/Copy of Aboutpage_Artraid.jpg', alt: 'About Page Artraid', name: 'Pankration', description: ' Weapons area, Game Environment', category: 'Featured' },
    { src: '/artraid-assets/Game_Environment_Day.jpg', alt: 'Daytime Environment', name: 'Day Environment', description: 'Vibrant daytime environment setting for immersive gameplay.', category: 'Environment' },
    { src: '/artraid-assets/Landpage_Artraid.jpg', alt: 'Landpage Artraid', name: 'Studio Landing', description: 'Our official landing page artwork and visual identity.', category: 'Branding' },
    { src: '/artraid-assets/Game_Environment_Night.jpg', alt: 'Nightime Environment', name: 'Nightime Environment', description: 'Rural Village theme, Game Environment.', category: 'Environment' },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-12 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-center text-white">
          Art Gallery
        </h2>
        <p className="text-zinc-500 text-center text-sm mb-16 max-w-2xl mx-auto">
          Discover our artistic vision through captivating environments and character designs.
        </p>
        
        {/* Elegant Asymmetric Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
          {/* Large Featured - Studio Vision (spans 8 columns, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-8 md:row-span-2 relative group cursor-pointer rounded-2xl overflow-hidden"
          >
            <img
              src={artImages[0].src}
              alt={artImages[0].alt}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">{artImages[0].category}</span>
              <p className="text-white text-3xl font-black tracking-tighter uppercase mb-2">{artImages[0].name}</p>
              <p className="text-zinc-300 text-sm font-medium">{artImages[0].description}</p>
            </div>
          </motion.div>

          {/* Top Right - Day World (spans 4 columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-4 relative group cursor-pointer rounded-2xl overflow-hidden"
          >
            <img
              src={artImages[1].src}
              alt={artImages[1].alt}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
              <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-1">{artImages[1].category}</span>
              <p className="text-white text-xl font-black tracking-tighter uppercase mb-1">{artImages[1].name}</p>
              <p className="text-zinc-400 text-xs">{artImages[1].description}</p>
            </div>
          </motion.div>

          {/* Right Column Stack - Character & Night (4 columns each) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-4 relative group cursor-pointer rounded-2xl overflow-hidden"
          >
            <img
              src={artImages[2].src}
              alt={artImages[2].alt}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
              <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-1">{artImages[2].category}</span>
              <p className="text-white text-xl font-black tracking-tighter uppercase mb-1">{artImages[2].name}</p>
              <p className="text-zinc-400 text-xs">{artImages[2].description}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:col-span-4 relative group cursor-pointer rounded-2xl overflow-hidden"
          >
            <img
              src={artImages[3].src}
              alt={artImages[3].alt}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
              <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-1">{artImages[3].category}</span>
              <p className="text-white text-xl font-black tracking-tighter uppercase mb-1">{artImages[3].name}</p>
              <p className="text-zinc-400 text-xs">{artImages[3].description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtGallery;

