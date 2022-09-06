import React from 'react'
import { Link } from 'react-router-dom'
import { StyleHTMLAttributes } from 'react'


function MakeupCards({item}) {

  return (
      
      <div key={item.id} style={{border: "solid", width: "300px" , margin: "20px"}} >
        <img src={item.image_link} alt={item.name}  ></img>
        <h4>{item.name}</h4>
        <p style={{ textAlign: "justify"  }}>{item.description}</p>
        <h3>Price: {item.price}</h3>
        <Link to={`/products/${item.id}`} >Product Details</Link>       
      </div>
  )
}

export default MakeupCards