import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="content">
        <h1>Welcome to CodeHub</h1>
        <p>Your place to save and share code snippets</p>
        <button
          className="get-started-button"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
