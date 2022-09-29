import react, { useState } from "react";

function Watchlist({ addWatch }) {
  const [movieData, setMovieData] = useState({
    date: "",
    description: "",
    movie: "",
  })

  function handleChange(e) {
    const key = e.target.id
    setMovieData({
      ...movieData,
      [key]: e.target.value
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch("https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((data) => addWatch(data));
  }
  const moviesList = movies.map((movie) => {
    return (
      <li key={movie} style={{ movie: movie }}>
        {movie}
      </li>
    );
  });

  return (
    <div>
      <form className="watchlist form" onSubmit={handleSubmit}>
        <input type="text" name="watchlist" value={movieData.watchlist} id="watchlist" placeholder="Add to watchlist" onChange={handleChange} />
        <button className="watchlist button" type="submit" >
          Add movie to Watchlist
        </button>
        <div>
          <h1>To Watch Soon</h1>
          <ol>
            {moviesList}
          </ol>
        </div>
      </form>
    </div>
  );
}
export default Watchlist;
