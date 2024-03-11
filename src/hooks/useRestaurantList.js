import { useState, useEffect } from "react";
import { API_FETCH_SWIGGY_DATA } from "../config";
import { filterData } from "../utils/helper";

const useRestaurantList = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  return {
    allRestaurants,
    filteredRestaurants,
    isLoading,
    searchText,
    handleSearch,
    setSearchText,
  };
};

export default useRestaurantList;
