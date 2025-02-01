import React from 'react'
import './Office.css'
import { useLocation } from 'react-router-dom'

export const Office = () => {
    const location = useLocation()
    const array  = location.state
  return (
    <>
      <div className="top">
        <div><h1>OFFICE_1</h1></div>
        <div><button>Save</button></div>
      </div>
      <div className="bottom">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </>
  )
}
