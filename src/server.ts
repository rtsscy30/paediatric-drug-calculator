import express from 'express';
import cors from 'cors';
import path from 'path';
import { dosageCalculator } from './services/dosageCalculator';
import { drugCalculationFormatter } from './services/formatter';

// Type definitions
import { Request, Response } from 'express';
import { DrugDosage, DrugCalculationResult, DrugNameEnum, WeightType } from './types';

// Get the current directory
const currentDir = path.join(__dirname, '..');

// Export interfaces for use in other modules
export { DrugDosage, DrugCalculationResult, DrugNameEnum };

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the src directory
app.use(express.static('src'));

// Serve index.html for the root route
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for calculating drug dosage
app.post('/calculate-dosage', (req: Request, res: Response) => {
    try {
        const { weight, age, gender, drug, concentration, weightType, height } = req.body as DrugDosage;
        
        // Validate input
        if (!weight || !age || !drug || !concentration || !height) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }

        // Validate values
        if (weight <= 0 || age <= 0 || concentration <= 0 || height <= 0) {
            return res.status(400).json({ error: 'Invalid input values' });
        }

        // Convert drug name to lowercase and validate
        const drugName = drug.toLowerCase() as DrugNameEnum;
        if (!Object.values(DrugNameEnum).includes(drugName)) {
            return res.status(400).json({ error: 'Unsupported drug' });
        }

        // Calculate dosages and volumes using the calculator service
        const dosages = dosageCalculator.calculateDosage(weight, age, height, drugName, weightType);
        const volumes = dosages.map(dosage => {
            const unit = result.drug === 'fentanyl' ? 'mcg' : 'mg';
            const volume = dosageCalculator.calculateVolume(dosage, concentration, drugName, result.weight, unit);
            return volume.toFixed(2);
        });
        
        // Convert weightType to proper WeightType enum
        const weightTypeEnum = weightType ? weightType.toUpperCase() as WeightType : WeightType.TOTAL;
        
        const result: DrugCalculationResult = {
            weight,
            age,
            drug,
            concentration,
            dosages,
            volumes,
            weightType: weightTypeEnum
        };

        // Format the result
        const formattedResult = drugCalculationFormatter.formatResult(result);
        res.json({
            ...result,
            formattedResult: formattedResult
        });
    } catch (error) {
        console.error('Error calculating dosage:', error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'Internal server error' });
    }
    })

// Serve static files
app.use(express.static('dist'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
