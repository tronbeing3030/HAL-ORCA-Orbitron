import React from 'react'
import "./Dashboard.css"
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div>        
    <div className="container">
        <nav>
            <div><p>ORBITRON</p></div>
            <div><p>LOG OUT</p></div>
        </nav>
        <div className="dash"><h1>DASHBOARD</h1></div>
    </div>
        <div className="bar"></div>
    <div className="bottom">
        <div className="title">
            <div><p>DASHBOARD1</p></div>
            <div><p className="add">ADD+</p></div>
        </div>
        <div className="panels">
            <div>OFFICE_1</div>
            <Link to='/form'><div style={{color:'white'}}><p style={{fontSize:'6rem'}}>
                +
                </p></div></Link>
        </div>
    </div>
    </div>
  )
}
