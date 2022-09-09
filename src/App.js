// import logo from './logo.svg';
import './App.css';
import React, {  useState, useEffect } from 'react'
import Header from './Navigation.js/Header';
import Navbar from './Navigation.js/Navbar';
import Footer from './Navigation.js/Footer';
import MakeUpComponentContainer from './MakeUpContainer.js/MakeUpComponentContainer';
import {Switch, Route} from 'react-router-dom'
import Home from './Navigation.js/Home';
import About from './Navigation.js/About';
import Form from './Navigation.js/Form';


function App() {

  const [products, setproducts] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")
  const [fav, setFav] = useState()

  console.log(products)

  useEffect(() => {
    fetch("http://localhost:3001/products")
    .then(r => r.json())
    .then((data) => setproducts(data))
    .catch((error) => alert(error))
  } , []) 

  return (
    <div>
      
        <Header />

          <Navbar />

            <Switch>

              <Route exact path="/" >
                <Home />
              </Route>

              <Route exact path="/products/new" >
                <Form  setproducts={setproducts} products={products} />
              </Route>
              
              <Route path="/products/" >
                <MakeUpComponentContainer setproducts={setproducts} products={products} setSearch={setSearch}  search={search} setSort={setSort} sort={sort} setFav={setFav} fav={fav} />
              </Route>
              
              <Route exact path="/about"  >
                <About />
              </Route>

            </Switch>

        <Footer />

    </div>
  );
}

export default App;
