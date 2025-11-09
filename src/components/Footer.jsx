import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-20 relative overflow-hidden">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
        {/* Info Section */}
        <div className="space-y-5 relative z-10">
          <p className="font-bold border border-gray-300 w-60 px-4 py-1  text-lg lg:text-2xl flex items-center gap-1 text-center rounded-full">
            <span className="text-gray-300">RENT</span>
            <span className="text-[#09764c]">WHEELS</span>
          </p>
          <p className="text-sm leading-6">
            RentWheels is your trusted partner for seamless car rentals across
            Bangladesh. We help travelers, professionals, and businesses find
            the right vehicle anytime, anywhere — with full transparency and
            reliability.
          </p>

          <div className="flex space-x-3 pt-2">
            {[
              { Icon: FaFacebookF, url: "https://www.facebook.com" },
              { Icon: FaXTwitter, url: "https://www.twitter.com" },
              { Icon: FaInstagram, url: "https://www.instagram.com" },
              { Icon: FaYoutube, url: "https://www.youtube.com" },
            ].map(({ Icon, url }, i) => (
              <button
                key={i}
                onClick={() => window.open(url, "_blank")}
                className="bg-[#09764c] hover:bg-white text-white hover:text-[#09764c] p-2 rounded-md transition-all duration-300 cursor-pointer"
                aria-label={`Open ${url}`}
              >
                <Icon className="text-lg" />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 mt-10">
          <h3 className="text-lg font-semibold text-white border-b-2 border-[#09764c] w-fit mb-3">
            Quick Links
          </h3>
          {[
            "Browse Cars",
            "Pricing Plans",
            "FAQs & Help Center",
            "User Dashboard",
            "Privacy Policy",
          ].map((item, i) => (
            <p
              key={i}
              className="hover:text-[#09764c] transition-colors text-sm cursor-pointer flex items-center gap-1"
            >
              <span className="text-[#09764c]">▸</span> {item}
            </p>
          ))}
        </div>

        {/* Contact Section */}
        <div className="space-y-3 mt-10">
          <h3 className="text-lg font-semibold text-white border-b-2 border-[#09764c] w-fit mb-3">
            Contact Us
          </h3>
          <p>
            <span className="text-[#09764c] font-semibold">MAIL:</span>{" "}
            support@rentwheels.com
          </p>
          <p>
            <span className="text-[#09764c] font-semibold">ADDRESS:</span> House
            57/13,Romajan Ali Road 2, Bangladesh
          </p>
          <p>
            <span className="text-[#09764c] font-semibold">PHONE:</span>{" "}
            +8801839373767
          </p>
          <button className="relative hidden lg:flex items-center gap-2 px-4 py-2 border-2 border-[#09764c] text-[#09764c] font-semibold rounded-full overflow-hidden group transition-all duration-500 ease-out">
            <span className="absolute inset-0 bg-[#09764c] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
              Get In Touch
            </span>
          </button>
        </div>

        {/* About Section */}
        <div className="space-y-3 mt-10">
          <h3 className="text-lg font-semibold text-white border-b-2 border-[#09764c] w-fit mb-3">
            About Company
          </h3>
          <p className="text-sm leading-6">
            Founded in 2025, RentWheels aims to redefine the car rental
            experience by combining technology, comfort, and trust. From short
            city drives to long-distance business trips, we make mobility
            easier, faster, and safer.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 pt-6">
        <p>© RENTWHEELS 2025. All Rights Reserved.</p>
        <div className="flex space-x-5 mt-3 md:mt-0">
          {["Terms of Use", "Privacy Policy", "Blog"].map((item, i) => (
            <p
              key={i}
              className="hover:text-[#09764c] cursor-pointer transition-colors duration-300"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Background Shapes */}
      <div className="absolute -top-28 -left-40 w-[400px] h-[500px] bg-[#09964c]/10 rotate-45 rounded-3xl"></div>
      <div className="absolute -top-28 -left-60 w-[400px] h-[500px] bg-[#939e9c]/10 rotate-45 rounded-3xl"></div>
      <div className="absolute -top-28 -left-80 w-[400px] h-[500px] bg-[#939e9c]/10 rotate-45 rounded-3xl"></div>
    </footer>
  );
};

export default Footer;
