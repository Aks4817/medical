import React, { useState } from 'react';

export default function ViewPatientPastRecord({ onGoBack, doctor, patientData }) {
  const [patientId, setPatientId] = useState('');
  const [dataFetched, setDataFetched] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch patient records using the patientId
    console.log('Submitted Patient ID:', patientId);
    // Simulate data fetch
    setFetchedData(patientData); // Assume patientData is the fetched data
    setDataFetched(true);
    doctor = false;
  };

  const renderTable = () => (
    <table>
      <thead>
        <tr>
          <th>Doctor</th>
          <th>Hospital</th>
          <th>Condition</th>
          <th>Meds</th>
        </tr>
      </thead>
      <tbody>
        {fetchedData.map((record, index) => (
          <tr key={index}>
            <td>{record.doctor}</td>
            <td>{record.hospital}</td>
            <td>{record.condition}</td>
            <td>{record.meds}</td>
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
          <label htmlFor="patientId">Patient ID:</label>
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
