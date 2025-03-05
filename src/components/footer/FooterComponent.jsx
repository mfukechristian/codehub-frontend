import React from "react";
import "./FooterComponent.css";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy;{" "}
        <a
          href="https://www.linkedin.com/in/christian-mfuke-kambulu/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Christian Mfuke
        </a>{" "}
        {currentYear}
      </p>
    </footer>
  );
};

export default FooterComponent;
