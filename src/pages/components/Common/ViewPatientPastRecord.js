// import React, { useState } from 'react';

// export default function ViewPatientPastRecord({ onGoBack, doctor, patientData }) {
//   const [patientId, setPatientId] = useState('');
//   const [dataFetched, setDataFetched] = useState(false);
//   const [fetchedData, setFetchedData] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Fetch patient records using the patientId
//     console.log('Submitted Patient ID:', patientId);
//     // Simulate data fetch
//     setFetchedData(patientData); // Assume patientData is the fetched data
//     setDataFetched(true);
//     doctor = false;
//   };

//   const renderTable = () => (
//     <table>
//       <thead>
//         <tr>
//           <th>Doctor</th>
//           <th>Hospital</th>
//           <th>Condition</th>
//           <th>Meds</th>
//         </tr>
//       </thead>
//       <tbody>
//         {fetchedData.map((record, index) => (
//           <tr key={index}>
//             <td>{record.doctor}</td>
//             <td>{record.hospital}</td>
//             <td>{record.condition}</td>
//             <td>{record.meds}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );

//   return (
//     <div>
//       <h2>View Patient Past Record</h2>
//       {doctor ? (
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="patientId">Patient ID:</label>
//           <input
//             type="text"
//             id="patientId"
//             value={patientId}
//             onChange={(e) => setPatientId(e.target.value)}
//             required
//           />
//           <button type="submit">Submit</button>
//         </form>
//       ) : (
//         <>{dataFetched ? renderTable() : <p>Loading...</p>}</>
//       )}
//       <button onClick={onGoBack}>Go Back</button>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { useContractContext } from '../../index'; // Replace with the actual path to the context file

export default function ViewPatientPastRecord({ onGoBack, doctor }) {
  const [patientId, setPatientId] = useState('');
  const [dataFetched, setDataFetched] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const { mainContract, userAddress } = useContractContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const records = await mainContract.viewRecords(patientId);
      setFetchedData(records);
      setDataFetched(true);
    } catch (error) {
      console.error('Error fetching patient records:', error);
    }
  };

  const renderTable = () => (
    <table>
      <thead>
        <tr>
          <th>Doctor</th>
          <th>Hospital</th>
          <th>Condition</th>
          <th>Meds</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {fetchedData.map((record, index) => (
          <tr key={index}>
            <td>{record.doctor}</td>
            <td>{record.hospital}</td>
            <td>{record.condition}</td>
            <td>{record.meds.map((med) => `${med.Name} (Start: ${new Date(med.startDate * 1000).toLocaleDateString()}, End: ${new Date(med.endDate * 1000).toLocaleDateString()})`).join(', ')}</td>
            <td>{record.fees}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <h2>View Patient Past Record</h2>
      {doctor ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="patientId">Patient Address:</label>
          <input
            type="text"
            id="patientId"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>{dataFetched ? renderTable() : <p>Loading...</p>}</>
      )}
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
}
