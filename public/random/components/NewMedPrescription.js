// components/NewMedPrescription.js

import React, { useState } from 'react';

export default function NewMedPrescription({ onGoBack }) {
  const [patientId, setpatientId] = useState('');
  const [meds, setMeds] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, e.g., save the prescription details
    const newPrescription = {
      patientId,
      meds,
    };
    console.log('New Prescription:', newPrescription);
    // Clear the form fields after submission
    setpatientId('');
    setMeds('');
  };

  return (
    <div>
      <h2>New Med Prescription</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="patientId">Patient Name:</label>
        <input
          type="text"
          id="patientId"
          value={patientId}
          onChange={(e) => setpatientId(e.target.value)}
          required
        />

        <label htmlFor="meds">Meds:</label>
        <input
          type="text"
          id="meds"
          value={meds}
          onChange={(e) => setMeds(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
      <button onClick={onGoBack}>Go Back to Doctor Choice</button>

    </div>
  );
}
