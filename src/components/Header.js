import { useState } from "react";

import logo from "../assets/logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="navbar">
      <div className="navlogo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navlinks">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Log In</button>
        )}
      </ul>
    </div>
  );
};

export default Header;
