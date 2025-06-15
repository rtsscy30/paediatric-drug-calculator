// Import drug names
import { drugNames } from './drugNames.js';

// Function to format drug name
function formatDrugName(name) {
    // Convert snake_case to readable format
    return name
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace('Iv', 'IV')
        .replace('Po', 'PO')
        .replace('Tcl', 'TCI');
}

// Populate the drug dropdown
function populateDrugDropdown() {
    const drugSelect = document.getElementById('drug');
    if (!drugSelect) {
        console.error('Drug select element not found');
        return;
    }

    // Clear existing options
    drugSelect.innerHTML = '<option value="">Select drug</option>';

    // Add each drug as an option
    drugNames.forEach(drug => {
        const option = document.createElement('option');
        option.value = drug;
        option.textContent = formatDrugName(drug);
        drugSelect.appendChild(option);
    });

    console.log('Drug dropdown populated with', drugSelect.options.length, 'options');
}

// Run the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', populateDrugDropdown);
