import React from "react";
import { Link } from "react-router";

export default function Video() {
  return (
    <section className="relative   h-[560px] lg:h-screen w-[99%] mx-auto  flex items-center justify-center overflow-hidden  lg:rounded-none">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-[99%] h-[99%] mx-auto pt-2 object-cover"
      >
        <source src="/car.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative  z-10 text-center flex flex-col items-center justify-center gap-6 px-4 max-w-3xl">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-300 leading-tight">
          Drive Your Dream Car Today
        </h1>

        {/* Description */}
        <p className="text-sm md:text-lg text-gray-200 max-w-xl">
          RentWheels offers top-quality vehicles across Bangladesh for any
          occasion — whether it’s a city trip, business journey, or weekend
          getaway.
        </p>

        {/* Call to Action */}
        <Link
          to={"/browse-cars"}
          className="mt-4 bg-[#0b6341] hover:bg-[#0a9962] text-gray-300 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
