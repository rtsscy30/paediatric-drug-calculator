import { WeightType, WeightCalculation } from '../types';

export interface WeightCalculator {
    calculateWeights(weight: number, age: number, height: number): WeightCalculation;
    getWeightByType(calculation: WeightCalculation, weightType: WeightType): number;
    getIdealWeight(weight: number, age: number, height: number): number;
    getAdjustedWeight(weight: number, age: number, height: number): number;
    calculateIdealWeight(height: number): number;
    calculateAdjustedWeight(weight: number, idealWeight: number): number;
    calculateLeanWeight(weight: number, height: number): number;
}

export class PediatricWeightCalculator implements WeightCalculator {
    calculateWeights(weight: number, age: number, height: number): WeightCalculation {
        const idealWeight = this.calculateIdealWeight(height);
        const adjustedWeight = this.calculateAdjustedWeight(weight, idealWeight);
        const leanWeight = this.calculateLeanWeight(weight, idealWeight);
        return {
            totalWeight: weight,
            idealWeight,
            adjustedWeight,
            leanWeight,
            height
        };
    }

    public getIdealWeight(weight: number, age: number, height: number): number {
        return this.calculateIdealWeight(height);
    }

    public getAdjustedWeight(weight: number, age: number, height: number): number {
        const idealWeight = this.calculateIdealWeight(height);
        return this.calculateAdjustedWeight(weight, idealWeight);
    }

    getWeightByType(weightCalculation: WeightCalculation, weightType: WeightType): number {
        switch (weightType) {
            case WeightType.TOTAL:
                return weightCalculation.totalWeight;
            case WeightType.IDEAL:
                return weightCalculation.idealWeight;
            case WeightType.ADJUSTED:
                return weightCalculation.adjustedWeight;
            case WeightType.LEAN:
                return weightCalculation.leanWeight;
            case WeightType.LEAN:
            default:
                throw new Error(`Unsupported weight type: ${weightType}`);
        }
    }

    public calculateIdealWeight(height: number): number {
        // Calculate ideal weight based on height
        return height * height * 0.0005;
    }

    public calculateAdjustedWeight(weight: number, idealWeight: number): number {
        // Calculate adjusted weight using a simple formula
        return idealWeight + (weight - idealWeight) * 0.4;
    }

    public calculateLeanWeight(weight: number, height: number): number {
        // Calculate lean body weight using the Devine formula
        const heightInMeters = height / 100;
        const idealBodyWeight = 50 + 2.3 * ((heightInMeters * 100 - 152) / 2.54);
        const leanBodyWeight = 1.1 * idealBodyWeight - 128 * (idealBodyWeight / heightInMeters) ** 2;
        return Math.max(leanBodyWeight, 1);
    }
}

// Export a singleton instance
export const weightCalculator = new PediatricWeightCalculator();
