import React, { useState } from "react";
import DoctorChoice from "./Doctor/DoctorChoice";
import PatientChoice from './Patient/PatientChoice';
// import { useContractContext } from '../index'; // Adjust the import path as necessary

export default function SelfChoice() {
  const [choice, setChoice] = useState(null);
  // const { mainContract, insuranceContract, signer } = useContractContext();

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
