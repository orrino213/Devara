import devaralogo from "../../assets/devaralogo.png";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

function MyNavbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <a href="/">
          <img src={devaralogo} alt="logo" className="navlogo" />
        </a>
      </div>
      <div>
        <a href="/">Home</a>
      </div>
      <div>
        <a href="/about">About</a>
      </div>
      <div>
        <a href="/contact">Contact</a>
      </div>
      <div>
        <a href="/mortgagecalculator">Mortgage Calculator</a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/devarasoftware"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/orbel_the_loan_officer/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <div>
        <a href="/shop">Shop</a>
      </div>
      <div>
        <a href="/cart">
          <ShoppingCart size={32} />
        </a>
      </div>
    </nav>
  );
}

export default MyNavbar;
