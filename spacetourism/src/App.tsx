import React, { useEffect, useState } from "react";
import "./App.css";

// Components
import Topbar from "./components/Topbar";

const App: React.FC = () => {
  const [scaleFactor, setScaleFactor] = useState(1);
  const [scaleHeight, setScaleHeight] = useState(1);

  useEffect(() => {
    const calculateScaleFactor = () => {
      const viewportWidth = window.innerWidth;

      const viewportHeight = window.innerHeight;
      console.log(viewportWidth, viewportHeight);
      const scaleFactor = viewportWidth > 1440 ? viewportWidth / 1440 : 1;
      const scaleHeight = viewportHeight > 900 ? viewportHeight / 906 : 1;
      setScaleFactor(scaleFactor);
      setScaleHeight(scaleHeight);
    };
    calculateScaleFactor();
    window.addEventListener("resize", calculateScaleFactor);

    return () => {
      window.removeEventListener("resize", calculateScaleFactor);
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        transform: `scale(${scaleFactor}, ${scaleHeight}) `,
        transformOrigin: "top left",
      }}
    >
      <div>
        <Topbar />
        <div className="spaceexplore">
          <div className="spacetext">
            <p className="uppercase text-[28px] font-[BarlowCondensed] tracking-[4.75px]  text-secondaryColor">
              So, you want to travel to{" "}
            </p>
            <p className="uppercase text-[150px]  font-[Bellefair]">Space</p>
            <p className=" text-justify  text-[18px] font-[Barlow] text-secondaryColor">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className=" explorecircle">
            <p className="uppercase text-[32px] tracking-[2px] font-[Bellefair]">
              Explore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
