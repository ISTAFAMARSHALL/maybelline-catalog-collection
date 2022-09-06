import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import MakeupCards from './MakeupCards'
import Search from './Search'
import Sort from './Sort'
import CardDetails from './CardDetails';

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
      <div key={item.id} >
          <MakeupCards   item={item}  />
      </div>
    )})



  return (
      <div >
        <div >
       
            <Switch>
                <Route exact path="/products/:id" >
                  <CardDetails products={filteredCards}  />
                </Route>

                <Route exact path="/products" > 
                    <div id='searchbar'style={{  margin: "50px"  }} ><Search  search={search} setSearch={setSearch} /> <Sort  setSort={setSort} /> </div>
                    <h1>Product List</h1>
                    <div style={{display: "flex" , flexWrap: "wrap"}}>{productCards}</div>
                </Route>   
            </Switch>

        </div>
      </div>
  )
}

export default MakeUpComponentContainer