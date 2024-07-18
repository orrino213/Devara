import orbelHeadshot from "../assets/orbelHeadshot.jpg";

function AboutUs() {
  return (
    <div className="about-container">
      <img className="about-image" src={orbelHeadshot} alt="orbleheadshot" />
      <div className="about-text">
        <h1>About Orbel Sarkisian</h1>
        <p className="p">
          Hi! My name is Orbel Sarkisian and I am a mortgage advisor. I take
          great pride in my ability to not only find the best suited mortgage
          solutions for my clients but to also deliver the best suited options
          in an organized and easy to understand manner. Sometimes this means
          providing screen recording videos and other times it is over a zoom
          meeting. My goal is to empower my clients with the right information
          so that they can clearly see the best option for them
        </p>
        <p>NMLS - 1606317</p>
        <p>DRE - 02102368</p>
      </div>
    </div>
  );
}

export default AboutUs;
