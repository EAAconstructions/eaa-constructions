import { useState } from "react";
import logo from "../assets/logo.png"

export function Navbar() {
    const [hiddenNavbar, setHiddenNavbar] = useState(false)


    return (
        <div className="bg-amber-400 absolute top-0 w-full z-100">
            <div className="px-4 flex justify-between items-center">
                <button 
                    onClick={() => setHiddenNavbar(() => !hiddenNavbar)} 
                    className="flex lg:hidden cursor-pointer rounded-4xl hover:bg-gray-400 px-3 py-2 font-medium"
                >
                    ☰
                </button>
                
                <img src={logo} alt="EAA Constructions" className="w-14 sm:w-24 bg-customWhite my-1 p-1"/>
                
                <div className="hidden lg:flex gap-32 font-medium text-2xl">
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact Us</a>
                </div>

                <a href="#contact">
                    <button 
                        className="bg-customWhite text-xl px-4 py-2 rounded-lg hover:opacity-80 cursor-pointer">
                        Get Quote
                    </button>
                </a>
            
            </div>
                {hiddenNavbar && 
                    <div className="flex flex-col lg:hidden gap-8 text-sm font-medium align-center text-center py-4">
                            <a href="#" onClick={() => setHiddenNavbar(() => !hiddenNavbar)}>Home</a>
                            <a href="#services" onClick={() => setHiddenNavbar(() => !hiddenNavbar)}>Services</a>
                            <a href="#about" onClick={() => setHiddenNavbar(() => !hiddenNavbar)}>About</a>
                            <a href="#contact" onClick={() => setHiddenNavbar(() => !hiddenNavbar)}>Contact</a>
                    </div>
                }
            </div>
    );
};