import React from "react";
const POKEMON_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ name, id, type, exp }) {
  const imgSrc = `${POKEMON_API}${id}.png`;
  return (
    <div className="Pokecard">
      <h1>{name}</h1>
      <img src={imgSrc} alt={name} />
      <div>{type}</div>
      <div>{exp}</div>
    </div>
  );
}

export default Pokecard;
