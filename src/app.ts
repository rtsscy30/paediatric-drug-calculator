import { DrugDosage, DrugCalculationResult, WeightType, DrugNameEnum, DrugGroup } from './types';

// Map of drugs to their groups
const DRUG_GROUP_MAP: Record<string, DrugGroup> = {
    [DrugNameEnum.MIDAZOLAM]: DrugGroup.ANTIEMETICS,
    [DrugNameEnum.KETAMINE]: DrugGroup.ANALGESIA,
    [DrugNameEnum.PROPOFOL_BOLUS]: DrugGroup.ANALGESIA,
    [DrugNameEnum.PROPOFOL_INFUSION]: DrugGroup.ANALGESIA,
    [DrugNameEnum.PROPOFOL_TCL]: DrugGroup.ANALGESIA,
    [DrugNameEnum.REMI_TCL]: DrugGroup.ANALGESIA,
    [DrugNameEnum.THIOPENTONE]: DrugGroup.ANALGESIA,
    [DrugNameEnum.GLYCOPYRROLATE]: DrugGroup.EMERGENCY_DRUGS,
    [DrugNameEnum.ATROPINE]: DrugGroup.EMERGENCY_DRUGS,
    [DrugNameEnum.DEXMED_BOLUS]: DrugGroup.ANESTHESIA,
    [DrugNameEnum.DEXMED_INFUSION]: DrugGroup.ANESTHESIA,
    [DrugNameEnum.AMOXICILLIN]: DrugGroup.ANTIBIOTICS,
    [DrugNameEnum.CEFTRIAXONE_IV]: DrugGroup.ANTIBIOTICS,
    [DrugNameEnum.CEFUROXIME_IV_LOAD]: DrugGroup.ANTIBIOTICS,
    [DrugNameEnum.CEFUROXIME_IV_MAINT]: DrugGroup.ANTIBIOTICS,
    [DrugNameEnum.CO_AMOXICLAV]: DrugGroup.ANTIBIOTICS,
    [DrugNameEnum.FLUCLOXACILLIN]: DrugGroup.ANTIBIOTICS,
    [DrugNameEnum.GENTAMICIN_IV]: DrugGroup.ANTIBIOTICS,
    [DrugNameEnum.TAZOCIN_IV]: DrugGroup.ANTIBIOTICS,
    [DrugNameEnum.METRONIDAZOLE_IV]: DrugGroup.ANTIBIOTICS,
    [DrugNameEnum.MEROPENEM_IV]: DrugGroup.ANTIBIOTICS,
    [DrugNameEnum.TEICOPLANIN_IV]: DrugGroup.ANTIBIOTICS,
    [DrugNameEnum.VANCOMYCIN_IV]: DrugGroup.ANTIBIOTICS,
    [DrugNameEnum.KETAMINE_PO]: DrugGroup.ANESTHESIA,
    [DrugNameEnum.MIDAZOLAM_PO]: DrugGroup.PREMEDS,
    [DrugNameEnum.CLONIDINE_PO]: DrugGroup.PREMEDS,
    [DrugNameEnum.DEXMED_NASAL]: DrugGroup.PREMEDS,
    [DrugNameEnum.MORPHINE_IV]: DrugGroup.OPIOIDS,
    [DrugNameEnum.FENTANYL_IV]: DrugGroup.OPIOIDS,
    [DrugNameEnum.ALFENTANIL_IV]: DrugGroup.OPIOIDS,
    [DrugNameEnum.SUFENTANIL_IV]: DrugGroup.OPIOIDS,
    [DrugNameEnum.SUXAMETHONIUM_IV]: DrugGroup.MUSCLE_RELAXANTS,
    [DrugNameEnum.SUXAMETHONIUM_IM]: DrugGroup.MUSCLE_RELAXANTS,
    [DrugNameEnum.ROCURONIUM_IV]: DrugGroup.MUSCLE_RELAXANTS,
    [DrugNameEnum.ATACURIUM_IV]: DrugGroup.MUSCLE_RELAXANTS,
    [DrugNameEnum.NEOSTIGMINE_IV]: DrugGroup.ANALGESIA,
    [DrugNameEnum.SUGAMMADEX_2_IV]: DrugGroup.MUSCLE_RELAXANTS,
    [DrugNameEnum.SUGAMMADEX_16_IV]: DrugGroup.MUSCLE_RELAXANTS,
    [DrugNameEnum.LIDOCAINE]: DrugGroup.LOCAL_ANESTHETICS,
    [DrugNameEnum.LIDOCAINE_ADREN]: DrugGroup.LOCAL_ANESTHETICS,
    [DrugNameEnum.BUPIVACAINE]: DrugGroup.LOCAL_ANESTHETICS,
    [DrugNameEnum.ROPIVACAINE]: DrugGroup.LOCAL_ANESTHETICS,
    [DrugNameEnum.PARACETAMOL_IV]: DrugGroup.ANALGESIA,
    [DrugNameEnum.IBUPROFEN_TDS]: DrugGroup.ANALGESIA,
    [DrugNameEnum.IBUPROFEN_QDS]: DrugGroup.ANALGESIA,
    [DrugNameEnum.DICLOFENAC_IV]: DrugGroup.ANALGESIA,
    [DrugNameEnum.MORPHINE_PO]: DrugGroup.OPIOIDS,
    [DrugNameEnum.DEXAMETHASONE_IV]: DrugGroup.ANTIEMETICS,
    [DrugNameEnum.ONDANSETRON]: DrugGroup.ANTIEMETICS,
    [DrugNameEnum.DROPERIDOL_IV]: DrugGroup.ANTIEMETICS,
    [DrugNameEnum.CYCLIZINE_IV]: DrugGroup.ANTIEMETICS,
    [DrugNameEnum.LORAZEPAM_IV]: DrugGroup.ANTICONVULSANTS,
    [DrugNameEnum.MIDAZOLAM_IV]: DrugGroup.ANTICONVULSANTS,
    [DrugNameEnum.DIAZEPAM_IV]: DrugGroup.ANTICONVULSANTS,
    [DrugNameEnum.CARBAMAZEPINE_PO]: DrugGroup.ANTICONVULSANTS,
    [DrugNameEnum.LEVETIRACETAM_IV]: DrugGroup.ANTICONVULSANTS,
    [DrugNameEnum.PHENYTOIN_IV]: DrugGroup.ANTICONVULSANTS,
    [DrugNameEnum.SODIUM_VALPROATE_IV]: DrugGroup.ANTICONVULSANTS
};

