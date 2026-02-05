import React from 'react';
import { motion } from 'framer-motion';

const ArtGallery: React.FC = () => {
  // Local stock images from public/artraid-assets/ for reliable display
  const artImages = [
    { src: '/artraid-assets/Game_Character_Turnaround-1.jpeg', alt: 'Game Character Turnaround 1', name: 'Character Concept 1', description: 'Detailed character turnaround for indie game.' },
    { src: '/artraid-assets/Game_Character_Turnaround-2.jpeg', alt: 'Game Character Turnaround 2', name: 'Character Concept 2', description: 'Dynamic character pose and design.' },
    { src: '/artraid-assets/Game_Character_Turnaround-3.jpeg', alt: 'Game Character Turnaround 3', name: 'Character Concept 3', description: 'Expressive character artwork.' },
    { src: '/artraid-assets/Game_Character_Turnaround-4.jpg', alt: 'Game Character Turnaround 4', name: 'Character Concept 4', description: 'Unique character design for gaming.' },
    { src: '/artraid-assets/Game_Environment_Day.jpg', alt: 'Game Environment Day', name: 'Daytime Environment', description: 'Vibrant daytime game world setting.' },
    { src: '/artraid-assets/Game_Environment_Night.jpg', alt: 'Game Environment Night', name: 'Nighttime Environment', description: 'Atmospheric nighttime game scene.' },
    { src: '/artraid-assets/Harini_ArtRaid.png', alt: 'Harini ArtRaid', name: 'Artist Portrait: Harini', description: 'Portrait of artist Harini from ArtRaid.' },
    { src: '/artraid-assets/Landpage_Artraid.jpg', alt: 'Landpage Artraid', name: 'Artraid Landing Page', description: 'Landing page artwork for Artraid.' },
    { src: '/artraid-assets/Logo_01.png', alt: 'Logo 01', name: 'Artraid Logo', description: 'Official logo design for Artraid.' },
    { src: '/artraid-assets/Magesh_ArtRaid.png', alt: 'Magesh ArtRaid', name: 'Artist Portrait: Magesh', description: 'Portrait of artist Magesh from ArtRaid.' },
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
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {artImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index % 3 * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer bg-zinc-900 overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto block image-hover-grayscale-scale"
              />
              <div className="absolute inset-0 overlay-hover" />
              <div className="absolute inset-0 opacity-hover flex flex-col justify-end p-6">
                <p className="text-white text-lg font-black tracking-tighter uppercase">{image.name}</p>
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
