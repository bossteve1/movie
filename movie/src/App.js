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
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  const [list, setList] = useState(watch)

  return (
    <BrowserRouter>
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path={'/'}  element={<Homepage/>} exact/>
        <Route path={"/series"} element={<Series/>} />
        <Route path={"/comments"} element={<Comments/>}/>
        <Route path={"/addmovie"} element={<AddMovie />} />
        <Route path={"/watchlist"} element={<Watchlist list={list} setList={setList} />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}



export default App;