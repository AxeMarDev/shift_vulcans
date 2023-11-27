import React, { useState } from "react";


const Calc = () => {
  const [hoursWorked, setHoursWorked] = useState(0);
  const [hourlyWage, setHourlyWage] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [totalPay, setTotalPay] = useState(0);

  const calculatePay = () => {
    const payBeforeTax = hoursWorked * hourlyWage;
    const taxAmount = (payBeforeTax * taxRate) / 100;
    const netPay = payBeforeTax - taxAmount;
    setTotalPay(netPay);
  };

  return (
    <div className="pay-calculator-container">
      <h2 className="calculator-title">Pay Calculator</h2>
      <div className="input-container">
        <label className="input-label">
          Hours Worked:
          <input
            className="input-field"
            type="number"
            value={hoursWorked}
            onChange={(e) => setHoursWorked(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div className="input-container">
        <label className="input-label">
          Hourly Wage ($):
          <input
            className="input-field"
            type="number"
            value={hourlyWage}
            onChange={(e) => setHourlyWage(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div className="input-container">
        <label className="input-label">
          Tax Rate (%):
          <input
            className="input-field"
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <button className="calculate-button" onClick={calculatePay}>
        Calculate Pay
      </button>
      <div className="result-container">
        <h3 className="total-pay">Total Pay: ${totalPay}</h3>
      </div>
    </div>
  );
};

export default Calc;