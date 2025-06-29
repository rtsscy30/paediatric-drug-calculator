import React from 'react';

interface VialConcentrationInputProps {
  concentration: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const VialConcentrationInput: React.FC<VialConcentrationInputProps> = ({ concentration, onChange }) => {
  return (
    <div className="vial-concentration-input section-box">
      <h2>Vial Concentration</h2>
      <label>
        Concentration (mg/ml):
        <input
          type="number"
          name="concentration"
          value={concentration}
          onChange={onChange}
          min="0"
          step="any"
          required
        />
      </label>
    </div>
  );
};

export default VialConcentrationInput;
