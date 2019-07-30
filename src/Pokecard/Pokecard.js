import React from "react";
import "./Pokecard.css";
const POKEMON_API =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

const padNumber = num => (num < 999 ? `00${num}`.slice(-3) : num);

function Pokecard({ name, id, type, exp }) {
  const imgSrc = `${POKEMON_API}${padNumber(id)}.png`;
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <div className="Pokecard-image">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">Exp: {exp}</div>
    </div>
  );
}

export default Pokecard;
