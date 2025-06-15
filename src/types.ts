export interface DrugDosage {
    weight: number;
    age: number;
    height: number;
    gender: string;
    drug: DrugNameEnum;
    concentration: number;
    desiredDosage?: number;
    weightType?: WeightType;
    isInfusion?: boolean; // For drugs that have different formulas for infusion vs bolus
}

export interface DrugCalculationResult {
    weight: number;
    age: number;
    drug: string;
    concentration: number;
    dosages: number[];
    volumes: string[];
    weightType: WeightType;
}

export enum DrugGroup {
    ANTIEMETICS = 'antiemetics',
    ANTICONVULSANTS = 'anticonvulsants',
    ANALGESIA = 'analgesia',
    MUSCLE_RELAXANTS = 'muscle_relaxants',
    LOCAL_ANESTHETICS = 'local_anesthetics',
    PREMEDS = 'premeds',
    OPIOIDS = 'opioids',
    ANTIBIOTICS = 'antibiotics',
    ANESTHESIA = 'anesthesia',
    EMERGENCY_DRUGS = 'emergency_drugs'
}

// Export the values as an enum for TypeScript
export const DrugNameEnum = {
    MIDAZOLAM: 'midazolam',
    KETAMINE: 'ketamine',
    PROPOFOL_BOLUS: 'propofol_bolus',
    PROPOFOL_INFUSION: 'propofol_infusion',
    PROPOFOL_TCL: 'propofol_tcl',
    REMI_TCL: 'remi_tcl',
    THIOPENTONE: 'thiopentone',
    GLYCOPYRROLATE: 'glycopyrrolate',
    ATROPINE: 'atropine',
    DEXMED_BOLUS: 'dexmed_bolus',
    DEXMED_INFUSION: 'dexmed_infusion',
    AMOXICILLIN: 'amoxicillin',
    CEFTRIAXONE_IV: 'ceftriaxone_iv',
    CEFUROXIME_IV_LOAD: 'cefuroxime_iv_load',
    CEFUROXIME_IV_MAINT: 'cefuroxime_iv_maint',
    CO_AMOXICLAV: 'co_amoxiclav',
    FLUCLOXACILLIN: 'flucloxacillin',
    GENTAMICIN_IV: 'gentamicin_iv',
    TAZOCIN_IV: 'tazocin_iv',
    METRONIDAZOLE_IV: 'metronidazole_iv',
    MEROPENEM_IV: 'meropenem_iv',
    TEICOPLANIN_IV: 'teicoplanin_iv',
    VANCOMYCIN_IV: 'vancomycin_iv',
    KETAMINE_PO: 'ketamine_po',
    MIDAZOLAM_PO: 'midazolam_po',
    CLONIDINE_PO: 'clonidine_po',
    DEXMED_NASAL: 'dexmed_nasal',
    MORPHINE_IV: 'morphine_iv',
    FENTANYL_IV: 'fentanyl_iv',
    ALFENTANIL_IV: 'alfentanil_iv',
    SUFENTANIL_IV: 'sufentanil_iv',
    SUXAMETHONIUM_IV: 'suxamethonium_iv',
    SUXAMETHONIUM_IM: 'suxamethonium_im',
    ROCURONIUM_IV: 'rocuronium_iv',
    ATACURIUM_IV: 'atracurium_iv',
    NEOSTIGMINE_IV: 'neostigmine_iv',
    SUGAMMADEX_2_IV: 'sugammadex_2_iv',
    SUGAMMADEX_16_IV: 'sugammadex_16_iv',
    LIDOCAINE: 'lidocaine',
    LIDOCAINE_ADREN: 'lidocaine_adren',
    BUPIVACAINE: 'bupivacaine',
    ROPIVACAINE: 'ropivacaine',
    PARACETAMOL_IV: 'paracetamol_iv',
    IBUPROFEN_TDS: 'ibuprofen_tds',
    IBUPROFEN_QDS: 'ibuprofen_qds',
    DICLOFENAC_IV: 'diclofenac_iv',
    MORPHINE_PO: 'morphine_po',
    DEXAMETHASONE_IV: 'dexamethasone_iv',
    ONDANSETRON: 'ondansetron',
    DROPERIDOL_IV: 'droperidol_iv',
    CYCLIZINE_IV: 'cyclizine_iv',
    LORAZEPAM_IV: 'lorazepam_iv',
    MIDAZOLAM_IV: 'midazolam_iv',
    DIAZEPAM_IV: 'diazepam_iv',
    CARBAMAZEPINE_PO: 'carbamazepine_po',
    LEVETIRACETAM_IV: 'levetiracetam_iv',
    PHENYTOIN_IV: 'phenytoin_iv',
    SODIUM_VALPROATE_IV: 'sodium_valproate_iv'
} as const;

// Type for the enum
export type DrugNameEnum = typeof DrugNameEnum[keyof typeof DrugNameEnum];

export enum WeightType {
    TOTAL = 'total',
    IDEAL = 'ideal',
    ADJUSTED = 'adjusted',
    LEAN = 'lean'
}

export interface WeightCalculation {
    totalWeight: number;
    idealWeight: number;
    adjustedWeight: number;
    leanWeight: number;
    height: number;
}

export interface DrugDosageInfo {
    doses: number[];
    unit: string;
    weightType: WeightType;
    range?: [number, number]; // Optional range for drugs with variable doses
}

