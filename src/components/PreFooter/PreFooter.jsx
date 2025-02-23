import React from 'react';

function PreFooter() {
  return (
    <div
      className="pre-footer bg-cover bg-center flex flex-col justify-center items-center h-80 text-white text-center relative z-2"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dd5hetwb8/image/upload/v1739955280/pre-footer-bg_da5lam.png")',
      }}
    >
      <div className="container-title">
        <h1
          className="text-[clamp(20px,5vw,60px)] font-medium m-0 p-4 leading-tight z-[99]"
          style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)' }}
        >
          <span className="block">JOHNNIE WALKER</span>
          <span className="block">HOTEL</span>
        </h1>
      </div>
      <div className="container-conditions flex justify-center flex-nowrap mt-8 mb-4 gap-8">
        <a
          href=""
          className="no-underline font-small text-white text-[clamp(12px,2vw,30px)] text-shadow-md"
        >
          Condiciones de reserva
        </a>
        <a
          href=""
          className="no-underline font-medium text-white text-[clamp(12px,2vw,30px)] text-shadow-md"
        >
          Aviso Legal
        </a>
        <a
          href=""
          className="no-underline font-medium text-white text-[clamp(12px,2vw,30px)] text-shadow-md"
        >
          Política de uso
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0C1440]/100 to-transparent"></div>
    </div>
  );
}

export default PreFooter;
