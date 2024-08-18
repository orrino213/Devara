import MyCarousel from "./carousel/Carousel";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <div>
      <div className="title-container">
        <h1 className="title">DEVARA</h1>
      </div>
      <MyCarousel />
      <AboutUs id="about" />
    </div>
  );
}

export default Home;
