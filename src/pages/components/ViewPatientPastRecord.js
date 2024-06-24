// components/ViewPatientPastRecord.js

import React, { useState } from 'react';

export default function ViewPatientPastRecord({ onGoBack }) {
  const [patientId, setPatientId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, e.g., fetch patient records using the patientId
    //Shiv You can do it    
    console.log('Submitted Patient ID:', patientId);
  };

  return (
    <div>
      <h2>View Patient Past Record</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="patientId">Patient ID:</label>
        <input
          type="text"
          id="patientId"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={onGoBack}>Go Back to Doctor Choice</button>

    </div>
  );
}
