import React from 'react'

function Form() {
  return (
    <div>Form
      <form>
        <label htmlFor='name'>Name:</label>
        <input type="text" name="name" id="name" /> <br></br>
        <label htmlFor='description'>Description:</label>
        <input type="text" name="description" id="description" /> <br></br>
        <label htmlFor='price'>Price:</label>
        <input type="text" name="price" id="price" /> <br></br>
        <label htmlFor='image'>Image Url:</label>
        <input type="text" name="image" id="image" /> <br></br>
        
      </form>
    </div>
  )
}

export default Form