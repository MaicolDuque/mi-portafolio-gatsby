import React from 'react'

export default (props) => (
  <li className="flex items-center border-solid border-green-200 mb-5 p-2  shadow-sm">
    <div className="w-9/12 overflow-x-hidden min-h-10">
      <h4 className=" font-bold" style={{color: "#69696a"}}>
        {props.repo.name}
      </h4>
      <p className="text-sm text-gray-800 overflow-y-hidden" style={{height: "1.5em"}}>
        {props.repo.description}
      </p>      
    </div>

    <div className="flex-1 text-right">
      <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-ver"> Ver </a>
    </div>
  </li>
);