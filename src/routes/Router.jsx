import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCar from "../pages/AddCar";
import BrowseCars from "../pages/BrowseCars";
import MyBookings from "../pages/MyBookings";
import MyListings from "../pages/MyListings";
import CarDetails from "../pages/CarDetails";
import PrivateRoute from "./PrivetRoute";

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
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "/browse-cars",
        element: <BrowseCars />,
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-listings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },
      {
        path: "/car-details/:id",
        element: <CarDetails/>,
        loader: ({params})=>fetch(`http://localhost:5000/cars/${params.id}`)
      },
    ],
  },
]);
