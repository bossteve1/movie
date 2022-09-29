import React from "react";
import Watchlist from "./Watchlist";


function App() {
    const filtered = moviesListed.filter((movie) => {
        let result = movie.description.toLowerCase().includes(search)
        return result;
      })
    return (
      <div className="app component">
        {/* other components */}
          <Watchlist moviesListed={moviesListed} search={search} />
      </div>
    );
  }

export default App;

