import React from 'react';

const DosageCalculator = ({ dosage, volume }) => {
  return (
    <div className="dosage-calculator">
      <h2>Results</h2>
      <div>
        <strong>Calculated Dosage:</strong> {dosage ? `${dosage} mg` : '-'}
      </div>
      <div>
        <strong>Volume to Extract:</strong> {volume ? `${volume} ml` : '-'}
      </div>
    </div>
  );
};

export default DosageCalculator;
