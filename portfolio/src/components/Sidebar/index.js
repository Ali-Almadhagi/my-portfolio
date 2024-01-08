import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import Logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeDropper, faEyeLowVision, faEyeSlash, faGear, faHome, faLightbulb, faMehRollingEyes, faSuitcase, faSuitcaseMedical, faSuitcaseRolling, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='aliceblue'/>
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='aliceblue'/>
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="projects-link" to="/portfolio">
                <FontAwesomeIcon icon={faLightbulb} color='aliceblue'/>
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="skills-link" to="/skills">
                <FontAwesomeIcon icon={faGear} color='aliceblue'/>
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='aliceblue'/>
            </NavLink>
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
    </div>
)

export default Sidebar;