import React from "react";
import Marquee from "react-fast-marquee";

const brands = [
  { id: 1, img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Audi_logo.svg" },
  { id: 2, img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Mercedes-Benz_Logo_2010.svg" },
  { id: 3, img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/BMW_logo_%28gray%29.svg" },
  { id: 4, img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tesla_Motors.svg" },
  { id: 5, img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Lamborghini_Logo.svg" },
  { id: 6, img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Ferrari-Logo.svg" },
];

const BrandCollabMarquee = () => {
  return (
    <section className="relative bg-black py-14 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Trusted Partners
        </h2>
        <p className="text-gray-400 mt-2">
          Leading automotive brands that collaborate with Rent Wheels
        </p>
      </div>

      {/* Marquee Section */}
      <Marquee speed={50} gradient={true} gradientColor={[0, 0, 0]}>
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="mx-10 flex items-center justify-center"
          >
            <div className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
              <img
                src={brand.img}
                alt={`Brand ${brand.id}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </Marquee>

      {/* Left & Right Fade Overlays */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default BrandCollabMarquee;
