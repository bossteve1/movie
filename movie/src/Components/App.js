import React from "react";
import Watchlist from "./Watchlist";


function App() {
    const filtered = moviesListed.filter((trans) => {
        let result = trans.description.toLowerCase().includes(search)
        return result;
      })
    return (
      <div className="app component">
        {/* other components */}
          <TransactionsList transactionsListed={transactionsListed} search={search} />
      </div>
    );
  }

export default App;

