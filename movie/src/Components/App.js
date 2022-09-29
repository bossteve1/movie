import React, { useState } from "react";
import Watchlist from "./Watchlist";
import watch from "../data/data";


function App() {

    const [list, setList] = useState(watch)

    return (
      <div className="app component">
        {/* other components */}
          <Watchlist list={list} setList={setList} />
      </div>
    );
  }

export default App;

