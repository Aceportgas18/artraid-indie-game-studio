
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { INITIAL_CMS_DATA } from '../constants';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { hero } = INITIAL_CMS_DATA;
  const [videoError, setVideoError] = React.useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video && hero.visualType === 'video' && !videoError) {
      video.load();
      video.play().catch(() => {
        // Handle autoplay failure silently
      });
    }
  }, [hero.visualUrl, videoError, hero.visualType]);



  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {hero.visualType === 'video' && !videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover scale-105"
            key={hero.visualUrl}
            onError={() => setVideoError(true)}
          >
            <source src={hero.visualUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={hero.fallbackImageUrl || hero.visualUrl}
            alt="Hero Background"
            className="h-full w-full object-cover scale-105"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mb-12"
        >
          {hero.subtitle}
        </motion.p>


      </div>

      {/* Decorative Bottom Scroll Icon */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-700 shadow-2xl shadow-yellow-800/60">
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/30" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
