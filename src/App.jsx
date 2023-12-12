import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  const url = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url + "pikachu");
        const receivedData = await response.json();

        setPokeData(receivedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handlePokeData = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = async () => {
    try {
      const response = await fetch(url + searchValue.toLowerCase());

      if (!response.ok) {
        console.error(`Failed to fetch Pokemon data: ${response.status}`);
        setFilteredData(null);
        return;
      }

      const pokemonData = await response.json();
      setFilteredData(pokemonData);
    } catch (error) {
      console.error(error);
      setFilteredData(null);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search Pokemon"
        value={searchValue}
        onChange={handlePokeData}
      />
      <button onClick={handleClick}>Search</button>

      {filteredData && (
        <div>
          <p>Name: {filteredData.name}</p>
          <img
            src={filteredData.sprites.front_default}
            alt={`${filteredData.name} sprite`}
          />
        </div>
      )}
    </div>
  );
}

export default App;
