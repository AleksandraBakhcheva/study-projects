import React from "react";
import "./App.css";
import "./assets/styles/superhero.css";
import data from "./assets/superheroes.json";
import SuperheroCard from "./assets/components/superhero.jsx";

function App() {
  return (
    <div className="App">
      <h1>Все, что надо знать о 10 крутейших супергероях</h1>
      <div className="container">
        {data.map((superhero) => (
          <SuperheroCard
            picture={superhero.picture}
            name={superhero.name}
            universe={superhero.universe}
            alter={superhero.alter}
            occupation={superhero.occupation}
            friends={superhero.friends}
            superpowers={superhero.superpowers}
            description={superhero.description}
          ></SuperheroCard>
        ))}
      </div>
    </div>
  );
}

export default App;
