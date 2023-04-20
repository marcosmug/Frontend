import React from "react";
import { useLocation } from "react-router-dom";


const Monstat = () => {
    const {selectedPokemon} = useLocation().state;
    return(
        <>
        <h2>height: {selectedPokemon.height}</h2>
        <h2>weight: {selectedPokemon.weight}</h2>
        <h2>experience: {selectedPokemon.base_experience}</h2>
        </>
    )
}

export default Monstat;
