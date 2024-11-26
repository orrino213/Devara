import devaralogo from "../../assets/devaralogo.png";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

function MyNavbar() {
  return (
    <nav className="navbar">
      <div className="category">
        <a href="/">
          <img src={devaralogo} alt="logo" className="navlogo" />
        </a>
      </div>
      <div className="category">
        <a href="/">Home</a>
      </div>
      <div className="category">
        <a href="/about">About</a>
      </div>
      <div className="category">
        <a href="/contact">Contact</a>
      </div>
      <div className="category">
        <a href="/mortgagecalculator">Mortgage Calculator</a>
      </div>
      <div className="category">
        <a
          href="https://www.facebook.com/devarasoftware"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
      <div className="category">
        <a
          href="https://www.instagram.com/orbel_the_loan_officer/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <div className="category">
        <a href="/shop">Shop</a>
      </div>
      <div className="category">
        <a href="/cart">
          <ShoppingCart size={32} />
        </a>
      </div>
    </nav>
  );
}

export default MyNavbar;
