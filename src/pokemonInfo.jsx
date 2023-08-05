import React, { useState } from "react";

const PokemonInfo = () => {
  const [pokeName, setPokeName] = useState("");
  const [poke, setPoke] = useState({});

  const fetchData = async (pokeName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;

    try {
      console.log(url);
      const response = await fetch(url);

      const data = await response.json();

      const { name, sprites } = data;
      setPoke({
        name,
        img: sprites.front_default,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        value={pokeName}
        onChange={(event) => setPokeName(event.target.value)}
      />
      <button onClick={() => fetchData(pokeName)}>Fetch Pokemon</button>
      {poke.name && (
        <div>
          <h2>{poke.name}</h2>
          <img src={poke.img} alt={poke.name} />
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;
