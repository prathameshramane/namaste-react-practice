import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import { API_FETCH_SWIGGY_DATA } from "../config";
import Shimmer from "./Shimmer";

const filterData = (searchText, restaurants) =>
  restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllRestaurants();
  }, []);

  const handleSearch = () => {
    setFilteredRestaurants(filterData(searchText, allRestaurants));
  };

  async function getAllRestaurants() {
    setIsLoading(true);
    const response = await fetch(API_FETCH_SWIGGY_DATA);
    const json = await response.json();
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setIsLoading(false);
  }

  if (!allRestaurants || !filteredRestaurants)
    return <h1>Problem loading restaurants...</h1>;

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
        {isLoading ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
