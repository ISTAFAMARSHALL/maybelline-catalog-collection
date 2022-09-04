import React, { useEffect, useState } from 'react'
import MakeupCards from './MakeupCards'
import Search from './Search'
import Sort from './Sort'

function MakeUpComponentContainer() {

  const [products, setproducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/products")
    .then(r => r.json())
    .then((data) => setproducts(data))
  }, []) 

  const productCards = products.map((item) => {
    return (
      <MakeupCards key={item.id} item={item}  />

    )})

  return (
      <div>
       <h1 style={{display: "flex"}}><Search /><Sort /> </h1>
       <div>
       <h2>Product List</h2>
       {productCards}
       </div>
      </div>
  )
}

export default MakeUpComponentContainer