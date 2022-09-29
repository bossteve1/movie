import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const Homepage = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
      fetch('http://localhost:8000/movies')
        .then((r) => r.json())
        .then((items) => setMovies(items));
    }, []);
    
  return (
    <div className='container'>
      <div className='row'>
        {movies.map((movie) => (
          <div className='col-md-6'>
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Homepage