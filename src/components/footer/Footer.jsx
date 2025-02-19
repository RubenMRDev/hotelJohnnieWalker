import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="hotel-name">&copy; {new Date().getFullYear()} Hotel Johnnie Walker</p>
        <a href="https://github.com/RubenMRDev/hotelJohnnieWalker" target="_blank">
          <img className="image" src="/public/github.png" alt="Github logo"></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
