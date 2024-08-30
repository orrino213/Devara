import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import MyNavbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import MortgageCalculator from "./components/MortgageCalculator";

function App() {
  return (
    <div className="body">
      <div>
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
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
