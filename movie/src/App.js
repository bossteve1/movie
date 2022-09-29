// import logo from './logo.svg';
import { useState } from 'react';
import AddMovie from './AddMovie';
import './App.css';
import Watchlist from './Components/Watchlist';
import watch from "./data/data";


function App() {
  const [list, setList] = useState(watch)

  return (
    <div className="App">
      <AddMovie />
      <Watchlist list={list} setList={setList} />
    </div>
  );
}

export default App;
