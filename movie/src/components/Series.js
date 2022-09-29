import Items from '../Db.json'
function Series(){
    return(
        <div>
        <h1>Series</h1>
            {
            Items.map(show =>{
            return(
                <div className="box"key={show.id}>
                <h2>{show.title}</h2>
                <h3>{show.director}</h3>
                <strong>{show.seasons}</strong>
                <ul>
                    {show.genres.map((category)=>(
                        <li key={category}>{category}</li>
                    ))}
                </ul>
                </div>
            )
            })
      }
        </div>
    )
}

export default Series;