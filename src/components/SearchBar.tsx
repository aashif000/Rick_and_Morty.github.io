import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-xl mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search characters..."
        className="w-full pl-10 pr-4 py-3 bg-space border-2 border-neon-purple rounded-lg focus:outline-none focus:border-neon-green transition-colors"
      />
    </div>
  );
};

export default SearchBar;