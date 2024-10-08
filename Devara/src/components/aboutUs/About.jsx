import orrinHeadshot from "../../assets/orrinHeadshot.jpg";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <img className="about-image" src={orrinHeadshot} alt="orbleheadshot" />
      <div className="about-text">
        <h1>About Devara</h1>
        <p className="p">
          At Devara, we specialize in crafting custom software solutions that
          empower businesses to thrive in the digital age. From dynamic websites
          to robust online applications, our team is dedicated to delivering
          high-quality, scalable, and user-friendly products tailored to your
          unique needs. With a focus on innovation and excellence, we aim to
          transform your ideas into reality, ensuring your business stands out
          in a competitive landscape.
        </p>
        <h1>About Orrin Ohanian - Lead Developer</h1>
        <p className="p">
          Orrin Ohanian, our Lead Developer, brings a wealth of experience and
          expertise in full-stack software development. With a strong background
          in React, SQL, and C#, Orrin has successfully led numerous projects,
          delivering top-tier solutions that meet both functional and aesthetic
          demands. His commitment to quality, coupled with a deep understanding
          of both front-end and back-end technologies, ensures that every
          project at Devara is executed with precision and excellence. Orrin is
          passionate about staying at the forefront of technology, constantly
          honing his skills to provide the best possible outcomes for our
          clients.
        </p>
      </div>
    </div>
  );
}

export default About;
