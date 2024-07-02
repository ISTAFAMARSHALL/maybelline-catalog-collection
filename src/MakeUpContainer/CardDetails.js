import React from 'react'
import { useParams, useHistory } from 'react-router-dom'



function CardDetails({setproducts, products}) 
{
  const history = useHistory();

  const { id } = useParams();
  
  const detailedCard = products.filter((newobj) => newobj.id === parseInt(id));

  // const detailedCard = products.filter((newobj) => {
  //   if (newobj.id === parseInt(id)) {
  //     return newobj
  //   }});

  const colors = detailedCard[0].product_colors.map((e) => { return (
    
      <li key={e.colour_name} >{e.colour_name}</li>  


      )});

 
  function handleDelete () 
  {
    const deletedItemArr = products.filter((e) => e.id !== parseInt(id));

    fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE" 
    })

    setproducts(deletedItemArr);

    history.push("/products");

  }


function handleFavs () {

  const favItemArr = products.map((e) => {
    if (e.id === parseInt(id)) {
       return {...e , price_sign: "true"}
    } else return e 
  })
  
  fetch(`http://localhost:3001/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      price_sign: "true",
    })
  })

  setproducts(favItemArr);

 
};

  return (

    <div style={{border: "solid" , borderStyle: "groove", margin: "40px"}} > 
       <h2 defaultValue="" >{detailedCard[0].name}</h2>
      <img defaultValue="" src={detailedCard[0].image_link} alt={detailedCard[0].name}  ></img>
      <p defaultValue="" >{detailedCard[0].product_type}</p>
      <p defaultValue=""></p>
      <p defaultValue="">Rating: {detailedCard[0].rating}</p>
      <div>{colors}</div>
      <h3 >Price: {detailedCard[0].price}</h3>
      <button style={{ marginBottom: "40px"}} onClick={handleDelete} >Delete</button>{detailedCard[0].price_sign === "true" ? '' : <button onClick={handleFavs}>Favorite</button> }
    </div>
  )
}

export default CardDetails