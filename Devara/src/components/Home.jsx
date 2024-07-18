import MyCarousel from "./carousel/Carousel";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <div>
      <div className="title-container">
        <h1 className="title">ORBEL THE LOAN OFFICER</h1>
        <h5 className="mission">
          My mission is to empower individuals & families with personalized
          mortgage solutions because homeownership is the catalyst for freedom,
          stability and wealth!
        </h5>
      </div>
      <MyCarousel />
      <AboutUs id="about" />
    </div>
  );
}

export default Home;
