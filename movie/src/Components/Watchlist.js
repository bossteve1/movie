import React from "react";
import ListForm from "./ListForm";
import List from "./List";

function Watchlist({ list, setList }) {

  function listFormSubmit(newMovie) {
    const updateMovieList = [...list, newMovie]
    setList(updateMovieList)
  }

  return (
    <div>
      <ListForm onListFormSubmit={listFormSubmit} />
      <ul>
        {list.map((list) => (
          <List key={list.id} title={list.title} />
        ))}
      </ul>
    </div>
  );
}

export default Watchlist;
