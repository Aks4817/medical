// // components/AddNewPatientRecord.js

// import React, { useState } from 'react';

// export default function AddNewPatientRecord({ onGoBack }) {
//   const [patientName, setPatientName] = useState('');
//   const [hospitalName, setHospitalName] = useState('');
//   const [condition, setCondition] = useState('');
//   const [fees, setFees] = useState('');
//   const [meds, setMeds] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the form submission here, e.g., save the patient record
//     const newPatientRecord = {
//       patientName,
//       hospitalName,
//       condition,
//       fees,
//       meds,
//     };
//     console.log('New Patient Record:', newPatientRecord);
//     // Clear the form fields after submission
//     setPatientName('');
//     setHospitalName('');
//     setCondition('');
//     setFees('');
//     setMeds('');
//   };

//   return (
//     <div>
//       <h2>Add New Patient Record</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="patientName">Patient Name:</label>
//         <input
//           type="text"
//           id="patientName"
//           value={patientName}
//           onChange={(e) => setPatientName(e.target.value)}
//           required
//         />

//         <label htmlFor="hospitalName">Hospital Name:</label>
//         <input
//           type="text"
//           id="hospitalName"
//           value={hospitalName}
//           onChange={(e) => setHospitalName(e.target.value)}
//           required
//         />

//         <label htmlFor="condition">Condition:</label>
//         <input
//           type="text"
//           id="condition"
//           value={condition}
//           onChange={(e) => setCondition(e.target.value)}
//           required
//         />

//         <label htmlFor="fees">Fees:</label>
//         <input
//           type="text"
//           id="fees"
//           value={fees}
//           onChange={(e) => setFees(e.target.value)}
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
import { useContractContext } from '.../../../index'; // Replace with the actual path to the context file

export default function AddNewPatientRecord({ onGoBack }) {
  const [patientName, setPatientName] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [condition, setCondition] = useState('');
  const [fees, setFees] = useState('');
  const [meds, setMeds] = useState('');
  const { mainContract, userAddress } = useContractContext(); // Access mainContract and userAddress from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call addRecord function on the mainContract
      await mainContract.addRecord(
        userAddress,         // Patient's address
        hospitalName,
        condition,
        meds,
        fees
      );

      // Log success or perform any post-submit actions
      console.log('Patient record added successfully');

      // Clear the form fields after submission
      setPatientName('');
      setHospitalName('');
      setCondition('');
      setFees('');
      setMeds('');
    } catch (error) {
      console.error('Error adding patient record:', error);
      // Handle error state or show error message to user
    }
  };

  return (
    <div>
      <h2>Add New Patient Record</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="patientName">Patient Name:</label>
        <input
          type="text"
          id="patientName"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />

        <label htmlFor="hospitalName">Hospital Name:</label>
        <input
          type="text"
          id="hospitalName"
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
          required
        />

        <label htmlFor="condition">Condition:</label>
        <input
          type="text"
          id="condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          required
        />

        <label htmlFor="fees">Fees:</label>
        <input
          type="text"
          id="fees"
          value={fees}
          onChange={(e) => setFees(e.target.value)}
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
      <button onClick={onGoBack}>Go Back to Doctor Choice</button>
    </div>
  );
}
