import React, { useState } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContact = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    toast.success(
      <div className="space-y-1">
        <p className="font-semibold">Message sent successfully!</p>
      </div>
    );

    setFormData({ name: "", email: "", message: "" });
    setIsModalOpen(false);
  };

  return (
    <footer className="bg-black border-t border-gray-900 sha text-gray-300 py-12 px-6 md:px-20 relative overflow-hidden">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
        {/* Info Section */}
        <div className="space-y-5 relative z-10">
          <p className="font-bold w-60 px-4 py-1 text-lg lg:text-2xl flex items-center gap-1 text-center rounded-full">
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
              { Icon: FaFacebookF, url: "http://www.facebook.com" },
              { Icon: FaXTwitter, url: "http://www.twitter.com" },
              { Icon: FaInstagram, url: "http://www.instagram.com" },
              { Icon: FaYoutube, url: "http://www.youtube.com" },
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

        {/* Links */}
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
          <button
            onClick={handleContact}
            className="relative hidden lg:flex items-center gap-2 px-4 py-2 border-2 border-[#09764c] text-[#09764c] font-semibold rounded-full overflow-hidden group transition-all duration-500 ease-out"
          >
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
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 pt-6 ">
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-black border border-gray-300 text-gray-300 p-6 rounded-lg w-11/12 max-w-md relative">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-300 hover:text-[#09764c] text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-[#09764c]">
              Get In Touch
            </h2>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-3 p-2 rounded bg-gray-800 text-gray-100 border border-gray-600"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-3 p-2 rounded bg-gray-800 text-gray-100 border border-gray-600"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mb-3 p-2 rounded bg-gray-800 text-gray-100 border border-gray-600"
            />
            <button
              onClick={handleSend}
              className="w-full bg-[#09764c] hover:bg-white hover:text-[#09764c] text-white font-semibold py-2 rounded transition-all duration-300"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </footer>
  );
};

export default Footer;
