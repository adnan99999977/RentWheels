import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRegClock,
  FaDollarSign,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa6";
import { PuffLoader } from "react-spinners";

const features = [
  {
    icon: <FaRegClock size={32} />,
    title: "Easy Booking",
    long: "With our intuitive booking system, reserving your ideal vehicle is a breeze. Select your preferred car, choose dates, and confirm in seconds — no confusing forms, no waiting.",
  },
  {
    icon: <FaDollarSign size={32} />,
    title: "Affordable Rates",
    long: "We provide transparent, competitive pricing without hidden charges. Whether you’re renting for a day trip or an extended journey, you’ll enjoy exceptional value.",
  },
  {
    icon: <FaHandshake size={32} />,
    title: "Trusted Providers",
    long: "All our vehicles come from trusted, verified providers who meet strict quality and safety standards. Every car is inspected regularly.",
  },
  {
    icon: <FaHeadset size={32} />,
    title: "24/7 Support",
    long: "Our dedicated customer support team is available around the clock to assist you with bookings, questions, or emergencies. Whether you need guidance, troubleshooting",
  },
];

const WhyRentWithUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className=" bg-fixed relative px-4 md:px-16 bg-[url('/person.jpg')] 
  bg-cover 
  bg-center 
  bg-no-repeat 
  w-full 
  
  min-h-[500px] md:min-h-[560px] lg:min-h-[530px]  text-white"
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-19 text-[#07b16d] pt-8 drop-shadow-lg">
        Why Rent With Us!

            <p className="text-lg mt-10 leading-relaxed w-[70%] mx-auto text-white">
    At <span className="text-[#00b377] font-semibold">RentWheels</span>, we don’t just rent cars — 
    we deliver freedom, comfort, and trust on every ride. 
    With transparent pricing, well-maintained vehicles, and 24/7 customer support, 
    we make your journey smooth, safe, and truly hassle-free.
  </p>
      </h2>
   

      <div className="lg:flex  flex-col  sm:flex-row gap-4 lg:h-[220px] w-full ">
        {features.map((feature, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              layout
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="relative flex flex-col bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg cursor-pointer overflow-hidden w-full sm:w-auto"
              style={{
                flex: isHovered ? 3 : 1,
              }}
            >
              <PuffLoader
                size={25}
                color="#097624"
                className="absolute left-3 top-3"
              />
              <motion.div
                className="p-6 flex flex-col items-center text-center w-full"
                layout
              >
                <motion.div
                  className="bg-[#199655] p-4 rounded-full mb-4 text-[#054723]"
                  layout
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  layout
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.title}
                </motion.h3>

                <motion.p
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 10,
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-300 text-sm"
                >
                  {feature.long}
                </motion.p>

                {!isHovered && (
                  <motion.p
                    className="text-gray-300 text-sm"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isHovered ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.short}
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyRentWithUs;
