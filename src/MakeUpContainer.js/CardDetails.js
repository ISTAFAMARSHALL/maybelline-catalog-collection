import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'



function CardDetails({products,fav, setFav}) {



//  let newArr = []
 
  const [newobj, setNewobj] = useState([]);
  const history = useHistory();

  const { id } = useParams();


  const detailedCard = products.filter((newobj) => {
    if (newobj.id === parseInt(id)) {
      return newobj
    }})

    console.log(detailedCard[0])

  // useEffect(() => {
  //   fetch(`http://localhost:3001/products/${id}`)
  //   .then(r => r.json())
  //   .then((data) => {
  //     // newArr = data 
  //     handleData(data)})
  //   }, [])

  function handleData(data) {
    setNewobj(data)
  }

  function handleDelete (data) {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE" 
    })
    history.push("/products")
  }

function handleFavs (data) {
  
  fetch(`http://localhost:3001/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      price_sign: "true",
    })
  })

  history.push("/products")
}

//  const colors = newobj.product_colors.map((e) => { return (
//   <li>e.colour_name</li>  
//   )})

  return (

    <div style={{border: "solid" , borderStyle: "groove", margin: "40px"}} > 
      <h2 defaultValue="" >{detailedCard[0].name}</h2>
      <img defaultValue="" src={detailedCard[0].image_link} alt={detailedCard[0].name}  ></img>
      {/* <p defaultValue="">Date Released:{newobj.created_at}</p> */}
      <p defaultValue="" >Prodcut Type: {detailedCard[0].product_type}</p>
      <p defaultValue=""></p>
      <p defaultValue="">Rating: {detailedCard[0].rating}</p>
      {/* <div> Availble Colors: {}</div> */}
      <h3 defaultValue="">Price: {detailedCard[0].price}</h3>
      <button style={{ marginBottom: "40px"}} onClick={handleDelete} >Delete</button>{detailedCard[0].price_sign === "true" ? '' : <button onClick={handleFavs}>Favorite</button> }
    </div>
  )
}

export default CardDetails