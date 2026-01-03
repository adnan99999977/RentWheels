import React from "react";

const Privacy = () => {
  const policies = [
    {
      title: "1. Data Collection",
      description:
        "We collect personal data to improve our services, provide better user experiences, and ensure secure transactions. This includes details like name, email, phone, and booking history.",
    },
    {
      title: "2. Data Usage",
      description:
        "Your information is used strictly for account management, bookings, communication, and platform improvements. We do not share your personal data with third parties without your consent.",
    },
    {
      title: "3. Terms of Service",
      description:
        "By using RentWheels, you agree to follow our rules, make timely payments, and respect other users. Violations may result in account suspension or termination.",
    },
    {
      title: "4. Security Measures",
      description:
        "We implement industry-standard encryption and secure servers to protect your personal and financial data. Regular audits ensure your information remains safe.",
    },
    {
      title: "5. Cookies & Tracking",
      description:
        "We use cookies to enhance your browsing experience, remember preferences, and analyze website traffic. You can manage your cookie preferences anytime.",
    },
    {
      title: "6. User Rights",
      description:
        "You can request access, correction, or deletion of your data at any time. Contact our support for assistance regarding your personal information.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/90 p-6 overflow-hidden space-y-12">
      {/* Floating Gradient Backgrounds */}
      <div className="absolute top-60 -right-80 w-[800px] h-[420px] bg-gradient-to-br from-[#09964c]/20 to-[#09964c]/5 rounded-full blur-2xl animate-pulse opacity-50 z-0"></div>
      <div className="absolute -top-24 -left-60 w-[600px] h-[680px] bg-gradient-to-tr from-[#939e9c]/20 to-[#939e9c]/5 rounded-[50%_20%_50%_20%] blur-2xl rotate-12 animate-pulse opacity-40 z-0"></div>
      <div className="absolute -bottom-80 -right-10 w-[420px] h-[500px] bg-gradient-to-l from-[#939e9c]/15 to-[#09964c]/5 rounded-[30%_60%_40%_70%] blur-2xl rotate-6 animate-pulse opacity-50 z-0"></div>

      {/* Header */}
      <div className="relative mt-25 z-10 p-6 bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold text-red-400">
          Privacy & Terms
        </h1>
        <p className="text-gray-300 mt-2 text-sm md:text-base max-w-2xl">
          Your privacy matters to us. Please read our policies carefully to
          understand how we handle your data and use our services.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="relative z-10 space-y-8">
        {policies.map((policy, idx) => (
          <div
            key={idx}
            className="bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg p-6 animate-slideUp hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-2">
              {policy.title}
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {policy.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
