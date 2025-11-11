import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import Loading from "./Loading";

const LatestCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
const fetchCars = async (searchText = "") => {
  setLoading(true);
  try {
    // Build the API URL dynamically
    const baseURL = "http://localhost:5000";
    const endpoint = searchText
      ? `/search?search=${searchText}`
      : "/latest-cars";

    const url = `${baseURL}${endpoint}`;

    // Fetch data
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const data = await res.json();
    setCars(data);
  } catch (err) {
    console.error("Error fetching cars:", err);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchCars();
  }, []);

  if (loading) return <Loading />;

  const handleSearch = (e) => {
    e.preventDefault();
    const name = e.target.search.value.trim();
    fetchCars(name);
  };

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
          name="search"
          type="search"
          className="outline outline-[#09764c] animate-pulse px-4 py-2 rounded-lg w-full sm:w-1/2 md:w-1/3 transition-all focus:outline-2 focus:outline-[#09764c]"
          placeholder="Search cars..."
        />
        <button className="lg:px-4 text-sm px-1 py-2 bg-[#09764c] rounded-lg font-semibold text-black hover:bg-[#10c881] transition-colors">
          Search
        </button>
      </form>

      {/* Cars Grid */}
      <div className="grid w-[80%] lg:w-full mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {cars.map((car, index) => (
          <motion.div
            key={car._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg hover:shadow-[#09764c]/40 overflow-hidden group"
          >
            <div className="overflow-hidden">
              <motion.img
                src={car.image}
                alt={car.name}
                className="w-full h-48 sm:h-56 md:h-60 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#09764c]">
                {car.name}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                <span className="font-semibold"></span> {car.carName}
              </p>
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
                    className="flex justify-center items-center gap-2 w-full sm:w-auto lg:px-4 py-2 rounded-full bg-[#09764c] hover:bg-[#11b677] text-white font-semibold transition-colors duration-300"
                  >
                    View Details <FaArrowRight />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Link
        to="/browse-cars"
        className="relative hidden lg:flex w-[17%] mx-auto mt-10 px-4 py-2 border-2 border-[#09764c] text-[#09764c] font-semibold rounded-full overflow-hidden group transition-all duration-500 ease-out"
      >
        <span className="absolute inset-0 bg-[#09764c] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
        <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
          Browse All Cars
        </span>
      </Link>
    </section>
  );
};

export default LatestCars;
