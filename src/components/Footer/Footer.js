import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Logo from './footer-logo.png'

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='footer-card'>
          <h1>Admission</h1>
          <ul>
            <li>
              <Link to='/'>Academy of Design</Link>
            </li>
            <li>
              <Link to='/'>University Facilities</Link>
            </li>
          </ul>
        </div>
        <div className='footer-card'>
          <h1>University</h1>
          <ul>
            <li>
              <Link to='/'>University Staff</Link>
            </li>
            <li>
              <Link to='/'>University Facilities</Link>
            </li>
          </ul>
        </div>
        <div className='footer-card'>
          <img src={Logo} alt='' />
          <p>320 Washington Street Easton, MA 02357</p>
          <p>Telephone 508-565-1000</p>
        </div>
        <div className='footer-card'>
          <h1>Quicklinks</h1>
          <ul>
            <li> Students Life </li>
            <li>University Alumni</li>
            <li>Summer Uni</li>
          </ul>
        </div>
        <div class="footer-card">
          <h1>Campus</h1>
          <ul>
            <li>Careers for Students</li>
            <li>Museum of Campus</li>
            <li>Events and News</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
