import React from 'react';

const DrugSelector = ({ drugs, selectedDrug, onChange }) => {
  return (
    <div className="drug-selector">
      <h2>Drug Selection</h2>
      <select name="drug" value={selectedDrug} onChange={onChange} required>
        <option value="">Select a drug</option>
        {drugs.map((drug) => (
          <option key={drug.value} value={drug.value}>{drug.label}</option>
        ))}
      </select>
    </div>
  );
};

export default DrugSelector;
