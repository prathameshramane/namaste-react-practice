import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.4563596&lng=72.79246119999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await response.json();
    setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.slice(1, -2)
        ?.map((card) => card?.card?.card)
        ?.filter((menu) => menu?.itemCards?.length)
    );
    setIsLoading(false);
  }

  return { restaurantDetails, restaurantMenu, isLoading };
};

export default useRestaurant;
