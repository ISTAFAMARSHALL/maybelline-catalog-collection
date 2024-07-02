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
          ><button >Home</button></NavLink>

        <NavLink className="button"
              activeStyle={{ 
              fontWeight: "bolder",
              color: "pink"
          }}  
              style={style}
              exact
              to="/products/new"
            ><button >Add Product</button></NavLink>

        <NavLink 
              activeStyle={{ 
              fontWeight: "bolder",
              color: "pink"
          }}  
              style={style}
              exact
              to="/products"
            ><button >Products</button></NavLink>

          <NavLink className="button"
              activeStyle={{ 
              fontWeight: "bolder",
              color: "pink"
          }}  
              style={style}
              exact
              to="/about"
            ><button >About</button></NavLink>

    </div>
  )
}

export default Navbar