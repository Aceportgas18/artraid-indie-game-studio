
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Game, GameStatus } from '../types';
import { ExternalLink, ShoppingCart, Bell } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const navigate = useNavigate();
  const isSoon = game.status === GameStatus.COMING_SOON;

  const handleAction = () => {
    navigate('/contact?subject=GAME PURCHASE');
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group flex flex-col h-full bg-zinc-900/60 backdrop-blur-md overflow-hidden border border-zinc-800/50"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-full object-cover image-hover-scale"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest ${isSoon ? 'bg-zinc-800 text-zinc-400' : 'bg-orange-600 text-white'
            }`}>
            {game.status}
          </span>
        </div>

        {/* Overlay Links */}
        {!isSoon && Object.keys(game.links).length > 0 && (
          <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {game.links.steam && (
              <a href={game.links.steam} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/80 hover:bg-white hover:text-black transition-colors rounded-full">
                <ExternalLink size={16} />
              </a>
            )}
            {game.links.web && (
              <a href={game.links.web} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/80 hover:bg-white hover:text-black transition-colors rounded-full">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black tracking-tighter mb-4 text-hover-orange text-white">
          {game.title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
          {game.description}
        </p>

        <button
          onClick={handleAction}
          disabled={isSoon}
          className={`flex items-center justify-center space-x-3 w-full py-4 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${isSoon
            ? 'border border-zinc-700 text-zinc-400 cursor-not-allowed'
            : 'bg-white text-black hover:bg-orange-600 hover:text-white'
            }`}
        >
          <ShoppingCart size={14} />
          <span>Inquire / Interest</span>
        </button>
      </div>
    </motion.div>
  );
};

export default GameCard;
