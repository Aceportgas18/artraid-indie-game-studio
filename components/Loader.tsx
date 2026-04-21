
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
          <div className="relative overflow-hidden">
            {/* FIXED: was <motion.h1> which created a duplicate h1 in the DOM
                 while the Hero h1 was also mounted.  Changed to <motion.div>
                 (aria-hidden so screen readers skip the decorative loader). */}
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-white"
              aria-hidden="true"
            >
              ARTRAID
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 h-1 bg-orange-600"
            />
          </div>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-10 text-xs tracking-widest text-zinc-500 font-medium uppercase"
          >
            Crafting Digital Universes
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
