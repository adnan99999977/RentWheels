import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <ScrollToTop />

      <div>
        <Navbar />
      </div>

      <div className="flex-1">
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
