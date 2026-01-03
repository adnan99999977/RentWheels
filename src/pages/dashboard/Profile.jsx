import React, { useContext, useState, useEffect } from "react";
import { Users, Calendar, DollarSign, BarChart2 } from "lucide-react";
import { AuthContext } from "../../auth/AuthContext";
import { SyncLoader } from "react-spinners";
import { format } from "date-fns";
import CountUp from "react-countup";
import { useNavigate } from "react-router";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth();

  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [addedCars, setAddedCars] = useState([]);
  const [userData, setUserData] = useState(null);
  const [randomStats, setRandomStats] = useState({ revenue: 0, followers: 0 });

  console.log(bookings);

  // 🔹 Generate random revenue & followers
  const generateRandomStats = () => {
    const revenue = Math.floor(Math.random() * 200) + 100; // $100 - $300
    const followers = Math.floor(Math.random() * 200) + 50; // 50k - 250k
    setRandomStats({ revenue, followers });
  };

  // 🔹 Fetch user info
  const fetchUserData = async () => {
    try {
      if (!user?.email) return;
      const res = await fetch(
        `https://rent-wheels-server.vercel.app/users?email=${encodeURIComponent(
          user.email
        )}`
      );
      const data = await res.json();
      if (data.success && data.user) setUserData(data.user);

      generateRandomStats();
    } catch (err) {
      console.error("Fetch user error:", err);
    }
  };

  // 🔹 Fetch user's bookings
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
      if (Array.isArray(data)) setAddedCars(data);
      else setAddedCars([]);
    } catch (err) {
      console.error("Fetch added cars error:", err);
      setAddedCars([]);
    }
  };

  useEffect(() => {
    if (user) {
      Promise.all([fetchUserData(), fetchBookings(), fetchAddedCars()]).finally(
        () => setLoading(false)
      );
    }
  }, [user]);

  if (loading || !userData) {
    return (
      <div className="flex items-center justify-center h-full">
        <SyncLoader size={15} color="#09764c" />
      </div>
    );
  }

  const joinDate = user?.metadata?.creationTime
    ? format(new Date(user.metadata.creationTime), "MMMM dd, yyyy")
    : "N/A";

  const stats = [
    {
      title: "Total Bookings",
      value: bookings.length,
      icon: <Calendar size={28} />,
    },
    {
      title: "Cars Listed",
      value: addedCars.length,
      icon: <BarChart2 size={28} />,
    },
    {
      title: "Revenue Earned",
      value: randomStats.revenue,
      icon: <DollarSign size={28} />,
      prefix: "$",
    },
    {
      title: "Followers",
      value: randomStats.followers,
      icon: <Users size={28} />,
      suffix: "k",
    },
  ];

  return (
    <div className="space-y-10 p-6 md:p-10">
      {/* USER INFO */}
      <div className="flex flex-col md:flex-row items-center bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg p-6 md:p-10 animate-fadeIn gap-6">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-green-600 bg-black/20">
          <img
            src={user?.photoURL}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-100">
            {user?.displayName || "Unknown User"}
          </h1>
          <p className="text-gray-300 mt-1">{user?.email}</p>
          <p className="text-gray-400 mt-2 text-sm">
            Member since:{" "}
            <span className="text-green-500 font-semibold">{joinDate}</span>
          </p>
        </div>
      </div>

      {/* STATS CARDS */}
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
              <h3 className="text-gray-400 text-sm font-medium">
                {stat.title}
              </h3>
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

      {/* ADDED CARS */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">
          Your Listings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {addedCars.length > 0 ? (
            addedCars.map((car) => (
              <div
                key={car._id}
                className="bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg p-4 cursor-pointer hover:shadow-2xl transition"
               
              >
                <img
                  src={car.image || "/placeholder.png"}
                  alt={car.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <h3 className="text-gray-100 font-semibold">{car.name}</h3>
                <p className="text-gray-400 text-sm">
                  {car.model || "Model N/A"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No cars listed yet.</p>
          )}
        </div>
      </div>

      {/* BOOKINGS */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">
          Your Bookings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg p-4 cursor-pointer hover:shadow-2xl transition"
              >
                <img
                  src={booking.image || "/placeholder.png"}
                  alt={booking.carName}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <h3 className="text-gray-100 font-semibold">
                  {booking.carName}
                </h3>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No bookings yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
