import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header className="bg-[#0C1440] flex justify-between items-center px-12 py-2.5">
    <div className="left flex items-center">
        <img className="logo max-w-[120px]" src="src/assets/images/logo.png" alt="logo hotel Jhonny Walker" />
    </div>
    <div className="right flex gap-3 md:gap-8">
        
    <div className="svg-container cursor-pointer">
            <svg className="call-svg w-6.25 h-6.25 fill-none stroke-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
    </div>
        <div className="svg-container cursor-pointer">
            <svg className="profile-svg w-6.25 h-6.25 fill-none stroke-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </div>
            
    </div>
</header>

    );
};

export default Header;