import { IMG_CDN } from "../config";

const RestaurantCard = ({ name, cloudinaryImageId, avgRating, cuisines }) => (
  <div className="card">
    <div className="cover-img">
      <img src={IMG_CDN + cloudinaryImageId} alt="restaurant-img" />
    </div>
    <div>
      <h2>{name}</h2>
      <p>{avgRating} Stars</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  </div>
);

export default RestaurantCard;
