import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


function CardDetails({products}) {

  const {id} = useParams();
  
  const d = products.filter(e => e.id === parseInt(id))

  console.log(d[0])

  return (
    <div >
    {/* <h1>{item.name}</h1>
    <img src={item.image_link} alt={item.name}  ></img>
    <p>Release Date:{item.created_at}</p>
    <p>Prodcut Type:{item.product_type}</p>
    <p></p>
    <p>Rating:{item.rating}</p>
     <p>Availble Colors:{item.product_colors}</p> 
    <h3>Price: {item.price}</h3> */}
</div>
    
  )
}

export default CardDetails