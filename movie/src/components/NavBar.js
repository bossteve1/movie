import React from 'react'
import {Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <Nav className="bg-dark text-white p-3" defaultActiveKey="/" as="ul">
      <NavLink className='m-2' to="/" exact > Home</NavLink>
      <NavLink className='m-2' to="/series" exact > Series</NavLink>
      <NavLink className='m-2' to="/watchlist" exact > Watchlist</NavLink>
      <NavLink className='m-2' to="/comments" exact > Comments</NavLink>
      <NavLink className='m-2' to="/addmovie" exact > Add movie</NavLink>
    </Nav>
  )
}

export default NavBar