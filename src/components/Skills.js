import React from 'react'
import Icon from './Icon'
import IconJavascript from '../img/js.svg'
import IconHTML from '../img/html5-logo.svg'
import IconCSS from '../img/css-logo.svg'
import IconNode from '../img/logo-nodejs.svg'
import IconScala from '../img/scala.svg'
import IconReact from '../img/react.svg'
import IconVue from '../img/vue.svg'
import IconAngular from '../img/angular.svg'
import IconGit from '../img/git-logo.svg'
import Skill from './Skill'
import IconPHP from '../img/php.svg'
import IconMongoDB from '../img/mongodb.svg'
import IconMySQL from '../img/mysql.svg'
import IconDocker from '../img/docker.svg'

const skills = [ 
  {icon: IconHTML, title: 'HTML5' },
  {icon: IconCSS, title: 'CSS' },
  {icon: IconJavascript, title: 'Javascript' },
  {icon: IconNode, title: 'NodeJS' },
  {icon: IconReact, title: 'ReactJS' },
  {icon: IconVue, title: 'VueJS' },
  {icon: IconAngular, title: 'Angular' },
  {icon: IconGit, title: 'Git' },
  {icon: IconScala, title: 'Scala' },
  {icon: IconPHP, title: 'PHP' },
  {icon: IconMongoDB, title: 'MongoDB' },
  {icon: IconMySQL, title: 'MySQL' },
  {icon: IconDocker, title: 'Docker' },
]
export default () => (
  <div className="max-w-3xl mx-auto mt-20">
    <h2 className="text-3xl font-bold text-center mx-auto max-w-2xl colorLetra border-titles mb-4">
        <Icon icon="👨🏻‍💻" size="1.25rem" />
          Conocimientos
        <Icon icon="👨🏻‍💻" size="1.25rem" />
    </h2>

    <div className="bg-section p-4 rounded-md shadow-md">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 ">
          {
            skills.map( skill => <Skill icon={skill.icon} title={skill.title} /> )
          }         
        </div>
    </div>
  </div>
)