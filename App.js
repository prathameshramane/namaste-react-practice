import React from "react";
import ReactDOM from "react-dom/client";

import logo from "./assets/logo.png";
import { RESTAURANTS } from "./restaurants";

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

const Footer = () => <h1>Footer</h1>;

const RestaurantCard = ({ name, cloudinaryImageId, avgRating, cuisines }) => (
  <div className="card">
    <div className="cover-img">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="restaurant-img"
      />
    </div>
    <div>
      <h2>{name}</h2>
      <p>{avgRating} Stars</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  </div>
);

const Body = () => (
  <div className="container">
    {RESTAURANTS.map((restaurant) => (
      <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
    ))}
  </div>
);

const AppLayout = () => (
  <>
    <Header /> <Body /> <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
