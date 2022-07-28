import React from 'react';
import './App.css';
import Header from './components/Header';
import CallToActionSection from './components/CallToActionSection';
import MedicineList from './components/MedicineList';
import FrequentQuestions from './components/FrequentQuestions';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { useState } from 'react';
import { MedicineProvider } from './context/MedicineContext';
import { QuestionsProvider } from './context/QuestionsContext';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleChange = () => {
    showModal === false ? setShowModal(true) : setShowModal(false)
  }

  return (
      <MedicineProvider>
        <QuestionsProvider>
          <div className="App">
            <Header />
            <CallToActionSection 
              handleChange={handleChange}
            /> 
            <MedicineList />
            <FrequentQuestions />
            {showModal &&
              <Modal handleChange={handleChange}/>
            }
            <Footer />
          </div>
        </QuestionsProvider>
      </MedicineProvider>
  );
}

export default App;
