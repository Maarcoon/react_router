import React from "react";

import { NavLink } from "./shared/NavLink";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <NavLink path="/about">
          <li>About</li>
        </NavLink>
        <NavLink path="/shop">
          <li>Shop</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
