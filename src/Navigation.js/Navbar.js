import React from 'react'
import {NavLink} from 'react-router-dom'

const style ={
  width: "100%",
  margin: "5% 0 1%",
  padding: "3em"
}

function Navbar() {
  return (
    
    <div>
      <NavLink 
            activeStyle={{ 
            fontWeight: "bolder",
            color: "red"
        }}  
            style={style}
            exact
            to="/products/new"
          >Add Product</NavLink>

      <NavLink 
            activeStyle={{ 
            fontWeight: "bolder",
            color: "red"
        }}  
            style={style}
            exact
            to="/products"
          >Products</NavLink>

        <NavLink 
            activeStyle={{ 
            fontWeight: "bolder",
            color: "red"
        }}  
            style={style}
            exact
            to="/about"
          >About</NavLink>

        <NavLink 
            activeStyle={{ 
            fontWeight: "bolder",
            color: "red"
        }}  
            style={style}
            exact 
            to="/"
          >Home</NavLink>
      
    </div>
  )
}

export default Navbar