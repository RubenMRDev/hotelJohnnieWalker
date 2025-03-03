import React from 'react';

function PreFooter() {
  return (
    <div
      className="pre-footer bg-cover bg-center flex flex-col justify-center items-center mt-6 h-80 text-white text-center relative z-2"
      role="banner"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dd5hetwb8/image/upload/v1739955280/pre-footer-bg_da5lam.png")',
      }}
    >
      <div className="container-title">
        <h1
          data-testid="prefooter-title"
          className="text-[clamp(20px,5vw,60px)] font-medium m-0 p-4 leading-tight z-[99]"
          style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)' }}
        >
          <span className="block">JOHNNIE WALKER</span>
          <span className="block">HOTEL</span>
        </h1>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0C1440]/100 to-transparent"></div>
    </div>
  );
}

export default PreFooter;
