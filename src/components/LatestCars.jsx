import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import Loading from "./Loading";
import { CiSearch } from "react-icons/ci";

const LatestCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText.trim() === "") {
      setLoading(true);
      fetch("https://rent-wheels-server.vercel.app/latest-cars")
        .then((res) => res.json())
        .then((data) => {
          setCars(data);
          setLoading(false);
        });
    }
  }, [searchText]);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedText = searchText.trim();

    if (!trimmedText) {
      setLoading(true);
      fetch("https://rent-wheels-server.vercel.app/latest-cars")
        .then((res) => res.json())
        .then((data) => {
          setCars(data);
          setLoading(false);
        });
      return;
    }

    fetch(`https://rent-wheels-server.vercel.app/search?search=${trimmedText}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  };

  if (loading) return <Loading />;

  return (
    <section className="py-12 px-4 sm:px-6 md:px-16 lg:px-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 text-[#09764c] drop-shadow-lg"
      >
        Featured Cars
      </motion.h2>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="mb-8 w-[90%] mx-auto flex flex-row sm:flex-row justify-center gap-3 sm:gap-2"
      >
        <input
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="outline outline-[#09764c] animate-pulse px-4 py-2 rounded-lg w-full sm:w-1/2 md:w-1/3 transition-all focus:outline-2 focus:outline-[#09764c]"
          placeholder="Search cars..."
        />
        <button className="relative hidden lg:flex items-center gap-2 px-4 py-2 border-2 border-[#09764c] text-[#09764c] font-semibold rounded-full overflow-hidden group transition-all duration-500 ease-out">
          <span className="absolute inset-0 bg-[#09764c] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          <span className="relative  z-10 flex items-center gap-2 group-hover:text-white">
            Search
          </span>
        </button>
        <button className="md:hidden">
          <CiSearch size={35} color="#09764c" />
        </button>
      </form>

      {/* Cars */}
      <div className="grid w-[80%] lg:w-full mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {cars.map((car, index) => (
          <motion.div
            key={car._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg hover:shadow-[#09764c]/40 overflow-hidden hover:scale-105 transition-all duration-300"
          >
            <div className="overflow-hidden">
              <motion.img
                src={car.image}
                alt={car.name}
                className="w-full h-48 sm:h-56 md:h-60 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-[#09764c]">
                {car.carName}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                <span className="font-semibold">Type:</span> {car.category}
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                <span className="font-semibold">Provider:</span>{" "}
                {car.providerName}
              </p>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 sm:mt-4 gap-2 sm:gap-0">
                <p className="text-lg font-bold text-white">
                  ${car.rentPerDay}/
                  <span className="text-gray-400 text-sm">day</span>
                </p>

                <Link
                  to={`/car-details/${car._id}`}
                  className="w-full sm:w-auto"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex relative justify-center items-center  lg:flex  gap-2 px-4 py-2 border-2 border-[#09764c] text-[#09764c] font-semibold rounded-full overflow-hidden group transition-all duration-500 ease-out"
                  >
                    <span className="absolute inset-0 bg-[#09764c] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                      View Details <FaArrowRight />
                    </span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LatestCars;
