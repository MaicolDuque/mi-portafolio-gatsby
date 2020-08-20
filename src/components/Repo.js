import React from 'react'
import IProject from '../img/project.png'

export default (props) => {
  const classLanguage = `fondo-${props.repo.language}`;
  const stringsClases = `w-3 h-3 inline-block rounded-lg ${classLanguage}`;
  return (
    <li className="flex items-center border-solid border-green-200 mb-1 p-3 shadow-custom">
      <div className="w-12/12 overflow-x-hidden min-h-10">
        <div className="flex content-center">
          <div className="self-center pr-2 ">
            <img src={IProject} alt="Icon project" className="w-4/5"></img>

          </div>
          <div>
            <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-ver">
              <h4 className="font-semibold color-repo cursor-pointer">
                {props.repo.name}
              </h4>
            </a>

          </div>
        </div>
        <p className="text-xs colorInfo overflow-y-hidden" style={{ height: "1.5em" }}>
          {props.repo.description}
        </p>
        <div className="flex items-center mt-3">
          <span className={stringsClases}>
          </span>
          <span className="text-xs pl-1 colorInfo">
            {props.repo.language}
          </span>
        </div>
      </div>
    </li>
  )
}