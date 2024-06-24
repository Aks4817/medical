import React from 'react';

function MakePayment({ plan, amount, home }) {
    const handlePayment=()=>{
        console.log("money is paid");
    }
  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow-lg mt-8">
      <h2 className="text-xl font-bold mb-4">Make Payment</h2>
      <p><strong>Insurance Type:</strong> {plan}</p>
      <p><strong>Amount to be Paid:</strong> {amount}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
        onClick={handlePayment}
      >
        Pay Money
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded mt-4 ml-2"
        onClick={home}
      >
        Home
      </button>
    </div>
  );
}

export default MakePayment;
