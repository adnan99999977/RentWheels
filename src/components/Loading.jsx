import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  const colors = ["#ff3c78", "#3c9fff", "#3cff8a", "#f5d23c"]; // theme-wise colors

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-24 h-24">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className="absolute w-6 h-6 rounded-full"
            style={{ backgroundColor: color }}
            animate={{
              scale: [1, 1.5, 1],
              x: [
                0,
                50 * Math.cos((index * 2 * Math.PI) / colors.length),
                0,
              ],
              y: [
                0,
                50 * Math.sin((index * 2 * Math.PI) / colors.length),
                0,
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
      <motion.span
        className="absolute bottom-10 text-white text-lg font-bold"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.span>
    </div>
  );
};

export default Loading;
