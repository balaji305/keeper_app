import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <footer>
        <p className="footer__cc">Copyright ⓒ {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
