import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Toaster, toast } from "sonner";

const AddCar = () => {
  const { user } = useContext(AuthContext);

  const handleAddCar = (e) => {
    e.preventDefault();

    const time = new Date().toLocaleString("en-BD", {
      timeZone: "Asia/Dhaka",
    });

    const newCar = {
      carName: e.target.carname.value,
      price: e.target.price.value,
      location: e.target.location.value,
      image: e.target.image.value,
      providerName: user.displayName,
      providerEmail: user.email,
      description: e.target.description.value,
      category: e.target.category.value,
      rentPerDay: e.target.price.value,
      status: "available",
      createdAt: time,
    };

    fetch("https://rent-wheels-server.vercel.app/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(newCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Car added:", data);
        toast.success("Car Added Successfully!", {
          description: "Your car is now live on the marketplace.",
          position: "top-center",
          duration: 3000,
          style: {
            background: "#09964c",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          },
        });
        e.target.reset();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add car!", {
          description: "Please try again later.",
          position: "top-center",
          duration: 2500,
          style: {
            background: "rgba(180, 20, 20, 0.8)",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          },
        });
      });
  };

  return (
    <div className="page-section relative flex justify-center items-center">
      <Toaster richColors position="top-center" />

      {/* Background shapes */}
      <div className="absolute top-62 -right-82 w-[800px] h-[420px] bg-gradient-to-br animate-pulse from-[#09964c]/20 to-[#09964c]/5 rounded-full blur-2xl opacity-80"></div>
      <div className="absolute -top-24 -left-60 w-[600px] h-[680px] bg-gradient-to-tr animate-pulse from-[#939e9c]/20 to-[#939e9c]/5 rounded-[50%_20%_50%_20%] blur-2xl rotate-12"></div>
      <div className="absolute -bottom-1 -bottom-80 w-[420px] h-[500px] bg-gradient-to-l from-[#939e9c]/15 to-[#09964c]/5 rounded-[30%_60%_40%_70%] blur-2xl rotate-6"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[200px] bg-gradient-to-l from-[#939e9c]/15 to-[#09964c]/5 rounded-full blur-xl rotate-6"></div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-center text-white mb-10 tracking-wide">
          Add a New Car
        </h2>

        <form
          onSubmit={handleAddCar}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-2 font-medium">
              Car Name
            </label>
            <input
              type="text"
              required
              name="carname"
              placeholder="e.g. Toyota Corolla"
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09764c] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-2 font-medium">
              Category
            </label>
            <select
              name="category"
              required
              className="px-4 py-2 rounded-lg bg-black border border-white/20 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#09764c] transition-all duration-300"
              defaultValue=""
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Luxury">Luxury</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-2 font-medium">
              Rent Price (per day)
            </label>
            <input
              type="text"
              name="price"
              required
              placeholder="$120"
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09764c] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-2 font-medium">
              Location
            </label>
            <input
              required
              type="text"
              name="location"
              placeholder="e.g. Dhaka, Bangladesh"
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09764c] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-gray-300 mb-2 font-medium">
              Image URL
            </label>
            <input
              required
              type="text"
              name="image"
              placeholder="https://example.com/car.jpg"
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09764c] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-gray-300 mb-2 font-medium">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Write a short description..."
              rows="3"
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#09764c] transition-all duration-300 resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-gray-300 mb-2 font-medium">
              Provider Name
            </label>
            <input
              type="text"
              value={user?.displayName}
              readOnly
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-gray-400 cursor-not-allowed"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-gray-300 mb-2 font-medium">
              Provider Email
            </label>
            <input
              type="text"
              value={user?.email}
              readOnly
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-gray-400 cursor-not-allowed"
            />
          </div>

          <div className="lg:mx-auto text-center lg:pl-70 lg:w-[500px] mt-10">
            <button
              type="submit"
              className="relative lg:flex items-center gap-2 px-7 py-2 border-2 border-[#09764c] text-[#09764c] font-semibold rounded-full overflow-hidden group transition-all duration-500 ease-out"
            >
              <span className="absolute inset-0 bg-[#09764c] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                Add Car
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
