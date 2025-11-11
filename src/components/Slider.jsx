import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "RENT LUXURY CARS ANYTIME",
    description:
      "Experience premium comfort and style with our luxury car collection — available 24/7 for your special moments.",
    image: "/slide1.jpg",
  },
  {
    id: 2,
    title: "DRIVE YOUR DREAM CAR TODAY",
    description:
      "Choose from a wide range of modern vehicles with flexible pricing — making your dream drive possible.",
    image: "/slide2.jpg",
  },
  {
    id: 3,
    title: "COMFORTABLE RIDES FOR EVERY JOURNEY",
    description:
      "From business trips to weekend adventures — rent a car that fits your lifestyle perfectly.",
    image: "/slide3.jpg",
  },
  {
    id: 4,
    title: "AFFORDABLE CARS, PREMIUM SERVICE",
    description:
      "Get reliable vehicles, clean interiors, and professional support — all at a price that suits you.",
    image: "/slide4.jpg",
  },
  {
    id: 5,
    title: "BOOK YOUR RIDE IN SECONDS",
    description:
      "Easy booking, instant confirmation, and quick delivery — your next ride is just a click away.",
    image: "/slide5.jpg",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full max-w-[1200px] mx-auto h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-[90%] h-[88%] mx-auto object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-6 md:px-12 text-center">
            <h1 className="text-white text-2xl md:text-4xl font-extrabold drop-shadow-lg mb-4">
              {slides[current].title}
            </h1>
            <p className="text-gray-200 text-md md:text-lg max-w-3xl leading-relaxed drop-shadow-md">
              {slides[current].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-3 rounded-full hover:bg-white transition shadow-lg"
      >
        <FaArrowLeft className="text-black" size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-3 rounded-full hover:bg-white transition shadow-lg"
      >
        <FaArrowRight className="text-black" size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-3">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              idx === current ? "bg-[#16df92] scale-110" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
