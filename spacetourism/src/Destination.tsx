import React, { useState } from "react";
import "./App.css";

// Images
import moon from "./assets/destination/imagemoon.png";
import mars from "./assets/destination/image-mars.png";
import europa from "./assets/destination/image-europa.png";
import titan from "./assets/destination/image-titan.png";

// Components
import Topbar from "./components/Topbar";

const Destination: React.FC = () => {
  const [activeLink, setActiveLink] = useState("moon");

  type DestinationData = {
    [key: string]: {
      title: string;
      image: string;
      description: string;
      avgdist: string;
      traveltime: string;
    };
  };
  const data: DestinationData = {
    moon: {
      title: "Moon",
      image: moon,
      description: `See our planet as you've never seen it before. A perfect relaxing
trip away to help regain perspective and come back refreshed. While
you're there, take in some history by visiting the Luna 2 an Apollo
11 landign sites.`,
      avgdist: "384.400km",
      traveltime: "3Days",
    },
    mars: {
      title: "Mars",
      image: mars,
      description: `Don't forget to pack your hiking boots. 
      You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system.
       It's two and a half times the size of Everest!`,
      avgdist: "225 MIL. KM",
      traveltime: "9 MONTHS",
    },
    europa: {
      title: "Europa",
      image: europa,
      description: `The smallest of the four Galilean moons orbiting Jupiter,
      Europa is a winter lover's dream. With an icy surface. It's perfect for a bit
      of ice skating, curling, hockey or simple relaxation in your snug wintery cabin.`,
      avgdist: "628 MIL. KM",
      traveltime: "3 YEARS",
    },
    titan: {
      title: "Titan",
      image: titan,
      description: `The only moon known to have a dense atmosphere other than Earth.
      Titan is a home away from home(just a few hundred degrees colder!). As a bonus,
      you get striking views of the Rings of Saturn.`,
      avgdist: "1.6 BIL. KM",
      traveltime: "7 YEARS",
    },
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="Destination">
      <div>
        <Topbar />
      </div>
      <h1 className="pl-52 py-12 text-2xl font-[BarlowCondensed] text-white uppercase">
        01 Pick your Destination
      </h1>
      <div className="flex items-center justify-evenly w-3/4">
        <img className=" py-12" src={data[activeLink].image} alt="" />
        <div>
          <div className="flex justify-around w-1/2 p-6 font-[BarlowCondensed] text-white uppercase">
            <a
              onClick={() => handleLinkClick("moon")}
              className={activeLink === "moon" ? "active" : ""}
            >
              Moon
            </a>
            <a
              onClick={() => handleLinkClick("mars")}
              className={activeLink === "mars" ? "active" : ""}
            >
              Mars
            </a>
            <a
              onClick={() => handleLinkClick("europa")}
              className={activeLink === "europa" ? "active" : ""}
            >
              Europa
            </a>
            <a
              onClick={() => handleLinkClick("titan")}
              className={activeLink === "titan" ? "active" : ""}
            >
              Titan
            </a>
          </div>
          <h1 className=" text-6xl p-6 font-[BarlowCondensed] text-white uppercase">
            {data[activeLink].title}
          </h1>
          <p className=" p-6 font-[BarlowCondensed] text-white uppercase">
            {" "}
            {data[activeLink].description}{" "}
          </p>
          <hr />
          <div className="flex justify-evenly p-6">
            <div>
              <h2 className=" font-[BarlowCondensed] text-white uppercase">
                Avg. Distance
              </h2>
              <p className=" font-[BarlowCondensed] text-white uppercase">
                {data[activeLink].avgdist}
              </p>
            </div>
            <div>
              <h2 className=" font-[BarlowCondensed] text-white uppercase">
                Est. Travel Time
              </h2>
              <p className=" font-[BarlowCondensed] text-white uppercase">
                {data[activeLink].traveltime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
