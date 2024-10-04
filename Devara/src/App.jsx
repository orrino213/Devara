import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import MyNavbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import MortgageCalculator from "./components/MortgageCalculator";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import { ShopContextProvider } from "./components/ShopContext";

function App() {
  return (
    <div className="body">
      <div>
        <ShopContextProvider>
          <MyNavbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
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
