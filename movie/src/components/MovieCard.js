import React from 'react'
import {Card} from 'react-bootstrap';

const MovieCard = ({movie}) => {
  return (
<Card className="bg-dark text-white" style={{ width: 'auto' }}>
      <Card.Img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <Card.Text>Producer: {movie.produced_by}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default MovieCard