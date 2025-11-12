import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  {
    id: 1,
    name: "Dhaka",
    image:
      "http://images.unsplash.com/photo-1706640254398-3b04782e8c76?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGhha2ElMjBjaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
    description:
      "Experience the fast-paced energy of Bangladesh’s capital with top-tier rental options.",
  },
  {
    id: 2,
    name: "Chittagong",
    image:
      "http://media.istockphoto.com/id/470928468/photo/the-silhouette-of-fishing-boat-on-beach-bangladesh.jpg?s=612x612&w=0&k=20&c=a46laqtwn1PKqXRzOVwUVkPAgzRaVw6NuIbpjIgdjHk=",
    description:
      "Drive through coastal roads and hills with unmatched comfort and reliability.",
  },
  {
    id: 3,
    name: "Sylhet",
    image:
      "http://plus.unsplash.com/premium_photo-1666865792731-0a2656f2b12c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3lsaGV0JTJDJTIwYmFuZ2xhZGVzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
    description:
      "Explore tea gardens and waterfalls with seamless car rental service.",
  },
  {
    id: 4,
    name: "Cox’s Bazar",
    image:
      "http://images.unsplash.com/photo-1635264647809-66e209bf0bbd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q294JUUyJTgwJTk5cyUyMEJhemFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
    description:
      "Cruise along the world’s longest beach with a luxurious drive experience.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" },
  }),
};

const TopLocations = () => {
  return (
    <section className="bg-black text-white  px-6 md:px-20 overflow-hidden">
      {/* Heading */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-5xl font-bold mb-8 text-[#07925d]">
          Top Locations
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Discover our most popular car rental destinations — where every
          journey begins with style and comfort.
        </p>
      </motion.div>

      {/* Location Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {locations.map((loc, i) => (
          <motion.div
            key={loc.id}
            className="relative group hover:scale-105 transition-all duration-300  rounded-xl overflow-hidden shadow-lg bg-gray-900"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
          >
            {/* Image */}
            <img
              src={loc.image}
              alt={loc.name}
              className="h-64 w-full object-cover opacity-90 group-hover:opacity-100 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-[#09764c]/70 transition duration-500"></div>

            {/* Text */}
            <div className="absolute bottom-5 left-5">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#09764c]" /> {loc.name}
              </h3>
              <p className="text-gray-300 text-sm mt-1 max-w-xs">
                {loc.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopLocations;
