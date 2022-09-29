import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import { useState } from 'react';
import AddMovie from './AddMovie';
import './App.css';
import Homepage from './components/Homepage';

import Comments from "./components/comments"

import Watchlist from './Components/Watchlist';
import watch from "./data/data";
import Series from './components/Series';



function App() {
  const [list, setList] = useState(watch)

  return (
    <div className="App">
      <Series/>
      <Homepage/>
      <Comments/>
      <AddMovie />
      <Watchlist list={list} setList={setList} />
    </div>
  );
}



export default App;