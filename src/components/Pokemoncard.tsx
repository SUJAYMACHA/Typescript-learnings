export interface PokemonCardProps {
  name: string;
  type: string;
  hp: number;
  attacks: {
    name: string;
    damage: number;
  }[];

  weakness: {
    type: string;
    multiplier: number;
  };
  resistance: {
    type: string;
    reduction: number;
  };
  image: string;
  onCardClick?: () => void;
}

export const PokemonCard = (props: PokemonCardProps) => {
  return (
    <div
      className="max-w-sm border cursor-pointer   bg-gradient-to-br from-yellow-200 to-yellow-400 hover:scale-105 transition-transform duration-300 ease-in-out bg-white shadow-md rounded-lg ring-4 ring-yellow-100 hover:ring-yellow-300 ring-opacity-50 overflow-hidden"
      onClick={props.onCardClick}
    >
      <img className="w-full h-56 object-cover" src={props.image} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 font-semibold text-base mb-2">
          Type: {props.type}
        </p>
        <p className="text-gray-700 font-semibold text-base mb-2">
          HP: {props.hp}
        </p>
        <p className="text-gray-700 font-semibold text-base mb-2">
          Attacks:
          {props.attacks.map((attack, index) => (
            <span key={index} className="block">
              {attack.name}: {attack.damage}
            </span>
          ))}
        </p>
        <p className="text-gray-700 font-semibold text-base mb-2">
          Weakness: {props.weakness.type} (Multiplier:{" "}
          {props.weakness.multiplier})
        </p>
        <p className="text-gray-700 font-semibold text-base mb-2">
          Resistance: {props.resistance.type} (Multiplier:{" "}
          {props.resistance.reduction})
        </p>
      </div>
    </div>
  );
};
