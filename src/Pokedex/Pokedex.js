import React, { Component } from "react";
import Pokecard from "../Pokecard/Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    const { pokemon, exp, winner } = this.props;
    let message;
    if (winner) {
      message = <h3 className="Pokedex-winner">I Have Won!</h3>;
    } else {
      message = <h3 className="Pokedex-loser">Blast, I Have Lost!</h3>;
    }
    return (
      <div className="Pokedex">
        <h1>Pokedex</h1>
        <h2>Total Exp: {exp}</h2>
        {message}
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
