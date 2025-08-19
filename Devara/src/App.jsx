import "./reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import ContactUs from "./components/contact/Contact";
import MyNavbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import MortgageCalculator from "./components/mortgageCalculator/MortgageCalculator";
import { Shop } from "./components/shop/Shop";
import { Cart } from "./components/shop/Cart";
import { ShopContextProvider } from "./components/shop/ShopContext";

function App() {
  return (
    <div className="body">
      <div>
        <ShopContextProvider>
          <MyNavbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route
                path="/mortgagecalculator"
                element={<MortgageCalculator />}
              />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </ShopContextProvider>
      </div>
    </div>
  );
}

export default App;
