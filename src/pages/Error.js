import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/navbar'
import './Error.css'

function Error() {
 return (
  <>
  <Navbar />
  <div className="error_wrap">
   <div className="container">
    <h1>oops!</h1>
    <h2>404 - PAGE NOT FOUND</h2>
    <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable</p>
    <Link to='/'>
    <button>GO TO HOMEEPAGE</button>
    </Link>
   </div>
  </div>
   
  </>
 )
}

export default Error
