;


import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function GlassTabsNavbar() {
  const location = useLocation();
  const [clickedTab, setClickedTab] = useState(null);

  const tabs = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Verify Certificate", path: "/verify" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleClick = (name) => {
    setClickedTab(name);
    setTimeout(() => setClickedTab(null), 300); // glow lasts 300ms
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 backdrop-blur-md">
      <div className="flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/drone_iot.png"
            alt="Drone IoT Club"
            className="w-16 h-16 object-contain drop-shadow-md"
          />
          <span className="text-white text-lg font-semibold tracking-wide">
            Drone & IoT Club
          </span>
        </div>

        {/* Tabs */}
        <div className="flex gap-4">
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            const isClicked = clickedTab === tab.name;
            return (
              <Link
                to={tab.path}
                key={tab.name}
                onClick={() => handleClick(tab.name)}
                className={`px-5 py-2 rounded-full border border-gray-300 backdrop-blur-lg transition-all duration-300
                  ${
                    isActive
                      ? "bg-orange-400 text-black font-semibold shadow-[0_0_15px_rgba(253,224,71,0.7)] ring-2 ring-orange-500"
                      : "bg-white/20 text-gray-900 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_12px_rgba(253,224,71,0.5)]"
                  }
                  ${isClicked ? "shadow-[0_0_20px_bg-orange-500] scale-105" : ""}
                  hover:scale-110`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