// Function to get the group of a drug
const getDrugGroup = (drug: DrugNameEnum): DrugGroup => {
    return DRUG_GROUP_MAP[drug] || DrugGroup.EMERGENCY_DRUGS;
};

interface CalculatorData {
    weight: number;
    age: number;
    height: number;
    gender: string;
    drug: DrugNameEnum;
    concentration: number;
}

interface Result {
    weight: number;
    age: number;
    drug: string;
    concentration: number;
    dosages: number[];
    volumes: string[];
    weightType: string;
    formattedResult: string;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    
    const form = document.getElementById('calculatorForm') as HTMLFormElement;
    const resultContainer = document.getElementById('resultContainer') as HTMLElement;
    
    // The drug dropdown is now populated in HTML using inline JavaScript
    const drugSelect = document.getElementById('drug') as HTMLSelectElement;
    if (!drugSelect) {
        console.error('Drug select element not found');
        return;
    }

    console.log('Drug dropdown initialized with', drugSelect.options.length, 'options');

    // Ensure the select element is properly initialized
    if (drugSelect) {
        drugSelect.value = '';
    }

    // Add drug group filter
    const drugGroupSelect = document.createElement('select');
    drugGroupSelect.id = 'drugGroup';
    drugGroupSelect.className = 'drug-group-filter';
    drugGroupSelect.innerHTML = `
        <option value="">All Drugs</option>
        ${Object.values(DrugGroup).map(group => 
            `<option value="${group}">${group.replace('_', ' ')}</option>`
        ).join('')}
    `;

    // Add event listener for drug group filter
    drugGroupSelect.addEventListener('change', () => {
        const selectedGroup = drugGroupSelect.value;
        const allOptions = Array.from(drugSelect.options);
        
        if (selectedGroup === "") {
            allOptions.forEach(option => option.style.display = "");
            return;
        }

        allOptions.forEach(option => {
            if (option.value === "") return; // Skip the "Select drug" option
            const drug = option.value as DrugNameEnum;
            const drugGroup = getDrugGroup(drug);
            option.style.display = drugGroup === selectedGroup ? "" : "none";
        });
    });

    // Insert the drug group filter before the drug select
    const drugLabel = document.querySelector('label[for="drug"]');
    if (drugLabel) {
        drugLabel.parentElement?.insertBefore(drugGroupSelect, drugLabel);
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data: CalculatorData = {
            weight: parseFloat((document.getElementById('weight') as HTMLInputElement).value),
            age: parseFloat((document.getElementById('age') as HTMLInputElement).value),
            height: parseFloat((document.getElementById('height') as HTMLInputElement).value),
            gender: (document.getElementById('gender') as HTMLSelectElement).value,
            drug: (document.getElementById('drug') as HTMLSelectElement).value as DrugNameEnum,
            concentration: parseFloat((document.getElementById('concentration') as HTMLInputElement).value),
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
                const resultContainer = document.getElementById('resultContainer') as HTMLElement;
                console.log('Formatted result:', result.formattedResult);
                
                // Just set the HTML directly for now
                resultContainer.innerHTML = result.formattedResult;
            } else {
                const resultContainer = document.getElementById('resultContainer') as HTMLElement;
                const errorHtml = `<div class="result-item">
                    <h3>Error</h3>
                    <span class="result-value">${result.error || 'Calculation failed'}</span>
                </div>`;
                console.log('Error HTML:', errorHtml);
                resultContainer.innerHTML = errorHtml;
            }
        } catch (error: unknown) {
            const errorHtml = `<div class="result-item">
                <h3>Error</h3>
                <span class="result-value">${error instanceof Error ? error.message : 'An unknown error occurred'}</span>
            </div>`;
            console.log('Error HTML:', errorHtml);
            resultContainer.innerHTML = errorHtml;
        }
    });
});
