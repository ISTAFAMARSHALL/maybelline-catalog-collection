import React from 'react'
import { Link } from 'react-router-dom'


function MakeupCards({item}) {

  return (
      
      <div key={item.id}>
        <img src={item.image_link} alt={item.name}  ></img>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <h3>Price: {item.price}</h3>
        <Link to={`/products/${item.id}`} >Product Details</Link>       
      </div>
  )
}

export default MakeupCards