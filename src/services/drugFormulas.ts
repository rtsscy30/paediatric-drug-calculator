import { DrugNameEnum } from '../types';

export interface DrugFormula {
    calculateDosage(weight: number): number[];
    unit: string;
    maxDosage?: number; // Maximum dosage allowed for this drug
    metadata?: string; // Additional information about the drug
}

export const drugFormulas: Record<DrugNameEnum, DrugFormula> = {
    [DrugNameEnum.MIDAZOLAM]: {
        calculateDosage(weight) {
            return [weight * 0.1, weight * 0.2];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.KETAMINE]: {
        calculateDosage(weight) {
            return [weight * 1, weight * 2];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.PROPOFOL_BOLUS]: {
        calculateDosage(weight) {
            return [weight * 2, weight * 5];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.PROPOFOL_INFUSION]: {
        calculateDosage(weight) {
            return [weight * 4, weight * 10];
        },
        unit: 'mg/kg/hour'
    },
    [DrugNameEnum.PROPOFOL_TCL]: {
        calculateDosage(weight) {
            return [weight];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.REMI_TCL]: {
        calculateDosage(weight) {
            return [weight];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.THIOPENTONE]: {
        calculateDosage(weight) {
            return [weight * 3, weight * 5];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.GLYCOPYRROLATE]: {
        calculateDosage(weight) {
            return [weight * 4];
        },
        unit: 'mcg/kg'
    },
    [DrugNameEnum.ATROPINE]: {
        calculateDosage(weight) {
            return [weight * 20];
        },
        unit: 'mcg/kg'
    },
    [DrugNameEnum.DEXMED_BOLUS]: {
        calculateDosage(weight) {
            return [weight * 1];
        },
        unit: 'mcg/kg'
    },
    [DrugNameEnum.DEXMED_INFUSION]: {
        calculateDosage(weight) {
            return [weight * 0.5, weight * 1];
        },
        unit: 'mcg/kg/hour'
    },
    [DrugNameEnum.AMOXICILLIN]: {
        calculateDosage(weight) {
            return [weight * 30];
        },
        unit: 'mg/kg',
        maxDosage: 1000,
        metadata: '1g max'
    },
    [DrugNameEnum.CEFTRIAXONE_IV]: {
        calculateDosage(weight) {
            return [weight * 80];
        },
        unit: 'mg/kg',
        maxDosage: 4000,
        metadata: '4g max'
    },
    [DrugNameEnum.CEFUROXIME_IV_LOAD]: {
        calculateDosage(weight) {
            return [weight * 50];
        },
        unit: 'mg/kg',
        maxDosage: 1500,
        metadata: '1.5g max'
    },
    [DrugNameEnum.CEFUROXIME_IV_MAINT]: {
        calculateDosage(weight) {
            return [weight * 30];
        },
        unit: 'mg/kg',
        maxDosage: 1500,
        metadata: '1.5g max'
    },
    [DrugNameEnum.CO_AMOXICLAV]: {
        calculateDosage(weight) {
            return [weight * 30];
        },
        unit: 'mg/kg',
        maxDosage: 1200,
        metadata: '1.2g max'
    },
    [DrugNameEnum.FLUCLOXACILLIN]: {
        calculateDosage(weight) {
            return [weight * 12.5, weight * 25];
        },
        unit: 'mg/kg',
        maxDosage: 1000,
        metadata: '1g max'
    },
    [DrugNameEnum.GENTAMICIN_IV]: {
        calculateDosage(weight) {
            return [weight * 7];
        },
        unit: 'mg/kg',
        metadata: 'AdjBW *7mg/kg'
    },
    [DrugNameEnum.TAZOCIN_IV]: {
        calculateDosage(weight) {
            return [weight * 90];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.METRONIDAZOLE_IV]: {
        calculateDosage(weight) {
            return [weight * 7.5];
        },
        unit: 'mg/kg',
        maxDosage: 400,
        metadata: '400mg max'
    },
    [DrugNameEnum.MEROPENEM_IV]: {
        calculateDosage(weight) {
            return [weight * 20];
        },
        unit: 'mg/kg',
        maxDosage: 1000,
        metadata: '1g max'
    },
    [DrugNameEnum.TEICOPLANIN_IV]: {
        calculateDosage(weight) {
            return [weight * 6];
        },
        unit: 'mg/kg',
        metadata: '12 hourly'
    },
    [DrugNameEnum.VANCOMYCIN_IV]: {
        calculateDosage(weight) {
            return [weight * 15];
        },
        unit: 'mg/kg',
        metadata: '12 hourly. Check levels'
    },
    [DrugNameEnum.KETAMINE_PO]: {
        calculateDosage(weight) {
            return [weight * 3, weight * 5];
        },
        unit: 'mg/kg',
        metadata: 'Titrate'
    },
    [DrugNameEnum.MIDAZOLAM_PO]: {
        calculateDosage(weight) {
            return [weight * 0.5];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.CLONIDINE_PO]: {
        calculateDosage(weight) {
            return [weight * 4];
        },
        unit: 'mcg/kg'
    },
    [DrugNameEnum.DEXMED_NASAL]: {
        calculateDosage(weight) {
            return [weight * 2, weight * 3];
        },
        unit: 'mcg/kg'
    },
    [DrugNameEnum.MORPHINE_IV]: {
        calculateDosage(weight) {
            return [weight * 0.05, weight * 0.1];
        },
        unit: 'mg/kg',
        metadata: 'Titrate'
    },
    [DrugNameEnum.FENTANYL_IV]: {
        calculateDosage(weight) {
            return [weight * 1, weight * 2];
        },
        unit: 'mcg/kg'
    },
    [DrugNameEnum.ALFENTANIL_IV]: {
        calculateDosage(weight) {
            return [weight * 10, weight * 20];
        },
        unit: 'mcg/kg'
    },
    [DrugNameEnum.SUFENTANIL_IV]: {
        calculateDosage(weight) {
            return [weight * 0.1, weight * 0.3];
        },
        unit: 'mcg/kg'
    },
    [DrugNameEnum.SUXAMETHONIUM_IV]: {
        calculateDosage(weight) {
            // IV dose range for children
            return [weight * 1, weight * 2];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.SUXAMETHONIUM_IM]: {
        calculateDosage(weight) {
            // IM dose range for infants and children
            return [weight * 3, weight * 4];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.ROCURONIUM_IV]: {
        calculateDosage(weight) {
            return [weight * 0.6, weight * 1.2];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.ATACURIUM_IV]: {
        calculateDosage(weight) {
            return [weight * 0.5, weight * 0.8];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.NEOSTIGMINE_IV]: {
        calculateDosage(weight) {
            return [weight * 0.05, weight * 0.07];
        },
        unit: 'mcg/kg'
    },
    [DrugNameEnum.SUGAMMADEX_2_IV]: {
        calculateDosage(weight) {
            return [weight * 2];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.SUGAMMADEX_16_IV]: {
        calculateDosage(weight) {
            return [weight * 16];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.LIDOCAINE]: {
        calculateDosage(weight) {
            return [weight * 3];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.LIDOCAINE_ADREN]: {
        calculateDosage(weight) {
            return [weight * 7];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.BUPIVACAINE]: {
        calculateDosage(weight) {
            return [weight * 2];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.ROPIVACAINE]: {
        calculateDosage(weight) {
            return [weight * 3];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.PARACETAMOL_IV]: {
        calculateDosage(weight) {
            return [weight * 15];
        },
        unit: 'mg/kg',
        maxDosage: 1000,
        metadata: '1g max'
    },
    [DrugNameEnum.IBUPROFEN_TDS]: {
        calculateDosage(weight) {
            return [weight * 10];
        },
        unit: 'mg/kg',
        metadata: 'TDS'
    },
    [DrugNameEnum.IBUPROFEN_QDS]: {
        calculateDosage(weight) {
            return [weight * 5];
        },
        unit: 'mg/kg',
        metadata: 'QDS'
    },
    [DrugNameEnum.DICLOFENAC_IV]: {
        calculateDosage(weight) {
            return [weight * 1];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.MORPHINE_PO]: {
        calculateDosage(weight) {
            return [weight * 0.1, weight * 0.2];
        },
        unit: 'mg/kg',
        metadata: '4 hourly - titrate'
    },
    [DrugNameEnum.DEXAMETHASONE_IV]: {
        calculateDosage(weight) {
            return [weight * 0.15];
        },
        unit: 'mg/kg',
        maxDosage: 6.6,
        metadata: '6.6mg max'
    },
    [DrugNameEnum.ONDANSETRON]: {
        calculateDosage(weight) {
            return [weight * 0.15];
        },
        unit: 'mg/kg',
        maxDosage: 8,
        metadata: '8mg max'
    },
    [DrugNameEnum.DROPERIDOL_IV]: {
        calculateDosage(weight) {
            return [weight * 0.01, weight * 0.05];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.CYCLIZINE_IV]: {
        calculateDosage(weight) {
            return [weight * 1];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.LORAZEPAM_IV]: {
        calculateDosage(weight) {
            return [weight * 0.1];
        },
        unit: 'mg/kg',
        maxDosage: 4,
        metadata: '4mg max'
    },
    [DrugNameEnum.MIDAZOLAM_IV]: {
        calculateDosage(weight) {
            return [weight * 0.1];
        },
        unit: 'mg/kg',
        metadata: 'Titrated to effect, caution'
    },
    [DrugNameEnum.DIAZEPAM_IV]: {
        calculateDosage(weight) {
            return [weight * 0.3];
        },
        unit: 'mg/kg'
    },
    [DrugNameEnum.CARBAMAZEPINE_PO]: {
        calculateDosage(weight) {
            return [weight * 5];
        },
        unit: 'mg/kg',
        metadata: 'ON'
    },
    [DrugNameEnum.LEVETIRACETAM_IV]: {
        calculateDosage(weight) {
            return [weight * 10];
        },
        unit: 'mg/kg',
        metadata: 'OD'
    },
    [DrugNameEnum.PHENYTOIN_IV]: {
        calculateDosage(weight) {
            return [weight * 20];
        },
        unit: 'mg/kg',
        metadata: 'Loading dose'
    },
    [DrugNameEnum.SODIUM_VALPROATE_IV]: {
        calculateDosage(weight) {
            return [weight];
        },
        unit: 'mg/kg',
        metadata: 'Loading dose - monitor levels'
    }
};
