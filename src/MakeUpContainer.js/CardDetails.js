import React from 'react'
import { useParams } from 'react-router-dom'


function CardDetails({products}) {

  const {id } = useParams();
  console.log(products)
  
  return (
    <div>CardDetails</div>
  )
}

export default CardDetails