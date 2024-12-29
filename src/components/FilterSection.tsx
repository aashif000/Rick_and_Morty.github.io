interface FilterSectionProps {
  filters: {
    status: string;
    gender: string;
  };
  setFilters: (filters: { status: string; gender: string }) => void;
}

const FilterSection = ({ filters, setFilters }: FilterSectionProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      <select
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        className="px-4 py-2 bg-space border-2 border-neon-purple rounded-lg focus:outline-none focus:border-neon-green"
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        value={filters.gender}
        onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
        className="px-4 py-2 bg-space border-2 border-neon-purple rounded-lg focus:outline-none focus:border-neon-green"
      >
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default FilterSection;