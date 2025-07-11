import React from 'react';

interface ResultsDisplayProps {
  dosage: number | string | null;
  volume: string | null;
  unit: string | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ dosage, volume, unit }) => {
  return (
    <div className="dosage-calculator" style={{ width: '100%', boxSizing: 'border-box' }} aria-live="polite">
      <h2>Results</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <label>Calculated Dosage</label>
            <div style={{ background: '#fff', borderRadius: 4, padding: '8px 12px', border: '1px solid #dbeafe', width: '100%' }}>
              {dosage} {unit && <span>{unit}</span>}
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <label>Volume to Administer</label>
            <div style={{ background: '#fff', borderRadius: 4, padding: '8px 12px', border: '1px solid #dbeafe', width: '100%' }}>
              {volume}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
