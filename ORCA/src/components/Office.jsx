import React from 'react'
import './Office.css'
import { useLocation } from 'react-router-dom'
import { FloorData } from './FloorData'
import { useState } from 'react';

export const Office = () => {
    const location = useLocation();
    const array  = location.state;
    const numOfSeatsPerFloor = array[1]/array[2];
    const floorArray = new Array(Number(array[2])).fill(0);

    const options = floorArray.map((a, idx) => {
      return <option key={crypto.randomUUID()} value={idx}>Floor {idx + 1}</option>
    });

    const [value, setValue] = useState(0);
    const [firstIndexPerFloor, setFirstIndexPerFloor] = useState(0);

    const handleChange = (e) => {
      let num = +e.target.value;
      setValue(num);
      const firstIndex = num * numOfSeatsPerFloor;
      setFirstIndexPerFloor(firstIndex);
    };

    
  return (
    <>
      <div className="top">
        <div><h1>{array[0]}</h1></div>
        <div><button>Save</button></div>
      </div>
      <select name='select' value={value} onChange={handleChange}>
            {options}
        </select>
        <FloorData props={[array[1], value, array[2], array[3], array[0], firstIndexPerFloor]}/>
      
    </>
  )
}
