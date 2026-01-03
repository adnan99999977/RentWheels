import { useContext, useState, useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../auth/AuthContext";
import { IoLogInOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import {
  Home as HomeOutline,
  PlusCircle as PlusOutline,
  Calendar as CalendarOutline,
  Info as InfoOutline,
  Phone as PhoneOutline,
  FileText as FileOutline,
  Grid as DashboardOutline,
} from "lucide-react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [drop, setDrop] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdown = () => setDrop(!drop);
  const handleMobileMenu = () => setMobileMenu(!mobileMenu);
  const handleLogout = () => logOut();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDrop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const linkClass = ({ isActive }) =>
    isActive
      ? "relative font-semibold text-[#09764c] after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-[#09764c]"
      : "relative text-gray-300 hover:text-[#09764c] transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-[#09764c] after:transition-all after:duration-500 after:ease-out hover:after:left-0 hover:after:w-full";

  const navItems = [
    { name: "Home", path: "/", icon: HomeOutline },
    { name: "Add Car", path: "/add-car", icon: PlusOutline },
    { name: "Browse Cars", path: "/browse-cars", icon: CalendarOutline },
    { name: "About", path: "/about", icon: InfoOutline },
    { name: "Contact", path: "/contact", icon: PhoneOutline },
    { name: "Privacy", path: "/privacy", icon: FileOutline },
    ...(user ? [{ name: "Dashboard", path: "/dashboard", icon: DashboardOutline }] : []),
  ];

  return (
    <nav className="fixed top-0 z-100 w-full bg-black/30 backdrop-blur-2xl border-b border-gray-100/20 shadow-sm">
      <div className="flex justify-between items-center px-2 py-4 lg:px-5">
        {/* Logo & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <div className="md:hidden cursor-pointer" onClick={handleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <NavLink className="font-bold title text-lg lg:text-2xl flex items-center gap-1 ">
            <span className="text-gray-300">RENT</span>
            <span className="text-[#09764c]">WHEELS</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden text-[11px] lg:flex  gap-5">
          {navItems.map((item) => (
            <li key={item.name} className="flex items-center gap-1">
              <NavLink to={item.path} className={linkClass}>
                <item.icon size={13} className="inline mr-1 mb-1" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Buttons & Profile */}
        <div className="flex items-center gap-4 relative" ref={dropdownRef}>
          {!user ? (
            <NavLink
              to="/login"
              className="relative lg:flex px-2 lg:px-5 py-2 border-2 border-[#09764c] text-[#09764c] font-semibold rounded-full overflow-hidden group transition-all duration-500 ease-out"
            >
              <span className="absolute inset-0 bg-[#09764c] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative text-[12px] z-10 flex items-center gap-2 group-hover:text-white">
                <IoLogInOutline size={20} />
                Log In
              </span>
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              className="relative hidden lg:flex items-center gap-2 px-4 py-2 border-2 border-red-400 text-red-400 font-semibold rounded-full overflow-hidden group transition-all duration-500 ease-out"
            >
              <span className="absolute inset-0 bg-red-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative text-[12px] z-10 flex items-center gap-2 group-hover:text-white">
                <CiLogout size={20} />
                Log Out
              </span>
            </button>
          )}

          {/* Profile Picture */}
          {user && (
            <div
              onClick={handleDropdown}
              className="lg:w-12 w-12 h-12 mr-3 md:mr-0 rounded-full overflow-hidden border-2 border-gray-200 shadow-md hover:shadow-lg cursor-pointer transition-transform hover:scale-105"
              title={user && user.displayName}
            >
              {user?.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User profile"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
          )}

          {/* Profile Dropdown */}
          {drop && (
            <div className="absolute top-16 right-0 w-48 bg-gray-500 backdrop-blur-lg border border-gray-100/20 rounded-lg shadow-md divide-y divide-gray-200 z-50">
              <div className="px-4 py-3">
                <span className="block text-sm text-black">
                  {user?.displayName || "User Name"}
                </span>
                <span className="block text-[10px] text-black truncate">
                  {user?.email || "user@email.com"}
                </span>
              </div>
              <ul className="py-2">
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                  >
                    <CiLogout size={20} />
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <ul className="lg:hidden bg-black/90 backdrop-blur-lg border-t border-gray-100/20 flex flex-col gap-2 px-4 py-3">
          {navItems.map((item) => (
            <li key={item.name} className="flex items-center gap-1">
              <NavLink
                to={item.path}
                className={linkClass}
                onClick={handleMobileMenu}
              >
                <item.icon size={16} className="inline mr-1" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
