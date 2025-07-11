// src/data/drugs.ts
interface DosageRange {
  min: number;
  max?: number;
}

export interface Drug {
  value: string;
  label: string;
  dosagePerKg: DosageRange;
  unit: string;
  weightType: string;
  max: string;
}

const DRUGS: Drug[] = [
  { value: 'MIDAZOLAM', label: 'Midazolam', dosagePerKg: { min: 0.1, max: 0.2 }, unit: 'mg/kg', weightType: 'TBW', max: '' },
  { value: 'KETAMINE', label: 'Ketamine', dosagePerKg: { min: 1, max: 2 }, unit: 'mg/kg', weightType: 'IBW', max: '' },
  { value: 'PROPOFOL_BOLUS', label: 'Propofol Bolus', dosagePerKg: { min: 2, max: 5 }, unit: 'mg/kg', weightType: 'IBW', max: '' },
  { value: 'PROPOFOL_INFUSION', label: 'Propofol Infusion', dosagePerKg: { min: 4, max: 10 }, unit: 'mg/kg/hour', weightType: 'AdjBW', max: '' },
  { value: 'PROPOFOL_TCL', label: 'Propofol TCL', dosagePerKg: { min: 1 }, unit: 'mg/kg', weightType: 'AdjBW', max: '' },
  { value: 'REMI_TCL', label: 'Remi TCL', dosagePerKg: { min: 1 }, unit: 'mg/kg', weightType: 'AdjBW', max: '' },
  { value: 'THIOPENTONE', label: 'Thiopentone', dosagePerKg: { min: 3, max: 5 }, unit: 'mg/kg', weightType: 'AdjBW', max: '' },
  { value: 'GLYCOPYRROLATE', label: 'Glycopyrrolate', dosagePerKg: { min: 4 }, unit: 'mcg/kg', weightType: 'TBW', max: '' },
  { value: 'ATROPINE', label: 'Atropine', dosagePerKg: { min: 20 }, unit: 'mcg/kg', weightType: 'TBW', max: '' },
  { value: 'DEXMED_BOLUS', label: 'Dexmedetomidine Bolus', dosagePerKg: { min: 1 }, unit: 'mcg/kg', weightType: 'AdjBW', max: '' },
  { value: 'DEXMED_INFUSION', label: 'Dexmedetomidine Infusion', dosagePerKg: { min: 0.5, max: 1 }, unit: 'mcg/kg/hour', weightType: 'AdjBW', max: '' },
  { value: 'AMOXICILLIN', label: 'Amoxicillin', dosagePerKg: { min: 30 }, unit: 'mg/kg', weightType: 'TBW', max: '1g max' },
  { value: 'CEFTRIAXONE_IV', label: 'Ceftriaxone IV', dosagePerKg: { min: 80 }, unit: 'mg/kg', weightType: 'TBW', max: '4g max' },
  { value: 'CEFUROXIME_IV_LOAD', label: 'Cefuroxime IV Load', dosagePerKg: { min: 50 }, unit: 'mg/kg', weightType: 'TBW', max: '1.5g max' },
  { value: 'CEFUROXIME_IV_MAINT', label: 'Cefuroxime IV Maint', dosagePerKg: { min: 30 }, unit: 'mg/kg', weightType: 'TBW', max: '1.5g max' },
  { value: 'CO_AMOXICLAV', label: 'Co-Amoxiclav', dosagePerKg: { min: 30 }, unit: 'mg/kg', weightType: 'TBW', max: '1.2g max' },
  { value: 'FLUCLOXACILLIN', label: 'Flucloxacillin', dosagePerKg: { min: 12.5, max: 25 }, unit: 'mg/kg', weightType: 'TBW', max: '1g max' },
  { value: 'GENTAMICIN_IV', label: 'Gentamicin IV', dosagePerKg: { min: 7 }, unit: 'mg/kg', weightType: 'AdjBW', max: 'AdjBW *7mg/kg' },
  { value: 'TAZOCIN_IV', label: 'Tazocin IV', dosagePerKg: { min: 90 }, unit: 'mg/kg', weightType: 'TBW', max: '' },
  { value: 'METRONIDAZOLE_IV', label: 'Metronidazole IV', dosagePerKg: { min: 7.5 }, unit: 'mg/kg', weightType: 'TBW', max: '400mg max' },
  { value: 'MEROPENEM_IV', label: 'Meropenem IV', dosagePerKg: { min: 20 }, unit: 'mg/kg', weightType: 'TBW', max: '1g max' },
  { value: 'TEICOPLANIN_IV', label: 'Teicoplanin IV', dosagePerKg: { min: 6 }, unit: 'mg/kg', weightType: 'TBW', max: '12 hourly' },
  { value: 'VANCOMYCIN_IV', label: 'Vancomycin IV', dosagePerKg: { min: 15 }, unit: 'mg/kg', weightType: 'TBW', max: '12 hourly. Check levels' },
  { value: 'KETAMINE_PO', label: 'Ketamine PO', dosagePerKg: { min: 3, max: 5 }, unit: 'mg/kg', weightType: 'TBW', max: 'Titrate' },
  { value: 'MIDAZOLAM_PO', label: 'Midazolam PO', dosagePerKg: { min: 0.5 }, unit: 'mg/kg', weightType: 'TBW', max: '' },
  { value: 'CLONIDINE_PO', label: 'Clonidine PO', dosagePerKg: { min: 4 }, unit: 'mcg/kg', weightType: 'TBW', max: '' },
  { value: 'DEXMED_NASAL', label: 'Dexmedetomidine Nasal', dosagePerKg: { min: 2, max: 3 }, unit: 'mcg/kg', weightType: 'AdjBW', max: '' },
  { value: 'MORPHINE_IV', label: 'Morphine IV', dosagePerKg: { min: 0.05, max: 0.1 }, unit: 'mg/kg', weightType: 'IBW', max: 'Titrate' },
  { value: 'FENTANYL_IV', label: 'Fentanyl IV', dosagePerKg: { min: 1, max: 2 }, unit: 'mcg/kg', weightType: 'AdjBW', max: '' },
  { value: 'ALFENTANIL_IV', label: 'Alfentanil IV', dosagePerKg: { min: 10, max: 20 }, unit: 'mcg/kg', weightType: 'AdjBW', max: '' },
  { value: 'SUFENTANIL_IV', label: 'Sufentanil IV', dosagePerKg: { min: 0.1, max: 0.3 }, unit: 'mcg/kg', weightType: 'AdjBW', max: '' },
  { value: 'SUXAMETHONIUM_IV', label: 'Suxamethonium IV', dosagePerKg: { min: 1, max: 2 }, unit: 'mg/kg', weightType: 'IBW', max: '' },
  { value: 'SUXAMETHONIUM_IM', label: 'Suxamethonium IM', dosagePerKg: { min: 3, max: 4 }, unit: 'mg/kg', weightType: 'IBW', max: '' },
  { value: 'ROCURONIUM_IV', label: 'Rocuronium IV', dosagePerKg: { min: 0.6, max: 1.2 }, unit: 'mg/kg', weightType: 'IBW', max: '' },
  { value: 'ATACURIUM_IV', label: 'Atacurium IV', dosagePerKg: { min: 0.5, max: 0.8 }, unit: 'mg/kg', weightType: 'AdjBW', max: '' },
  { value: 'NEOSTIGMINE_IV', label: 'Neostigmine IV', dosagePerKg: { min: 0.05, max: 0.07 }, unit: 'mcg/kg', weightType: 'AdjBW', max: '' },
  { value: 'SUGAMMADEX_2_IV', label: 'Sugammadex 2 IV', dosagePerKg: { min: 2 }, unit: 'mg/kg', weightType: 'TBW', max: '' },
  { value: 'SUGAMMADEX_16_IV', label: 'Sugammadex 16 IV', dosagePerKg: { min: 16 }, unit: 'mg/kg', weightType: 'TBW', max: '' },
  { value: 'LIDOCAINE', label: 'Lidocaine', dosagePerKg: { min: 3 }, unit: 'mg/kg', weightType: 'IBW', max: '' },
  { value: 'LIDOCAINE_ADREN', label: 'Lidocaine + Adrenaline', dosagePerKg: { min: 7 }, unit: 'mg/kg', weightType: 'IBW', max: '' },
  { value: 'BUPIVACAINE', label: 'Bupivacaine', dosagePerKg: { min: 2 }, unit: 'mg/kg', weightType: 'IBW', max: '' },
  { value: 'ROPIVACAINE', label: 'Ropivacaine', dosagePerKg: { min: 3 }, unit: 'mg/kg', weightType: 'IBW', max: '' },
  { value: 'PARACETAMOL_IV', label: 'Paracetamol IV', dosagePerKg: { min: 15 }, unit: 'mg/kg', weightType: 'AdjBW', max: '1g max' },
  { value: 'IBUPROFEN_TDS', label: 'Ibuprofen TDS', dosagePerKg: { min: 10 }, unit: 'mg/kg', weightType: 'AdjBW', max: 'TDS' },
  { value: 'IBUPROFEN_QDS', label: 'Ibuprofen QDS', dosagePerKg: { min: 5 }, unit: 'mg/kg', weightType: 'AdjBW', max: 'QDS' },
  { value: 'DICLOFENAC_IV', label: 'Diclofenac IV', dosagePerKg: { min: 1 }, unit: 'mg/kg', weightType: 'AdjBW', max: '' },
  { value: 'MORPHINE_PO', label: 'Morphine PO', dosagePerKg: { min: 0.1, max: 0.2 }, unit: 'mg/kg', weightType: 'IBW', max: '4 hourly - titrate' },
  { value: 'DEXAMETHASONE_IV', label: 'Dexamethasone IV', dosagePerKg: { min: 0.15 }, unit: 'mg/kg', weightType: 'TBW', max: '6.6mg max' },
  { value: 'ONDANSETRON', label: 'Ondansetron', dosagePerKg: { min: 0.15 }, unit: 'mg/kg', weightType: 'TBW', max: '8mg max' },
  { value: 'DROPERIDOL_IV', label: 'Droperidol IV', dosagePerKg: { min: 0.01, max: 0.05 }, unit: 'mg/kg', weightType: 'AdjBW', max: '' },
  { value: 'CYCLIZINE_IV', label: 'Cyclizine IV', dosagePerKg: { min: 1 }, unit: 'mg/kg', weightType: 'AdjBW', max: '' },
  { value: 'LORAZEPAM_IV', label: 'Lorazepam IV', dosagePerKg: { min: 0.1 }, unit: 'mg/kg', weightType: 'TBW', max: '4mg max' },
  { value: 'MIDAZOLAM_IV', label: 'Midazolam IV', dosagePerKg: { min: 0.1 }, unit: 'mg/kg', weightType: 'TBW', max: 'Titrated to effect, caution' },
  { value: 'DIAZEPAM_IV', label: 'Diazepam IV', dosagePerKg: { min: 0.3 }, unit: 'mg/kg', weightType: 'TBW', max: '' },
  { value: 'CARBAMAZEPINE_PO', label: 'Carbamazepine PO', dosagePerKg: { min: 5 }, unit: 'mg/kg', weightType: 'IBW', max: 'ON' },
  { value: 'LEVETIRACETAM_IV', label: 'Levetiracetam IV', dosagePerKg: { min: 10 }, unit: 'mg/kg', weightType: 'AdjBW', max: 'OD' },
  { value: 'PHENYTOIN_IV', label: 'Phenytoin IV', dosagePerKg: { min: 20 }, unit: 'mg/kg', weightType: 'TBW', max: 'Loading dose' },
  { value: 'SODIUM_VALPROATE_IV', label: 'Sodium Valproate IV', dosagePerKg: { min: 1 }, unit: 'mg/kg', weightType: 'TBW', max: 'Loading dose - monitor levels' },
];

export default DRUGS;
