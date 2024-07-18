import { Input } from "@/components/ui/input";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <Input
      type="text"
      placeholder="Search notes or #tags..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mb-4"
    />
  );
};

export default SearchBar;