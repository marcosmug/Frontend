import { Link } from "react-router-dom";

function PokemonStats({ selectedPokemon }) {
    return (
      <div>
        {selectedPokemon && (
          <div className="pokemonstats">
            <h2>{selectedPokemon.name}</h2>
            <h2>height: {selectedPokemon.height}</h2>
            <h2>weight: {selectedPokemon.weight}</h2>
            <h2>experience: {selectedPokemon.base_experience}</h2>
            <img src={selectedPokemon.sprites.front_default} />
            <Link to ="./statspokemonpage" state ={{selectedPokemon}}>statslink!</Link>
          </div>
        )}
      </div>
    );
  }
  
  export default PokemonStats;