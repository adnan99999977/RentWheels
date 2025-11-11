import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

// Static top rated car data
const topCars = [
  {
    id: 1,
    name: "Mercedes-Benz C-Class",
    category: "Luxury",
    provider: "Elite Rentals",
    rentPerDay: 120,
    rating: 4.9,
    image: "/images/mercedes.jpg",
  },
  {
    id: 2,
    name: "BMW 3 Series",
    category: "Luxury",
    provider: "DriveX",
    rentPerDay: 110,
    rating: 4.8,
    image: "/images/bmw.jpg",
  },
  {
    id: 3,
    name: "Toyota Corolla",
    category: "Sedan",
    provider: "City Rentals",
    rentPerDay: 50,
    rating: 4.7,
    image: "/images/corolla.jpg",
  },
  {
    id: 4,
    name: "Ford Mustang",
    category: "Sports",
    provider: "Speed Wheels",
    rentPerDay: 150,
    rating: 4.9,
    image: "/images/mustang.jpg",
  },
];

const TopRatedCars = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-black text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#16df92] drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Top Rated Cars
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {topCars.map((car, index) => (
          <motion.div
            key={car.id}
            className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <div className="overflow-hidden h-56">
              <motion.img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold text-[#16df92]">{car.name}</h3>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Category:</span> {car.category}
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Provider:</span> {car.provider}
              </p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-lg font-bold text-white">
                  ${car.rentPerDay}/<span className="text-gray-400 text-sm">day</span>
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="text-gray-300 font-semibold">{car.rating}</span>
                </div>
              </div>
            </div>

            {/* Hover overlay for more info */}
            <motion.div
              className="absolute inset-0 bg-black/70 flex items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <p className="text-gray-300 text-sm">
                Book {car.name} today and enjoy a premium experience with top rated vehicles and trusted providers. Smooth booking, excellent support, and unforgettable rides!
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedCars;
