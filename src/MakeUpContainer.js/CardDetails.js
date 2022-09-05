import React from 'react'
import { useParams } from 'react-router-dom'


function CardDetails({products}) {
  
  parseInt()

  const {id} = useParams();
  // console.log(products)
  // console.log(id)

  const cards = products.filter((item) => { 
    if (item.id === parseInt(id)){
      console.log(item)
      return item
    }
  })


  const dCard = [...cards]

  console.log(dCard)

  return (
    <div key={cards.id}>
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