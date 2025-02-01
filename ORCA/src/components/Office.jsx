import React from 'react'
import './Office.css'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

export const Office = () => {
    const location = useLocation()
    const array  = location.state
    const [value, setValue] = useState();
        const inputValue = (evt) => {
            setValue(evt.target.value);
        }

    const loop = () => {
        const employees = [];
        for(let i = 0; i < 200; i++){
        employee = {
          "_id": 1000 + i,
          "employee_name": "Employee" + i,
          "designation": random.choice(designations),
          "seat_id": str(200 + i) 
          }
          employees.push(employee)
        }
        return Array.map((employee) => <div style={{border: "1px solid white"}}></div>)
      }
  return (
    <>
      <div className="top">
        <div><h1>OFFICE_1</h1></div>
        <div><button>Save</button></div>
      </div>
      <div className="bottom">
        <div className="left">{[1,2,3]}</div>
        <div className="right">
          <div className="seats">
            <h2>TOTAL SEATS</h2>
            <p>150</p></div>
          <div className="info">
            <div className="form">
            <label>SEAT ID:</label> <input placeholder='##########' onChange={inputValue} />
            <input type="text" placeholder='Employee Name' onChange={inputValue} />
            <input type="text" placeholder='Designation' onChange={inputValue}/>
            <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
