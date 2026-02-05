
import React from 'react';
import { motion } from 'framer-motion';
import { INITIAL_CMS_DATA } from '../constants';

const Team: React.FC = () => {

  return (
    <div className="bg-transparent text-white pt-32 pb-24">
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-orange-600 text-xs font-black uppercase tracking-[0.4em] mb-4 block"
          >
            The Collective
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-10 text-white"
          >
            MEET THE TEAM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-xl leading-relaxed"
          >
            We are a group of artists, programmers, and dreamers based all over the world, united by the goal of making Artraid the premier name in indie gaming.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {INITIAL_CMS_DATA.team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-8">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover image-hover-grayscale-scale"
                />
                <div className="absolute inset-0 overlay-hover" />
              </div>
              <h3 className="text-3xl font-black tracking-tighter mb-1 text-hover-orange uppercase text-white">
                {member.name}
              </h3>
              <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-32 py-24 px-6 md:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] mb-12 text-center text-zinc-500">Testimonials</h2>
          <div className="flex flex-col sm:flex-row gap-12 justify-center">
            {INITIAL_CMS_DATA.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group max-w-xs"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-8">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-full h-full object-cover image-hover-grayscale-scale"
                  />
                  <div className="absolute inset-0 overlay-hover" />
                </div>
                <h3 className="text-3xl font-black tracking-tighter mb-1 text-hover-orange uppercase text-white">
                  {testimonial.name}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
