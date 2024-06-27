// // components/NewMedPrescription.js
// import React, { useState } from 'react';

// export default function NewMedPrescription({ onGoBack }) {
//   const [patientId, setpatientId] = useState('');
//   const [meds, setMeds] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the form submission here, e.g., save the prescription details
//     const newPrescription = {
//       patientId,
//       meds,
//     };
//     console.log('New Prescription:', newPrescription);
//     // Clear the form fields after submission
//     setpatientId('');
//     setMeds('');
//   };

//   return (
//     <div>
//       <h2>New Med Prescription</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="patientId">Patient Name:</label>
//         <input
//           type="text"
//           id="patientId"
//           value={patientId}
//           onChange={(e) => setpatientId(e.target.value)}
//           required
//         />

//         <label htmlFor="meds">Meds:</label>
//         <input
//           type="text"
//           id="meds"
//           value={meds}
//           onChange={(e) => setMeds(e.target.value)}
//           required
//         />

//         <button type="submit">Submit</button>
//       </form>
//       <button onClick={onGoBack}>Go Back to Doctor Choice</button>

//     </div>
//   );
// }


import React, { useState } from 'react';
import { useContractContext } from '../../index'; // Replace with the actual path to the context file

export default function NewMedPrescription({ onGoBack }) {
  const [patientId, setPatientId] = useState('');
  const [meds, setMeds] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { mainContract } = useContractContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mainContract.changeMeds(patientId, meds);
      console.log('New Prescription:', { patientId, meds });
      setSubmitted(true);
    } catch (error) {
      console.error('Error changing meds:', error);
    }
  };

  return (
    <div>
      {submitted ? (
        <div>
          <h2>Prescription updated successfully</h2>
        </div>
      ) : (
        <div>
          <h2>New Med Prescription</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="patientId">Patient Address:</label>
            <input
              type="text"
              id="patientId"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              required
            />

            <label htmlFor="meds">Meds:</label>
            <input
              type="text"
              id="meds"
              value={meds}
              onChange={(e) => setMeds(e.target.value)}
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
}
