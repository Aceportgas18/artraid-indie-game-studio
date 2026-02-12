import React from 'react';
import { motion } from 'framer-motion';

const ArtGallery: React.FC = () => {
  // Local stock images from public/artraid-assets/ for reliable display
  const artImages = [
    { src: '/artraid-assets/Game_Character_Turnaround-4.jpg', alt: 'Game Character Turnaround 4', name: 'Character Concept 4', description: 'Unique character design for gaming.' },
    { src: '/artraid-assets/Game_Environment_Day.jpg', alt: 'Game Environment Day', name: 'Daytime Environment', description: 'Vibrant daytime game world setting.' },
    { src: '/artraid-assets/Game_Environment_Night.jpg', alt: 'Game Environment Night', name: 'Nighttime Environment', description: 'Atmospheric nighttime game scene.' },
    { src: '/artraid-assets/Landpage_Artraid.jpg', alt: 'Landpage Artraid', name: 'Artraid Landing Page', description: 'Landing page artwork for Artraid.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-12 px-6 md:px-12 bg-transparent"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 text-center text-white">
          Art Gallery
        </h2>
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {artImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="break-inside-avoid relative group cursor-pointer bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/50"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto block transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white text-xl font-black tracking-tighter uppercase mb-1">{image.name}</p>
                <p className="text-zinc-300 text-xs font-medium leading-relaxed">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ArtGallery;
