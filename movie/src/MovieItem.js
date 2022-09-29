export default function MovieItem({title,url,poster,directedBy,description,crawled_at,category}){

  return (
    <div className="movie_item">
      <h1>{title}</h1>
      <img src={poster} alt=" of a movie"
      width="200"/>
      <h3>DIRECTED BY:{directedBy}</h3>
      <p>{description}</p>
      <h3>RELEASE DATE:<br></br>
      {crawled_at}
      </h3>
      <h4>CATEGORY:<br></br>
      {category}
      </h4>
    </div>
  )
}