import { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

import { IMG_CDN } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../hooks/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurantDetails, isLoading } = useRestaurant(id);

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
