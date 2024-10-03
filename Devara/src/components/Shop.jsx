import { products } from "./Products";
import { Product } from "./Product";
import "./shop.css";

function Shop() {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>Devara Shop</h1>
      </div>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
