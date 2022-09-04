import React from 'react'

function Footer() {

  const style = {
      position: "absolute",
      bottom: "0",
      width: "100%",
      height: "2.5rem",
      display: "flex"
  }

  return (
    <div style={style}>
      <div style={{ width: "50%", float: "left"  }}>  Istafa Marshall  </div>
      <div style={{ width: "50%", float: "right"  }}>  Maybelline Catalog Collection  </div>
    </div>
  )
}

export default Footer