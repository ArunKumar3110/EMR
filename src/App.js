import React from 'react';
import PatientForm from './components/PatientForm';
import PrescriptionForm from './components/PrescriptionForm';

function App() {
  return (
    <div className="App">
      <h1>EMR System</h1>
      <PatientForm />
      <PrescriptionForm />
    </div>
  );
}

export default App;
