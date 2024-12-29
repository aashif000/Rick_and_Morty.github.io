import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, Filter } from "lucide-react";
import CharacterCard from "../components/CharacterCard";
import CharacterModal from "../components/CharacterModal";
import SearchBar from "../components/SearchBar";
import FilterSection from "../components/FilterSection";

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

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [filters, setFilters] = useState({
    status: "",
    gender: "",
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["characters", searchTerm, page, filters],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: page.toString(),
        ...(searchTerm && { name: searchTerm }),
        ...(filters.status && { status: filters.status }),
        ...(filters.gender && { gender: filters.gender }),
      });
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?${params}`
      );
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
  });

  console.log("Search term:", searchTerm);
  console.log("Current page:", page);
  console.log("Active filters:", filters);

  return (
    <div className="min-h-screen bg-space text-white p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-8 text-neon-green animate-glow">
          Rick and Morty Explorer
        </h1>
        
        <div className="mb-8">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <FilterSection filters={filters} setFilters={setFilters} />
        </div>

        {isLoading ? (
          <div className="flex justify-center">
            <div className="w-16 h-16 border-4 border-neon-green rounded-full animate-portal-spin" />
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">Error: Something went wrong</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data?.results?.map((character: Character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  onClick={() => setSelectedCharacter(character)}
                />
              ))}
            </div>

            {data?.info?.pages > 1 && (
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 bg-neon-purple rounded hover:bg-opacity-80 disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="px-4 py-2">
                  Page {page} of {data.info.pages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(data.info.pages, p + 1))}
                  disabled={page === data.info.pages}
                  className="px-4 py-2 bg-neon-purple rounded hover:bg-opacity-80 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {selectedCharacter && (
          <CharacterModal
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Index;