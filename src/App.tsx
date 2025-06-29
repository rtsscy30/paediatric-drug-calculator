import DRUGS, { Drug } from './data/drugs';
import React, { useState } from 'react';
import PatientInfoForm from './components/PatientInfoForm';
import DrugSelector from './components/DrugSelector';
import VialConcentrationInput from './components/VialConcentrationInput';
import DosageCalculator from './components/DosageCalculator';

const App: React.FC = () => {
  const [patientInfo, setPatientInfo] = useState<{ weight: string; age: string; gender: string }>({ weight: '', age: '', gender: '' });
  const [selectedDrug, setSelectedDrug] = useState<string>('');
  const [concentration, setConcentration] = useState<string>('');
  const [dosage, setDosage] = useState<number | null>(null);
  const [volume, setVolume] = useState<string | null>(null);

  const handlePatientChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPatientInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrugChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDrug(e.target.value);
  };

  const handleConcentrationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConcentration(e.target.value);
  };

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const drug = DRUGS.find((d) => d.value === selectedDrug);
    if (!drug || !patientInfo.weight || !concentration) {
      setDosage(null);
      setVolume(null);
      return;
    }
    const weight = parseFloat(patientInfo.weight);
    const conc = parseFloat(concentration);
    // For now, use the lower bound if range is present
    const dosagePerKg = typeof drug.dosagePerKg === 'string' && drug.dosagePerKg.includes('–')
      ? parseFloat(drug.dosagePerKg.split('–')[0])
      : parseFloat(drug.dosagePerKg);
    const calculatedDosage = weight * dosagePerKg;
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
};

export default App;