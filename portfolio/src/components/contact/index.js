import { useEffect, useState, useCallback } from 'react'
import Loader from 'react-loaders'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow  } from '@react-google-maps/api';
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();
    const position = [42.3001, -83.2329]

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_xkxebek', 'template_3dmbpep', form.current, '-mR1uEMB-z6AjZmax')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

      const containerStyle = {
        width: '950px',
        height: '950px',
        border: 'solid'
      };
      
      const center = {
        lat: 42.322262,
        lng: -83.176315
      };
      
      
      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBN-wPrILL50zDdmushLstcQyD1r5LEKVI"
      })
    
      const [map, setMap] = useState(null)
    
      const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = useCallback(function callback(map) {
        setMap(null)
      }, [])
      
    
    return isLoaded ? (
       <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Ali Almadhagi,
          <br />
          Dearborn, MI, 48126
          <br />
          <br />
          (313)-707-4295
          <br />
          <span>alialmadhagi@gmail.com</span>
        </div>
      </div>
      <div className='map'>
      <GoogleMap 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={{ lat: 42.325, lng: -83.17 }} />
      </GoogleMap>
      </div>
      
    </>
        
    ) : <></>
}

export default Contact;