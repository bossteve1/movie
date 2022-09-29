import React from 'react'
import {Card} from 'react-bootstrap';

const MovieCard = ({movie}) => {
  return (
<Card className="bg-dark text-white" style={{ width: '20rem' }}>
      <Card.Img src="https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?k=20&m=1271522601&s=612x612&w=0&h=y3NLBCVMWO8wHGwjEcXIuGOSL_0K6iFTvySCM-X5TxM=" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Movie title</Card.Title>
        <Card.Text>
          Directed by
        </Card.Text>
        <Card.Text>Seasons</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default MovieCard