import React, { Component } from "react";
import Pokecard from "../Pokecard/Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    const { pokemon, exp, winner } = this.props;
    let message;
    if (winner) {
      message = <h1 className="Pokedex-winner">I Have Won!</h1>;
    } else {
      message = <h1 className="Pokedex-loser">Blast, I Have Lost!</h1>;
    }
    return (
      <div className="Pokedex">
        {message}
        <h2>Total Exp: {exp}</h2>
        <div className="Pokedex-cards">
          {pokemon.map(p => (
            <Pokecard
              key={p.id}
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
