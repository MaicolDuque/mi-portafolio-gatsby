import React, {useEffect, useState} from 'react'
import repos from '../data/repos'
import Repo from '../components/Repo'

export default () => (
  
  
  
  <div className="max-w-4xl mx-auto">
    <header className="text-center">
      <h2 className="text-3xl font-bold">Mi trabajo en Open Source</h2>
      <p>Colaboración y contribución de código</p>
    </header>
    <ul className="repos-list">
      {
        repos.map( (repo, index ) => {
        return <Repo key={index} repo={repo} />
        })
      }
    </ul>
  </div>
);