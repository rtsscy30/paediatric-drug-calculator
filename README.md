# Pediatric Drug Calculator

A web application for calculating pediatric drug dosages with vial concentration support.

## Features

- Calculate drug dosages based on patient weight
- Support for multiple common pediatric drugs
- Calculate exact volume to draw from vial based on concentration
- Clean and modern UI

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the TypeScript files:
```bash
npm run build
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter patient information (weight, age, gender)
2. Select the drug from the dropdown
3. Enter the vial concentration (mg/ml)
4. Click "Calculate" to get the dosage and volume results

## Supported Drugs

- Midazolam (0.1 mg/kg)
- Ketamine (1.0 mg/kg)
- Fentanyl (1.0 mcg/kg)

## Note

This application is intended for educational purposes and should not be used as a substitute for professional medical advice.
