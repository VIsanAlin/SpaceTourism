import React, { useState } from "react";
import "./App.css";

// Images
import launchvehicle from "./assets/technology/image-launch-vehicle-portrait.jpg";
import spacecapsule from "./assets/technology/image-space-capsule-portrait.jpg";
import spaceport from "./assets/technology/image-spaceport-portrait.jpg";

// Components
import Topbar from "./components/Topbar";

const Technology: React.FC = () => {
  const [activeLink, setActiveLink] = useState("Launch");

  type Technology = {
    [key: string]: {
      title: string;

      description: string;
      image: string;
    };
  };

  const data: Technology = {
    Launch: {
      title: "Launch vehicle",
      description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle
      used to carry a payload from Earth's surface to space, usually to
      Earth orbit or beyond. Our WEB-X carrier rocket is the most
      powerful in operation. Standing 150 metres tall, it's quite an
      awe-inspiring sight on the launch pad!`,
      image: launchvehicle,
    },
    Spaceport: {
      title: "Spaceport",
      description: `A spaceport or cosmodrome is a site for launching (or receiving) 
      spacecraft, by analogy to the seaport for ships or airport for aircraft.
      Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
      image: spacecapsule,
    },
    Capsule: {
      title: "Space capsule",
      description: `A space capsule is an often-crewed spacecraft that uses a blunt-body
      reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend 
      your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
      image: spaceport,
    },
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="Technology">
      <div>
        <Topbar />
      </div>
      <h1 className="text-white">03 Space launch 101</h1>
      <div className="flex text-white">
        <div className="flex gap-4">
          <div className="grid grid-cols-1 ">
            <a
              onClick={() => handleLinkClick("Launch")}
              className={`border border-white  w-12 h-12 rounded-full text-center ${
                activeLink === "Launch" ? "bg-white text-black" : ""
              }`}
            >
              1
            </a>
            <a
              onClick={() => handleLinkClick("Spaceport")}
              className={`border border-white  w-12 h-12  rounded-full text-center ${
                activeLink === "Spaceport" ? "bg-white text-black" : ""
              }`}
            >
              2
            </a>
            <a
              onClick={() => handleLinkClick("Capsule")}
              className={`border border-white  w-12 h-12  rounded-full text-center ${
                activeLink === "Capsule" ? "bg-white text-black" : ""
              }`}
            >
              3
            </a>
          </div>
          <div>
            <p>The terminology</p>
            <h1>{data[activeLink].title}</h1>
            <p>{data[activeLink].description}</p>
          </div>
        </div>
        <img src={data[activeLink].image} alt="" />
      </div>
    </div>
  );
};

export default Technology;
