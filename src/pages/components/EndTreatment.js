// components/EndTreatment.js

import React, { useState } from 'react';

export default function EndTreatment({ patientName, onGoBack }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, e.g., end the treatment for the patient
    console.log('End Treatment for Patient:', patientName);
    setSubmitted(true); // Set submitted to true to display the treatment ended message
  };

  if (submitted) {
    return (
      <div>
        <h2 style={{ fontSize: '24px' }}>Treatment ended for {patientName}</h2>
        <button onClick={()=>{
window.location.reload(true);
}}>Go Back to Doctor Choice</button>
      </div>
    );
  }

  return (
    <div>
      <h2>End Treatment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="patientName">Patient Name:</label>
        <input
          type="text"
          id="patientName"
          value={patientName}
          readOnly // Make the input read-only as we are using it for display only
        />
        <button type="submit">End Treatment</button>
      </form>
    </div>
  );
}
