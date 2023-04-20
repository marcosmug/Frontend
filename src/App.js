import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import PokemonStats from './pokemonstats';


function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemonList(data.results));
  }, []);

  function handelClick(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then(response => response.json())
      .then(data => setSelectedPokemon(data));
  }
  
  function favoClick(pokemon) {
    const button = document.querySelector(`#${pokemon.name}-btn`);
    if (button.classList.contains("checked")) {
      button.classList.remove("checked");
    }else {
      button.classList.add("checked");
    }
    }
  

  return (
    <div>
            <PokemonStats selectedPokemon={selectedPokemon} />
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.name}>
            <button onClick={() => handelClick(pokemon)}>{pokemon.name}</button>
            <button id = {pokemon.name +"-btn"}onClick={() => favoClick(pokemon)}>{pokemon.name}</button>
          </li>
        ))}
      </ul>

    </div>
  );
        }
      
export default PokemonList;


