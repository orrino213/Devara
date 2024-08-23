import AboutUs from "./AboutUs";
import devaralogo from "../assets/devaralogo.png";

function Home() {
  return (
    <div>
      <div className="title-container">
        <img src={devaralogo} alt="logo" className="devaralogo" />
      </div>
      <AboutUs id="about" />
    </div>
  );
}

export default Home;
