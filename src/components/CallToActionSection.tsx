type CallToActionSectionProps = {
    handleChange: () => void;
}

const CallToActionSection = ({
    handleChange,
}: CallToActionSectionProps) => {

    return (
        <div className='call-to-action-wrapper'>
            <p>Las mejores expertas en ginecología del país están a tu disposición para
             conversar sin que tengas que salir de tu casa.</p>
             <div className='button' onClick={handleChange}>
                Agendar una consulta
             </div>
        </div>
    );
};

export default CallToActionSection;
