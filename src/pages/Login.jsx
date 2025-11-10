import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../auth/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Toaster, toast } from "sonner";

const Login = () => {
  const { signInViaGoogle, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleGoogle = () => {
    signInViaGoogle()
      .then(() => {
        toast.success("Logged in with Google!", {
          description: "Welcome back!",
          position: "top-center",
          duration: 2500,
          style: {
            background: "#09764c",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
          },
        });
        setTimeout(() => navigate(from), 2500);
      })
      .catch((err) => {
        console.error(err);
        toast.error("❌ Google login failed!", {
          description: "Try again later.",
          position: "top-center",
          duration: 2500,
          style: {
            background: "#a82323",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
          },
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setLoginError("Password must be at least 6 characters long.");
      return;
    } else {
      setLoginError("");
    }

    signInUser(email, password)
      .then(() => {
        toast.success("Login successful!", {
          description: "Welcome back!",
          position: "top-center",
          duration: 2500,
          style: {
            background: "#09764c",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
          },
        });
        setTimeout(() => navigate(from), 2500);
      })
      .catch((err) => {
        console.error(err);
        setLoginError("Invalid email or password.");
        toast.error("❌ Login failed!", {
          description: "Check your credentials.",
          position: "top-center",
          duration: 2500,
          style: {
            background: "#a82323",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
          },
        });
      });
  };

  return (
    <div className="page-section min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-black to-gray-800 p-6">
      <Toaster richColors position="top-center" />
      <div className="max-w-md w-full bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10 space-y-6 transform transition-all duration-500 hover:scale-[1.02]">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-[#09764c] drop-shadow-lg animate-fade-in-down">
          Welcome
        </h1>
        <p className="text-center text-gray-300 animate-fade-in-down animate-delay-200">
          Login to access your Rent Wheels account
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-4 animate-fade-in-up animate-delay-400"
        >
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#09764c] focus:border-transparent transition shadow-sm hover:shadow-md"
            required
          />

          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#09764c] focus:border-transparent transition shadow-sm hover:shadow-md"
              required
            />
            <span
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 z-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {loginError && <p className="text-red-500 text-sm">{loginError}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#09764c] via-[#022f22] to-[#0cb87d] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500"
          >
            Login
          </button>
        </form>

        <div className="text-center text-gray-400 font-medium animate-fade-in-up animate-delay-600">
          or
        </div>

        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center py-3 bg-white/90 text-gray-800 font-semibold rounded-xl border border-white/30 shadow-md hover:shadow-xl transition transform hover:scale-105 animate-fade-in-up animate-delay-800"
        >
          <svg
            aria-label="Google logo"
            width="30"
            height="30"
            viewBox="0 0 512 512"
            className="mr-2"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#e7e7e7"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <p className="text-center text-gray-400 animate-fade-in-up animate-delay-1000">
          New here?{" "}
          <NavLink
            to="/register"
            className="text-[#09764c] font-bold hover:underline"
          >
            Create Account
          </NavLink>
        </p>
      </div>

      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease forwards; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-400 { animation-delay: 0.4s; }
        .animate-delay-600 { animation-delay: 0.6s; }
        .animate-delay-800 { animation-delay: 0.8s; }
        .animate-delay-1000 { animation-delay: 1s; }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease forwards; }
      `}</style>
    </div>
  );
};

export default Login;
