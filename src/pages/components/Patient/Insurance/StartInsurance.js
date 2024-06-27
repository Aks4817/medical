import React, { useState, useEffect } from 'react';
import MakePayment from './MakePayment';

function StartInsurance({ onGoBack }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [SelectedAmount, setSelectedAmount] = useState('99');

  const [plans, setPlans] = useState([
    {
      name: 'Small',
      amount: '100',
      description: 'Basic coverage for individuals',
    },
    {
      name: 'Medium',
      amount: '300',
      description: 'Moderate coverage for families',
    },
    {
      name: 'Large',
      amount: '500',
      description: 'Comprehensive coverage for large families',
    },
  ]);
  const [loading, setLoading] = useState(false); // For loading state

  useEffect(() => {
    fetchInsurancePlans();
  }, []);

  const fetchInsurancePlans = async () => {
    try {
      // Example API call to fetch insurance plans data
      const response = await fetch('https://api.example.com/insurance/plans');
      const data = await response.json();
      setPlans(data.plans); // Assuming API response is an array of plan objects
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching insurance plans:', error);
      setLoading(false); // Set loading to false on error
    }
  };

  const handlePlanSelect = (plan, amount) => {
    // Handle selection of insurance plan, e.g., redirect to payment page or next step
    setSelectedPlan(plan.name);
    setSelectedAmount(plan.amount);
    console.log(`Selected ${plan} plan`);
  };

  return (
    <div>
      {selectedPlan ? (
        <MakePayment onGoBack={onGoBack} plan={selectedPlan} amount={SelectedAmount} home={onGoBack} />
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Choose Your Insurance Plan</h2>
          {plans.map((plan, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p>{plan.description}</p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2"
                onClick={() => handlePlanSelect(plan)}
              >
                Select {plan.name} Plan
              </button>
            </div>
          ))}
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded mt-4"
            onClick={onGoBack}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}


export default StartInsurance;
