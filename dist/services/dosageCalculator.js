"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dosageCalculator = exports.PediatricDosageCalculator = void 0;
const types_1 = require("../types");
const weightCalculator_1 = require("./weightCalculator");
class PediatricDosageCalculator {
    calculateDosage(weight, age, drug, weightType) {
        const drugInfo = PediatricDosageCalculator.DRUG_DOSES[drug];
        if (!drugInfo) {
            throw new Error(`Unsupported drug: ${drug}`);
        }
        // Validate weight type if specified
        if (weightType && weightType !== drugInfo.weightType) {
            throw new Error(`Invalid weight type for ${drug}. Expected: ${drugInfo.weightType}, got: ${weightType}`);
        }
        // Calculate the appropriate weight based on weight type
        const weightCalculation = weightCalculator_1.weightCalculator.calculateWeights(weight, age);
        const effectiveWeight = weightType
            ? weightCalculator_1.weightCalculator.getWeightByType(weightCalculation, weightType)
            : weightCalculation.totalWeight;
        // Calculate dosage for each dose in the array
        const doses = drugInfo.doses;
        return doses.map(dose => effectiveWeight * dose);
    }
    calculateVolume(dosage, concentration) {
        if (concentration <= 0) {
            throw new Error('Concentration must be greater than 0');
        }
        return dosage / concentration;
    }
}
exports.PediatricDosageCalculator = PediatricDosageCalculator;
PediatricDosageCalculator.DRUG_DOSES = {
    midazolam: {
        doses: [0.5],
        unit: 'mg/kg',
        weightType: types_1.WeightType.TOTAL
    },
    ketamine: {
        doses: [1.0, 2.0],
        unit: 'mg/kg',
        weightType: types_1.WeightType.IDEAL
    },
    fentanyl: {
        doses: [1.0, 2.0],
        unit: 'mcg/kg',
        weightType: types_1.WeightType.ADJUSTED
    }
};
// Export a singleton instance
exports.dosageCalculator = new PediatricDosageCalculator();
