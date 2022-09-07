import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

function Form() {
  
  const history = useHistory()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [ product_type   , setProduct_type] = useState("")

  const newProduct ={
      brand: "maybelline",
      name:name,
      price:price,
      price_sign: "",
      currency: "",
      image_link: image,
      product_link: "",
      website_link: "",
      description:description,
      rating: "",
      category: "",
      product_type: "",
      tag_list: [],
      created_at: "",
      updated_at: "",
      product_api_url: "",
      api_featured_image: "",
      product_colors: [
        {
          hex_value: "",
          colour_name: ""
        }]
  }

  function handleSubmit(e) { 
    e.preventDefault()
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newProduct) 
    })
    setName("")
    setDescription("")
    setPrice("")
    setImage("")
    setProduct_type("")
    history.push("/products")
  }

  


  return (
    <div style={{margin: "100px"}}>
      <h2>Enter New Product Here</h2>
      <form id="form" onSubmit={handleSubmit} >
        {/* <label htmlFor='name'>Name:</label> */}
        <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" value={name} required placeholder='Enter Name Here'/> <br></br>
        {/* <label htmlFor='description'>Description:</label> */}
        <input onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" value={description} required placeholder='Enter Description Here'/> <br></br>
        {/* <label htmlFor='price'>Price:</label> */}
        <input onChange={(e) => setPrice(e.target.value)} type="text" name="price" id="price" value={price} required placeholder='Enter Price Here'/> <br></br>
        {/* <label htmlFor='product_type'>Product Type:</label> */}
        <input onChange={(e) => setProduct_type(e.target.value)} type="text" name="product_type" id="product_type" value={product_type} required placeholder='Enter Product Type Here'/> <br></br>
        {/* <label htmlFor='image'>Image Url:</label> */}
        <input onChange={(e) => setImage(e.target.value)} type="text" name="image" id="image" value={image} required placeholder='Enter Image Url: Here'/> <br></br>
        <input type="submit" value="Add New Product"/>
      </form>
    </div>
  )
}

export default Form