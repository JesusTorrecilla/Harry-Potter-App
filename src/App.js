import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";


function App() {

  const [characters, setCharacters] = useState([]);
  const initialUrl = "https://hp-api.herokuapp.com/api/characters";

  let fetchCharactersData = (url) => {
    fetch(url)
    .then(responde => responde.json())
    .then(data => setCharacters(data))
    .catch(error => console.log(error));
  }

  React.useEffect(() => {
    fetchCharactersData(initialUrl);
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <Characters characters={characters}/>
      </div>
    </>
  );
}

export default App;
