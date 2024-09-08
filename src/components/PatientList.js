import React, { useState, useEffect } from 'react';
import api from '../api';

const PatientList = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        api.get('/patients/')
            .then(response => {
                setPatients(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the patients!', error);
            });
    }, []);

    return (
        <div>
            <h2>Patient List</h2>
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>{patient.name} - {patient.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;
