import React from 'react'
import { Link } from 'react-router-dom'
import data from '../components/Courses/Coursesdata'
import Logo from './images/logo1.png'
import './Seminar.css'

function Seminars() {
 return (
   <>
     <div className='seminar_header'>
       <div className='header_wrapper'>
         <h1>Courses & Seminars</h1>
         <p>
           Join the courses held by the university Professors.
           <br />
           They are free of charge and help the collaboration between students.
         </p>
       </div>
     </div>
     <div className='seminar_wrapper'>
       {data.map((newdata) => {
         return (
           <div key={newdata.id} className='course-card'>
             <div
               className='course-img'
               style={{
                 backgroundImage: `url(${newdata.Image})`,
               }}
             >
               <Link to={`/major/${newdata.Tittle}`} className='uni_logo'>
                 <img src={Logo} alt='' />
               </Link>
             </div>
             <div className='course_text'>
               <Link to={`/major/${newdata.Tittle}`}>
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

export default Seminars
