import React from 'react'
import { useLocation } from "react-router-dom";
const Trailer = () => {  
 const loction=useLocation()
 const movie=loction.state
  return (
    <div className='Trailer'>
        <h1>{movie.name}</h1>
        <iframe  src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
    </div>

  )
}

export default Trailer