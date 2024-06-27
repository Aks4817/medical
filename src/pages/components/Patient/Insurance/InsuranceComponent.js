import React from 'react';
import { useState } from 'react';
import InsuranceDetail from './InsuranceDetail';
import StartInsurance from './StartInsurance';

export default function InsuranceComponent({ onGoBack }) {
  const [insuranceExist, SetinsuranceExist] = useState(true);

  const Startins = () => {
    SetinsuranceExist(false);
  }
  return (
    <div>
      {insuranceExist ? (
        <InsuranceDetail onGoBack={onGoBack} Startins={Startins} />
      ) : (
        <StartInsurance onGoBack={onGoBack} />
      )}
    </div>
  );
}
