import  { useContext } from "react";
import { NavLink } from "react-router";
import {  AuthContext } from "../auth/AuthContext";
import { IoLogInOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGeAGmzS-ybJIKly7mgmnPLtuN-OqxO8FGw&s";

  const handleLogout = () => {
    logOut();
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold border-b-2 border-primary"
      : "hover:text-primary";

  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow "
          >
            <li>
              <NavLink to="/add-car" className={linkClass}>
                Add Car
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse-cars" className={linkClass}>
                Browse Cars
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-bookings" className={linkClass}>
                My Bookings
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-listings" className={linkClass}>
                My Listings
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="font-bold text-xl">
          RENT<span className="text-primary">WHELLS</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-car" className={linkClass}>
              Add Car
            </NavLink>
          </li>
          <li>
            <NavLink to="/browse-cars" className={linkClass}>
              Browse Cars
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-bookings" className={linkClass}>
              My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-listings" className={linkClass}>
              My Listings
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4 ">
        {!user ? (
          <NavLink
            to="/login"
            className="flex btn items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform"
          >
            {/* Login Icon */}
           <div>
            <IoLogInOutline size={20}/>

           </div>
            Log In
          </NavLink>
        ) : (
          <button
            onClick={handleLogout}
            className=" btn bg-red-400 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform flex items-center justify-center"
          >
            {/* Logout Icon */}
           <div>
            <CiLogout size={20} />

           </div>
            <p>Log Out</p>
          </button>
        )}

        {/* Profile Picture */}
        <div className="w-20 h-12 rounded-full overflow-hidden border-2 border-gray-200 shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
          <img
            src={user ? user.photoURL : url}
            alt="User profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
