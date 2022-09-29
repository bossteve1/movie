import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const Homepage = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
      fetch('')
        .then((r) => r.json())
        .then((items) => setMovies(items));
    }, []);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 g-2'>
        <MovieCard/>
        </div>
      </div>
      {/* {movies.map((movie) => (
        <div className='col-md-4 g-2'>
          <MovieCard key={movie.id} movie={movie} />
        </div>
        ))} */}
    </div>
  )
}

export default Homepage