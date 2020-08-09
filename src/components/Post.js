import React from 'react'

export default (props) => {
  let post = props.element;
  return (
    <div className="shadow  bg-white mr-4 rounded-md flex-shrink-0" style={{width: "300px"}}>
      <header className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${post.thumbnail})` }}>

      </header>
      <div className="p-8 bg-section">
        <h4 className="font-bold h-32 overflow-y-hidden">
          <a className="font-bold colorInfo"
            href={post.url} target="_blank" rel="noopener noreferrer"
          >
            {post.title}
          </a>
        </h4>
        <div className="text-center mt-4">
          <a className="btn" href={post.link} target="_blank" rel="noopener noreferrer">Leer</a>
        </div>
      </div>
    </div>
  );

}