import { useParams } from "react-router-dom";

import { IMG_CDN } from "../config";
import useRestaurant from "../hooks/useRestaurant";
import RestaurantMenuList from "./RestaurantMenuList";
import ShimmerRestaurantDetils from "./ShimmerRestaurantDetails";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurantDetails, restaurantMenu, isLoading } = useRestaurant(id);

  return isLoading ? (
    <ShimmerRestaurantDetils />
  ) : !restaurantDetails ? (
    <h1>Problem rendering restaurant details</h1>
  ) : (
    <div className="px-80 py-5">
      <div className="flex justify-between py-5">
        <div>
          <h1 className="font-bold text-lg">{restaurantDetails?.name}</h1>
          <p className="text-sm font-thin">
            {restaurantDetails?.cuisines.join(", ")}
          </p>
          <p className="text-sm font-thin">
            {restaurantDetails?.city},{" "}
            {restaurantDetails?.sla?.lastMileTravelString}
          </p>
        </div>
        <img
          className="w-20 h-20 rounded-full"
          src={IMG_CDN + restaurantDetails?.cloudinaryImageId}
        />
      </div>
      {restaurantMenu?.map(menu => <RestaurantMenuList menuCategory={menu} key={menu.title} />)}
    </div>
  );
};

export default RestaurantMenu;
