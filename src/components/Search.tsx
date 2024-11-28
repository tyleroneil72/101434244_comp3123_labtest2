import { ChangeEvent } from "react";

interface SearchProps {
  search: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: () => void;
}

const Search = ({ search, handleSearch, handleSearchSubmit }: SearchProps) => {
  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='Search Pokémon by name or ID'
        value={search}
        onChange={handleSearch}
        className='search-input'
      />
      <button onClick={handleSearchSubmit} className='search-button'>
        Search
      </button>
    </div>
  );
};

export default Search;
