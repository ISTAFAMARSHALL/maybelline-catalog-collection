
import React from 'react'

function Sort({setSort}) {
  return (
    <div style={{display: "flex", marginLeft:"10px"}}> Choose Product Type:
          <select onChange={(e) => setSort(e.target.value)}>
          <option value="">All</option>
          <option value="bronzer">Bronzer</option>
          <option value="blush">Blush</option>
          <option value="lip_liner">Lip Liner</option>
          <option value="foundation">Foundation</option>
          <option value="eyeshadow">Eye Shadow</option>
          <option value="eyeliner">Eye Liner</option>
          <option value="nail_polish">Nail Polish</option>
          <option value="lipstick">Lip Stick</option>
          <option value="mascara">Mascara</option>
        </select>
    </div>
  )
}

export default Sort