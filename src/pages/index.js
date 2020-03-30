import React from "react"
import Header from '../components/Header.js'
import Repos from '../components/Repos.js'
// import Codigofacilito from "../components/Codigofacilito.js"
import Medium from "../components/Medium.js"
import EducationNav from '../components/Education-nav'

export default () => (
  <div>
    <Header />
    <EducationNav />
    <Repos />
    {/* <Codigofacilito /> */}
    <Medium />
  </div>
)
