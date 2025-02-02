import React, { useState } from 'react';
import './Formic.css';
import { Link } from 'react-router-dom';

export const Formic = () => {
    const [companyName, setCompanyName] = useState("OFFICE_NAME");
    const [totalSeats, setTotalSeats] = useState("");
    const [totalFloors, setTotalFloors] = useState("");
    const [seatsPerFloor, setSeatsPerFloor] = useState("");
    const [numOfEmployees, setNumOfEmployees] = useState("");

    const handleCompanyNameChange = (evt) => {
        setCompanyName(evt.target.value);
    };

    const handleTotalSeatsChange = (evt) => {
        setTotalSeats(evt.target.value);
    };

    const handleTotalFloorsChange = (evt) => {
        setTotalFloors(evt.target.value);
    };

    const isFormValid = () => {
        return (
            companyName.trim() !== "" &&
            totalSeats.trim() !== "" &&
            totalFloors.trim() !== "" 
        );
    };

    return (
        <>
            <div className='office-details'>
                <section className='heading'>
                    <div>
                        <input type='text' placeholder='Company Name' value={companyName} onChange={handleCompanyNameChange} required/>
                    </div>
                </section>
                <section className='form'>
                    <div>
                        <input type="number" placeholder="Total number of seats" value={totalSeats} onChange={handleTotalSeatsChange} required/>
                    </div>
                    <div>
                        <input type="number" placeholder="Total working floors" value={totalFloors} onChange={handleTotalFloorsChange} required/>
                    </div>
                </section>
                {isFormValid() ? (
                    <Link to='/office' state={[companyName, totalSeats, totalFloors]}><button>SUBMIT</button></Link>
                ) : (
                    <button disabled>SUBMIT</button>
                )}
            </div>
        </>
    );
};
