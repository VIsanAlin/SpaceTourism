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
    <div className="Technology ">
      <div>
        <Topbar />
      </div>
      <p className="flex gap-4 pl-52 font-[BarlowCondensed] text-[28px] tracking-[4px] text-white uppercase ">
        <b className="opacity-75 text-slate-500">03 </b>Space launch 101
      </p>
      <div className="flex text-white pl-52 mt-24">
        <div className="flex gap-4">
          <div className="grid grid-cols-1 ">
            <a
              onClick={() => handleLinkClick("Launch")}
              className={`flex justify-center items-center border border-white border-opacity-50 hover:border-opacity-100  w-20 h-20 rounded-full text-center font-[Bellefair] text-[32px] ${
                activeLink === "Launch" ? "bg-white text-black" : ""
              }`}
            >
              1
            </a>
            <a
              onClick={() => handleLinkClick("Spaceport")}
              className={`flex justify-center items-center border border-white border-opacity-50 hover:border-opacity-100  w-20 h-20  rounded-full text-center font-[Bellefair] text-[32px]${
                activeLink === "Spaceport" ? "bg-white text-black " : ""
              }`}
            >
              2
            </a>
            <a
              onClick={() => handleLinkClick("Capsule")}
              className={`flex justify-center items-center border border-white border-opacity-50 hover:border-opacity-100 w-20 h-20 rounded-full text-center font-[Bellefair] text-[32px] ${
                activeLink === "Capsule" ? "bg-white text-black" : ""
              }`}
            >
              3
            </a>
          </div>
          <div className="mx-24">
            <p className="font-[BarlowCondesed] text-[16px] tracking-[2.5px] text-secondaryColor uppercase">
              The terminology
            </p>
            <p className="font-[Bellefair] text-[56px] text-white uppercase">
              {data[activeLink].title}
            </p>
            <p className="font-[Barlow] text-[18px] text-secondaryColor w-1/2">
              {data[activeLink].description}
            </p>
          </div>
        </div>
        <img className="mb-24" src={data[activeLink].image} alt="" />
      </div>
    </div>
  );
};

export default Technology;
