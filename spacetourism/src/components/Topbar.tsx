import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { ReactComponent as Logo } from "./../assets/shared/logo.svg";

const Topbar: React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div>
      {" "}
      <div className="Topbar">
        <Logo className="px-16 m-4 w-auto h-auto "></Logo>
        <hr className="border border-[#979797]/[.25] w-1/3 overflow-visible absolute z-10" />
        <div className="Navbar z-0">
          <a
            className={` px-4 py-8 text-white uppercase ${
              activeLink === "/"
                ? "border-b-2 font-[BarlowCondensed]"
                : "font-[BarlowCondensed] hover:border-b-2 hover:border-slate-500"
            }`}
            href="/"
            onClick={() => handleLinkClick("/")}
          >
            {" "}
            <b>00</b> Home{" "}
          </a>
          <a
            className={` px-4 py-8 text-white uppercase ${
              activeLink === "/Destination"
                ? "border-b-2 font-[BarlowCondensed]"
                : "font-[BarlowCondensed] hover:border-b-2 hover:border-slate-500"
            }`}
            href="/Destination"
            onClick={() => handleLinkClick("/Destination")}
          >
            {" "}
            <b>01</b> Destination{" "}
          </a>
          <a
            className={` px-4 py-8 text-white uppercase ${
              activeLink === "/Crew"
                ? "border-b-2 font-[BarlowCondensed]"
                : "font-[BarlowCondensed] hover:border-b-2 hover:border-slate-500"
            }`}
            href="/Crew"
            onClick={() => handleLinkClick("/Crew")}
          >
            {" "}
            <b>02</b> Crew{" "}
          </a>
          <a
            className={` px-4 py-8 text-white uppercase ${
              activeLink === "/Technology"
                ? "border-b-2 font-[BarlowCondensed]"
                : "font-[BarlowCondensed] hover:border-b-2 hover:border-slate-500"
            }`}
            href="/Technology"
            onClick={() => handleLinkClick("/Technology")}
          >
            {" "}
            <b>03</b> Technology{" "}
          </a>
        </div>
      </div>{" "}
    </div>
  );
};

export default Topbar;
