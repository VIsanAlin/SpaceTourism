import React, { useState } from "react";
import "./App.css";

// Images
import anoushehansari from "./assets/crew/image-anousheh-ansari.png";
import douglas from "./assets/crew/image-douglas-hurley.png";
import mark from "./assets/crew/image-mark-shuttleworth.png";
import victor from "./assets/crew/image-victor-glover.png";

// Components
import Topbar from "./components/Topbar";

const Crew: React.FC = () => {
  const [activeLink, setActiveLink] = useState("Douglas");

  type CrewData = {
    [key: string]: {
      title: string;
      name: string;
      description: string;
      image: string;
    };
  };

  const data: CrewData = {
    Anousheh: {
      title: "Flight Engineer",
      name: "Anousheh Ansari",
      description: `Anoushes Ansari is an Iranian American enegineer and co-founder of
      Prodea Systems. Ansari was the fourth self-funded space tourist,
      the first self-funded woman to fly to the ISS, and the first
      Iranian in space.`,
      image: anoushehansari,
    },
    Victor: {
      title: "Pilot",
      name: "Victor Glover",
      description: `Pilot on the first operational flight of the SpaceX Crew Dragon to
      the International Space Station. Glover is a commander in the U.S. Navy where he pilots an 
      F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.`,
      image: victor,
    },
    Mark: {
      title: "Mission specialist",
      name: "Mark Shuttleworth",
      description: `Mark Richard Shuttleworth is the founder and CEO of Canonical, 
      the company behind the Linux-based Ubuntu operating system. 
      Shuttleworth became the first South African to travel to space as a space tourist.`,
      image: mark,
    },
    Douglas: {
      title: "Commander",
      name: "Douglas Hurley",
      description: `Douglas Gerald Hurley is an American engineer, 
      former Marine Corps pilot and former NASA astronaut. 
      He launched into space for the third time as commander of Crew Dragon Demo-2.`,
      image: douglas,
    },
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="Crew ">
      <div>
        <Topbar />
      </div>
      <div className="text-white">
        <p className="flex gap-4 pl-52 font-[BarlowCondensed] text-[28px] tracking-[4px] ">
          <b className="opacity-75 text-slate-500">02 </b>Meet your crew
        </p>
        <div className="flex space-x-36 pl-52">
          <div className="w-1/2">
            <p className="font-[Bellefair] text-[32px] opacity-50 mt-24 uppercase">
              {data[activeLink].title}
            </p>
            <p className="font-[Bellefair] text-[56px] uppercase">
              {data[activeLink].name}
            </p>
            <p className="font-[Barlow] text-[18px] text-secondaryColor w-[450px]">
              {data[activeLink].description}
            </p>
            <div className="flex  w-1/2 mt-24">
              <a
                onClick={() => handleLinkClick("Douglas")}
                className={`inline-block w-4 h-4 bg-gray-500 rounded-full ${
                  activeLink === "Douglas"
                    ? "bg-white"
                    : "bg-gray-500 hover:border-b-2 hover:border-slate-500"
                }`}
              ></a>
              <a
                onClick={() => handleLinkClick("Mark")}
                className={`inline-block w-4 h-4 bg-gray-500 rounded-full ml-8 ${
                  activeLink === "Mark"
                    ? "bg-white"
                    : "bg-gray-500 hover:border-b-2 hover:border-slate-500"
                }`}
              ></a>
              <a
                onClick={() => handleLinkClick("Victor")}
                className={`inline-block w-4 h-4 bg-gray-500 rounded-full ml-8 ${
                  activeLink === "Victor"
                    ? "bg-white"
                    : "bg-gray-500 hover:border-b-2 hover:border-slate-500"
                }`}
              ></a>
              <a
                onClick={() => handleLinkClick("Anousheh")}
                className={`inline-block w-4 h-4 bg-gray-500 rounded-full ml-8 ${
                  activeLink === "Anousheh"
                    ? "bg-white"
                    : "bg-gray-500 hover:border-b-2 hover:border-slate-500"
                }`}
              ></a>
            </div>
          </div>
          <img src={data[activeLink].image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
