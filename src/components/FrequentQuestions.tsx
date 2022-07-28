import { useContext, useState } from 'react';
import Collapsible from 'react-collapsible';
import { QuestionsContext } from '../context/QuestionsContext';
import Arrow from '../assets/arrow.svg';

const FrequentQuestions = () => {
    const { questionsData } = useContext(QuestionsContext);
    const [questionOpen, setQuestionOpen] = useState();

    const handleChange = (id: any) => {
        setQuestionOpen(id);
    }

    return (
        <section className='second-section-wrapper'>
            <h2>Preguntas frecuentes</h2>
            {questionsData && (
                questionsData.data.map((item: { title: string; description: string; id: string; enabled: boolean }) => {
                    if(item.enabled === true)
                    return (
                        <Collapsible
                            key={item.id}
                            trigger={<div className='header-collapsible'>
                                <p>{item.title}</p>
                                <div>
                                    <img src={Arrow} alt="Ver más"/>
                                </div>
                            </div>}
                            open={questionOpen === item.id}
                            onTriggerOpening={() => handleChange(item.id)}
                        >
                            <p className='collapsible-description'>{item.description}</p>
                        </Collapsible>
                    )
                })
            )}    
        </section>
    );
}

export default FrequentQuestions;