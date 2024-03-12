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
    <div className="mx-10 my-5">
      <div className="my-3">
        <input
          className="px-4 py-1 border-2 rounded-lg"
          type="text"
          placeholder="Type here..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <input type="button" onClick={handleSearch} value="Search" className="bg-gray-500 text-white px-3 py-1 rounded mx-2" />
      </div>
      <div className="flex flex-wrap gap-5 py-5">
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
    </div>
  );
};

export default Body;
