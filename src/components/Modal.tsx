import QuestionIcon from '../assets/question-icon.svg';
import PayIcon from '../assets/pay-icon.svg';
import VideocallIcon from '../assets/videocall-icon.svg';
import CloseIcon from '../assets/close-icon.svg';

type ModalProps = {
    handleChange: () => void;
}

const Modal = ({
    handleChange,
}: ModalProps) => (
    <div className='wrapper-modal'>
        <div className='content-modal'>
        <div className='modal'>
            <h2>Paso a paso para la consulta remota</h2>
            <div className='items-wrapper'>

                <div className='item-container'>
                    <div className='modal-item-image'>
                        <img src={QuestionIcon} alt="Cuestionario"/>
                    </div>
                    <h3>1.</h3>
                    <p className='first-p'>Completás algunas preguntas breves y nos contás el motivo de la consulta.</p>
                    <p className='second-p'>Vamos a elegir la doctora adecuada según su especialidad y tu necesidad.</p>
                </div>

                <div className='divisor'></div>

                <div className='item-container'>
                    <div className='modal-item-image'>
                        <img src={PayIcon} alt="Pago"/>
                    </div>
                    <h3>2.</h3>
                    <p className='first-p'>Te contactamos por y coordinamos el pago para reservar la fecha.</p>
                    <p className='second-p'>Si tenés Swiss Medical es GRATIS* y si no, podes pedir reintegro</p>
                    <p className='third-p'>*Excepto para planes que requieren copago</p>
                </div>

                <div className='divisor'></div>

                <div className='item-container'>
                    <div className='modal-item-image'>
                        <img src={VideocallIcon} alt="Videollamada"/>
                    </div>
                    <h3>3.</h3>
                    <p className='first-p'>Tenés la videollamada con tu doctora, desde donde estés y sin límite de tiempo.</p>
                    <p className='second-p'>¡Dura lo que vos necesites!</p>
                </div>

            </div>
            <div className='close-modal' onClick={handleChange}>
                <img src={CloseIcon} alt="cerrar"/>
            </div>
        </div>
        </div>
        
    </div>
    
);

export default Modal;