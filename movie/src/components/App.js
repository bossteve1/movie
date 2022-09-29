import React from "react";
import Items from '../data.json'

function App() {
  return (
    <div className="App">
      <h1>Series</h1>

      {
        Items.map(show =>{
          return(
            <div className="box"key={show.id}>
              {show.image}
              <h2>{show.title}</h2>
              <h3>{show.director}</h3>
              {show.seasons}
            </div>
          )
        })

      }

    </div>
  );
}

export default App;
