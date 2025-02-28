import React from "react";

const Header = () => {
return (
    <header className="bg-[#0C1440] flex justify-between items-center px-12 py-2.5 top-0 left-0 w-full">
        <div className="left flex items-center">
            <a href="/">
            <img
                className="logo max-w-[120px]"
                src="https://res.cloudinary.com/dd5hetwb8/image/upload/logo_fqorec.png"
                alt="logo hotel Jhonny Walker"
            />
            </a>
        </div>
        <div className="right flex gap-3 md:gap-8">
            
            <div className="svg-container cursor-pointer">
                <a href="/loginregister">
                <svg
                    className="profile-svg w-6.25 h-6.25 fill-none stroke-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                </svg>
                </a>
            </div>
        </div>
    </header>
);
};

export default Header;
