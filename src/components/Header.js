import React, { useState, useEffect } from 'react'
import Ilustration from '../img/MaicolDuque.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import light from '../img/light.png'
import dark from '../img/dark.png'

export default ({ changeMode }) => {
  
  const [colorIcon, setColorIcon] = useState('black');
  const handleCheckbox = (event) => {
    if (event.target.checked) {
      document.body.classList.remove('isLight');
      document.body.classList.add('isDark');
      setColorIcon('white');
      changeMode('white');
    } else {
      document.body.classList.remove('isDark');
      document.body.classList.add('isLight');
      setColorIcon('black');
      changeMode('black');
    }
  }

  useEffect( ()=> {
    document.body.classList.add('isLight');
  }, [])
  

  return (
    <header className="bg-banner border-solid border-b-2 ">
      <div className="container mx-auto p-12 max-w-6xl ">

        <div className="dark-mode">
          <input type="checkbox" id="checkbox" className="dark-mode-checkbox" onChange={handleCheckbox}></input>
          <label className="switch" htmlFor="checkbox" >
            <div className="content-dark">
              <img src={dark} alt="dark" ></img>
            </div>
            <div className="content-light">
              <img src={light} alt="light" ></img>
            </div>
          </label>
        </div>

        <div className="flex justify-center items-center flex-wrap">


          <div className="md:flex-1 mb-4">
            <h1 className="font-bold colorLetra text-4xl sm:text-5xl text-center sm:text-left">¡Hola! Soy Maicol Duque </h1>
            <ul>
              <li className="text-xl font-light colorSubtitle">Desarrollador de aplicaciones web full stack.</li>
              <li className="text-md font-light colorSubtitle">                
                <FontAwesomeIcon key="location" icon={faMapMarkerAlt} size="1x" color={colorIcon} />               
                <span className="ml-5">Medellín, Colombia</span>
              </li>
              <li className="text-md font-light colorSubtitle">
                <FontAwesomeIcon key="email" icon={faEnvelope} size="1x" color={colorIcon} />
                <a href="mailto:maicolduque01@gmail.com" className="ml-4 my-email">maicolduque01@gmail.com</a>
              </li>              
            </ul>                                      
          </div>
          {/* Extracted Ilustration of: https://undraw.co/ */}
          <img src={Ilustration} alt="Software developer" id="image-profile" style={{ height: "300px" }}></img>
        </div>
        <div className="flex justify-center mt-5">
          <a href="https://github.com/MaicolDuque" target="_blank" className="mr-3" rel="noopener noreferrer">
            <FontAwesomeIcon key="github" icon={faGithub} size="2x" cursor="pointer" color={colorIcon} />
          </a>
          <a href="https://twitter.com/maicolduque24" target="_blank" className="mr-3" rel="noopener noreferrer">
            <FontAwesomeIcon key="twitter" icon={faTwitter} size="2x" cursor="pointer" color={colorIcon} />
          </a>
          <a href="https://www.linkedin.com/in/maicolduque/" target="_blank" className="mr-3" rel="noopener noreferrer">
            <FontAwesomeIcon key="linkdin" icon={faLinkedin} size="2x" cursor="pointer" color={colorIcon} />
          </a>
        </div>

      </div>
    </header>
  )
}