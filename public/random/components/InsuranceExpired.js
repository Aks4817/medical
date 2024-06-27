import React from 'react';

function InsuranceExpired({ onGoBack,home,Startins}) {


  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow-lg mt-8">
      <h2 className="text-xl font-bold mb-4">Insurance Expired</h2>
      <p>Do you want a new insurance?</p>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
          onClick={Startins}
        >
          Yes
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={home}
        >
          No
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded ml-2"
          onClick={onGoBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default InsuranceExpired;
