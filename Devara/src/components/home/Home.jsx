import devaralogo from "../../assets/devaralogo.png";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="home-container">
      <div className="logo-container">
        <img
          src={devaralogo}
          alt="logo"
          className="devaralogo"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Home;
