import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function DroneDelivery() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.2); // Adjust scroll effect
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-black via-black/70 via-50% to-yellow-50/60 flex flex-col md:flex-row items-center justify-between px-6 py-8 relative overflow-hidden">
      
      {/* Left: Text */}
      <div className="flex flex-col justify-center md:w-1/2 z-10 animate-fade-in-up">
        <div className="mb-2 tracking-wide text-orange-300 font-semibold text-4xl">
          Drone & IoT club
        </div>

        <div className="font-extrabold text-5xl md:text-7xl leading-tight text-white mb-4 h-[100px]">
          <TypeAnimation
            sequence={[
              "Innovation.",
              1200,
              "Explore.",
              1200,
              "Intelligence.",
              1200,
              "Technology.",
              1200,
              "Autonomation.",
              1200,
              "Inspiration.",
              1200,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <div className="text-lg md:text-xl text-neutral-200 max-w-xl mb-7">
         We Provide a hands on experince on IoT , Drone and AI/ML 
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold rounded-full px-8 py-3 w-max shadow-lg transition duration-300">
          Explore Events
        </button>
      </div>

      {/* Right: Drone image */}
      <div className="flex items-center justify-center relative mt-10 md:mt-0 md:mr-[150px]">
        <img
          src="/b3.png"
          alt="Drone Delivery"
          className="w-[900px] max-w-full drop-shadow-2xl animate-fade-in-left-bottom"
          style={{
            zIndex: 2,
            transform: `translateY(${offset}px) rotate(${offset * 0.05}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>
    </div>
  );
}
