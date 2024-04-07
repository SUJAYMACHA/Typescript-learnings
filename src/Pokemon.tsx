import React from "react";
import { PokemonCard, PokemonCardProps } from "./components/Pokemoncard";
import { data } from "./utils/data";
import { Link } from "react-router-dom";

const Pokemon: React.FC = () => {
  const handleCardClick = (card: PokemonCardProps) => {
    console.log("Card clicked", card);
  };
  return (
    <div className="min-h-screen border-2  flex flex-col ">
        <div className="flex  flex-row justify-between">
      <button className="bg-blue-400 text-white rounded-lg pl-4 pr-4 p-2"><Link to="/">BACK</Link></button>
      <div className="text-3xl font-bold mt-4">POKEMON CARDS</div>
      <button className="bg-blue-400 text-white rounded-lg pl-4 pr-4 p-2"><Link to="/computer">ComputerCards</Link></button>
      </div>
    
    
      <div className="flex mt-10 p-10  gap-10 flex-wrap">
        {data.map((i) => (
          <PokemonCard onCardClick={() => handleCardClick(i)} {...i} />
        ))}
      </div>
      
  

    </div>
  );
};

export default Pokemon;
