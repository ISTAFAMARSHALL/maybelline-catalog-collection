import React from 'react'

function Form() {
  return (
    <div>
      <h2>Enter New Product Here</h2>
      <form>
        <label htmlFor='name'>Name:</label>
        <input type="text" name="name" id="name" /> <br></br>
        <label htmlFor='description'>Description:</label>
        <input type="text" name="description" id="description" /> <br></br>
        <label htmlFor='price'>Price:</label>
        <input type="text" name="price" id="price" /> <br></br>
        <label htmlFor='image'>Image Url:</label>
        <input type="text" name="image" id="image" /> <br></br>
        <input type="submit" value="Add New Product"/>
      </form>
    </div>
  )
}

export default Form