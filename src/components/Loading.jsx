import React from "react";
import { SyncLoader } from "react-spinners"; // react-spinners import

const Loading = ({ size = 10, color = "#09764c" }) => {
  return (
    <div className="fixed inset-0 flex pt-17 justify-center items-center bg-gradient-to-br from-gray-700 via-black to-gray-800 backdrop-blur-sm z-50">
      <SyncLoader  size={size} color={color} />
    </div>
  );
};

export default Loading;
