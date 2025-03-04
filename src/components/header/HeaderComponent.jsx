import React from "react";
import { useSelector } from "react-redux";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-placeholder">LOGO</div>
      </div>
      <div className="header-right">
        {isAuthenticated ? (
          <div className="user-info">
            <span>Hi {user?.name}</span>
            <span className="settings-icon">⚙️</span>
          </div>
        ) : (
          <button className="login-button">Login</button>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
