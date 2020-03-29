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
  console.log(data)
  return (
    <section>
      <div className="mt-24">
        <div className="max-w-4xl mx-auto">
          
          <Posts
            card={Certificate} 
            data={data.codigofacilitoJson.data.certificates} 
            title="Mis certificados online CódigoFacilits"
          />
          <Posts
            card={Course} 
            data={data.codigofacilitoJson.data.courses} 
            title="Mis cursos"
          />
          
        </div>
      </div>
    </section>
  )
}
