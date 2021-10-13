import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo1.png'
import Logo2 from './logo2.png'
import './navbar.css'

const Navbar = () => {
  const [isActive, setActive] = useState('false')
  const handleToggle = () => {
    setActive(!isActive)
  }
  window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav')
    nav.classList.toggle('stuck', window.scrollY > 180);
  })

  return (
    <>
      <nav>
        <div className='logo'>
          <img className='logo1' src={Logo} alt='Logo' />
          <img className='logo2' src={Logo2} alt='Logo' />
        </div>
        <div
          onClick={handleToggle}
          className={isActive ? 'hamburger' : 'hamburger toggle'}
        >
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
        <ul className={isActive ? 'nav-links' : 'nav-links open'}>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <Link className='link' to='/'>
              Home
            </Link>
          </li>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <Link className='link' to='/about'>
              About University
            </Link>
          </li>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <Link className='link' to='/'>
              News
            </Link>
          </li>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <Link className='link' to='/'>
              Courses & Seminars
            </Link>
          </li>
          <li onClick={handleToggle} className={isActive ? '' : 'fade'}>
            <Link className='link' to='/'>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
