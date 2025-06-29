import React from 'react';
import { Drug } from '../data/drugs';

interface DrugSelectorProps {
  drugs: Drug[];
  selectedDrug: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DrugSelector: React.FC<DrugSelectorProps> = ({ drugs, selectedDrug, onChange }) => {
  return (
    <div className="drug-selector section-box">
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
