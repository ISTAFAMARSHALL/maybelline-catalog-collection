import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'



function MakeupCards({item}) {

  const history = useHistory()

  function handleFavs (data) {
  
    fetch(`http://localhost:3001/products/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        price_sign: "false",
      })
    })

    history.push("/products")
  }

  return (
      
      <div id='cards' key={item.id} style={{ border: "solid", borderStyle: "groove",  width: "300px", height: "800px", margin: "20px"}} >
        <img src={item.image_link} alt={item.name}  ></img>
        <h4>{item.name}</h4>
        <p style={{ textAlign: "justify", width: "280px", margin: "10px" }}>{item.description}</p>
        <h3 style={{}}>Price: {item.price}</h3>
        <Link to={`/products/${item.id}`}><button>Details</button></Link>
        
        <div id='star' className={ item.price_sign === "true" ?  "star" : ""} onClick={handleFavs} /> <br></br>
        { item.price_sign === "true" ? <a> Click star to remove from Favorites </a> : ""}  
         
      </div>
  )
}

export default MakeupCards