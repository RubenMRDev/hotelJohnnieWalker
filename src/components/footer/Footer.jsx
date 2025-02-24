import React from "react";

function Footer() {
  return (
    <footer className="w-full text-white bg-[#0c1440] text-center py-2.5 mt-auto">
      <div className="flex justify-between items-center px-9">
        <p className="hotel-name">&copy; {new Date().getFullYear()} Hotel Johnnie Walker</p>
        <a href="https://github.com/RubenMRDev/hotelJohnnieWalker" target="_blank">
          <img className="w-9" src="/github.png" alt="Github logo"></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
