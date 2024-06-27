// import React, { useState } from 'react';

// export default function AllowAccessToDoctor({ onGoBack }) {
//   const [doctorName, setDoctorName] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleInputChange = (event) => {
//     setDoctorName(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSubmitted(true);
//   };

//   return (
//     <div>
//       {isSubmitted ? (
//         <div>
//           <p>Allowed access to Dr. {doctorName}</p>
//           <button onClick={onGoBack}>Back</button>
//         </div>
//       ) : (
//         <div>
//           <p>This is the AllowAccessToDoctor</p>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Doctor Address:
//               <input
//                 type="text"
//                 value={doctorName}
//                 onChange={handleInputChange}
//                 required
//               />
//             </label>
//             <button type="submit">Submit</button>
//           </form>
//           <button onClick={onGoBack}>Back</button>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useState } from 'react';
import { useContractContext } from '../../../index.js'; // Replace with the actual path to the context file

export default function AllowAccessToDoctor({ onGoBack }) {
  const [doctorAddress, setDoctorAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { mainContract } = useContractContext(); // Accessing mainContract from context

  const handleInputChange = (event) => {
    setDoctorAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the allowPermission function on the mainContract
      const tx = await mainContract.allowPermission(doctorAddress);
      await tx.wait(); // Wait for the transaction to be mined
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error allowing permission:", error);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <div>
          <p>Allowed access to Dr. {doctorAddress}</p>
          <button onClick={onGoBack}>Back</button>
        </div>
      ) : (
        <div>
          <p>This is the AllowAccessToDoctor</p>
          <form onSubmit={handleSubmit}>
            <label>
              Doctor Address:
              <input
                type="text"
                value={doctorAddress}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          <button onClick={onGoBack}>Back</button>
        </div>
      )}
    </div>
  );
}
