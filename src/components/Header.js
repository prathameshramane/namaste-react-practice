import logo from "../assets/logo.png";

const Header = () => (
  <div className="navbar">
    <div className="navlogo">
      <img src={logo} alt="logo" />
    </div>
    <ul className="navlinks">
      <li>Home</li>
      <li>About us</li>
      <li>Contact us</li>
    </ul>
  </div>
);

export default Header;