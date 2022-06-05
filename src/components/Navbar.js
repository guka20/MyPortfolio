import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isResponsive,setIsResponsive] = useState(false);
  return (
    <nav>
      <div className={isResponsive?"navbar open":"navbar"}>
        <div className="logo">
          <Link to="/">My Portfolio</Link>
        </div>
        <div className={isResponsive?"locations open":"locations"}>
          <div>
            <NavLink to="/about">About</NavLink>
          </div>
          <div>
            <NavLink to="/projects">Projects</NavLink>
          </div>
          <div>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
        <div className="menu-btn" onClick={()=>setIsResponsive(!isResponsive)}>
          <div className={isResponsive?"menu-btn_burger open":"menu-btn_burger"}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
