import React from 'react'
import Icon from './Icon'

export default (props) => (
  <div className="max-w-4xl mx-auto mt-12">
    <h2 className="text-3xl font-bold text-center colorLetra border-titles mx-auto max-w-2xl">
       <Icon icon="📝" size="1.25rem" /> 
       {props.title} 
       <Icon icon="📝" size="1.25rem" /> 
    </h2>
    <div className="flex mt-8">
      {
        props.data.map((el, index) => (
          <props.card element={el} />
        ))
      }
    </div>
  </div>
)