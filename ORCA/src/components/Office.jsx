import React from 'react'
import { useLocation } from 'react-router-dom'

export const Office = () => {
    const location = useLocation()
    const array  = location.state
  return (
    <div><h1>{array}</h1></div>
  )
}
