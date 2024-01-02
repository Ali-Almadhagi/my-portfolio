import './index.scss'
import LetterLogo from '../../assets/images/letterLogo.png' 
import { useEffect, useRef } from 'react'

const Logo = () => {
    
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    
    return(
        <div className='logo-container'>
            <img className='solid-logo' src={LetterLogo}/>
            
        </div>
    );
}

export default Logo