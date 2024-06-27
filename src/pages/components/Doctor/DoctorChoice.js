import React, { useState } from 'react';
import ViewPatientPastRecord from '../Common/ViewPatientPastRecord';
import AddNewPatientRecord from './AddNewPatientRecord';
import NewMedPrescription from './NewMedPrescription';
import EndTreatment from '../Common/EndTreatment';

export default function DoctorChoice({ onGoBack }) {
  const [componentToShow, setComponentToShow] = useState(null);

  const handleComponentClick = (componentName) => {
    setComponentToShow(componentName);
  };

  const handleGoBack = () => {
    setComponentToShow(null); // Reset componentToShow to null to show buttons again
  };

  const renderComponent = () => {
    switch (componentToShow) {
      case 'ViewPatientPastRecord':
        return <ViewPatientPastRecord onGoBack={handleGoBack} doctor={true} />;
      case 'AddNewPatientRecord':
        return <AddNewPatientRecord onGoBack={handleGoBack} />;
      case 'NewMedPrescription':
        return <NewMedPrescription onGoBack={handleGoBack} />;
      case 'EndTreatment':
        return <EndTreatment onGoBack={handleGoBack} isDoctor={true} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>This is the DoctorChoice component.</h1>
      {componentToShow ? (
        renderComponent()
      ) : (
        <div>
          <button onClick={() => handleComponentClick('ViewPatientPastRecord')}>View Patient Past Record</button>
          <button onClick={() => handleComponentClick('AddNewPatientRecord')}>Add New Patient Record</button>
          <button onClick={() => handleComponentClick('NewMedPrescription')}>New Med Prescription</button>
          <button onClick={() => handleComponentClick('EndTreatment')}>End Treatment</button>
          <button onClick={onGoBack}>Back</button>

        </div>
      )}
    </div>
  );
}

