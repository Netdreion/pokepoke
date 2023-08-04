import { useState } from "react";

const PokemonInfo = () => {
  const [poke, setPoke] = useState({});

  const fetchData = async (poke) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${poke}/`;

    try {
      const response = await fetch(url);
      const { name, sprites, species } = response.data;
      setPoke({
        name,
        img: sprites.front_default,
      });
    } catch (error) {
      console.log(error);
    }
    fetchData();
  };

  return (
    <div>
      <input onChange={(event) => setPoke(event.target.value)} />
      <button onClick={() => fetchData(poke)}></button>
      {poke.name && (
        <div>
          <h2>{poke.name}</h2>
          <img>
            src={poke.img} alt={poke.name}
          </img>
        </div>
      )}
    </div>
  );
};
export default PokemonInfo;
