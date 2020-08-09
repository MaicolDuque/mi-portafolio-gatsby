import React from 'react'

export default (props) => (
  <li className="flex items-center border-solid border-green-200 mb-5 p-2 shadow-custom">
    <div className="w-9/12 overflow-x-hidden min-h-10">
      <h4 className=" font-bold colorInfo" style={{color: "#69696a"}}>
        {props.repo.name}
      </h4>
      <p className="text-sm colorInfo overflow-y-hidden" style={{height: "1.5em"}}>
        {props.repo.description}
      </p>      
    </div>

    <div className="flex-1 text-right colorInfo">
      <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-ver"> Ver </a>
    </div>
  </li>
);