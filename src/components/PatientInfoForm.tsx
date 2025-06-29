import React from 'react';

interface PatientInfoFormProps {
  patientInfo: { weight: string; age: string; gender: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const PatientInfoForm: React.FC<PatientInfoFormProps> = ({ patientInfo, onChange }) => {
  return (
    <section className="section-box patient-info-section">
      <h2>Patient Information</h2>
      <div className="patient-info-row">
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
      </div>
    </section>
  );
};

export default PatientInfoForm;
