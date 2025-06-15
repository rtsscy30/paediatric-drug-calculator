"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dosageCalculator_1 = require("./services/dosageCalculator");
const formatter_1 = require("./services/formatter");
const types_1 = require("./types");
// Get the current directory
const currentDir = path_1.default.join(__dirname, '..');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../index.html'));
});
// Serve static files from the dist directory
app.use(express_1.default.static(path_1.default.join(__dirname, '../dist')));
// Route for calculating drug dosage
app.post('/calculate-dosage', (req, res) => {
    try {
        const { weight, age, gender, drug, concentration, weightType } = req.body;
        // Validate input
        if (!weight || !age || !drug || !concentration) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }
        // Validate values
        if (weight <= 0 || age <= 0 || concentration <= 0) {
            return res.status(400).json({ error: 'Invalid input values' });
        }
        // Convert drug name to lowercase and validate
        const drugName = drug.toLowerCase();
        if (!['midazolam', 'ketamine', 'fentanyl'].includes(drugName)) {
            return res.status(400).json({ error: 'Unsupported drug' });
        }
        // Calculate dosages and volumes using the calculator service
        const dosages = dosageCalculator_1.dosageCalculator.calculateDosage(weight, age, drugName, weightType);
        const volumes = dosages.map(dosage => {
            const volume = dosageCalculator_1.dosageCalculator.calculateVolume(dosage, concentration);
            return volume.toFixed(2);
        });
        // Convert weightType to proper WeightType enum
        const weightTypeEnum = weightType ? weightType.toUpperCase() : types_1.WeightType.TOTAL;
        const result = {
            weight,
            age,
            drug,
            concentration,
            dosages,
            volumes,
            weightType: weightTypeEnum
        };
        // Format the result
        const formattedResult = formatter_1.drugCalculationFormatter.formatResult(result);
        res.json({
            ...result,
            formattedResult: formattedResult
        });
    }
    catch (error) {
        console.error('Error calculating dosage:', error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'Internal server error' });
    }
});
// Serve static files
app.use(express_1.default.static('dist'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
