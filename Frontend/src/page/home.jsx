import React , { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import FlyingPlane from "../component/FlyingPlane"
const LandingPage = () => {
  const navigate = useNavigate(); 
   const buttonRef = useRef(null);
  return (
    <div className="relative w-screen min-h-screen overflow-hidden text-white flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        {/* Large screen background */}
        <img
          src="/bg1.png"
          alt="Background"
          className="hidden md:block w-full object-cover object-center"
          draggable="false"
        />
        {/* Small screen background */}
        <img
          src="/bg5.png"
          alt="Mobile Background"
          className="block md:hidden w-full object-cover object-center"
          draggable="false"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center px-4 sm:px-8 md:px-24 text-center md:text-left">
        <TypeAnimation
          sequence={["SwiftWings'25", 2000, "", 800]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg mb-4"
        />

        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-yellow-400 mt-3 drop-shadow-md typing">
          Rule the Skies. Conquer the Ground.
        </h2>

        <p className="mt-4 sm:mt-6 max-w-full sm:max-w-xl md:max-w-2xl text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed mx-auto md:mx-0">
          Prepare for the ultimate RC fixed-wing drone showdown — precision flying,
          cutting-edge engineering, and adrenaline-packed aerial battles.
          Push the limits of innovation and claim your place among the legends.
        </p>

        {/* Parallelogram Register Button */}
        <div className="mt-6 sm:mt-8 flex justify-center md:justify-start">
          <button
              ref={buttonRef}
            onClick={() => navigate("/register")}
            className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold shadow-lg transform skew-x-12 hover:from-orange-600 hover:to-yellow-500 transition-transform hover:scale-105"
          >
            <span className="skew-x-[-12deg] text-sm sm:text-base md:text-lg">Register Now</span>
            <FaArrowRight className="skew-x-[-12deg] text-sm sm:text-base md:text-lg" />
          </button>
        </div>
      </div>


  {/* <FlyingPlane targetRef={buttonRef} /> */}


      {/* Footer */}
      <footer className="w-full bg-black/50 backdrop-blur-md py-6 mt-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-24 text-gray-200">
        {/* Contact / Socials */}
        <div className="flex items-center gap-6 mb-4 md:mb-0 justify-center md:justify-start">
          <a href="mailto:example@email.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={20} className="hover:text-yellow-400 transition-colors" />
          </a>
          <a href="https://www.instagram.com/drone_iot_club.mmmut?igsh=dzVtM25ueXRhaWE=" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className="hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/company/drone-iot-club-mmmut/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className="hover:text-blue-500 transition-colors" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm md:text-sm text-gray-300 text-center md:text-left">
          &copy; {new Date().getFullYear()} SwiftWings. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
