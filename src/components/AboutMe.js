import React from 'react'
import Icon from './Icon'

export default () => (
  <div className="max-w-3xl mx-auto mt-20">
    <h2 className="text-3xl font-bold text-center mx-auto max-w-2xl colorLetra border-titles mb-4">
        <Icon icon="👨🏻‍💻" size="1.25rem" />
          Sobre mí
        <Icon icon="👨🏻‍💻" size="1.25rem" />
    </h2>

    <div className="bg-white p-4 rounded-md shadow-md">
      Soy un apasionado por el desarrollo de software y disfruto mucho lo que hago, me encanta ser autodidacta y día a día estar 
      aprendiendo nuevas cosas para fortalecer mis conocimientos y al mismo tiempo me gusta compartirlo.<br />
      En el mundo del desarrollo llevo aproximadamente 5 años, he trabajado con Javascript, PHP, JAVA y Scala.      
    </div>
  </div>
)