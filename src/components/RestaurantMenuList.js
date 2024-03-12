import { useState } from "react";
import expandLessIcon from "../assets/expand_less.svg";
import expandMoreIcon from "../assets/expand_more.svg";
import RestaurantItem from "./RestaurantItem";

const RestaurantMenuList = ({ menuCategory, defaultExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded ?? false);

  const handleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-2 border-2 rounded-lg my-2">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleExpansion}
      >
        <h1 className="text-lg font-semibold">
          {menuCategory?.title} ({menuCategory?.itemCards?.length})
        </h1>
        {isExpanded ? (
          <img src={expandLessIcon} />
        ) : (
          <img src={expandMoreIcon} />
        )}
      </div>
      {isExpanded && (
        <div>
          {menuCategory?.itemCards?.map((menuItem) => (
            <RestaurantItem
              item={menuItem?.card?.info}
              key={menuItem?.card?.info?.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenuList;
