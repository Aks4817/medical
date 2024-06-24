import { useState } from "react";
import DoctorChoice from "./DoctorChoice";


function PatientChoice() {
  return <div>This is the PatientChoice component.</div>;
}

export default function SelfChoice() {
  const [choice, setChoice] = useState(null);

  const handleDoctorClick = () => {
    setChoice("doctor");
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
        <DoctorChoice />
      ) : (
        <PatientChoice />
      )}
    </div>
  );
}
