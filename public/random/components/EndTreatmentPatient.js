import React, { useState } from 'react';

export default function EndTreatmentPatient({ onGoBack }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isTreatmentEnded, setIsTreatmentEnded] = useState(false);

  const handleYesClick = () => {
    setIsTreatmentEnded(true);
  };

  const handleNoClick = () => {
    onGoBack();
  };

  return (
    <div>
      {isTreatmentEnded ? (
        <div>
            <h1>Treatment ended</h1>
            <button onClick={onGoBack}>Back</button>
      </div>

      ) : (
        <div>
          <p>Confirm?</p>
          <button onClick={handleYesClick}>Yes</button>
          <button onClick={handleNoClick}>No</button>
        </div>
      )}
    </div>
  );
}
