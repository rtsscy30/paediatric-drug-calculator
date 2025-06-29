import React, { useState } from 'react';
import PatientInfoForm from './components/PatientInfoForm';
import DrugSelector from './components/DrugSelector';
import VialConcentrationInput from './components/VialConcentrationInput';
import DosageCalculator from './components/DosageCalculator';

// Example drug list (expand as needed)
const DRUGS = [
  { value: 'paracetamol', label: 'Paracetamol', dosagePerKg: 15 },
  { value: 'ibuprofen', label: 'Ibuprofen', dosagePerKg: 10 },
];

function App() {
  const [patientInfo, setPatientInfo] = useState({ weight: '', age: '', gender: '' });
  const [selectedDrug, setSelectedDrug] = useState('');
  const [concentration, setConcentration] = useState('');
  const [dosage, setDosage] = useState(null);
  const [volume, setVolume] = useState(null);

  const handlePatientChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrugChange = (e) => {
    setSelectedDrug(e.target.value);
  };

  const handleConcentrationChange = (e) => {
    setConcentration(e.target.value);
  };

  const calculate = (e) => {
    e.preventDefault();
    const drug = DRUGS.find((d) => d.value === selectedDrug);
    if (!drug || !patientInfo.weight || !concentration) {
      setDosage(null);
      setVolume(null);
      return;
    }
    const weight = parseFloat(patientInfo.weight);
    const conc = parseFloat(concentration);
    const calculatedDosage = weight * drug.dosagePerKg;
    const calculatedVolume = conc > 0 ? (calculatedDosage / conc).toFixed(2) : null;
    setDosage(calculatedDosage);
    setVolume(calculatedVolume);
  };

  return (
    <div className="app-container">
      <h1>Paediatric Calculator</h1>
      <form onSubmit={calculate}>
        <PatientInfoForm patientInfo={patientInfo} onChange={handlePatientChange} />
        <DrugSelector drugs={DRUGS} selectedDrug={selectedDrug} onChange={handleDrugChange} />
        <VialConcentrationInput concentration={concentration} onChange={handleConcentrationChange} />
        <button type="submit">Calculate</button>
      </form>
      <DosageCalculator dosage={dosage} volume={volume} />
    </div>
  );
}

export default App;
