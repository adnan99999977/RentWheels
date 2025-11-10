import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import Swal from "sweetalert2";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/cars?ProviderEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setListings(data))
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#09764c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cars/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire("Deleted!", data.message, "success");
              setListings((prev) => prev.filter((car) => car._id !== id));
            } else {
              Swal.fire("Error!", data.message, "error");
            }
          });
      }
    });
  };

  const handleUpdateOpen = (car) => setSelectedCar(car);

  const handleSubmit = (e) => {
    e.preventDefault();

    const modalData = {
      carName: e.target.carName.value,
      description: e.target.description.value,
      category: e.target.category.value,
      rentPerDay: e.target.rentPerDay.value,
      location: e.target.location.value,
      image: e.target.imageUrl.value,
      provider: user?.email,
    };

    fetch(`http://localhost:5000/cars/${selectedCar._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(modalData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setListings((prev) =>
            prev.map((car) =>
              car._id === selectedCar._id ? { ...car, ...modalData } : car
            )
          );

          Swal.fire("Updated!", "Your listing has been updated.", "success");
        } else {
          Swal.fire("Error!", "Update failed!", "error");
        }
      });
    setSelectedCar(null);
  };

  return (
    <div className="page-section min-h-screen p-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-[#09764c] text-center tracking-tight drop-shadow-lg">
        My Listings
      </h1>

      {listings.length === 0 ? (
        <p className="text-center text-gray-300 text-xl mt-10 animate-fade-in">
          You have no listings yet.
        </p>
      ) : (
        <div className="max-w-6xl mx-auto space-y-6">
          {listings.map((listing, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 p-6 sm:p-8 hover:scale-[1.02]"
            >
              {/* Car Image & Name */}
              <div className="flex items-center gap-5 sm:gap-6 flex-1">
                <img
                  src={listing.image}
                  alt={listing.carName}
                  className="w-32 h-20 sm:w-36 sm:h-24 object-cover rounded-xl border border-white/10 shadow-md"
                />
                <div className="flex flex-col">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#09764c] drop-shadow-md">
                    {listing.carName}
                  </h2>
                  <p className="text-gray-400 sm:text-sm mt-1">
                    Category:{" "}
                    <span className="text-white">{listing.category}</span>
                  </p>
                  <p className="text-gray-400 sm:text-sm mt-1">
                    Location:{" "}
                    <span className="text-white">{listing.location}</span>
                  </p>
                </div>
              </div>

              {/* Rent & Status */}
              <div className="flex flex-col items-end gap-2 sm:gap-3">
                <p className="text-gray-400 sm:text-sm">
                  Rent Price:{" "}
                  <span className="text-white font-semibold">
                    ${listing.rentPerDay}
                  </span>
                </p>

                <span
                  className={`px-3 py-1 rounded-full font-semibold text-sm ${
                    listing.status === "available"
                      ? "bg-green-500/30 text-green-400"
                      : "bg-red-500/30 text-red-400"
                  }`}
                >
                  {listing.status}
                </span>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleUpdateOpen(listing)}
                    className="px-5 py-2 bg-[#09764c] hover:bg-green-700 rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-green-400/50"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(listing._id)}
                    className="px-5 py-2 bg-red-600 hover:bg-red-500 rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-red-400/50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedCar && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedCar(null)}
          ></div>
          <div className="relative bg-gray-900 p-6 rounded-2xl max-w-4xl w-full flex flex-col space-y-3 z-50 shadow-2xl">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
              onClick={() => setSelectedCar(null)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-[#09764c] text-center drop-shadow-md">
              Update {selectedCar.carName}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="carName"
                defaultValue={selectedCar.carName}
                placeholder="Car Name"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="provider"
                defaultValue={user?.email}
                readOnly
                className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-300 border border-gray-600"
              />
              <select
                name="category"
                defaultValue={selectedCar.category}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-600"
              >
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Luxury">Luxury</option>
                <option value="Electric">Electric</option>
              </select>
              <input
                type="text"
                name="rentPerDay"
                defaultValue={selectedCar.rentPerDay}
                placeholder="Rent Price"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="location"
                defaultValue={selectedCar.location}
                placeholder="Location"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="imageUrl"
                defaultValue={selectedCar.imageUrl}
                placeholder="Image URL"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="description"
                defaultValue={selectedCar.description}
                placeholder="Description"
                className="col-span-2 py-4 px-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="mt-3 col-span-2 w-full px-4 py-2 bg-[#09764c] hover:bg-green-700 rounded-full font-semibold text-white shadow-md hover:shadow-green-400/50 transition-all duration-300"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyListings;
