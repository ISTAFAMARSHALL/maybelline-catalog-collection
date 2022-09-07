import React from 'react'
import { useHistory} from 'react-router-dom'



function Header() {

  const history = useHistory()

  return (
        <h1 id='header' onClick={() => history.push("/")} >
          <div >Maybelline Catalog Collection</div>
        </h1>
  )
}

export default Header