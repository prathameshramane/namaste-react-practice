import { IMG_CDN } from "../config";

const RestaurantItem = ({ item }) => {
  console.log(item);
  return (
    <div className="flex gap-4 p-5">
      <div className="w-11/12">
        {item?.isVeg === 1 ? (
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        ) : (
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        )}
        <h1 className="font-semibold">{item?.name}</h1>
        <p>₹{(item?.defaultPrice ?? item?.price ?? 100) / 100} </p>
        <p className="font-thin text-xs">{item?.description}</p>
      </div>
      <div className="relative">
        <img className="h-28 rounded-lg" src={IMG_CDN + item?.imageId} />
        <button className="font-semibold border-2 border-green-300 px-2 py-1 rounded-lg absolute top-0 right-0 bg-green-400 text-white">
          Add +
        </button>
      </div>
    </div>
  );
};

export default RestaurantItem;
