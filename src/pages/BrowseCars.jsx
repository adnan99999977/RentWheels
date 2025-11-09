import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

const BrowseCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div className="bg-black pt-30 relative py-12 px-6 md:px-20 min-h-screen overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-28 -right-40 w-[400px] h-[500px] bg-[#09964c]/10 rotate-45 rounded-3xl"></div>
      <div className="absolute -top-28 -right-60 w-[400px] h-[500px] bg-[#939e9c]/10 rotate-45 rounded-3xl"></div>
      <div className="absolute -top-28 -right-80 w-[400px] h-[500px] bg-[#939e9c]/10 rotate-45 rounded-3xl"></div>

      {/* Page title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
      >
         Car Collection
      </motion.h1>

      {/* Car grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
  {cars.map((car, index) => (
    <motion.div
      key={car.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 group relative cursor-pointer"
    >
     


      {/* Car Image */}
      <motion.img
        src={car.image}
        alt={car.carName}
        className="w-full h-52 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
        whileHover={{ scale: 1.08 }}
      />

      {/* Car Info */}
      <div className="p-4 flex flex-col gap-2 relative z-10">
        <h2 className="text-xl font-semibold text-gray-800 group-hover:text-[#09764c] transition-colors duration-300">
          {car.carName}
        </h2>
         
        <p className="text-gray-600 font-bold text-lg">Rent Per Day <span className="text-[#09764c]">${car.rentPerDay}</span></p>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          whileHover={{ opacity: 1 }}
        >
          <NavLink to={`/cars/${car._id}`} className="bg-[#09764c] hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300">
            View Details
          </NavLink>
        </motion.div>
      </div>

      {/* Footer Info / Animation */}
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-white/90 p-3 flex justify-between items-center rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
      >
        <span className="text-gray-700 text-sm font-medium">{car.year}</span>
        <span className="text-gray-700 text-sm font-medium">{car.mileage} km</span>
      </motion.div>
    </motion.div>
  ))}
</div>

    </div>
  );
};

export default BrowseCars;
