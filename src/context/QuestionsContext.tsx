import { createContext } from 'react';
import { ContextQuestionsProps } from '../types/types';
import { QuestionsData, ChildrenProps } from '../types/types';
import { useState, useEffect } from 'react';

export const QuestionsContext = createContext<ContextQuestionsProps>({
    questionsData: null,
    setQuestionsData: () => null,
    loadQuestionsData: async () => {},
});

export const QuestionsProvider = ({ children }: ChildrenProps) => {
    const [questionsData, setQuestionsData] = useState<QuestionsData | null>(null);
    const url = 'https://run.mocky.io/v3/6f0fb5ae-1758-4537-84c7-f6669edd614f';

    const loadQuestionsData = async () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
            setQuestionsData(data);
        });
    };

    const value = {
        questionsData,
        setQuestionsData,
        loadQuestionsData,
    }

    useEffect(() => {
        loadQuestionsData();
      }, []);

      return (
        <QuestionsContext.Provider value={value}>
            {children}
        </QuestionsContext.Provider>
      )
}