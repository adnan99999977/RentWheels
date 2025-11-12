import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaRoad, FaTag, FaKey } from "react-icons/fa";

const OurFeatures = () => {
  // animation variants
  const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const bottomVariant = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <div className="bg-black text-white pt-10 px-6 md:px-30 overflow-hidden">
     
      <motion.div
        className="text-center mb-25"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-5xl mb-7 text-[#09764c] font-bold ">Our Features</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover a world of convenience, safety, and customization, paving the
          way for unforgettable adventures.
        </p>
      </motion.div>

     
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-12"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        
        <motion.div
          className="flex flex-col gap-10 w-full md:w-1/3"
          variants={leftVariant}
        >
          {/* First class services */}
          <motion.div
            className="flex items-start gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#09764c] p-3 rounded-lg text-black text-2xl shadow-lg">
              <FaTrophy />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">First Class Services</h3>
              <p className="text-gray-300 text-[10px]">
                Where luxury meets exceptional care, creating unforgettable
                moments.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#09764c] p-3 rounded-lg text-black text-2xl shadow-lg">
              <FaRoad />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">24/7 Road Assistance</h3>
              <p className="text-gray-300 text-[10px]">
                Reliable support when you need it most, keeping you on the move
                with confidence and peace of mind.
              </p>
            </div>
          </motion.div>
        </motion.div>

        
        <motion.div
          className="w-full md:w-2/3 flex justify-center"
          variants={bottomVariant}
        >
          <img
            src="/car.png"
            alt="Car"
            className="w-[100%] md:w-full object-contain drop-shadow-2xl"
          />
        </motion.div>

     
        <motion.div
          className="flex flex-col gap-10 w-full md:w-1/3"
          variants={rightVariant}
        >
          {/* Quality In Minimum */}
          <motion.div
            className="flex items-start gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#09764c] p-3 rounded-lg text-black text-2xl shadow-lg">
              <FaTag />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Quality in Minimum</h3>
              <p className="text-gray-300 text-[10px]">
                Unlocking affordable brilliance while elevating quality for
                maximum value.
              </p>
            </div>
          </motion.div>

          {/* Free Pick-Up & Drop-Off */}
          <motion.div
            className="flex items-start gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#09764c] p-3 rounded-lg text-black text-2xl shadow-lg">
              <FaKey />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">
                Free Pick-Up & Drop-Off
              </h3>
              <p className="text-gray-300 text-[10px]">
                Enjoy free pickup and drop-off services, adding an extra layer
                of ease to your car rental experience.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurFeatures;
