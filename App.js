import React from "react";
import ReactDOM from "react-dom/client";

import logo from "./assets/Portfolio Logo Circle.png";

const containerUsingCreateElement = React.createElement(
  "div",
  { id: "container", className: "title" },
  [
    React.createElement("h1", {}, "Heading from CE"),
    React.createElement("h2", {}, "Heading 2 from CE"),
    React.createElement("h3", {}, "Heading 3 from CE"),
  ]
);

const containerUsingJSX = (
  <div id="container" className="title">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
);

const TitleComponent = () => <h1>Namaste Everyone!</h1>;

const ContainerComponent = () => (
  <div id="container" className="title">
    <TitleComponent />
    <h1 key="1">Heading 1 from FC</h1>
    <h2 key="2">Heading 2 from FC</h2>
    <h3 key="3">Heading 3 from FC</h3>
  </div>
);

const HeaderLink = ({ name }) => (
  <li>
    <a href="#">{name}</a>
  </li>
);

const SearchBar = () => (
  <div className="search-bar-container">
    <input type="text" placeholder="Search" />
  </div>
)

const NavBarComponent = () => (
  <div className="navbar">
    <div className="navlogo">
      <img src={logo} alt="logo" />
    </div>
    <SearchBar />
    <ul className="navlinks">
      <HeaderLink name="Home" />
      <HeaderLink name="About Us" />
      <HeaderLink name="Contact Us" />
    </ul>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NavBarComponent />);
