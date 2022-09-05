import React from 'react'
import {NavLink} from 'react-router-dom'

const style = {
  padding: "3em",
  margin: "auto"
}

function Navbar() {
  return (
    
    <div >
      
        <NavLink 
            activeStyle={{ 
            fontWeight: "bolder",
            color: "red"
        }}  
            style={style}
            exact 
            to="/"
          >Home</NavLink>

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

    </div>
  )
}

export default Navbar