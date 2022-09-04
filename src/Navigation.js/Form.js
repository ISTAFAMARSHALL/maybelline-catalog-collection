import React, { useState } from 'react'

function Form() {
  
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  const newProduct ={
    name:name,
    description:description,
    price:price,
    image:image,
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
      api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/007/original/data?1514061107",
      product_colors: [
        {
          "hex_value": "#0E0F11",
          "colour_name": "Very Black "
        }
  }

  function handleSubmit(e) { 
    e.preventDefault()
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Contect-Type" : "application/json"
      },
      body: JSON.stringify(newProduct) 
    })
  }
  


  return (
    <div>
      <h2>Enter New Product Here</h2>
      <form onSubmit={handleSubmit} >
        <label htmlFor='name'>Name:</label>
        <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" value={name} required /> <br></br>
        <label htmlFor='description'>Description:</label>
        <input onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" value={description} required/> <br></br>
        <label htmlFor='price'>Price:</label>
        <input onChange={(e) => setPrice(e.target.value)} type="text" name="price" id="price" value={price} required/> <br></br>
        <label htmlFor='image'>Image Url:</label>
        <input onChange={(e) => setImage(e.target.value)} type="text" name="image" id="image" value={image} required/> <br></br>
        <input type="submit" value="Add New Product"/>
      </form>
    </div>
  )
}

export default Form