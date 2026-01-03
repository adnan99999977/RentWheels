import { Link, Outlet, useLocation } from "react-router";
import { Home, PlusCircle, Calendar, User, Menu, X } from "lucide-react";
import { useState } from "react";

const DashboardLayout = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", icon: <Home size={20} />, path: "/dashboard" },
    {
      name: "Add Car",
      icon: <PlusCircle size={20} />,
      path: "/add-car",
    },
    {
      name: "Bookings",
      icon: <Calendar size={20} />,
      path: "/my-bookings",
    },
    {
      name: "My Listing",
      icon: <Calendar size={20} />,
      path: "/my-listings",
    },
    { name: "Profile", icon: <User size={20} />, path: "/dashboard/profile" },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={` bg-[#000000e5] text-white flex flex-col h-full fixed z-50 md:static md:w-64 transition-transform backdrop-blur-3xl duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <Link
          to={"/"}
          className="p-5 text-2xl font-bold text-center border-b border-white/20"
        >
          <span className="text-gray-300 mr-2 ">RENT</span>
          <span className="text-[#09764c]">WHEELS</span>
        </Link>
        <nav className="flex-1 mt-6">
          <ul className="flex flex-col gap-2 px-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-3 p-3 rounded transition-colors ${
                    location.pathname === link.path
                      ? "bg-[#0b8c59] font-semibold"
                      : "hover:bg-[#0b8c59]"
                  }`}
                  onClick={() => setSidebarOpen(false)} // Close sidebar on mobile after click
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex bg-black flex-col">
        {/* Top Navbar */}
        <header className="h-16 md:h-[73px] md:border-b-1 md:border-l-1 border-gray-600 flex items-center md:justify-between gap-3 px-6  w-full bg-white/10  backdrop-blur-2xl border-b  border-black-100/20 shadow-sm">
          {/* Hamburger button */}
          <button
            className="md:hidden text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="text-xl  font-semibold text-gray-100 md:text-gray-100">
            Dashboard
          </div>

          <div className="flex items-center gap-4">
            {/* Placeholder for user info / notifications */}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 pt-10 overflow-y-auto relative bg-white/10 backdrop-blur-md">
          <Outlet />

          {/* Water-drop Gradient Backgrounds */}
          <div className="hidden md:block">
             <div className="absolute top-[15%] right-[-20%] w-[80vw] max-w-[800px] h-[40vh] max-h-[420px] bg-gradient-to-br from-[#09964c]/20 to-[#09964c]/5 rounded-full blur-2xl  opacity-80 z-0"></div>

          <div className="absolute top-[-10%] left-[-15%] w-[60vw] max-w-[600px] h-[80vh] max-h-[680px] bg-gradient-to-tr from-[#939e9c]/20 to-[#939e9c]/5 rounded-[50%_20%_50%_20%] blur-2xl rotate-12  z-0"></div>

          <div className="absolute bottom-[-40%] right-[-5%] w-[42vw] max-w-[420px] h-[50vh] max-h-[500px] bg-gradient-to-l from-[#939e9c]/15 to-[#09964c]/5 rounded-[30%_60%_40%_70%] blur-2xl rotate-6  z-0"></div>

          <div className="absolute bottom-[5%] left-[5%] w-[30vw] max-w-[300px] h-[20vh] max-h-[200px] bg-gradient-to-l from-[#939e9c]/15 to-[#09964c]/5 rounded-full blur-xl rotate-6  z-0"></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
