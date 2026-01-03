import React, { useContext, useState, useEffect } from "react";
import { BarChart2, DollarSign, Calendar } from "lucide-react";
import { AuthContext } from "../../auth/AuthContext";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { SyncLoader } from "react-spinners";
import { getAuth } from "firebase/auth";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const auth = getAuth();
  const [bookings, setBookings] = useState([]);
  const [addedCars, setAddedCars] = useState([]);
  const [userData, setUserData] = useState(null);
  const [stats, setStats] = useState({
    bookings: 0,
    revenue: 0,
    carsListed: 0,
  });
  const [loading, setLoading] = useState(true);

  const generateRandomRevenue = () => {
    return Math.floor(Math.random() * 20000) + 1000; // $1,000 - $21,000
  };

  // 🔹 Fetch user data for stats
  const fetchUserData = async () => {
    try {
      if (!user?.email) return;

      const res = await fetch(
        `https://rent-wheels-server.vercel.app/users?email=${encodeURIComponent(
          user.email
        )}`
      );
      if (!res.ok) {
        console.error("Failed to fetch, status:", res.status);
        return;
      }
      const data = await res.json();
      if (data.success && data.user) {
        setUserData(data.user);
        setStats({
          bookings: data.user.totalBookingCar || 0,
          carsListed: data.user.totalCreatedCar || 0,
          revenue: generateRandomRevenue(),
        });
      }
    } catch (err) {
      console.error("Failed to fetch user data:", err);
    }
  };

  // 🔹 Fetch bookings
  const fetchBookings = async () => {
    try {
      const token = await auth.currentUser.getIdToken();
      const res = await fetch("https://rent-wheels-server.vercel.app/booking", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error("Failed to fetch bookings:", err);
    }
  };

  // 🔹 Fetch added cars
  const fetchAddedCars = async () => {
    try {
      if (!user?.email) return;
      const res = await fetch(
        `https://rent-wheels-server.vercel.app/cars?ProviderEmail=${encodeURIComponent(
          user.email
        )}`
      );
      const data = await res.json();
      setAddedCars(data);
    } catch (err) {
      console.error("Failed to fetch added cars:", err);
    }
  };

  useEffect(() => {
    if (user) {
      setLoading(true);
      Promise.all([fetchUserData(), fetchBookings(), fetchAddedCars()]).finally(
        () => setLoading(false)
      );
    }
  }, [user]);

  const statCards = [
    { title: "Bookings", value: stats.bookings, icon: <Calendar size={28} /> },
    {
      title: "Revenue",
      value: `$${stats.revenue.toLocaleString()}`,
      icon: <DollarSign size={28} />,
    },
    {
      title: "Cars Listed",
      value: stats.carsListed,
      icon: <BarChart2 size={28} />,
    },
  ];

  const pieData = [
    { name: "Bookings", value: stats.bookings },
    { name: "Cars Listed", value: stats.carsListed },
  ];

  const COLORS = ["#09964c", "#34d399"];

  if (loading || !userData) {
    return (
      <div className="flex items-center justify-center h-full">
        <SyncLoader size={15} color="#09764c" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="p-6 bg-black/10 backdrop-blur-md rounded-xl shadow-lg animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
          Welcome Back!{" "}
          <span className="text-[#09964c]">{user?.displayName || "User"}</span>
        </h1>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Here's a quick overview of your dashboard today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {statCards.map((stat) => (
          <div
            key={stat.title}
            className="flex items-center gap-4 p-6 bg-black/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slideUp"
          >
            <div className="p-3 bg-green-600/20 rounded-full flex items-center justify-center text-green-400">
              {stat.icon}
            </div>
            <div>
              <h3 className="text-gray-400 text-sm font-medium">
                {stat.title}
              </h3>
              <p className="text-gray-100 text-lg md:text-xl font-semibold mt-1">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pie Chart */}
      <div className="bg-black/10 backdrop-blur-md rounded-xl shadow-lg p-6 animate-fadeIn">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">
          Bookings vs Cars Listed
        </h2>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-black/10 backdrop-blur-md rounded-xl shadow-lg p-6 overflow-x-auto animate-fadeIn">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">
          Your Recent Bookings
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-3 px-4 text-gray-400 font-medium uppercase text-xs md:text-sm">
                Car Name
              </th>
              <th className="py-3 px-4 text-gray-400 font-medium uppercase text-xs md:text-sm">
                Booking Date
              </th>
              <th className="py-3 px-4 text-gray-400 font-medium uppercase text-xs md:text-sm">
                Price
              </th>
              <th className="py-3 px-4 text-gray-400 font-medium uppercase text-xs md:text-sm">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, idx) => (
              <tr
                key={booking._id}
                className={`${
                  idx % 2 === 0 ? "bg-white/5" : "bg-white/10"
                } hover:bg-green-900/20 transition-colors duration-200`}
              >
                <td className="py-3 px-4 text-gray-200">{booking.carName}</td>
                <td className="py-3 px-4 text-gray-200">
                  {new Date(booking.createdAt).toLocaleDateString()}
                </td>
                <td className="py-3 px-4 text-gray-200">
                  {booking.totalAmount || "N/A"}$
                </td>
                <td className="py-3 px-4 text-gray-200">{booking.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Added Cars Table */}
      <div className="bg-black/10 backdrop-blur-md rounded-xl shadow-lg p-6 overflow-x-auto animate-fadeIn">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">
          Your Added Cars
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-3 px-4 text-gray-400 font-medium uppercase text-xs md:text-sm">
                Car Name
              </th>
              <th className="py-3 px-4 text-gray-400 font-medium uppercase text-xs md:text-sm">
                Added Date
              </th>
              <th className="py-3 px-4 text-gray-400 font-medium uppercase text-xs md:text-sm">
                Status
              </th>
              <th className="py-3 px-4 text-gray-400 font-medium uppercase text-xs md:text-sm">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {addedCars?.map((car, idx) => (
              <tr
                key={car._id}
                className={`${
                  idx % 2 === 0 ? "bg-white/5" : "bg-white/10"
                } hover:bg-green-900/20 transition-colors duration-200`}
              >
                <td className="py-3 px-4 text-gray-200">{car.carName}</td>
                <td className="py-3 px-4 text-gray-200">
                  {new Date(car.createdAt).toLocaleDateString()}
                </td>
                <td className="py-3 px-4 text-gray-200">
                  {car.status || "Available"}
                </td>
                <td className="py-3 px-4 text-gray-200">
                  {car?.createdAt
                    ? new Date(car.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHome;
