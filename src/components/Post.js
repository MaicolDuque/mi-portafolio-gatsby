import React from 'react'

export default (props) => {
  let post = props.element;
  return (
    <div className="shadow  bg-white mr-4 rounded flex-shrink-0 " style={{width: "300px"}}>
      <header className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${post.thumbnail})` }}>

      </header>
      <div className="p-8">
        <h4 className="font-bold h-32 overflow-y-hidden">
          <a className="font-bold"
            href={post.url} target="_blank" rel="noopener noreferrer"
          >
            {post.title}
          </a>
        </h4>
        <div className="text-center mt-4">
          <a className="btn" href={post.link}>Leer</a>
        </div>
      </div>
    </div>
  );

}