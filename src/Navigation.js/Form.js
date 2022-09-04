import React, { useState } from 'react'

function Form() {
  
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  return (
    <div>
      <h2>Enter New Product Here</h2>
      <form>
        <label htmlFor='name'>Name:</label>
        <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" /> <br></br>
        <label htmlFor='description'>Description:</label>
        <input onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" /> <br></br>
        <label htmlFor='price'>Price:</label>
        <input onChange={(e) => setPrice(e.target.value)} type="text" name="price" id="price" /> <br></br>
        <label htmlFor='image'>Image Url:</label>
        <input onChange={(e) => setImage(e.target.value)} type="text" name="image" id="image" /> <br></br>
        <input type="submit" value="Add New Product"/>
      </form>
    </div>
  )
}

export default Form