import React, { useState, useEffect } from 'react';
import PayMonthly from './PayMonthly';
import ClaimConfirmation from './ClaimConfirmation';

function InsuranceDetail({ onGoBack, Startins }) {
  const [insuranceData, setInsuranceData] = useState({ "type": "a", "amount": "200", "monthlyPaid": "99", "claimDuration": "60", "lastClaimedOn": "55" });
  const [showInsurancePayment, setShowInsurancePayment] = useState(false);
  const [showClaimConfirmation, setShowClaimConfirmation] = useState(false);
  const [showPatientDetails, setShowPatientDetails] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch insurance data
    fetchInsuranceData();
  }, []);

  const ReturnToStartInsurance = () => {
    setShowInsurancePayment(false);
    setShowClaimConfirmation(false);
    setShowPatientDetails(true);
  }

  const fetchInsuranceData = async () => {
    // Replace with actual API endpoint
    try {
      // Example API response
      const response = await fetch('https://api.example.com/insurance');
      const data = await response.json();
      setInsuranceData(data);
    } catch (error) {
      console.error('Error fetching insurance data:', error);
    }
  };

  const handlePayMonthlyCharge = () => {
    setShowInsurancePayment(true);
    setShowClaimConfirmation(false); // Hide claim confirmation if shown
    setShowPatientDetails(false); // Hide patient details
  };

  const handleClaim = () => {
    setShowClaimConfirmation(true);
    setShowInsurancePayment(false); // Hide insurance payment if shown
    setShowPatientDetails(false); // Hide patient details
  };

  return (
    <div >
      {showPatientDetails && (
        <div>
          <h2 className="text-xl font-bold mb-4">Insurance Details</h2>
          {insuranceData ? (
            <div>
              <p><span className="font-semibold">Insurance Type:</span> {insuranceData.type}</p>
              <p><span className="font-semibold">Insurance Amount:</span> {insuranceData.amount}</p>
              <p><span className="font-semibold">Monthly Paid:</span> {insuranceData.monthlyPaid}</p>
              <p><span className="font-semibold">Claim Duration:</span> {insuranceData.claimDuration}</p>
              <p><span className="font-semibold">Last Claimed on:</span> {insuranceData.lastClaimedOn}</p>
            </div>
          ) : (
            <p>Loading insurance data...</p>
          )}
        </div>
      )}

      {showPatientDetails && (
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
            onClick={handlePayMonthlyCharge}
          >
            Pay Monthly Charge
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={handleClaim}
          >
            Claim
          </button>
          <button className='bg-gray-600 hover:bg-slate-700 text-white px-4 py-2 rounded ml-2' onClick={onGoBack}>Back</button>

        </div>
      )}

      {showInsurancePayment && <PayMonthly onGoBack={ReturnToStartInsurance} home={onGoBack} Startins={Startins} plan={insuranceData.type} amount={insuranceData.amount} />}
      {showClaimConfirmation && <ClaimConfirmation onGoBack={ReturnToStartInsurance} />}
    </div>
  );
}

export default InsuranceDetail;
