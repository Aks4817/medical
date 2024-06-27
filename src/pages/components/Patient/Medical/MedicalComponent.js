import React, { useState } from 'react';
import ViewPatientPastRecord from '../../Common/ViewPatientPastRecord';
import AllowAccessToDoctor from './AllowAccessToDoctor';
import RemoveAccessToDoctor from './RemoveAccessToDoctor';
import EndTreatment from '../../Common/EndTreatment';

export default function MedicalComponent({ onGoBack }) {
  const [componentToShow, setComponentToShow] = useState(null);

  const handleComponentClick = (componentName) => {
    setComponentToShow(componentName);
  };

  const handleGoBackToMedicalComponent = () => {
    setComponentToShow(null); // Reset componentToShow to null to show buttons again
  };

  const renderComponent = () => {
    switch (componentToShow) {
      case 'ViewPastRecord':
        return <ViewPatientPastRecord onGoBack={handleGoBackToMedicalComponent} doctor={false} />;
      case 'AllowAccessToDoctor':
        return <AllowAccessToDoctor onGoBack={handleGoBackToMedicalComponent} />;
      case 'RemoveAccessToDoctor':
        return <RemoveAccessToDoctor onGoBack={handleGoBackToMedicalComponent} />;
      case 'EndTreatment':
        return <EndTreatment onGoBack={handleGoBackToMedicalComponent} isDoctor={false} />;
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
          <button onClick={() => handleComponentClick('ViewPastRecord')}>View your Past Record</button>
          <button onClick={() => handleComponentClick('AllowAccessToDoctor')}>Allow Access To Doctor</button>
          <button onClick={() => handleComponentClick('RemoveAccessToDoctor')}>Remove access from doctor</button>
          <button onClick={() => handleComponentClick('EndTreatment')}>End Treatment</button>
          <button onClick={onGoBack}>Back</button>
        </div>
      )}
    </div>
  );
}