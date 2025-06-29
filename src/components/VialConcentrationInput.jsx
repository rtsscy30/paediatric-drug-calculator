import React from 'react';

const VialConcentrationInput = ({ concentration, onChange }) => {
  return (
    <div className="vial-concentration-input">
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
