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

interface PokemonDisplayProps {
  pokemon: Pokemon | null;
}

const PokemonDisplay = ({ pokemon }: PokemonDisplayProps) => {
  if (!pokemon) {
    return <p className='no-data'>No Pokémon data available.</p>;
  }

  return (
    <div className='pokemon-display'>
      <h2 className='pokemon-name'>{pokemon.name.toUpperCase()}</h2>
      <img
        className='pokemon-image'
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p>
        <strong>Type:</strong>{" "}
        {pokemon.types.map((t) => t.type.name).join(", ")}
      </p>
      <p>
        <strong>Height:</strong> {pokemon.height}
      </p>
      <p>
        <strong>Weight:</strong> {pokemon.weight}
      </p>
      <p>
        <strong>Base Stats:</strong>
      </p>
      <ul className='stats-list'>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name} className='stat-item'>
            {stat.stat.name.toUpperCase()}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDisplay;
