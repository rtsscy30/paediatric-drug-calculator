"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weightCalculator = exports.PediatricWeightCalculator = void 0;
const types_1 = require("../types");
class PediatricWeightCalculator {
    calculateWeights(weight, age) {
        // Calculate Ideal Body Weight (IBW)
        const idealWeight = 2 * (age + 4);
        // Calculate Adjusted Body Weight (AdjBW)
        const adjustedWeight = idealWeight + (0.4 * (weight - idealWeight));
        // Calculate Lean Body Weight
        const leanWeight = 0.8 * weight;
        return {
            totalWeight: weight,
            idealWeight,
            adjustedWeight,
            leanWeight
        };
    }
    getWeightByType(calculation, weightType) {
        switch (weightType) {
            case types_1.WeightType.TOTAL:
                return calculation.totalWeight;
            case types_1.WeightType.IDEAL:
                return calculation.idealWeight;
            case types_1.WeightType.ADJUSTED:
                return calculation.adjustedWeight;
            case types_1.WeightType.LEAN:
                return calculation.leanWeight;
            default:
                throw new Error(`Unsupported weight type: ${weightType}`);
        }
    }
}
exports.PediatricWeightCalculator = PediatricWeightCalculator;
// Export a singleton instance
exports.weightCalculator = new PediatricWeightCalculator();
