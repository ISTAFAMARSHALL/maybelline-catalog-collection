import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


function CardDetails({products}) {

  const {id} = useParams();
  
  const d = products.filter(e => e.id === parseInt(id))

  
  

  return (

    <div >
        <h1>{}</h1>
        <img src={d.image_link} alt={d.name}  ></img>
        <p>Release Date:{}</p>
        <p>Prodcut Type:{}</p>
        <p></p>
        <p>Rating:{}</p>
        <p>Availble Colors:{}</p> 
        <h3>Price: {}</h3>
    </div>
  )
}

export default CardDetails