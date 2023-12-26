import { Link } from 'react-router-dom';
import LogoLetter from '../../assets/images/letter.png';
import './index.scss';

const Home = () => {


    return (
        <div className="container  home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm 
                <img src={ LogoLetter } alt="developer" />
                li 
                <img src={ LogoLetter } alt="developer" />
                lmadhagi
                <br />
                software developer.
                </h1>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>

    );
}

export default Home;