import { useState } from 'react';
import doctorImage from '../assets/doctor.svg';
import MenuIcon from '../assets/menu-mobile.png';
import CloseMenuIcon from '../assets/closeMenu.png';
import styled from 'styled-components';

type MenuMobileProps = {
    showMenu: any; 
}

const StyledMenu = styled.div<MenuMobileProps>`
        position: absolute;
        z-index: 20;
        width: 100%;
        background: #B700DB;
        top: 60px;

        opacity: ${({ showMenu }) => !showMenu ? "0" : "1"};
        transition: all .2s;
        visibility: ${({ showMenu }) => !showMenu ? "hidden" : "visible"};

        ul {
            padding-left: 0;
            margin: 0;

            li {
                list-style: none;
                font-size: 20px;
                border-bottom: 1px solid #B75FDB;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                
                a {
                    color: white;
                    text-decoration: none;
                }
            }
        }
`;

const MenuMobile = ({showMenu}: MenuMobileProps) => (
    <StyledMenu showMenu={showMenu}>
        <ul>
            <li><a href="#">Tratamientos</a></li>
            <li><a href="#">Consulta online</a></li>
            <li><a href="#">Quiénes somos</a></li>
            <li><a href="#">Preguntas frecuentes</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">¿Tenés dudas?</a></li>
        </ul>
    </StyledMenu>
);

const Header = () => {

const [showMenu, setShowMenu] = useState(false);

const handleChange = () => {
    setShowMenu(!showMenu)
}

    return (
        <header className='header'>
            <div className='container-header'>
                <nav className='navbar'>
                    <h1>Choiz</h1>
                    <div 
                        className='menu-mobile'
                        onClick={handleChange}
                    >
                        <img src={showMenu ? CloseMenuIcon : MenuIcon} alt="Cuestionario"/>
                    </div>
                    <MenuMobile showMenu={showMenu} />
                    
                    <ul className='menu-desktop'>
                        <li><a href="#">Tratamientos</a></li>
                        <li><a href="#">Consulta online</a></li>
                        <li><a href="#">Quiénes somos</a></li>
                        <li><a href="#">Preguntas frecuentes</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li className='menu-item-button'><a href="#">¿Tenés dudas?</a></li>
                    </ul>
                </nav>
                <h2>Cuidarte siempre te cuesta menos con Choiz</h2>
                <div className='wrapper-image'>
                    <img src={doctorImage}  alt="doctor" />
                </div>
            </div>   
        </header>
    );
}


export default Header;