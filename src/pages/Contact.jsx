import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
    e.preventDefault();

    // Show SweetAlert success
    Swal.fire({
      title: "Success!",
      text: "Your message has been sent successfully.",
      icon: "success",
      confirmButtonColor: "#059669",
      background: "#111827", 
      color: "#f9fafb", 
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top",
      toast: true,
    });

    // Reset form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen p-6 space-y-12 bg-black/90 overflow-hidden">
      {/* Floating gradient shapes */}
      <div className="absolute top-60 -right-80 w-[800px] h-[420px] bg-gradient-to-br from-[#09964c]/20 to-[#09964c]/5 rounded-full blur-2xl animate-pulse opacity-50 z-0"></div>
      <div className="absolute -top-24 -left-60 w-[600px] h-[680px] bg-gradient-to-tr from-[#939e9c]/20 to-[#939e9c]/5 rounded-[50%_20%_50%_20%] blur-2xl rotate-12 animate-pulse opacity-40 z-0"></div>
      <div className="absolute -bottom-80 -right-10 w-[420px] h-[500px] bg-gradient-to-l from-[#939e9c]/15 to-[#09964c]/5 rounded-[30%_60%_40%_70%] blur-2xl rotate-6 animate-pulse opacity-50 z-0"></div>

      {/* Header Section */}
      <div className="relative z-10 mt-25 p-6 bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
          Contact Us
        </h1>
        <p className="text-gray-300 mt-2 text-sm md:text-base max-w-2xl">
          Have questions or feedback? Send us a message and we’ll get back to you ASAP.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg p-6 animate-slideUp"
      >
        <div className="flex flex-col">
          <label className="text-gray-400 text-sm mb-1">Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded-lg bg-white/10 text-gray-100 backdrop-blur-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-400 text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded-lg bg-white/10 text-gray-100 backdrop-blur-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
            required
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="text-gray-400 text-sm mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows={5}
            className="p-3 rounded-lg bg-white/10 text-gray-100 backdrop-blur-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600 resize-none transition-all"
            required
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 py-3 bg-[#046332] text-white rounded-lg hover:bg-green-500 transition-colors font-semibold text-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
