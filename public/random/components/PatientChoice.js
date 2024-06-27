import React, { useState, Suspense } from "react";
import MedicalComponent from "./MedicalComponent";
import InsuranceComponent from "./InsuranceComponent";

export default function PatientChoice({onGoBack}) {
  const [componentToShow, setComponentToShow] = useState(null);

  const handleComponentClick = (componentName) => {
    setComponentToShow(componentName);
  };
  const handleGoBackToPatient = () => {
    setComponentToShow(null); // Reset componentToShow to null to show buttons again
    console.log("pressed");
  };


  const renderComponent = () => {
    switch (componentToShow) {
      case "Medical":
        return <MedicalComponent onGoBack={handleGoBackToPatient}/>;
      case "Insurance":
        return <InsuranceComponent onGoBack={handleGoBackToPatient}/>;
      default:
        return null;
    }
  };

  return (
    <div>

      {componentToShow ? (
          renderComponent()
        ) : (
        <div>
            <h2>This is the PatientChoice component.</h2>
          <button onClick={() => handleComponentClick("Medical")}>Medical</button>
          <button onClick={() => handleComponentClick("Insurance")}>Insurance</button>
          <button onClick={onGoBack}>Back</button>
        </div>
      )}
    </div>
  );
}
