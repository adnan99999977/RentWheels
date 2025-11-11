import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";
import LatestCars from "./LatestCars";

const Hero = () => {
  return (
    <>
      <div
        className="
  relative 
  bg-[url('/bg.jpg')] 
  bg-cover 
  bg-center 
  bg-no-repeat 
  w-full 
  min-h-[500px] md:min-h-[560px] lg:min-h-[580px] 
  flex flex-col 
  justify-center 
  items-center 
  text-center 
  px-4 
  overflow-hidden
"
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <motion.div className="relative z-10 flex flex-col gap-10 items-center">
          <h1 className="text-xl md:text-4xl font-semibold text-gray-100 ">
            Drive Your Freedom with{" "}
            <span className="text-[#09764c]">
              <Typewriter
                words={["RentWheels", "Your Journey", "Every Ride"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-gray-300 max-w-xl text-sm md:text-lg mb-6 leading-8"
          >
            Seamless car rentals, flexible bookings, and 24/7 support for you
            need for a smooth journey.
          </motion.p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden text-[#09764c] font-semibold py-2 px-5 rounded-full border-2 border-[#09764c] shadow-md bg-transparent group transition-all duration-500 ease-out"
            title="Click to book your ride now!"
          >
            {/* Background animation layer */}
            <span className="absolute inset-0 bg-[#09764c] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

            {/* Text */}
            <Link
              to="/browse-cars"
              className="relative z-10 flex items-center justify-center group-hover:text-white transition-colors duration-500"
            >
              Hit the Road!
            </Link>
          </motion.button>
          <div class="absolute -bottom-19 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              class="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
