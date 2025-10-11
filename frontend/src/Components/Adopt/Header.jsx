import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaHeart, FaHandPaper, FaPaw, FaRegHandPeace } from "react-icons/fa";
const Header = () => {
  const [index, setIndex] = useState(0);

   const lines = [
    { id: 1, text: "Friends are made, not bought", icon: <FaHeart className="inline text-red-500 ml-2" /> },
    { id: 2, text: "Adopt, don't shop!", icon: <FaHandPaper className="inline text-yellow-400 ml-2" /> },
    { id: 3, text: "Save a life, adopt a pet", icon: <FaPaw className="inline text-green-400 ml-2" /> },
    { id: 4, text: "I'm alone, I need you!", icon: <FaRegHandPeace className="inline text-blue-400 ml-2" /> },
    { id: 5, text: "Adopt love, adopt a pet", icon: <FaHeart className="inline text-pink-500 ml-2" /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1633529165231-f316b6909f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzOTV8MHwxfHNlYXJjaHwzMnx8YWRvcHQlMjBkb2d8ZW58MHx8fHwxNzYwMDY4NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1600')",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={lines[index].id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="text-white font-bold text-4xl md:text-6xl text-center px-4"
        >
          {lines[index].text}{lines[index].icon} 
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default Header;
