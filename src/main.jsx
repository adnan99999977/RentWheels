import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Router";
import AuthProvider from "./auth/AuthProvider";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {/* Router context first */}
      <RouterProvider router={router}>
        {/* ScrollToTop must be inside Router context */}
        <ScrollToTop />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>
);
