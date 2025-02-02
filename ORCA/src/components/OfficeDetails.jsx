import React, { useState } from 'react';
import './Office.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { FloorData } from './FloorData';

export const OfficeDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const office = location.state;
    const numOfSeatsPerFloor = office.totalSeats / office.totalFloors;
    const floorArray = new Array(Number(office.totalFloors)).fill(0);

    const [value, setValue] = useState(0);
    const [firstIndexPerFloor, setFirstIndexPerFloor] = useState(0);

    const handleChange = (e) => {
        let num = +e.target.value;
        setValue(num);
        const firstIndex = num * numOfSeatsPerFloor;
        setFirstIndexPerFloor(firstIndex);
    };

    const handleSave = () => {
        const newOffice = {
            name: office.name,
            totalSeats: office.totalSeats,
            totalFloors: office.totalFloors,
            numOfEmployees: office.numOfEmployees,
        };
        // Store the new office data in local storage or state management solution
        const existingOffices = JSON.parse(localStorage.getItem('offices')) || [];
        existingOffices.push(newOffice);
        localStorage.setItem('offices', JSON.stringify(existingOffices));
        
        // Redirect to the home page
        navigate('/');
    };

    const options = floorArray.map((a, idx) => {
        return <option key={crypto.randomUUID()} value={idx}>Floor {idx + 1}</option>;
    });

    return (
        <>
            <div className="top">
                <div><h1>{office.name}</h1></div>
                <div><button onClick={handleSave}>Save</button></div>
            </div>
            <select name='select' value={value} onChange={handleChange}>
                {options}
            </select>
            <FloorData props={[office.totalSeats, value, office.totalFloors, office.numOfEmployees, office.name, firstIndexPerFloor]} />
        </>
    );
};
