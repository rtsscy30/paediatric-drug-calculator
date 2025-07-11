import React from 'react';

interface PatientInfoFormProps {
  patientInfo: { weight: string; age: string; gender: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const PatientInfoForm: React.FC<PatientInfoFormProps> = ({ patientInfo, onChange }) => {
  return (
    <div className="patient-info-section section-box">
      <h2>Patient Information</h2>
      <form autoComplete="off">
        <div className="patient-info-row" style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: 12,
          width: '100%',
          minWidth: 'min-content'
        }}>
          <div style={{
            flex: '1 1 120px',
            minWidth: '120px',
            maxWidth: '200px'
          }}>
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={patientInfo.weight}
              onChange={onChange}
              min="0"
              step="any"
              required
              style={{width: '100%', boxSizing: 'border-box'}}
            />
          </div>
          <div style={{
            flex: '1 1 120px',
            minWidth: '120px',
            maxWidth: '200px'
          }}>
            <label htmlFor="age">Age (yrs)</label>
            <input
              type="number"
              id="age"
              name="age"
              value={patientInfo.age}
              onChange={onChange}
              min="0"
              step="any"
              required
              style={{width: '100%', boxSizing: 'border-box'}}
            />
          </div>
          <div style={{
            flex: '0 0 auto',
            marginLeft: 'auto'
          }}>
            <label htmlFor="gender">Gender</label>
            <div className="gender-toggle" role="radiogroup" aria-label="Gender" style={{gap: 8, flexWrap: 'nowrap', marginTop: '4px'}}>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={patientInfo.gender === 'male'}
                onChange={onChange}
                aria-checked={patientInfo.gender === 'male'}
              />
              <label htmlFor="male" className={patientInfo.gender === 'male' ? 'active gender-square' : 'gender-square'}>
                M
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={patientInfo.gender === 'female'}
                onChange={onChange}
                aria-checked={patientInfo.gender === 'female'}
              />
              <label htmlFor="female" className={patientInfo.gender === 'female' ? 'active gender-square' : 'gender-square'}>
                F
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PatientInfoForm;
