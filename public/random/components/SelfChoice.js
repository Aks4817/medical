import { useState } from "react";
import DoctorChoice from "./DoctorChoice";
import PatientChoice from './PatientChoice';


export default function SelfChoice() {
  const [choice, setChoice] = useState(null);

  const handleDoctorClick = () => {
    setChoice("doctor");
  };
  const handleGoBackToSelf = () => {
    setChoice(null); // Reset componentToShow to null to show buttons again
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
        <DoctorChoice onGoBack={handleGoBackToSelf}/>
      ) : (
        <PatientChoice onGoBack={handleGoBackToSelf}/>
      )}
    </div>
  );
}
