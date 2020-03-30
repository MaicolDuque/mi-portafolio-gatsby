import React from 'react'

export default (props) => (
  <li className="flex items-center">

    <div className="w-9/12 overflow-x-hidden">
      <h4 className=" font-bold" style={{color: "#6c63ff"}}>
        {props.repo.name}
      </h4>
      <p className="text-sm text-gray-800 overflow-y-hidden" style={{height: "1.5em"}}>
        {props.repo.description}
      </p>      
    </div>

    <div className="flex-1 text-right">
      <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer"> Ver </a>
    </div>
  </li>
);