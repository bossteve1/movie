import Items from '../Series.json'
function Series(){
    return(
        <div>
            {
            Items.map(show =>{
            return(
                <div className="box"key={show.id}>
                <h2>{show.title}</h2>
                <h3>{show.director}</h3>
                {show.seasons}
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