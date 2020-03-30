import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Course from './Course'
import Posts from './Posts'
import Certificate from './Certificate'

export default () => {
  const data = useStaticQuery(graphql`
  {
    codigofacilitoJson {
      data {
        certificates {
          score
          code
          title
        }

        courses {
          progress
          title
          url
        }
      }
    }
  }  
  `)
  
  return (
    <section>
      <div className="mt-24">
        <div className="max-w-4xl mx-auto">
          
          <Posts
            card={Certificate} 
            data={data.codigofacilitoJson.data.certificates} 
            title="Mis certificados online CódigoFacilito"
            key="1"
          />
          <Posts
            card={Course} 
            data={data.codigofacilitoJson.data.courses} 
            title="Mis cursos"
            key="2"
          />
          
        </div>
      </div>
    </section>
  )
}
