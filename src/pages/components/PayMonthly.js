import React from 'react';
import {useState} from 'react';
import InsuranceExpired from './InsuranceExpired';
import MakePayment from './MakePayment';

function PayMonthly({ onGoBack ,home, Startins,plan}) 
{
    const [isInsuranceExpired, SetisInsuranceExpired] = useState(true);

  return (
    <div >
      {isInsuranceExpired ? (
        <InsuranceExpired onGoBack={onGoBack} home={home} Startins={Startins} />
      ) : (
        <MakePayment home={home} plan={plan} amount={amount}/>
      )}
    </div>
  );
}

export default PayMonthly;
