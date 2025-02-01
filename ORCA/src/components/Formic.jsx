import React from 'react'
import './Formic.css'
import { useState } from 'react'
import { Office } from './Office'
import { Link } from 'react-router-dom'

export const Formic = () => {
    const [value, setValue] = useState();
    const inputValue = (evt) => {
        setValue(evt.target.value);
    }
    const [header, setHeader] = useState("COMPANY_NAME");
    const headerValue = (evt) => {
        setHeader(evt.target.value);
    }
  return (
    <>
    <div className='login'> 
    <section className='heading'>
            <div><input type='text' placeholder='Company Name' onChange={headerValue} /></div>
            <div>cross</div>
        </section>        
        <section className='form'>
            <div> 
                <input type="number" placeholder="Total number of seats" onChange={inputValue}/>
            </div>
            <div>
                <input type="number" placeholder="Total working floors" onChange={inputValue}/>
            </div>            
            <div>
                <input type="number" placeholder="Number of seats per floor" onChange={inputValue}/>
            </div>            
            <div>
                <input type="number" placeholder="Total number of employees" onChange={inputValue}/>
            </div>            
        </section>
        <Link to='/office' state={header}><button>SUBMIT</button></Link>
        </div>
    </>
  )
}
