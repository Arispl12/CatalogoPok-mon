import React from 'react'
import { useParams } from 'react-router-dom'
const Personaje = () => {
    const params =useParams()
  return (
    <div>Personaje con el id {params.id}</div>
  )
}

export default Personaje
