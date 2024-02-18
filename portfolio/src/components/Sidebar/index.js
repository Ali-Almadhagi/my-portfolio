import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import Logo from '../../assets/images/logo1.png'
import Logo1 from '../../assets/images/letterLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faClose, faEye, faEyeDropper, faEyeLowVision, faEyeSlash, faGear, faHome, faLightbulb, faMehRollingEyes, faSuitcase, faSuitcaseMedical, faSuitcaseRolling, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
    
    <div className='nav-bar'>
        <Link className='logo' to='/' onClick={() => setShowNav(false)}>
            <img src={Logo} alt='logo' />
        </Link>
        <Link className='logo1' to='/' onClick={() => setShowNav(false)}>
            <img className='mobile-logo' src={Logo1} alt='logo1' />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact='true' activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color='aliceblue'/>
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color='aliceblue'/>
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="projects-link" to="/portfolio" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faLightbulb} color='aliceblue'/>
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color='aliceblue'/>
            </NavLink>
            <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#E0E0E0"
            size="4x"
            className='close-icon' />
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ali-almadhagi/'>
                    <FontAwesomeIcon icon={faLinkedinIn} color='aliceblue' />
                </a>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ali-almadhagi/'>
                    <FontAwesomeIcon icon={faGithub} color='aliceblue' />
                </a>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ali-almadhagi/'>
                    <FontAwesomeIcon icon={faFacebook} color='aliceblue' />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#181818"
          size="5x"
          className='hamburger-icon' />
    </div>
);}

export default Sidebar;