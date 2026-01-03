import React, { useContext } from "react";
import { BarChart2, Users, DollarSign, Calendar } from "lucide-react";
import { AuthContext } from "../../auth/AuthContext";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  
  const stats = [
    { title: "Total Users", value: "1,250", icon: <Users size={28} /> },
    { title: "Bookings", value: "340", icon: <Calendar size={28} /> },
    { title: "Revenue", value: "$12,400", icon: <DollarSign size={28} /> },
    { title: "Cars Listed", value: "76", icon: <BarChart2 size={28} /> },
  ];

  const recentBookings = [
    { id: 1, user: "John Doe", car: "Tesla Model 3", date: "2026-01-02" },
    { id: 2, user: "Jane Smith", car: "BMW X5", date: "2026-01-01" },
    { id: 3, user: "Alex Brown", car: "Audi A4", date: "2025-12-31" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="p-6 bg-black/10 backdrop-blur-md rounded-xl shadow-lg animate-fadeIn transition-all duration-500">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
          Welcome Back ! <span className="text-[#09964c]">{user.displayName}</span>
        </h1>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Here's a quick overview of your dashboard today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="flex items-center gap-4 p-6 bg-black/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slideUp"
          >
            <div className="p-3 bg-green-600/20 rounded-full flex items-center justify-center text-green-400">
              {stat.icon}
            </div>
            <div>
              <h3 className="text-gray-400 text-sm font-medium">{stat.title}</h3>
              <p className="text-gray-100 text-lg md:text-xl font-semibold mt-1">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-black/10 backdrop-blur-md rounded-xl shadow-lg p-6 animate-fadeIn transition-all duration-500 overflow-x-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">
          Recent Bookings
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-3 px-4 text-gray-400 font-medium uppercase text-xs md:text-sm">
                User
              </th>
              <th className="py-3 px-4 text-gray-400 font-medium uppercase text-xs md:text-sm">
                Car
              </th>
              <th className="py-3 px-4 text-gray-400 font-medium uppercase text-xs md:text-sm">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map((booking, idx) => (
              <tr
                key={booking.id}
                className={`${
                  idx % 2 === 0 ? "bg-white/5" : "bg-white/10"
                } hover:bg-green-900/20 transition-colors duration-200`}
              >
                <td className="py-3 px-4 text-gray-200">{booking.user}</td>
                <td className="py-3 px-4 text-gray-200">{booking.car}</td>
                <td className="py-3 px-4 text-gray-200">{booking.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHome;
