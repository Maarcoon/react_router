import React from "react";
import { Link } from "react-router-dom";

function NavLink({ path, children }) {
  const navStyle = {
    color: "white"
  };

  return (
    <Link style={navStyle} to={path}>
      {children}
    </Link>
  );
}

export { NavLink };
