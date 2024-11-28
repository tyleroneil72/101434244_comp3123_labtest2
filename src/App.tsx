import { useState, useEffect, useCallback, ChangeEvent } from "react";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import RandomButton from "./components/RandomButton";
import PokemonDisplay from "./components/PokemonDisplay";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
  height: number;
  weight: number;
  stats: { base_stat: number; stat: { name: string } }[];
}

const App = () => {
  // useState used HERE
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [search, setSearch] = useState<string>("");

  // Fetch Pokémon by name or ID, useCallback used HERE
  const fetchPokemonData = useCallback(async (query: string): Promise<void> => {
    try {
      const response = await axios.get<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${query}`
      );
      setPokemon(response.data);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
      setPokemon(null);
    }
  }, []);

  // Fetch a random Pokémon
  const fetchRandomPokemon = useCallback(async (): Promise<void> => {
    const randomId = Math.floor(Math.random() * 1025) + 1; // Random Pokemon ID between 1 and 1025 (Max number of Pokémon via api, I think)
    await fetchPokemonData(randomId.toString());
  }, [fetchPokemonData]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (): void => {
    if (search.trim()) {
      fetchPokemonData(search.toLowerCase()); // Make sure search is lowercase
    }
  };

  // useEffect used HERE
  useEffect(() => {
    fetchRandomPokemon();
  }, [fetchRandomPokemon]);

  return (
    <div className='app'>
      <Header />
      <RandomButton fetchRandomPokemon={fetchRandomPokemon} />
      <Search
        search={search}
        handleSearch={handleSearch}
        handleSearchSubmit={handleSearchSubmit}
      />
      <PokemonDisplay pokemon={pokemon} />
    </div>
  );
};

export default App;
