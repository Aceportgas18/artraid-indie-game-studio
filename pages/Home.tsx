
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import { Users, Palette, Code, Terminal } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();




  const portfolioFeatures = [
    { icon: <Palette size={32} />, title: "Art-First Development", desc: "Every project begins with a unique artistic vision and visual signature." },
    { icon: <Code size={32} />, title: "Custom Engines", desc: "We leverage cutting-edge tools to build seamless gameplay mechanics." },
    { icon: <Users size={32} />, title: "Community Driven", desc: "Our players are our partners. We grow and evolve based on feedback." },
    { icon: <Terminal size={32} />, title: "Technical Excellence", desc: "Optimized performance across all platforms including Steam and Mobile." }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Artraid",
    "url": "https://artraid.com",
    "logo": "https://artraid.com/artraid-assets/Logo_01.png",
    "description": "Artraid is an indie game studio dedicated to building immersive, playful, and unforgettable gaming experiences.",
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "Harini Raj"
      }
    ],
    "sameAs": [
      "https://twitter.com/artraidstudio",
      "https://www.instagram.com/artraidstudio"
    ]
  };

  return (
    <div className="bg-transparent">
      <Helmet>
        <title>Artraid | Indie Game Studio Crafting Digital Universes</title>
        <meta name="description" content="Artraid is an indie game studio dedicated to building immersive, playful, and unforgettable gaming experiences. Discover our art-first development approach and community-driven projects." />
        <meta name="keywords" content="indie game studio, game development, Artraid, digital universes, gaming experiences, art-first development, community driven games" />
        <link rel="canonical" href="https://artraid.com/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Hero />



      {/* Company Portfolio / About Our Studio Section */}
      <section id="portfolio-section" className="py-24 px-6 md:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-600 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Inside Artraid</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-white">
                MORE THAN JUST A STUDIO. A CREATIVE POWERHOUSE.
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Artraid started with a simple belief: that games are the ultimate medium for artistic expression. We don't just build loops; we build memories.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {portfolioFeatures.map((f, i) => (
                  <div key={i} className="group">
                    <div className="text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                      {f.icon}
                    </div>
                    <h4 className="text-white font-black tracking-tight mb-2 uppercase text-sm">{f.title}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden"
            >
              <img
                src="/artraid-assets/Game_Environment_Night.jpg"
                alt="Our Studio Night"
                className="w-full h-auto transition-opacity duration-700 opacity-100 group-hover:opacity-0 group-active:opacity-0"
              />
              <img
                src="/artraid-assets/Game_Environment_Day.jpg"
                alt="Our Studio Day"
                className="absolute top-0 left-0 w-full h-auto transition-opacity duration-700 opacity-0 group-hover:opacity-100 group-active:opacity-100"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter / Call to Action */}
      <section className="py-24 px-6 md:px-12 bg-white text-black text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">JOIN THE ARTRAID ODYSSEY</h2>
          <p className="text-zinc-600 text-lg mb-12 max-w-2xl mx-auto">
            Subscribe for exclusive updates on our latest projects, beta access, and behind-the-scenes content from our development logs.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-10 py-4 bg-black text-white font-black uppercase text-xs tracking-widest hover:bg-orange-600 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
