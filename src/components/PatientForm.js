import React, { useState } from 'react';
import axios from 'axios';

const PatientForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/patients/', { name, email });
      alert("Patient added successfully!");
      setName('');
      setEmail('');
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("Failed to add patient.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default PatientForm;
