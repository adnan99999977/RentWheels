import React, { useState } from "react";
import { Home, Home2 } from "lucide-react";

const HoverIcon = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="p-4 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <Home2 size={28} className="text-green-500" /> // filled icon
      ) : (
        <Home size={28} className="text-gray-400" /> // outline icon
      )}
    </div>
  );
};

export default HoverIcon;
