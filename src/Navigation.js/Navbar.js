import React from 'react'
import {NavLink} from 'react-router-dom'

const style = {
  padding: "1em",
  margin: "10px"
}

function Navbar() {
  return (
    
    <div id='navbar'>
      
        <NavLink className="button"
            activeStyle={{ 
            fontWeight: "bolder",
            color: "pink"
        }}  
            style={style}
            exact 
            to="/"
          >Home</NavLink>

        <NavLink className="button"
              activeStyle={{ 
              fontWeight: "bolder",
              color: "pink"
          }}  
              style={style}
              exact
              to="/products/new"
            >Add Product</NavLink>

        <NavLink className="button"
              activeStyle={{ 
              fontWeight: "bolder",
              color: "pink"
          }}  
              style={style}
              exact
              to="/products"
            >Products</NavLink>

          <NavLink className="button"
              activeStyle={{ 
              fontWeight: "bolder",
              color: "pink"
          }}  
              style={style}
              exact
              to="/about"
            >About</NavLink>

    </div>
  )
}

export default Navbar