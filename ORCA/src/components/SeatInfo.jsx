import React, { useState, useEffect } from 'react';
import './SeatInfo.css';

export const SeatInfo = ({ seatIndex, employeesDB, onSubmit }) => {
    const [seatId, setSeatId] = useState(Math.floor(seatIndex) + 1);
    const [name, setName] = useState(employeesDB.name || 'N/A');
    const [designation, setDesignation] = useState(employeesDB.designation || 'N/A');

    useEffect(() => {
        setSeatId(Math.floor(seatIndex) + 1);
        setName(employeesDB.name || 'N/A');
        setDesignation(employeesDB.designation || 'N/A');
    }, [seatIndex, employeesDB]);

    const handleSeatIdChange = (evt) => {
        setSeatId(evt.target.value);
    };

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    };

    const handleDesignationChange = (evt) => {
        setDesignation(evt.target.value);
    };

    const handleSubmit = () => {
        onSubmit(seatId, name, designation);
    };

    return (
        <>
            <div className="info">
                <div className="formal">
                    <div className="seat-id"><label>SEAT ID:</label>
                    <input placeholder='##########' value={seatId} onChange={handleSeatIdChange} />
                    </div>
                    <input type="text" placeholder='Employee Name' value={name} onChange={handleNameChange} />
                    <input type="text" placeholder='Designation' value={designation} onChange={handleDesignationChange} />
                    <button onClick={handleSubmit}>SUBMIT</button>
                </div>
            </div>
        </>
    );
};
