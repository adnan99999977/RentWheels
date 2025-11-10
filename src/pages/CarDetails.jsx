import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";

const CarDetails = () => {
  const car = useLoaderData();
  const navigate = useNavigate();

  const handleBooking = () => {
    fetch(`http://localhost:5000/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(car),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/my-bookings");
      });

    fetch(`http://localhost:5000/cars/${car._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Unavailable" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated status:", data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="page-section">
      {/* Page background */}
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
        {/* Main card */}
        <div className="relative w-full max-w-5xl bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden group transition-transform duration-500 hover:scale-[1.02]">
          {/* Dynamic background shapes */}
          <div className="absolute -top-16 -left-16 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-green-500/20 to-green-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-8 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-gray-400/10 to-gray-200/5 rounded-full blur-3xl animate-spin-slow"></div>

          {/* Card content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-10 relative z-10">
            {/* Car image */}
            <div className="flex items-center justify-center">
              <img
                src={car.image}
                alt={car.carName}
                className="w-full max-w-md rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Car info */}
            <div className="flex flex-col justify-between text-white">
              <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-wide text-[#09764c] drop-shadow-lg">
                {car.carName}
              </h1>
              <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
                {car.description}
              </p>

              {/* Key details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-gray-200 text-md font-medium">
                <div>
                  <span className="font-semibold text-white">Category:</span>{" "}
                  {car.category}
                </div>
                <div>
                  <span className="font-semibold text-white">
                    Rent per Day:
                  </span>{" "}
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

              {/* Provider & date */}
              <div className="text-gray-400 text-sm mb-2">
                Added by: <span className="text-white">{car.providerName}</span>{" "}
                ({car.providerEmail})
              </div>
              <div className="text-gray-400 text-sm mb-6">
                Added on: <span className="text-white">{car.createdAt}</span>
              </div>

              {/* CTA button */}
              <Link
                onClick={handleBooking}
                to={`/my-bookings`}
                className="flex  items-center justify-center"
              >
                <button
                  className={`relative z-10 flex items-center justify-center px-4 py-2 rounded-full font-semibold text-white
                   ${
                     car.status === "available"
                       ? " hover:bg-green-700 transition-all px-5 duration-300 outline-2 outline-[#0fca83]  cursor-pointer"
                       : "bg-red-500 cursor-not-allowed"
                   }`}
                  disabled={car.status !== "available"}
                >
                  {car.status === "available" ? "Book Now" : "Booked"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
