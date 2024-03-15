import { useContext } from "react";
import { IMG_CDN } from "../config";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ name, cloudinaryImageId, avgRating, cuisines }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-80 h-80 border border-gray-300 rounded shadow-md p-3">
      <div className="h-48 overflow-hidden mr-auto">
        <img src={IMG_CDN + cloudinaryImageId} alt="restaurant-img" />
      </div>
      <div>
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="font-thin">{avgRating} Stars</p>
        <p className="text-xs">{cuisines.join(", ")}</p>
        <p className="text-xs">
          {user.name} - {user.email}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
