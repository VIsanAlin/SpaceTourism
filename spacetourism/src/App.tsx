import React from "react";
import "./App.css";

// Components
import Topbar from "./components/Topbar";

const App: React.FC = () => {
  return (
    <div className="App">
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
