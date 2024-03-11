import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurantList from "../hooks/useRestaurantList";

const Body = () => {
  const {
    allRestaurants,
    filteredRestaurants,
    isLoading,
    searchText,
    handleSearch,
    setSearchText,
  } = useRestaurantList();

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
