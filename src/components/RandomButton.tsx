interface RandomButtonProps {
  fetchRandomPokemon: () => void;
}

const RandomButton = ({ fetchRandomPokemon }: RandomButtonProps) => {
  return (
    <button className='random-button' onClick={fetchRandomPokemon}>
      Get Random Pokémon
    </button>
  );
};

export default RandomButton;
