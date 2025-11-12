import { getAuth } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { AuthContext } from "../auth/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const auth = getAuth();

  const fetchBookings = async () => {
    if (!auth.currentUser) {
      setBookings([]);
      setLoading(false);
      return;
    }

    try {
      const token = await auth.currentUser.getIdToken();

      const res = await fetch(`https://rent-wheels-server.vercel.app/booking`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        console.error("Fetch failed:", res.status);
        setBookings([]);
        return;
      }

      const data = await res.json();
      setBookings(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  
  const handleCancel = async (bookingId) => {
    if (!auth.currentUser) return;

    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This booking will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      const token = await auth.currentUser.getIdToken();

      const res = await fetch(
        `https://rent-wheels-server.vercel.app/booking/${bookingId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await res.json();

      if (result.success) {
      
        setBookings((prev) => prev.filter((b) => b._id !== bookingId));

        Swal.fire({
          icon: "success",
          title: "Booking Cancelled",
          text: "Your booking has been deleted successfully!",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: result.message || "Could not cancel booking",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong while cancelling!",
      });
    }
  };

  useEffect(() => {
    if (user) fetchBookings();
  }, [user]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen page-section p-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col justify-center">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#0ea76b] text-center">
          My Bookings
        </h1>
        <p className="text-gray-400 text-center mb-10">
          Review your booked cars and manage them easily.
        </p>

        <AnimatePresence>
          {bookings.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center text-gray-400 text-xl mt-10"
            >
              You have no bookings yet.
            </motion.div>
          ) : (
            <motion.div
              key="bookings-list"
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-8"
            >
              {bookings.map((booking, index) => (
                <motion.div
                  key={booking._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white/10 lg:w-[1000px] border border-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-green-500/40 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={booking.image}
                        alt={booking.carName}
                        className="w-32 h-20 object-cover rounded-lg border border-white/10"
                      />
                      <div>
                        <h2 className="text-2xl font-bold text-[#09764c]">
                          {booking.carName}
                        </h2>
                        <p className="text-gray-400 text-sm">
                          Category: {booking.category}
                        </p>
                      </div>
                    </div>

                    <div className="text-sm text-gray-300 space-y-1 sm:text-right">
                      <p>
                        <span className="text-gray-400">Rent/Day:</span> $
                        {booking.rentPerDay}
                      </p>
                      <p className="font-semibold text-[#09764c]">
                        Total: ${booking.totalAmount || booking.rentPerDay}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-white/10 my-4"></div>

                  <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                    <div className="text-sm text-gray-400 space-y-1">
                      <p>
                        <span className="font-semibold text-[#09764c]">
                          Provider Name:
                        </span>{" "}
                        {booking.providerName || "N/A"}
                      </p>
                      <p>
                        <span className="font-semibold text-[#09764c]">
                          Pickup Location:
                        </span>{" "}
                        {booking.location || "Not specified"}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        Booked on:{" "}
                        {new Date(booking.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCancel(booking._id)}
                      className="px-5 py-2.5 border border-red-500 text-red-400 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                      Cancel Booking
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MyBookings;
