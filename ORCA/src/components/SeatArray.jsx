import React, { useState } from 'react';
import './SeatArray.css';
import { SeatInfo } from './SeatInfo';

export const SeatArray = ({ props }) => {
    const seatsPerFloor = Math.floor(props.seats / props.floors);
    const extraSeats = props.seats % props.floors;
    const arrlen = Math.floor(seatsPerFloor / 13);
    const floorArr = new Array(arrlen).fill("Apple");
    const row = new Array(13).fill("A");
    const extra = new Array(seatsPerFloor % 13).fill("S");

    let orderindex = props.initialIdx;

    const [selectedSeat, setSelectedSeat] = useState(null);
    const [employeeData, setEmployeeData] = useState(props.employeesDB || {});

    const openSeatInfo = (seatIndex) => {
        setSelectedSeat(seatIndex);
    };

    const handleEmployeeSubmit = (seatId, name, designation) => {
        setEmployeeData(prevData => ({
            ...prevData,
            [seatId]: { name, designation }
        }));
        setSelectedSeat(null); // Close the SeatInfo after submission
    };

    const isAssigned = (seatId) => {
        const employee = employeeData[seatId];
        return employee && employee.name !== 'N/A' && employee.designation !== 'N/A';
    };

    return (
        <div>
            <div className='arr'>
                {floorArr.map((a, idx) => {
                    return (
                        <div key={idx} className='array'>
                            {row.map((item, i) => {
                                const currentIndex = orderindex++;
                                const isSelected = selectedSeat === currentIndex;
                                return (
                                    <div
                                        key={currentIndex}
                                        className={`seat ${isAssigned(currentIndex + 1) ? 'assigned' : ''} ${isSelected ? 'selected' : ''}`}
                                        onClick={() => openSeatInfo(currentIndex)}
                                    >
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
                <div className="extra">
                    {extra.map((a, idx) => {
                        const currentIndex = orderindex++;
                        const isSelected = selectedSeat === currentIndex;
                        return (
                            <div
                                key={currentIndex}
                                className={`seat ${isAssigned(currentIndex + 1) ? 'assigned' : ''} ${isSelected ? 'selected' : ''}`}
                                onClick={() => openSeatInfo(currentIndex)}
                            >
                            </div>
                        );
                    })}
                </div>
            </div>

            {selectedSeat !== null && (
                <SeatInfo
                    seatIndex={selectedSeat}
                    employeesDB={employeeData[selectedSeat + 1] || { name: 'N/A', designation: 'N/A' }}
                    onSubmit={handleEmployeeSubmit}
                />
            )}
        </div>
    );
};
