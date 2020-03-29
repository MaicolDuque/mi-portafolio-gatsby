import React from 'react'

export default (props) => {
  const course = props.element;
  return (
    <div className="shadow p-8 bg-white mr-4 rounded ">
      <h4 className="font-bold">
        <a className="font-bold"
            href={course.url} target="_blank" rel="noopener noreferrer"
        >
          {course.title}
        </a>
      </h4>
      <div className="text-center">
        <span className="inline-block bg-purple-200 text-purple-700 p-2 m-2 rounded">Progreso: {parseInt(course.progress)}</span>
      </div>
    </div>
  )
}