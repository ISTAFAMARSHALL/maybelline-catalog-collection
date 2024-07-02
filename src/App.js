// import logo from './logo.svg';
import './App.css';
import React, {  useState, useEffect } from 'react';
import Header from './Navigation/Header';
import Navbar from './Navigation/Navbar';
import Footer from './Navigation/Footer';
import MakeUpComponentContainer from './MakeUpContainer/MakeUpComponentContainer';
import {Switch, Route} from 'react-router-dom'
import Home from './Navigation/Home';
import About from './Navigation/About';
import Form from './Navigation/Form';


function App() {

  const [products, setproducts] = useState([]);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("/api/http://localhost:3001/products")
    .then(r => r.json())
    .then((data) => setproducts(data))
    .catch((error) => alert(error))
  } , []);

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
                <MakeUpComponentContainer setproducts={setproducts} products={products} setSearch={setSearch}  search={search} setSort={setSort} sort={sort}  />
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
