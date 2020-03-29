import React from 'react'

export default (props) => (
  <div className="max-w-4xl mx-auto mt-12">
    <h2 className="text-3xl font-bold text-center">{props.title}</h2>
    <div className="flex mt-8">
      {
        props.data.map((el, index) => (
          <props.card element={el} />
        ))
      }
    </div>
  </div>
)