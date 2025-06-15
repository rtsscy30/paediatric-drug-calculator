"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drugCalculationFormatter = exports.DrugCalculationFormatter = void 0;
const types_1 = require("../types");
class DrugCalculationFormatter {
    static formatRange(values) {
        if (values.length === 1) {
            return values[0].toString();
        }
        return `${values[0]} - ${values[values.length - 1]}`;
    }
    static formatWeightType(weightType) {
        switch (weightType) {
            case types_1.WeightType.TOTAL:
                return 'Total Body Weight';
            case types_1.WeightType.IDEAL:
                return 'Ideal Body Weight';
            case types_1.WeightType.ADJUSTED:
                return 'Adjusted Body Weight';
            case types_1.WeightType.LEAN:
                return 'Lean Body Weight';
            default:
                return 'Unknown Weight Type';
        }
    }
    formatResult(result) {
        // Extract units from the first dosage
        const unit = result.drug === 'fentanyl' ? 'mcg' : 'mg';
        const volumeUnit = DrugCalculationFormatter.VOLUME_UNITS[unit];
        // Format the ranges
        const dosageRange = DrugCalculationFormatter.formatRange(result.dosages);
        const volumeRange = DrugCalculationFormatter.formatRange(result.volumes.map(Number)); // Convert string volumes back to numbers
        // Format the weight type
        const weightType = DrugCalculationFormatter.formatWeightType(result.weightType);
        // Create HTML structure with proper styling
        const html = `
            <div class="result-item">
                <h3>Weight Type</h3>
                <span class="result-value">${weightType}</span>
            </div>
            <div class="result-item">
                <h3>Dosage</h3>
                <span class="result-value">${dosageRange}</span>
                <span class="result-unit">${unit}</span>
            </div>
            <div class="result-item">
                <h3>Volume</h3>
                <span class="result-value">${volumeRange}</span>
                <span class="result-unit">${volumeUnit}</span>
            </div>
        `;
        // Return the HTML as a string
        return html;
    }
}
exports.DrugCalculationFormatter = DrugCalculationFormatter;
DrugCalculationFormatter.VOLUME_UNITS = {
    'mg': 'ml',
    'mcg': 'ml'
};
// Export a singleton instance
exports.drugCalculationFormatter = new DrugCalculationFormatter();
