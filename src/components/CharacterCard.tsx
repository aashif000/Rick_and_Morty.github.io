interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  location: {
    name: string;
  };
}

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-space border-2 border-neon-purple rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-neon-green"
    >
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{character.name}</h3>
        <p className="text-gray-300">Status: {character.status}</p>
        <p className="text-gray-300">Species: {character.species}</p>
        <p className="text-gray-300 truncate">Location: {character.location.name}</p>
      </div>
    </div>
  );
};

export default CharacterCard;