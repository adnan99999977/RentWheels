import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCar from "../pages/AddCar";
import BrowseCars from "../pages/BrowseCars";
import MyBookings from "../pages/MyBookings";
import MyListings from "../pages/MyListings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-car",
        element: <AddCar />,
      },
      {
        path: "/browse-cars",
        element: <BrowseCars />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/my-listings",
        element: <MyListings />,
      },
    ],
  },
]);
