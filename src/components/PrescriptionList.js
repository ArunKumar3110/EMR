import React, { useEffect, useState } from 'react';
import api from '../api';

const PrescriptionList = ({ patientId }) => {
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        api.get(`/patients/${patientId}/prescriptions/`)
            .then(response => {
                setPrescriptions(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the prescriptions!', error);
            });
    }, [patientId]);

    return (
        <div>
            <h2>Prescriptions</h2>
            <ul>
                {prescriptions.map(prescription => (
                    <li key={prescription.id}>{prescription.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default PrescriptionList;
