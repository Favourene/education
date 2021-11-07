import React, {useEffect} from 'react'
import Navbar from '../components/Navbar/navbar'
import './Contact.css'
import House from './images/location.png'

function Contact() {
 useEffect (()=>{
  document.title = "Contact - Education"
 })
 return (
   <>
     <Navbar />
     <div className='contact_header'>
       <div className='header_wrapper'>
         <h1>
           Get In touch, <br />{' '}
         </h1>
         <p>
           Received shutters expenses ye he pleasant. Drift as blind above at up{' '}
           <br />
           No up Simple county stairs do should praise as. Drawings sir had
           smallest.
         </p>
       </div>
     </div>
     <div className='contact_wrap'>
       <div className='contact_left'>
         <div className='contact_head'>
           <h1>Send a message</h1>
           <p>Get in touch with the University staff.</p>
         </div>
         <form action='' name='contact' method='POST' data-netlify='true'>
           <input type='hidden' name='form-name' value='contact' />
           <div className='card'>
             <label htmlFor='name'>Name:</label>
             <input type='text' name='name' id='' />
           </div>
           <div className='card'>
             <label htmlFor='email'>E-mail:</label>
             <input type='email' name='email' id='' />
           </div>
           <div className='card'>
             <label htmlFor='Message'>Message:</label>
             <textarea name='message' id='' cols='30' rows='10'></textarea>
           </div>
           <div className='butt'>
             <button type='submit'>Send Message</button>
           </div>
         </form>
       </div>
       <div className='contact_right'>
         <div className='contact_head'>
           <h1>General Info</h1>
           <p>Where we’re at</p>
         </div>
         <div className='contact_bottom'>
           <img src={House} alt='' />
           <p>320 Washington Street Easton, MA 02357</p>
           <p>
             Telephone: <span>123456789</span>
           </p>
           <p>
             Emai: <span>Justatemplate@free.com</span>
           </p>
         </div>
       </div>
     </div>
   </>
 )
}

export default Contact
