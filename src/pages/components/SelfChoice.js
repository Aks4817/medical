import { useState } from "react";
import DoctorChoice from "./Doctor/DoctorChoice";
import PatientChoice from './Patient/PatientChoice';

export default function SelfChoice() {
  const [choice, setChoice] = useState(null);

  const handleDoctorClick = () => {
    setChoice("doctor");
  };
  const handleGoBackToSelf = () => {
    setChoice(null);
  };

  const handlePatientClick = () => {
    setChoice("patient");
  };

  return (
    <div>
      {!choice ? (
        <>
          <button onClick={handleDoctorClick}>Doctor</button>
          <button onClick={handlePatientClick}>Patient</button>
        </>
      ) : choice === "doctor" ? (
        <DoctorChoice onGoBack={handleGoBackToSelf} />
      ) : (
        <PatientChoice onGoBack={handleGoBackToSelf} />
      )}
    </div>
  );
}
