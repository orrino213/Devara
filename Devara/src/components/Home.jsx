import devaralogo from "../assets/devaralogo.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/aboutus");
  };

  return (
    <div>
      <div className="title-container">
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
