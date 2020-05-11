import React from 'react'
import Ilustration from '../img/MaicolDuque.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default () => (
  <header className="bg-white border-solid border-b-2 ">
    <div className="container mx-auto p-12 max-w-6xl ">

      <div className="flex justify-center items-center flex-wrap">
        <div className="md:flex-1">
          <h1 className="font-bold colorLetra text-5xl">¡Hola! Soy Maicol Duque </h1>          
          <p className="text-xl font-light">Desarrollador de aplicaciones web full stack.</p>
        </div>
        {/* Extracted Ilustration of: https://undraw.co/ */}
        <img src={Ilustration} alt="Software developer"  id="image-profile" style={ {height: "300px" }}></img>  
      </div>
      <div className="flex justify-center mt-5">      
        <a href="https://github.com/MaicolDuque" target="_blank" className="mr-3" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" cursor="pointer"/>
        </a>
        <a href="https://twitter.com/maicolduque24" target="_blank" className="mr-3" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" cursor="pointer" />
        </a>
        <a href="https://www.linkedin.com/in/maicolduque/" target="_blank" className="mr-3" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" cursor="pointer" />
        </a>
      </div>
      
    </div>
  </header>
)