import DRUGS from './data/drugs';
import React, { useState } from 'react';
import PatientInfoForm from './components/PatientInfoForm';
import DrugSelector from './components/DrugSelector';
import ResultsDisplay from './components/ResultsDisplay';
import { calculateDosage } from './utils/dosageCalculator';

const App: React.FC = () => {
  const [patientInfo, setPatientInfo] = useState<{ weight: string; age: string; gender: string }>({ weight: '', age: '', gender: '' });
  const [selectedDrug, setSelectedDrug] = useState<string>('');
  const [concentration, setConcentration] = useState<string>('');
  const [dosage, setDosage] = useState<number | string | null>(null);
  const [volume, setVolume] = useState<string | null>(null);
  const [unit, setUnit] = useState<string | null>(null);

  const handlePatientChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPatientInfo((prev) => ({ ...prev, [name]: value }));
  };

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const drug = DRUGS.find((d) => d.value === selectedDrug);
    const result = calculateDosage(drug, patientInfo.weight, concentration);
    setDosage(result.dosage);
    setVolume(result.volume);
    setUnit(result.unit);
  };

  return (
    <div className="app-container">
      <h1>Paediatric Calculator</h1>
      <form onSubmit={calculate}>
        <PatientInfoForm patientInfo={patientInfo} onChange={handlePatientChange} />
        <DrugSelector
          drugs={DRUGS}
          selectedDrug={selectedDrug}
          onChange={setSelectedDrug}
          concentration={concentration}
          onConcentrationChange={setConcentration}
        />
        <button type="submit">Calculate</button>
      </form>
      <ResultsDisplay dosage={dosage} volume={volume} unit={unit} />
    </div>
  );
};

export default App;