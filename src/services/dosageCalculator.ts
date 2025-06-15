import { DrugDosage, DrugCalculationResult, DrugNameEnum, DrugDosageInfo, WeightType } from '../types';
import { drugWeightTypes } from './drugWeightTypes';
import { drugFormulas } from './drugFormulas';
import { weightCalculator } from './weightCalculator';

export interface DosageCalculator {
    calculateDosage(weight: number, age: number, height: number, drug: DrugNameEnum, weightType?: WeightType, isInfusion?: boolean): number[];
    calculateVolume(dosage: number, concentration: number, drug: DrugNameEnum, weight?: number, unit?: string): number;
}

export class PediatricDosageCalculator implements DosageCalculator {

    calculateDosage(weight: number, age: number, height: number, drug: DrugNameEnum, weightType?: WeightType, isInfusion?: boolean): number[] {
        // Get the appropriate weight type for the drug
        const drugWeightType = weightType || drugWeightTypes[drug] || WeightType.TOTAL;
        const weightValue = this.calculateWeight(weight, age, height, drugWeightType);
        
        const formula = drugFormulas[drug];
        if (!formula) {
            throw new Error(`No formula defined for drug: ${drug}`);
        }

        // Calculate dosages
        const dosages = formula.calculateDosage(weightValue);
        
        // Apply max dosage if defined
        if (formula.maxDosage !== undefined) {
            return dosages.map(dosage => Math.min(dosage, formula.maxDosage!));
        }
        
        return dosages;
    }

    calculateWeight(weight: number, age: number, height: number, weightType: WeightType): number {
        switch (weightType) {
            case WeightType.TOTAL:
                return weight;
            case WeightType.IDEAL:
                return weightCalculator.getIdealWeight(weight, age, height);
            case WeightType.ADJUSTED:
                return weightCalculator.getAdjustedWeight(weight, age, height);
            case WeightType.LEAN:
                return weightCalculator.calculateLeanWeight(weight, height);
            default:
                throw new Error(`Unsupported weight type: ${weightType}`);
        }
    }

    calculateVolume(dosage: number, concentration: number, drug: DrugNameEnum, weight?: number, unit: string = 'mg'): number {
        // Validate input
        if (concentration <= 0) {
            throw new Error('Concentration must be greater than 0');
        }
        if (dosage <= 0) {
            throw new Error('Dosage must be greater than 0');
        }
        if (weight !== undefined && weight <= 0) {
            throw new Error('Weight must be greater than 0');
        }
        
        // Convert dosage to base unit if necessary
        let baseDosage = dosage;
        if (unit === 'mcg') {
            baseDosage = dosage / 1000; // Convert mcg to mg for calculation
        }
        
        // Calculate volume
        let volume = baseDosage / concentration;
        
        // If weight is provided and drug requires weight-based calculation
        const drugFormula = drugFormulas[drug];
        if (weight && drugFormula && drugFormula.unit.includes('kg')) {
            volume *= weight;
        }
        
        return volume;
    }
}

// Export a singleton instance
export const dosageCalculator = new PediatricDosageCalculator();
