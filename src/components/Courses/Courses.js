import React from 'react'
import Logo from './logo1.png'
import data from './Coursesdata'
import './Courses.css'
const Course = ({ Image, Link, Tittle, Class }) => {
  return (
    <div className='course-card'>
      <div
        className='course-img'
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <a href={Link} className='uni_logo'>
          <img src={Logo} alt='' />
        </a>
      </div>
      <div className="course_text">
       <a href={Link}>
        <h1>{Tittle}</h1>
       </a>
       <p>{Class}</p>
      </div>
    </div>
  )
}

function Courses() {
  return <>
  <div className="course_wrap">
   {data.map((newdata)=>{
    return <Course key={newdata.id} {...newdata}></Course>
   })}
  </div>
  </>
}

export default Courses
