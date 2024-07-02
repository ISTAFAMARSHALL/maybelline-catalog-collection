import { Route, Switch } from 'react-router-dom'
import MakeupCards from './MakeupCards'
import Search from './Search'
import Sort from './Sort'
import CardDetails from './CardDetails';
import React from 'react';

function MakeUpComponentContainer({setproducts , products , setSearch , search , setSort , sort , setFav , fav}) 
{   

  const sortCards = products.filter((item) => {
    if (sort === "" )
    { return item 
    }
    return item.product_type === sort

  });

  const filteredCards = sortCards.filter((item) => {
    if (search === "") {
      return item
    } 
    return item.name.toLowerCase().includes(search)
  })

  const productCards = filteredCards.map((item) => {
    return (
      <div key={item.id} >
          <MakeupCards   item={item} setproducts={setproducts} products={products} />
      </div>
    )})



  return (
      <div >
        <div >
       
            <Switch>
                <Route exact path="/products/:id" >
                  <CardDetails products={filteredCards} setFav={setFav} fav={fav} setproducts={setproducts} />
                </Route>

                <Route exact path="/products" > 
                    <div id='searchbar' ><Search  search={search} setSearch={setSearch} /> <Sort  setSort={setSort} /> </div>
                    <h2>Product List</h2>
                    <div style={{display: "flex" , flexWrap: "wrap"}}>{productCards}</div>
                </Route>   
            </Switch>

        </div>
      </div>
  )
}

export default MakeUpComponentContainer