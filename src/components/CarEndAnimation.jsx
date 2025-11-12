import React from "react";
import { motion } from "framer-motion";
import { FaCarSide } from "react-icons/fa";

const CarEndAnimation = () => {
  return (
    <section className="relative bg-black mb-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Car */}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-12"
      >
        <FaCarSide className="text-[#09764c] text-5xl drop-shadow-[0_0_15px_#09764c]" />
      </motion.div>

      {/* Glow road line */}
      <div className="absolute bottom-10 w-full my-4 h-[2px] bg-gradient-to-r from-transparent via-[#09764c] to-transparent animate-pulse"></div>

      {/* Text / Footer Message */}
      <div className="text-center mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 mb-9 text-lg md:text-xl font-light tracking-wide"
        >
          Drive luxury. Drive confidence.
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-white text-3xl md:text-4xl font-bold mt-2"
        >
          RENT <span className="text-[#09764c]">WHEELS</span>
        </motion.h1>
      </div>
    </section>
  );
};

export default CarEndAnimation;
