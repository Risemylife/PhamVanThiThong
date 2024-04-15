import React from "react";
import "../style/logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <svg viewBox="0 0 1500 100" width="200" height="20">
        <text
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle"
          className="text-animation"
        >
          Swap token
        </text>
      </svg>
    </div>
  );
};

export default Logo;
