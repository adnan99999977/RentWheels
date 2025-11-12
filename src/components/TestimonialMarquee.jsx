import React from "react";
import Marquee from "react-fast-marquee";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Luxury Car Client",
    text: "The entire experience was seamless — top-notch cars and quick support!",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Business Executive",
    text: "Their luxury collection is unbeatable. I felt like a VIP the whole time.",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Regular Customer",
    text: "Affordable, stylish, and super professional. Highly recommended!",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Emily Brown",
    role: "Travel Blogger",
    text: "Rented twice, both times perfect service. Absolutely loved the vibe.",
    img: "https://i.pravatar.cc/150?img=4",
  },
];

const TestimonialMarquee = () => {
  return (
    <section className="relative bg-black  overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl mb-8 font-bold text-[#09764c]">
          What Our Customers Say
        </h2>
        <p className="text-gray-400 mb-9 mt-2">
          Real stories from people who trusted us
        </p>
      </div>

      {/* Marquee Section */}
      <Marquee
        gradient={true}
        gradientColor={[0, 0, 0]}
        speed={40}
        pauseOnHover={true}
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="group relative flex-shrink-0 w-96 mx-6 p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 transform hover:scale-x-103 cursor-pointer overflow-hidden"
          >
            <div className="relative z-10">
              <FaQuoteLeft className="text-[#09764c] text-2xl mb-4" />
              <p className="text-gray-200 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:from-[#09764c]/70 transition-all duration-500"></div>
          </div>
        ))}
      </Marquee>

      {/* Left & Right Fade Overlays */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default TestimonialMarquee;
