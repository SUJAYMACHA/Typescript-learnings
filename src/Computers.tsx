import React from "react";
import { Link } from "react-router-dom";
import { ComputerData } from "./utils/ComputerData";
import { ComputerCard, CProps } from "./components/ComputerCard";

const Computers: React.FC = () => {
  const handleCardClick = (card: CProps) => {
    console.log("Card clicked", card);
  };
 
  return (
    <div className="min-h-screen border-2  flex flex-col ">
      <div className="flex  flex-row justify-between">
        <button className="bg-blue-400 text-white rounded-lg pl-4 pr-4 p-2">
          <Link to="/">BACK</Link>
        </button>
        <div className="text-3xl font-bold mt-4">COMPUTER CARDS</div>
        <button className="bg-blue-400 text-white rounded-lg pl-4 pr-4 p-2">
          <Link to="/plots">Plots Cards</Link>
        </button>
      </div>

      <div className="flex mt-10 p-10  gap-10 flex-wrap">
        {ComputerData.map((computerData) => (
          <ComputerCard
           
            onCardclick={() => handleCardClick(computerData.computer)}
            {...computerData.computer}
          />
        ))}
      </div>
    </div>
  );
};

export default Computers;
