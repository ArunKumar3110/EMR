import React, { useState } from 'react';
import axios from 'axios';

const PrescriptionForm = () => {
  const [file, setFile] = useState(null);
  const [patientId, setPatientId] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !patientId) {
      alert("Please provide all required fields.");
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('patient_id', patientId);
    try {
      await axios.post('http://localhost:8000/upload_prescription/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert("Prescription uploaded successfully!");
      setFile(null);
      setPatientId('');
    } catch (error) {
      console.error("Error uploading prescription:", error);
      alert("Failed to upload prescription.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={patientId} onChange={(e) => setPatientId(e.target.value)} placeholder="Patient ID" required />
      <input type="file" onChange={handleFileChange} required />
      <button type="submit">Upload Prescription</button>
    </form>
  );
};

export default PrescriptionForm;
