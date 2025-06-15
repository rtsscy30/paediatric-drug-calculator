import { DrugNameEnum, DrugGroup } from '../types';

export const drugGroups: Record<DrugGroup, DrugNameEnum[]> = {
    // Antiemetics
    [DrugGroup.ANTIEMETICS]: [
        DrugNameEnum.DEXAMETHASONE_IV,
        DrugNameEnum.ONDANSETRON,
        DrugNameEnum.DROPERIDOL_IV,
        DrugNameEnum.CYCLIZINE_IV
    ],
    // Anticonvulsants
    [DrugGroup.ANTICONVULSANTS]: [
        DrugNameEnum.LORAZEPAM_IV,
        DrugNameEnum.MIDAZOLAM_IV,
        DrugNameEnum.DIAZEPAM_IV,
        DrugNameEnum.CARBAMAZEPINE_PO,
        DrugNameEnum.LEVETIRACETAM_IV,
        DrugNameEnum.PHENYTOIN_IV,
        DrugNameEnum.SODIUM_VALPROATE_IV
    ],
    // Analgesia
    [DrugGroup.ANALGESIA]: [
        DrugNameEnum.PARACETAMOL_IV,
        DrugNameEnum.IBUPROFEN_TDS,
        DrugNameEnum.IBUPROFEN_QDS,
        DrugNameEnum.DICLOFENAC_IV,
        DrugNameEnum.MORPHINE_IV,
        DrugNameEnum.FENTANYL_IV
    ],
    // Muscle Relaxants
    [DrugGroup.MUSCLE_RELAXANTS]: [
        DrugNameEnum.SUXAMETHONIUM_IV,
        DrugNameEnum.ROCURONIUM_IV,
        DrugNameEnum.ATACURIUM_IV,
        DrugNameEnum.NEOSTIGMINE_IV,
        DrugNameEnum.SUGAMMADEX_2_IV
    ],
    // Local Anesthetics
    [DrugGroup.LOCAL_ANESTHETICS]: [
        DrugNameEnum.LIDOCAINE,
        DrugNameEnum.LIDOCAINE_ADREN,
        DrugNameEnum.BUPIVACAINE,
        DrugNameEnum.ROPIVACAINE
    ],
    // Premeds
    [DrugGroup.PREMEDS]: [
        DrugNameEnum.MIDAZOLAM_PO,
        DrugNameEnum.CLONIDINE_PO,
        DrugNameEnum.DEXMED_NASAL
    ],
    // Opioids
    [DrugGroup.OPIOIDS]: [
        DrugNameEnum.ALFENTANIL_IV,
        DrugNameEnum.SUFENTANIL_IV,
        DrugNameEnum.MORPHINE_PO
    ],
    // Antibiotics
    [DrugGroup.ANTIBIOTICS]: [
        DrugNameEnum.AMOXICILLIN,
        DrugNameEnum.CEFTRIAXONE_IV,
        DrugNameEnum.CEFUROXIME_IV_LOAD,
        DrugNameEnum.CEFUROXIME_IV_MAINT,
        DrugNameEnum.CO_AMOXICLAV,
        DrugNameEnum.FLUCLOXACILLIN,
        DrugNameEnum.GENTAMICIN_IV,
        DrugNameEnum.TAZOCIN_IV,
        DrugNameEnum.METRONIDAZOLE_IV,
        DrugNameEnum.MEROPENEM_IV,
        DrugNameEnum.TEICOPLANIN_IV,
        DrugNameEnum.VANCOMYCIN_IV
    ],
    // Induction
    [DrugGroup.ANESTHESIA]: [
        DrugNameEnum.MIDAZOLAM,
        DrugNameEnum.KETAMINE,
        DrugNameEnum.PROPOFOL_BOLUS,
        DrugNameEnum.PROPOFOL_INFUSION,
        DrugNameEnum.PROPOFOL_TCL,
        DrugNameEnum.REMI_TCL,
        DrugNameEnum.THIOPENTONE,
        DrugNameEnum.DEXMED_BOLUS,
        DrugNameEnum.DEXMED_INFUSION,
        DrugNameEnum.KETAMINE_PO
    ],
    // Emergency Drugs
    [DrugGroup.EMERGENCY_DRUGS]: [
        DrugNameEnum.GLYCOPYRROLATE,
        DrugNameEnum.ATROPINE,
        DrugNameEnum.SUXAMETHONIUM_IV,
        DrugNameEnum.SUXAMETHONIUM_IM,
        DrugNameEnum.SUGAMMADEX_16_IV
    ]
};
