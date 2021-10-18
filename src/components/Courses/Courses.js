import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo1.png'
import data from './Coursesdata'
import './Courses.css'

function Courses() {
  return (
    <>
      <div className='course_wrap'>
        {data.map((newdata) => {
          return (
            <div key={newdata.id} className='course-card'>
              <div
                className='course-img'
                style={{
                  backgroundImage: `url(${newdata.Image})`,
                }}
              >
                <Link to={`/seminar/${newdata.Tittle}`} className='uni_logo'>
                  <img src={Logo} alt='' />
                </Link>
              </div>
              <div className='course_text'>
                <Link to={`/seminar/${newdata.Tittle}`}>
                  <h1>{newdata.Tittle}</h1>
                </Link>
                <p>{newdata.Class}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Courses
