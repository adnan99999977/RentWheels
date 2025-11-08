import  { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import {  AuthContext } from "../auth/AuthContext";

const Login = () => {
  const { signInViaGoogle, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleGoogle = () => {
    signInViaGoogle()
      .then((result) => {
        navigate(from);
      })
      .catch(console.error);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => navigate(from))
      .catch(console.error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 space-y-3 border border-white/30 backdrop-blur-sm">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500">
          Login to access your Smart Deals account
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="text-center text-gray-500 font-medium">or</div>

        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center py-2 bg-white text-gray-800 font-semibold rounded-xl border border-gray-300 shadow-md hover:shadow-lg transition transform hover:scale-105"
        >
          <svg
            aria-label="Google logo"
            width="20"
            height="20"
            viewBox="0 0 512 512"
            className="mr-2"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
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

        <p className="text-center text-gray-500">
          New here?{" "}
          <NavLink
            to="/register"
            className="text-indigo-600 font-bold hover:underline"
          >
            Create Account
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
