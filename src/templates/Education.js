import React from 'react'
import { graphql, Link } from 'gatsby'
import EducationNav from '../components/Education-nav'

export default (props) => {
  const pageData = props.data.educationJson;
  return (
    <div className="">
      <header className="py-12 border-color">
        <div className="max-w-4xl mx-auto">
          <Link to="/"  className="uppercase underline text-pink-500">Regresar al incio</Link>
          <h2 className="capitalize text-5xl font-bold text-left colorLetra">{pageData.title}</h2>
          <p className="text-xl text-left colorInfo">
            {pageData.description}
          </p>
        </div>
      </header>
      <div className="container mx-auto max-w-4xl ">
        <ul>
          {
            pageData.items.map((item, i) => (
              <li className="bg-section shadow mt-4 flex rounded-md" key={i}>
                <p className="vertical-text ">{pageData.slug}</p>
                <div className="flex items-center flex-1 p-8">
                  <div className="flex-1">
                    <h3 className="colorInfo">{item.name}</h3>

                    {item.degree &&
                      <span className="inline-block p-2 bg-green-100 text-green-700">
                        {item.degree}
                      </span>
                    }

                    {item.url &&
                      <a className="btn mt-4 inline-block" href={item.url} target="_blank" rel="noopener noreferrer">
                        Ver curso
                      </a>
                    }
                  </div>
                  { item.year &&
                    <div>
                      <span className="inline-block p-2 text-2xl bg-green-100 text-green-700">
                        {item.year}
                      </span>
                    </div>
                  }

                </div>
              </li>
            ))
          }
        </ul>

      </div>

      <EducationNav  />
    </div>
  )
}
export const query = graphql`
  query($slug: String){
    educationJson(slug: { eq: $slug }){
      title
      description
      slug
      items {
        name
        degree
        year
        url
      }
    }
  }
`;