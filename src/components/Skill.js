import React from 'react'

export default ({icon, title}) => (
  <div>
    <img src={icon} alt={title} className="icon-skill"></img>
    <div className="title-skill">{title}</div>
  </div>
)