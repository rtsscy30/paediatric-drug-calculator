import React from 'react';

const PatientInfoForm = ({ patientInfo, onChange }) => {
  return (
    <form className="patient-info-form">
      <h2>Patient Information</h2>
      <label>
        Weight (kg):
        <input
          type="number"
          name="weight"
          value={patientInfo.weight}
          onChange={onChange}
          min="0"
          step="any"
          required
        />
      </label>
      <label>
        Age (years):
        <input
          type="number"
          name="age"
          value={patientInfo.age}
          onChange={onChange}
          min="0"
          step="any"
          required
        />
      </label>
      <label>
        Gender:
        <select name="gender" value={patientInfo.gender} onChange={onChange} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
    </form>
  );
};

export default PatientInfoForm;
