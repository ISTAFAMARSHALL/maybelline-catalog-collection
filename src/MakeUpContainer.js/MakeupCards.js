import React from 'react'
import { Link } from 'react-router-dom'
import { StaticLifecycle } from 'react'



function MakeupCards({item}) {

  return (
      
      <div id='cards' key={item.id} style={{ border: "solid", borderStyle: "groove",  width: "300px", height: "700px", margin: "20px"}} >
        <img src={item.image_link} alt={item.name}  ></img>
        <h4>{item.name}</h4>
        <p style={{ textAlign: "justify", width: "280px", margin: "10px" }}>{item.description}</p>
        <h3 style={{}}>Price: {item.price}</h3>
        <Link to={`/products/${item.id}`} >Product Details</Link>       
      </div>
  )
}

export default MakeupCards