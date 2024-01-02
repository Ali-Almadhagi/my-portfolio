import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faCss3Alt, faGitAlt, faHtml5, faJava, faJs, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timeoutId);
    }, []);

    return(
        <div  className=" container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>I'm very abitious computer science student looking for a role in software development wuth the the opportunity to work with latest technologies on challenging and diverse projects</p>
                <p>As a software developer, I possess an analytical mindset, meticulous attention to detail, strong problem-solving skills, a commitment to continuous learning, and effective communication, ensuring a versatile and collaborative approach to software development.</p>
                <p>If I need to define myself in one sentence that would be "I'm a tech-savvy, family-oriented individual with a deep love for learning, always eager to explore and embrace the latest advancements in technology."</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                    <FontAwesomeIcon icon={faPython} color="#DD0031" />
                    </div>
                    <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                    <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
                    </div>
                    <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                    </div>
                    <div className="face6">
                    <FontAwesomeIcon icon={faJava} color="#EC4D28" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About