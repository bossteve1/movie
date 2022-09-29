import { useEffect, useState } from "react"
import MovieItem from "./MovieItem"

export default function AddMovie(){

  const [movies,setMovies]=useState([])

  const[movieData,setMovieData]=useState({
    title:"",
    poster:"",
    directed_by:"",
    description:"",
    producer:"",
    crawled_at:"",
    category:""
  })
  useEffect(()=>{
    fetch("http://localhost:8000/movies")
    .then(response => response.json())
    .then(movieData => setMovies(movieData))
  },[])

  function handleSubmit(e){
    e.preventDefault()
    console.log(movieData)
    fetch("http://localhost:8000/movies",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(movieData)
    })
    .then(response => response.json())
    .then(response => addmovie(response))
  }

  function handlechange(e){
    setMovieData({
      ...movieData,[e.target.name]:e.target.value
    })
  }

  function addmovie(newMovie){
    setMovies([...movieData,newMovie])

  }
  return(
    <div className="moviediv">
      <h1 className="header">ADD A MoVIE OF YoUR CHoICE</h1>
      
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={movieData.title}
            onChange={handlechange}
          />
        </label><br></br>
        <label>
          Image:
          <input
            type="text"
            name="poster"
            onChange={handlechange}
            value={movieData.url}
            
          />
        </label><br></br>
        <label>
          Director:
          <input
            type="text"
            name="directed_by"
            onChange={handlechange}
            value={movieData.directed_by}
            
          />
        </label><br></br>
        <label>
          Producer:
          <input
            type="text"
            name="producer"
            value={movieData.producer}
            onChange={handlechange}
           
          />
        </label><br></br>
        <label>
          Release Date:
          <input
            type="text"
            name="crawled_at"
            value={movieData.crawled_at}
            onChange={handlechange}
           
          />
        </label><br></br>
        <label>
          Description:
          <input
            type="textarea"
            name="description"
            value={movieData.description}
            onChange={handlechange}
           
          />
        </label><br></br>
        {/* <label>
          Rating:
          <input
            type="text"
            name="rating"
            
          />
        </label>
        <label>
          Added By:
          <input
            type="text"
            name="addedby"
            
          />
        </label> */}
       <h4>Choose the category</h4>
        <select name="category" onChange={handlechange}>
          <option name="All" >All</option>
          <option name="Horror">Horror</option>
          <option name="Scifi">Scifi</option>
          <option name="Action">Action</option>
          <option name="Comedy">Comedy</option>
          <option name="Animation">Animation</option>
       </select><br></br>
       <button type="submit">Add to List</button>
      </form>  
      {movies.map(movie =>{
        return <MovieItem key={movie.id} title={movie.title} url={movie.url} poster={movie.poster} directedBy={movie.directed_by} 
        description={movie.description} crawled_at={movie.crawled_at} category={movie.category}/>
      
      })}
      
    </div>
  )
}