import React, { useState } from 'react';

export default function AllowAccessToDoctor({ onGoBack }) {
  const [doctorName, setDoctorName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setDoctorName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      {isSubmitted ? (
        <div>
          <p>Allowed access to Dr. {doctorName}</p>
          <button onClick={onGoBack}>Back</button>
        </div>
      ) : (
        <div>
          <p>This is the AllowAccessToDoctor</p>
          <form onSubmit={handleSubmit}>
            <label>
              Doctor Name:
              <input
                type="text"
                value={doctorName}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          <button onClick={onGoBack}>Back</button>
        </div>
      )}
    </div>
  );
}
