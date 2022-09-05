import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



function CardDetails({ }) {

  const [newobj, setNewobj] = useState({})

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
    .then(r => r.json())
    .then((data) => handleData(data))
    }, [])

  function handleData(data) {
    setNewobj(data)
  }

 const t = newobj.product_colors 

 console.log(t[0])




  

  return (

    <div  >
      <h1 defaultValue="" >{newobj.name}</h1>
      <img defaultValue="" src={newobj.image_link} alt={newobj.name}  ></img>
      <p defaultValue="">Release Date:{newobj.created_at}</p>
      <p defaultValue="" >Prodcut Type:{newobj.product_type}</p>
      <p defaultValue=""></p>
      <p defaultValue="">Rating:{newobj.rating}</p>
      <div> Availble Colors:{}</div>
      <h3 defaultValue="">Price: {newobj.price}</h3>
    </div>
  )
}

export default CardDetails