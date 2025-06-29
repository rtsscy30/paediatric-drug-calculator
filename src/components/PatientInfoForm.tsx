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
        <label className="gender-toggle-label">
          Gender:
          <div className="gender-toggle">
            <input
              type="radio"
              id="gender-m"
              name="gender"
              value="male"
              checked={patientInfo.gender === 'male'}
              onChange={onChange}
            />
            <label htmlFor="gender-m" className={patientInfo.gender === 'male' ? 'active' : ''}>M</label>
            <input
              type="radio"
              id="gender-f"
              name="gender"
              value="female"
              checked={patientInfo.gender === 'female'}
              onChange={onChange}
            />
            <label htmlFor="gender-f" className={patientInfo.gender === 'female' ? 'active' : ''}>F</label>
          </div>
        </label>
      </div>
    </section>
  );
};

export default PatientInfoForm;
