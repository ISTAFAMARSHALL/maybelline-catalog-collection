import React from 'react';
import { Link } from 'react-router-dom';

function MakeupCards({setproducts, products, item}) 
{
  function handleFavs () {

    const favItemArr = products.map((e) => {
      if (e.id === parseInt(item.id)) {
         return {...e , price_sign: "false"}
      } else return e 
    });
    
    fetch(`http://localhost:3001/products/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        price_sign: "false",
      })
    })
  
    setproducts(favItemArr);
  
   
  }

  return (
      
      <div id='cards' key={item.id} style={{ border: "solid", borderStyle: "groove",  width: "300px", height: "800px", margin: "20px"}} >
        <img src={item.image_link} alt={item.name}  ></img>
        <h4>{item.name}</h4>
        <p style={{ textAlign: "justify", width: "280px", margin: "10px" }}>{item.description}</p>
        <h3 style={{}}>Price: {item.price}</h3>
        <Link to={`/products/${item.id}`}><button>Details</button></Link>
        
        <div id='star' className={ item.price_sign === "true" ?  "star" : ""} onClick={handleFavs} /> <br></br>
        { item.price_sign === "true" ? <a href='text'> Click star to remove from Favorites </a> : ""}  
         
      </div>
  )
}

export default MakeupCards