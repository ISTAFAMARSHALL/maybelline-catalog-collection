import React from 'react'

function Search ({search, setSearch}) {
  return (
    <div style={{display: "flex" }}>Search: 
      <input  type="text" placeholder='Enter Seatch Here....' value={search}  onChange={(e) => setSearch(e.target.value)} ></input>
    </div>
  )
}

export default Search 