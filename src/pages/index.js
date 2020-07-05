import React from "react"
import { Helmet } from "react-helmet"
import Header from '../components/Header.js'
import Repos from '../components/Repos.js'
// import Codigofacilito from "../components/Codigofacilito.js"
import Medium from "../components/Medium.js"
import EducationNav from '../components/Education-nav'
import AboutMe from "../components/AboutMe.js"
import Skills from "../components/Skills.js"

export default () => (
  <div className="m-3">
    <Helmet>      
      <title>Maicol Duque</title>      
    </Helmet>

    <Header />
    <AboutMe />
    <Skills />
    <EducationNav />
    <Repos />
    {/* <Codigofacilito /> */}
    <Medium />
  </div>
)
