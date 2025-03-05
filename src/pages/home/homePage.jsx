import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // If user is logged in, redirect to code snippets page
  if (userInfo) {
    return <Navigate to="/code-snippet" replace />;
  }

  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome to CodeHub</h1>
        <p>Share and discover code snippets with developers around the world</p>
        <button
          onClick={() => navigate("/login")}
          className="get-started-button"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
