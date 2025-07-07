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
      <img
        className="devaralogo"
        src={devaralogo}
        alt="logo"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default Home;
