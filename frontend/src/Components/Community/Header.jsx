import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaDog, 
  FaCat, 
  FaDove, 
  FaHeart, 
  FaGlobeAsia, 
  FaFlask, 
  FaHandsHelping 
} from "react-icons/fa";
import { GiRabbitHead } from "react-icons/gi";
import { TbMeatOff } from "react-icons/tb";

const Header = () => {
  const images = [
    "https://images.unsplash.com/photo-1700785228453-1842830bed0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    "https://images.unsplash.com/photo-1556761637-a16ff6f63243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    "https://images.unsplash.com/photo-1720715456912-62cd0ac6090f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    "https://images.unsplash.com/photo-1542764345-52d0ac5c7824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
  ];

  const messages = [
    <>
      <TbMeatOff className="inline-block text-red-400 mr-2" />
      Animals are not food
    </>,
    <>
      <FaHandsHelping className="inline-block text-yellow-400 mr-2" />
      Animals also feel pain like humans
    </>,
    <>
      <FaFlask className="inline-block text-blue-400 mr-2" />
      They are not for product testing
    </>,
    <>
      <FaHeart className="inline-block text-pink-400 mr-2" />
      Love them, not harm them
    </>,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background Image with Fade Animation */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Center Message */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold drop-shadow-lg"
          >
            {messages[index]}
          </motion.h1>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="mt-4 text-lg md:text-2xl italic flex items-center justify-center gap-2"
        >
          <FaGlobeAsia className="text-yellow-400" />
          Let’s make the world kind for every creature
          <FaHeart className="text-white-400" />
        </motion.p>
      </div>

      {/* Floating Icons Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6 text-yellow-400 text-3xl animate-bounce">
        <FaDog className="hover:scale-125 transition-transform" />
        <FaCat className="hover:scale-125 transition-transform" />
        <GiRabbitHead className="hover:scale-125 transition-transform" />
        <FaDove className="hover:scale-125 transition-transform" />
        <FaHeart className="text-white-500 hover:scale-125 transition-transform" />
      </div>
    </div>
  );
};

export default Header;
