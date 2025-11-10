import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-[#0a1821] to-[#07141a] text-white overflow-hidden">
      {/* Starry Sky */}
      <svg
        aria-labelledby="Starry sky"
        className="absolute top-0 left-0 w-full h-full"
      >
        <title id="svgtitle2">Starry sky</title>
        <g className="all-stars fill-[#F6F5BC]">
          {/* Animated Stars */}
          {[...Array(50)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 500}
              r={Math.random() * 2 + 1}
              className={`animate-[blink_2s_infinite]`}
              style={{ animationDelay: `${Math.random() * 2}s` }}
            />
          ))}
        </g>
        {/* Floating Moon */}
        <g className="moon fill-[#D1D5D6] opacity-80 animate-float">
          <circle cx="400" cy="100" r="60" />
        </g>
      </svg>

      {/* Error Content */}
      <div className="absolute top-1/4 right-20 text-right max-w-sm space-y-6">
        <svg aria-labelledby="404" className="w-[350px] h-[140px] mx-auto">
          <title id="svgtitle1">404 Page not found</title>
          <text
            x="0"
            y="100"
            fill="#FFF"
            fontSize="120"
            fontWeight="700"
            className="animate-pulse"
          >
            404
          </text>
        </svg>

        <h1 className="text-4xl font-bold tracking-wide">Page Not Found</h1>

        {/* Links */}
        <Link
          to={"/"}
          className=" hover:scale-105 transition-all duration-400 btn bg-[#09764c] text-white "
        >
          Back To Home
        </Link>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.2; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }

          .animate-blinkblink {
            animation: blink 2s infinite;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ErrorPage;
