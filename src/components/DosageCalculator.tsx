import React from 'react';

interface DosageCalculatorProps {
  dosage: number | null;
  volume: string | null;
}

const DosageCalculator: React.FC<DosageCalculatorProps> = ({ dosage, volume }) => {
  return (
    <div className="dosage-calculator">
      <h2>Results</h2>
      <div>
        <strong>Calculated Dosage:</strong> {dosage !== null ? `${dosage} mg` : '-'}
      </div>
      <div>
        <strong>Volume to Extract:</strong> {volume !== null ? `${volume} ml` : '-'}
      </div>
    </div>
  );
};

export default DosageCalculator;
