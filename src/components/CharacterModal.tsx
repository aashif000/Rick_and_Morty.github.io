interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
}

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
}

const CharacterModal = ({ character, onClose }: CharacterModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-space border-2 border-neon-green rounded-lg max-w-lg w-full overflow-hidden">
        <div className="relative">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-neon-purple p-2 rounded-full hover:bg-opacity-80"
          >
            ✕
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400">Status</p>
              <p className="font-semibold">{character.status}</p>
            </div>
            <div>
              <p className="text-gray-400">Species</p>
              <p className="font-semibold">{character.species}</p>
            </div>
            <div>
              <p className="text-gray-400">Gender</p>
              <p className="font-semibold">{character.gender}</p>
            </div>
            <div>
              <p className="text-gray-400">Location</p>
              <p className="font-semibold">{character.location.name}</p>
            </div>
            {character.type && (
              <div className="col-span-2">
                <p className="text-gray-400">Type</p>
                <p className="font-semibold">{character.type}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;