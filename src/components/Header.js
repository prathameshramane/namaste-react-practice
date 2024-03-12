import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex py-3 px-5 justify-between align-middle bg-slate-100 shadow-md">
      <div className="w-20">
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex items-center gap-3">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about-us"}>About us</Link>
        </li>
        <li>
          <Link to={"/contact-us"}>Contact us</Link>
        </li>
        {isLoggedIn ? (
          <Link>Log Out</Link>
        ) : (
          <Link to={"/login"}>Log In</Link>
        )}
      </ul>
    </div>
  );
};

export default Header;
