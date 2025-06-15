const fs = require('fs');
const path = require('path');

// Read the TypeScript file
const typesPath = path.join(__dirname, 'types.ts');
const typesContent = fs.readFileSync(typesPath, 'utf8');

// Extract the DrugName enum values using regex
const enumRegex = /export enum DrugName \{\s*([^}]*)\}/;
const match = typesContent.match(enumRegex);
if (!match) {
    throw new Error('Could not find DrugName enum in types.ts');
}

// Parse the enum values
const enumValues = match[1]
    .split(',\s*')
    .map(line => line.trim())
    .map(line => {
        const [name, value] = line.split('=');
        return value.trim().replace(/'/g, '"');
    })
    .filter(value => value !== '');

// Generate the JavaScript file
const output = `// Generated from types.ts. Do not modify manually.
export const drugNames = [
    ${enumValues.map(value => `    ${value}`).join(',\n')}
];
`;

// Write to drugNames.js
const outputPath = path.join(__dirname, 'drugNames.js');
fs.writeFileSync(outputPath, output);

console.log(`Generated ${outputPath} with ${enumValues.length} drug names`);
