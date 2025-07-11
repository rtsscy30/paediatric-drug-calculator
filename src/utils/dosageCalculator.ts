import { Drug } from '../data/drugs';

interface CalculationResult {
  dosage: string | number | null;
  volume: string | null;
  unit: string | null;
}

export const calculateDosage = (
  drug: Drug | undefined,
  weight: string,
  concentration: string
): CalculationResult => {
  if (!drug || !weight || !concentration) {
    return { dosage: null, volume: null, unit: null };
  }

  const weightNum = parseFloat(weight);
  const concNum = parseFloat(concentration);

  // Calculate dosage range
  const minDosage = weightNum * drug.dosagePerKg.min;
  const maxDosage = drug.dosagePerKg.max ? weightNum * drug.dosagePerKg.max : null;

  // Format the dosage display
  let calculatedDosage: number | string;
  if (maxDosage !== null) {
    calculatedDosage = `${minDosage.toFixed(2)} - ${maxDosage.toFixed(2)}`;
  } else {
    calculatedDosage = minDosage;
  }

  // Calculate volume range
  let calculatedVolume: string | null = null;
  if (concNum > 0) {
    if (maxDosage !== null) {
      const minVolume = (minDosage / concNum).toFixed(2);
      const maxVolume = (maxDosage / concNum).toFixed(2);
      calculatedVolume = `${minVolume} - ${maxVolume} mL`;
    } else {
      calculatedVolume = `${(minDosage / concNum).toFixed(2)} mL`;
    }
  }

  return {
    dosage: calculatedDosage,
    volume: calculatedVolume,
    unit: drug.unit
  };
};
