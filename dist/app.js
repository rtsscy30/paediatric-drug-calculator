"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculatorForm');
    const resultContainer = document.getElementById('resultContainer');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = {
            weight: parseFloat(document.getElementById('weight').value),
            age: parseFloat(document.getElementById('age').value),
            gender: document.getElementById('gender').value,
            drug: document.getElementById('drug').value,
            concentration: parseFloat(document.getElementById('concentration').value),
        };
        try {
            const response = await fetch('/calculate-dosage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);
            const result = await response.json();
            console.log('Response data:', result);
            if (response.ok) {
                const resultContainer = document.getElementById('resultContainer');
                console.log('Formatted result:', result.formattedResult);
                // Just set the HTML directly for now
                resultContainer.innerHTML = result.formattedResult;
            }
            else {
                const resultContainer = document.getElementById('resultContainer');
                const errorHtml = `<div class="result-item">
                    <h3>Error</h3>
                    <span class="result-value">${result.error || 'Calculation failed'}</span>
                </div>`;
                console.log('Error HTML:', errorHtml);
                resultContainer.innerHTML = errorHtml;
            }
        }
        catch (error) {
            const errorHtml = `<div class="result-item">
                <h3>Error</h3>
                <span class="result-value">${error instanceof Error ? error.message : 'An unknown error occurred'}</span>
            </div>`;
            console.log('Error HTML:', errorHtml);
            resultContainer.innerHTML = errorHtml;
        }
    });
});
