import { createContext } from 'react';
import { ContextMedicinesProps } from '../types/types';
import { useState, useEffect } from 'react';
import { MedicineData, ChildrenProps } from '../types/types';

export const MedicineContext = createContext<ContextMedicinesProps>({
    medicineData: null,
    setMedicineData: () => null,
    loadMedicineData: async () => {},
  });

export const MedicineProvider = ({ children }: ChildrenProps) => {
    const [medicineData, setMedicineData] = useState<MedicineData | null>(null);
    const url = 'https://run.mocky.io/v3/1f00949f-adc2-4484-ad6d-4f565e82ad30';
  
    const loadMedicineData = async () => {
      fetch(url)
          .then((response) => response.json())
          .then((data) => {
          setMedicineData(data.data);
        });
    };
  
    const value = {
      medicineData,
      setMedicineData,
      loadMedicineData,
    };
  
    useEffect(() => {
      loadMedicineData();
    }, []);
  
    return (
      <MedicineContext.Provider value={value}>
        {children}
      </MedicineContext.Provider>
    );
  };