
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GameCard from '../components/GameCard';
import ArtGallery from '../components/ArtGallery';
import { INITIAL_CMS_DATA } from '../constants';
import { X } from 'lucide-react';

const Games: React.FC = () => {
  const [showGallery, setShowGallery] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showGallery && galleryRef.current) {
      setTimeout(() => {
        galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [showGallery]);

  const galleryImages = [
    'https://picsum.photos/seed/g1/400/600',
    'https://picsum.photos/seed/g2/400/500',
    'https://picsum.photos/seed/g3/400/700',
    'https://picsum.photos/seed/g4/400/550',
    'https://picsum.photos/seed/g5/400/650',
    'https://picsum.photos/seed/g6/400/450',
    'https://picsum.photos/seed/g7/400/800',
    'https://picsum.photos/seed/g8/400/500',
    'https://picsum.photos/seed/g9/400/600',
  ];

  return (
    <div className="bg-transparent text-white pt-32 pb-24">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-orange-600 text-xs font-black uppercase tracking-[0.4em] mb-4 block"
        >
          The Library
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-10 text-white"
        >
          OUR GAMES
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          className="h-1 bg-white mx-auto"
        />
      </section>

      {/* Game Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {INITIAL_CMS_DATA.games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GameCard game={game} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section (as required below game cards) */}
      <section className="py-24 px-6 md:px-12 border-t border-zinc-900/50 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-white">
                COMPANY PORTFOLIO
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-black tracking-tight mb-2 uppercase text-white">Platform Agnostic</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    We've successfully launched titles across Steam, iOS, Android, and Web platforms. Our technical infrastructure is built to scale.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight mb-2 uppercase text-white">Publishing Partnerships</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Artraid maintains strong relationships with indie publishers globally, ensuring our vision reaches players in every corner of the world.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: '/artraid-assets/Game_Character_Turnaround-4.jpg', name: 'Character Concept 4', description: 'Unique character design for gaming.' },
                { src: '/artraid-assets/Game_Environment_Day.jpg', name: 'Daytime Environment', description: 'Vibrant daytime game world setting.' },
                { src: '/artraid-assets/Game_Environment_Night.jpg', name: 'Nighttime Environment', description: 'Atmospheric nighttime game scene.' },
                { src: '/artraid-assets/Landpage_Artraid.jpg', name: 'Artraid Landing Page', description: 'Landing page artwork for Artraid.' },
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer bg-zinc-900 overflow-hidden aspect-video flex items-center justify-center border border-zinc-800"
                >
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-full h-full object-contain image-hover-grayscale-scale"
                  />
                  <div className="absolute inset-0 overlay-hover" />
                  <div className="absolute inset-0 opacity-hover flex flex-col justify-end p-4">
                    <p className="text-white text-sm font-black tracking-tighter uppercase">{image.name}</p>
                    <p className="text-zinc-400 text-[10px] font-medium leading-relaxed">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <button
              onClick={() => setShowGallery(!showGallery)}
              className="px-8 py-3 bg-orange-600 text-white font-black uppercase text-xs tracking-widest hover:bg-orange-700 transition-colors"
            >
              {showGallery ? 'Hide Gallery' : 'See More'}
            </button>
          </div>
        </div>
      </section>

      {/* Art Gallery Section */}
      <div ref={galleryRef}>
        {showGallery && <ArtGallery />}
      </div>
    </div>
  );
};

export default Games;
