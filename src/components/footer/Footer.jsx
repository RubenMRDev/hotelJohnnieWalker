import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="hotel-name">&copy; Hotel Johnnie Walker</p>
        <a href="https://github.com/RubenMRDev/hotelJohnnieWalker" target="_blank">
          <img className="image" src="src/assets/images/github.png" alt="Github logo"></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
