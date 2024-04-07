import React from "react";
import { PlotsCard, PlotsCardProps } from "./components/PlotsCard";
import { plotsdata } from "./utils/plotsdata";
import { Link } from "react-router-dom";

const Plots: React.FC = () => {
  const handleCardClick = (card: PlotsCardProps) => {
    console.log("Card clicked", card);
  };
  return (
    <div className="min-h-screen border-2  flex flex-col ">
      <div className="flex  flex-row justify-between">
        <button className="bg-blue-400 text-white rounded-lg pl-4 pr-4 p-2">
          <Link to="/">BACK</Link>
        </button>
        <div className="text-3xl font-bold mt-4">PLOTS CARDS</div>
        <button className="bg-blue-400 text-white rounded-lg pl-4 pr-4 p-2">
          <Link to="/computer">ComputerCards</Link>
        </button>
      </div>

      <div className="flex mt-10 p-10 cursor-pointer  gap-10 flex-wrap">
        {plotsdata.map((plot) => (
          <PlotsCard {...plot}
          oncardclick={() => handleCardClick(plot)} />
        ))}
      </div>
    </div>
  );
};

export default Plots;
