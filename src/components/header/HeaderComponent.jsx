import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaGear, FaPlus } from "react-icons/fa6";
import { useLogoutMutation } from "../../redux/slices/userApiSlice";
import { logout } from "../../redux/slices/authSlice";
import logo from "../../assets/logo.png";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.error("Failed to logout:", err);
    }
  };

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
            <button
              className="post-snippet-button"
              onClick={() => navigate("/code-snippet/new")}
            >
              <FaPlus className="plus-icon" />
              Post Snippet
            </button>
            <span>Hi, {userInfo.name}</span>
            <FaGear className="settings-icon" />
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
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
