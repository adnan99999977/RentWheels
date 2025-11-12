import React from "react";
import Marquee from "react-fast-marquee";

const brands = [
  { id: 1, img: "/brand/brand1.png" },
  { id: 2, img: "/brand/brand2.png" },
  { id: 3, img: "/brand/brand3.png" },
  { id: 4, img: "/brand/brand4.png" },
  { id: 5, img: "/brand/brand5.png" },
  { id: 6, img: "/brand/brand6.png" },
];

const BrandCollabMarquee = () => {
  return (
    <section className="relative pb-30 bg-black py-14 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#09764c]">
          Our Trusted Partners
        </h2>
        <p className="text-gray-400 mt-2">
          Leading automotive brands that collaborate with Rent Wheels
        </p>
      </div>

      {/* Marquee Section */}
      <Marquee speed={30} gradient={true} gradientColor={[0, 0, 0]}>
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="mx-10 flex items-center justify-center"
          >
            <div
              className="w-40 h-20 flex items-center justify-center 
              brightness-60 hover:brightness-100 
              opacity-80 hover:opacity-100 
              transition-all duration-300"
            >
              <img
                src={brand.img}
                alt={`Brand ${brand.id}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </Marquee>

      {/* Left & Right */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default BrandCollabMarquee;
