import React from 'react'
import MakeupCards from './MakeupCards'
import Search from './Search'
import Sort from './Sort'

function MakeUpComponentContainer() {
  return (
      <div>
        
       <h1 style={{display: "flex"}}><Search /><Sort /> </h1>
       <div>
       <h2>Product List</h2>
       <MakeupCards />
       </div>
      </div>
  )
}

export default MakeUpComponentContainer