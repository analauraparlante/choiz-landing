import Logo from '../assets/choiz-logo.svg';
import InstagramIcon from '../assets/instagram-icon.svg';
import FacebookIcon from '../assets/facebook-icon.svg';
import WhatsappIcon from '../assets/whatsapp-icon.svg';
import MailIcon from '../assets/mail-icon.svg';

const Footer = () => (
    <footer>
        <div className='footer-container'>
            <div className='logo-footer-wrapper'>
                <img src={Logo}  alt="Choiz" />
                <p>&copy; XCALE HEALTH srl .Todos los derechos reservados.</p>
            </div>
            <div className='social-wrapper'>
                <p>¡Hablemos!</p>
                <ul>
                    <li><a href="https://www.instagram.com/choiz.ar/" target="_blank"><img src={InstagramIcon} alt="instagram" /></a></li>
                    <li><a href="https://www.facebook.com/SomosChoiz" target="_blank"><img src={FacebookIcon} alt="facebook" /></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=5491120402909" target="_blank"><img src={WhatsappIcon} alt="whatsapp" /></a></li>
                    <li><a href="mailto: hello@choice.com.ar" target="_blank"><img src={MailIcon} alt="mail" /></a></li>
                </ul>
            </div>
        </div>      
    </footer>
);

export default Footer;