import { DrugCalculationResult, WeightType } from '../types';

export class DrugCalculationFormatter {
    private static readonly VOLUME_UNITS = {
        'mg': 'ml',
        'mcg': 'ml'
    };

    private static formatRange(values: any[]): string {
        if (values.length === 1) {
            return values[0].toString();
        }
        return `${values[0]} - ${values[values.length - 1]}`;
    }

    private static formatWeightType(weightType: WeightType): string {
        switch (weightType) {
            case WeightType.TOTAL:
                return 'Total Body Weight';
            case WeightType.IDEAL:
                return 'Ideal Body Weight';
            case WeightType.ADJUSTED:
                return 'Adjusted Body Weight';
            case WeightType.LEAN:
                return 'Lean Body Weight';
            default:
                return 'Unknown Weight Type';
        }
    }

    formatResult(result: DrugCalculationResult): string {
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

// Export a singleton instance
export const drugCalculationFormatter = new DrugCalculationFormatter();
