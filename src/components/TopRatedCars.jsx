import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

const topCars = [
  {
    id: 1,
    name: "Lambo Huracan",
    category: "Luxury",
    provider: "Elite Rentals",
    rentPerDay: 120,
    rating: 4.9,
    image:
      "http://images.unsplash.com/photo-1676744544740-9fd75a5aed85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=800",
  },
  {
    id: 2,
    name: "BMW 3 Series",
    category: "Luxury",
    provider: "DriveX",
    rentPerDay: 110,
    rating: 4.8,
    image:
      "http://images.unsplash.com/photo-1619362280286-f1f8fd5032ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJtd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
  },
  {
    id: 3,
    name: "Porsche",
    category: "Sedan",
    provider: "City Rentals",
    rentPerDay: 50,
    rating: 4.7,
    image:
      "http://images.unsplash.com/photo-1637087867446-7c31ca973cd4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=800",
  },
  {
    id: 4,
    name: "Ford Mustang",
    category: "Sports",
    provider: "Speed Wheels",
    rentPerDay: 150,
    rating: 4.9,
    image:
      "http://images.unsplash.com/photo-1625231334168-35067f8853ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZCUyMG11c3Rhbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
  },
];

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 120 } },
};

const imgVariants = {
  hover: { scale: 1.1, transition: { duration: 0.6, ease: "easeOut" } },
};

const overlayVariants = {
  hover: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const TopRatedCars = () => {
  return (
    <section className="px-6 w-[85%] md:w-full mx-auto md:px-16 bg-black text-white">
      <motion.h2
        className="text-3xl md:text-5xl  font-extrabold text-center mb-20 text-[#16df92] drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Top Rated Cars
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {topCars.map((car) => (
          <motion.div
            key={car.id}
            className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer relative group"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="overflow-hidden h-56 rounded-t-2xl">
              <motion.img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover"
                variants={imgVariants}
              />
            </div>

            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold text-[#16df92]">
                {car.name}
              </h3>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Category:</span> {car.category}
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Provider:</span> {car.provider}
              </p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-lg font-bold text-white">
                  ${car.rentPerDay}/
                  <span className="text-gray-400 text-sm">day</span>
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="text-gray-300 font-semibold">
                    {car.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/70 flex items-center justify-center text-center p-6 opacity-0 rounded-2xl"
              variants={overlayVariants}
            >
              <p className="text-gray-300 text-sm">
                Book {car.name} today and enjoy a premium experience with top
                rated vehicles and trusted providers. Smooth booking, excellent
                support, and unforgettable rides!
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TopRatedCars;
