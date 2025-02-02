import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import { Link } from 'react-router-dom';

export const Dashboard = () => {
    const [offices, setOffices] = useState([]);

    useEffect(() => {
        const storedOffices = JSON.parse(localStorage.getItem('offices')) || [];
        setOffices(storedOffices);
    }, []);

    const handleDelete = (index) => {
        const updatedOffices = offices.filter((_, i) => i !== index);
        setOffices(updatedOffices);
        localStorage.setItem('offices', JSON.stringify(updatedOffices));
    };

    return (
        <>
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
                    {offices.map((office, index) => (
                        <div key={index} className="office-item">
                            <Link to={`/office/${index}`} state={office}>
                                <div>{office.name}</div>
                            </Link>
                            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    ))}
                    <Link to='/form'>
                        <div style={{ color: 'white' }}>
                            <p style={{ fontSize: '6rem' }}>+</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};
