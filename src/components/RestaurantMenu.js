import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { IMG_CDN } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.4563596&lng=72.79246119999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await response.json();
    setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info);
    setIsLoading(false);
  }

  return isLoading ? (
    <Shimmer />
  ) : !restaurantDetails ? (
    <h1>Problem rendering restaurant details</h1>
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-image">
        <img src={IMG_CDN + restaurantDetails?.cloudinaryImageId} />
      </div>
      <div className="restaurant-details">
        <h1>{restaurantDetails?.name}</h1>
        <h2>
          {restaurantDetails?.city} - {restaurantDetails?.areaName}
        </h2>
        <h3>{restaurantDetails?.costForTwoMessage}</h3>
        <h3>{restaurantDetails?.avgRating} Stars</h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
