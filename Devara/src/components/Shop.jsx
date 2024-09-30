import { products } from "./Products";
import { product } from "./Product";

function Shop() {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>Devara Shop</h1>
      </div>
      <div className="products">
        {""}
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
