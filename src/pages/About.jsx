import React from "react";

const About = () => {
  const teamMembers = [
    { 
      name: "John Doe", 
      role: "Founder & CEO", 
      image: "https://randomuser.me/api/portraits/men/32.jpg" 
    },
    { 
      name: "Jane Smith", 
      role: "CTO", 
      image: "https://randomuser.me/api/portraits/women/44.jpg" 
    },
    { 
      name: "Naif Adnan", 
      role: "Lead Developer", 
      image: "https://i.ibb.co.com/wNkJY8Wf/unnamed.jpg" 
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/90 overflow-hidden p-6 space-y-12">
      {/* Floating gradient background shapes */}
      <div className="absolute top-60 -right-80 w-[800px] h-[420px] bg-gradient-to-br from-[#09964c]/20 to-[#09964c]/5 rounded-full blur-2xl animate-pulse opacity-50 z-0"></div>
      <div className="absolute -top-24 -left-60 w-[600px] h-[680px] bg-gradient-to-tr from-[#939e9c]/20 to-[#939e9c]/5 rounded-[50%_20%_50%_20%] blur-2xl rotate-12 animate-pulse opacity-40 z-0"></div>
      <div className="absolute -bottom-80 -right-10 w-[420px] h-[500px] bg-gradient-to-l from-[#939e9c]/15 to-[#09964c]/5 rounded-[30%_60%_40%_70%] blur-2xl rotate-6 animate-pulse opacity-50 z-0"></div>

      {/* Page Header */}
      <div className="relative mt-25 z-10 p-6 bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
          About RentWheels
        </h1>
        <p className="text-gray-300 mt-2 text-sm md:text-base max-w-2xl">
          RentWheels makes renting and listing cars seamless and professional. Our goal is to provide a smooth, secure, and reliable platform for both users and car owners. Join us and experience the future of car rentals.
        </p>
      </div>

      {/* Team Section */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="p-6 bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center animate-slideUp"
          >
            {/* Avatar */}
             <div className="w-28 h-28 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-green-600/30">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <h3 className="text-gray-100 font-semibold text-lg md:text-xl">{member.name}</h3>
            <p className="text-gray-400 text-sm md:text-base mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
