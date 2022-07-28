import { ReactNode } from 'react';

export type MedicineData = {
    pills: any;
    rings: any;
    patches: any;
    medicines: any;
  }
  
export interface ChildrenProps {
    children: ReactNode;
}
  
export interface ContextMedicinesProps {
    medicineData: MedicineData | null;
    setMedicineData: (medicineData: MedicineData) => void;
    loadMedicineData: () => Promise<any>;
}

export type QuestionsData = {
    data: any,
};

export interface ContextQuestionsProps {
    questionsData: QuestionsData | null;
    setQuestionsData: (questionsData: QuestionsData) => void;
    loadQuestionsData: () => Promise<any>;
}