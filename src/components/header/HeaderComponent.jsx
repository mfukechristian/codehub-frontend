import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-left">
        <img
          src={logo}
          alt="CodeHub Logo"
          className="logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="header-right">
        {userInfo ? (
          <div className="user-info">
            <span>Hi, {userInfo.name}</span>
            <FaGear className="settings-icon" />
          </div>
        ) : (
          <button className="login-button" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
