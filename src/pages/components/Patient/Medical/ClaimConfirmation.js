import { useState } from "react";
export default function claimConfirmation({onGoBack}) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isTreatmentEnded, setIsTreatmentEnded] = useState(false);
  
    const handleYesClick = () => {
      setIsTreatmentEnded(true);
    };
  
    return (
      <div>
        {isTreatmentEnded ? (
          <div>
              <h1>Insurance  Claimed</h1>
              <div>Money Transfered To your account</div>
              <button onClick={onGoBack}>Back</button>
        </div>
  
        ) : (
          <div>
            <p>Confirm?</p>
            <button onClick={handleYesClick}>Yes</button>
            <button onClick={onGoBack}>No</button>
          </div>
        )}
      </div>);
  }