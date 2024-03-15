import { useSelector } from "react-redux";
import RestaurantItem from "./RestaurantItem";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <div className="mx-48 my-8">
      <h1 className="text-4xl font-semibold">Cart</h1>
      {items.length <= 0 ? (
        <h1>Please add items to your cart!</h1>
      ) : (
        items?.map((menuItem) => (
          <RestaurantItem item={menuItem} key={menuItem.id} deleteItem />
        ))
      )}
    </div>
  );
};

export default Cart;
