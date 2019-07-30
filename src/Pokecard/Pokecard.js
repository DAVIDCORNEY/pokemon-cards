import React from "react";
import "./Pokecard.css";
const POKEMON_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ name, id, type, exp }) {
  const imgSrc = `${POKEMON_API}${id}.png`;
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <img src={imgSrc} alt={name} />
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">Exp: {exp}</div>
    </div>
  );
}

export default Pokecard;
