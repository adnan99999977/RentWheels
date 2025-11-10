import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Loading from "../components/Loading";

const BrowseCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .finally(() => setLoading(false)); 
  }, []);

  if (loading) {
    return <Loading />; 
  }

  return (
    <div className="page-section relative py-20 px-6 md:px-12">
      {/* Background shapes */}
      <div className="absolute -top-28 -right-40 w-[400px] h-[500px] bg-[#09964c]/10 rotate-45 rounded-3xl"></div>
      <div className="absolute -top-28 -right-60 w-[400px] h-[500px] bg-[#939e9c]/10 rotate-45 rounded-3xl"></div>
      <div className="absolute -top-28 -right-80 w-[400px] h-[500px] bg-[#939e9c]/10 rotate-45 rounded-3xl"></div>

      {/* Page title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-[#09764c] mb-12 drop-shadow-lg"
      >
        Car Collection
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl font-bold text-center text-[#f4fcf999] mb-12 drop-shadow-lg"
      >
        Every car tells a story, every collection holds a dream.
      </motion.p>

      {/* Car grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {cars.map((car, index) => (
          <motion.div
            key={car._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 group relative cursor-pointer border border-white/20"
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
              <h2 className="text-xl font-semibold text-white group-hover:text-[#09764c] transition-colors duration-300">
                {car.carName}
              </h2>
              <p className="text-gray-300 text-sm">
                Category: <span className="font-semibold">{car.category}</span>
              </p>
              <p className="text-gray-300 font-medium text-sm">
                Status:{" "}
                <span
                  className={`font-bold ${
                    car.status === "available"
                      ? "text-[#003421] bg-[#16df92c0] px-2 rounded-full"
                      : "text-[#300305] bg-[#eb5555f8] px-2 rounded-full"
                  }`}
                >
                  {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
                </span>
              </p>
            </div>

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
              whileHover={{ opacity: 1 }}
            >
              <Link
                to={`/car-details/${car._id}`}
                className="bg-[#09764c] hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
              >
                View Details
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCars;
