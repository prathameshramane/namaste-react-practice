import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { RESTAURANTS } from "../../restaurants";

const filterData = (searchText) =>
  RESTAURANTS.filter((restaurant) => restaurant.info.name.includes(searchText));

const Body = () => {
  const [restaurants, setRestaurants] = useState(RESTAURANTS);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    setRestaurants(filterData(searchText));
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type here..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <input type="button" onClick={handleSearch} value="Search" />
      </div>
      <div className="container">
        {restaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
