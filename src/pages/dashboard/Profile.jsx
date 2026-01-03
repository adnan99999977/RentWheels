import React, { useContext, useState, useEffect } from "react";
import { Users, Calendar, DollarSign, BarChart2 } from "lucide-react";
import { AuthContext } from "../../auth/AuthContext";
import { SyncLoader } from "react-spinners";
import { format } from "date-fns"; 
import CountUp from "react-countup"; 

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    if (!auth.currentUser) {
      setBookings([]);
      setLoading(false);
      return;
    }}

  useEffect(() => {
    if (user) setLoading(false);
  }, [user]);

  const stats = [
    { title: "Total Bookings", value: 34, icon: <Calendar size={28} /> },
    { title: "Cars Listed", value: 12, icon: <BarChart2 size={28} /> },
    { title: "Revenue Earned", value: 4800, icon: <DollarSign size={28} />, prefix: "$" },
    { title: "Followers", value: 1200, icon: <Users size={28} />, suffix: "k" },
  ];

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center h-full">
        <SyncLoader size={15} color="#09764c" />
      </div>
    );
  }

  const joinDate = user.metadata?.creationTime
    ? format(new Date(user.metadata.creationTime), "MMMM dd, yyyy")
    : "N/A";

  return (
    <div className="space-y-10 p-6 md:p-10">
      {/* User Info Card */}
      <div className="flex flex-col md:flex-row items-center bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg p-6 md:p-10 animate-fadeIn transition-all duration-500 hover:shadow-2xl">
        {/* Avatar */}
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden flex items-center justify-center bg-green-600/30 border-2 border-green-600">
          <img
            src={user.photoURL}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Info */}
        <div className="mt-4 md:mt-0 md:ml-8 flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-100">
            {user.displayName || "Unknown User"}
          </h1>
          <p className="text-gray-300 mt-1 text-sm md:text-base">{user.email || "No Email"}</p>
          <p className="text-gray-400 mt-2 text-sm">
            Member since: <span className="text-green-500 font-semibold">{joinDate}</span>
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="flex items-center gap-4 p-6 bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slideUp cursor-pointer"
          >
            <div className="p-3 bg-green-600/20 rounded-full flex items-center justify-center text-green-400">
              {stat.icon}
            </div>
            <div>
              <h3 className="text-gray-400 text-sm font-medium">{stat.title}</h3>
              <p className="text-gray-100 text-lg md:text-xl font-bold mt-1">
                <CountUp
                  end={stat.value}
                  duration={1.5}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                />
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Editable Info Section */}
      <div className="bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg p-6 md:p-10 animate-fadeIn transition-all duration-500">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-6">
          Profile Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Full Name", value: user.displayName, placeholder: "Enter your name" },
            { label: "Email", value: user.email, placeholder: "Enter your email" }
          ].map((field) => (
            <div className="flex flex-col" key={field.label}>
              <label className="text-gray-400 text-sm mb-1">{field.label}</label>
              <input
                type="text"
                value={field.value || ""}
                placeholder={field.placeholder}
                className={`p-3 rounded-lg bg-white/10 text-gray-100 backdrop-blur-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
