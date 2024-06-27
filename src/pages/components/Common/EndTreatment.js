// // components/EndTreatment.js

// import React, { useState } from 'react';

// export default function EndTreatment({ onGoBack }) {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the form submission here, e.g., end the treatment for the patient
//     console.log('End Treatment for Patient:', patientName);
//     setSubmitted(true); // Set submitted to true to display the treatment ended message
//   };

//   if (submitted) {
//     return (
//       <div>
//         <h2 style={{ fontSize: '24px' }}>Treatment ended for {patientName}</h2>
//         <button onClick={onGoBack}>Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>End Treatment</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="patientName">Patient Name:</label>
//         <input
//           type="text"
//           id="patientName"
//           value={patientName}
//           readOnly // Make the input read-only as we are using it for display only
//         />
//         <button type="submit">End Treatment</button>
//       </form>
//       <button onClick={onGoBack}>Go Back</button>

//     </div>
//   );
// }




import React, { useState } from 'react';
import { useContractContext } from '../../index'; // Replace with the actual path to the context file

export default function EndTreatment({ onGoBack, isDoctor }) {
  const [patientAddress, setPatientAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { mainContract, userAddress } = useContractContext(); // Access mainContract and userAddress from context


  const handleConfirm = async (e) => {
    try {
      // Determine the patient's address based on user role
      const patient = isDoctor ? patientAddress : userAddress;

      // Call endTreatment function on mainContract
      await mainContract.endTreatment(patient);

      // Log success or perform any post-submit actions
      console.log('Treatment ended for patient:', patient);
      setSubmitted(true); // Set submitted to true to display the treatment ended message
    } catch (error) {
      console.error('Error ending treatment:', error);
      // Handle error state or show error message to user
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleConfirm();
  };
  return (
    <div>
      {submitted ? (
        <div>
          <h2 style={{ fontSize: '24px' }}>Treatment ended successfully</h2>
          <button onClick={onGoBack}>Go Back</button>
        </div>
      ) : (
        <div>
          <h2>End Treatment</h2>
          {isDoctor ? (
            <form onSubmit={handleSubmit}>
              <label htmlFor="patientAddress">Patient Address:</label>
              <input
                type="text"
                id="patientAddress"
                value={patientAddress}
                onChange={(e) => setPatientAddress(e.target.value)}
                required
              />
              <button type="submit">End Treatment</button>
            </form>
          ) : (
            <button onClick={handleConfirm}>Click to end Treatment</button>
          )}
          <button onClick={onGoBack}>Go Back</button>
        </div>
      )}
    </div>
  );
}
