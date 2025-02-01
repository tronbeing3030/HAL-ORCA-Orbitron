import React from 'react'
import './Office.css'
import { useLocation } from 'react-router-dom'

export const Office = () => {
    const location = useLocation()
    const array  = location.state
    const [value, setValue] = useState();
        const inputValue = (evt) => {
            setValue(evt.target.value);
        }
  return (
    <>
      <div className="top">
        <div><h1>OFFICE_1</h1></div>
        <div><button>Save</button></div>
      </div>
      <div className="bottom">
        <div className="left"></div>
        <div className="right">
          <div className="seats">
            <h2>TOTAL SEATS</h2>
            <p>150</p></div>
          <div className="info">
            <div className="form">
            <label>SEAT ID:</label> <input value='###########' />
            <input type="text" placeholder='Employee Name' />
            <input type="text" placeholder='Designation'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
