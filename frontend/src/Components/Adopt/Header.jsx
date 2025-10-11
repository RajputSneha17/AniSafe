import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [index, setIndex] = useState(0);

  const lines = [
    { id: 1, text: "Friends are made, not bought" },
    { id: 2, text: "Adopt, don't shop!" },
    { id: 3, text: "Give a pet a second chance" },
    { id: 4, text: "Save a life, adopt a pet" },
    { id: 5, text: "Unconditional love is just an adoption away" },
    { id: 6, text: "Adopt love, adopt a pet" },
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
          {lines[index].text}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default Header;
