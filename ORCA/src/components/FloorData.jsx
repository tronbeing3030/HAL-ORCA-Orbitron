import React from 'react'
import { SeatArray } from './SeatArray'
import { useState } from 'react';

export const FloorData = ({props}) => {
    const createEmployeeDatabase = (numEmployees) => {
        const employeeDatabase = [];
        for (let i = 0; i < numEmployees; i++) {
            employeeDatabase.push({
                id: i + 1,
                name: '',
                designation: ''
            });
        }
        return employeeDatabase;
    };

    const [employeeDatabase, setEmployeeDatabase] = useState(createEmployeeDatabase(props[3]));
  return (
    <div>
        <div className="below">
            <div className="left">
                <SeatArray props={{
                    heading: props[4],
                    seats: props[0],
                    floors: props[2],
                    employees: props[3],
                    initialIdx: props[5],
                    employeesDB: employeeDatabase
                    }}/>
            </div>
            <div className="right">
                
                <div className="seats">
                    <h2>Total<br/>Seats</h2>
                    <p>{Math.floor(props[0]/props[2])}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
