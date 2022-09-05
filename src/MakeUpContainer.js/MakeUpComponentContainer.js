import React, { useEffect, useState } from 'react'
import MakeupCards from './MakeupCards'
import Search from './Search'
import Sort from './Sort'

function MakeUpComponentContainer() {

  const [products, setproducts] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")


  useEffect(() => {
    fetch("http://localhost:3001/products")
    .then(r => r.json())
    .then((data) => setproducts(data))
    .catch((error) => alert(error))
  } , []) 

  const sortCards = products.filter((item) => {
    if (sort === "" )
    { return item 
    }
    return item.product_type === sort

  })

  const filteredCards = sortCards.filter((item) => {
    if (search === "") {
      return item
    } 
    return item.name.toLowerCase().includes(search)
  })

  const productCards = filteredCards.map((item) => {
    return (
      <MakeupCards key={item.id} item={item}  />

    )})

    


  return (
      <div>
       <h1 style={{display: "flex"  }}><Search  search={search} setSearch={setSearch} /><Sort  setSort={setSort} /> </h1>
       <div>
       <h2>Product List</h2>
       {productCards}
       </div>
      </div>
  )
}

export default MakeUpComponentContainer