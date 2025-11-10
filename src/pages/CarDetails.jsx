import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { Toaster, toast } from "sonner";

const CarDetails = () => {
  const car = useLoaderData();
  const navigate = useNavigate();

  const handleBooking = () => {
    const bookingData = {
      ...car,
      carId: car._id,
      bookingStatus: "Active",
      createdAt: new Date().toISOString(),
    };

    // Booking save
    fetch(`http://localhost:5000/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(" Booking Confirmed!", {
          description: "Your car is now reserved successfully!",
          position: "top-center",
          duration: 2500,
          style: {
            background: "#09764c",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
          },
        });

        // Navigate after toast duration
        setTimeout(() => {
          navigate("/my-bookings");
        }, 2500);
      })
      .catch((err) => {
        console.error(err);
        toast.error(" Booking Failed!", {
          description: "Something went wrong. Please try again.",
          position: "top-center",
          duration: 2500,
          style: {
            background: "rgba(200, 30, 30, 0.8)",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
          },
        });
      });

    // Car status update
    fetch(`http://localhost:5000/cars/${car._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Unavailable" }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Updated car status:", data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="page-section">
      <Toaster richColors position="top-center" />

      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-5xl bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
          <div className="absolute -top-16 -left-16 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-green-500/20 to-green-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-8 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-gray-400/10 to-gray-200/5 rounded-full blur-3xl animate-spin-slow"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-10 relative z-10">
            <div className="flex items-center justify-center">
              <img
                src={car.image}
                alt={car.carName}
                className="w-full max-w-md rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col justify-between text-white">
              <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-wide text-[#09764c] drop-shadow-lg">
                {car.carName}
              </h1>
              <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
                {car.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-gray-200 text-md font-medium">
                <div>
                  <span className="font-semibold text-white">Category:</span>{" "}
                  {car.category}
                </div>
                <div>
                  <span className="font-semibold text-white">Rent per Day:</span>{" "}
                  ${car.rentPerDay}
                </div>
                <div>
                  <span className="font-semibold text-white">Location:</span>{" "}
                  {car.location}
                </div>
                <div>
                  <span className="font-semibold text-white">Status:</span>{" "}
                  <span
                    className={`font-bold ${
                      car.status === "available"
                        ? "text-[#09764c]"
                        : "text-red-400"
                    }`}
                  >
                    {car.status}
                  </span>
                </div>
              </div>

              <div className="text-gray-400 text-sm mb-2">
                Added by: <span className="text-white">{car.providerName}</span>{" "}
                ({car.providerEmail})
              </div>
              <div className="text-gray-400 text-sm mb-6">
                Added on: <span className="text-white">{car.createdAt}</span>
              </div>

              {/* Only button, no Link */}
              <button
                onClick={handleBooking}
                className={`relative z-10 flex items-center justify-center px-4 py-2 rounded-full font-semibold text-white
                   ${
                     car.status === "available"
                       ? "hover:bg-green-700 transition-all px-5 duration-300 outline-2 outline-[#0fca83] cursor-pointer"
                       : "bg-red-500 cursor-not-allowed"
                   }`}
                disabled={car.status !== "available"}
              >
                {car.status === "available" ? "Book Now" : "Booked"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
