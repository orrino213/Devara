import { products } from "./Products";
import { ShopContext } from "./ShopContext";
import { useContext } from "react";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
    </div>
  );
};
