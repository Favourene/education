import React, {useEffect} from 'react'
import Navbar from '../components/Navbar/navbar'
import pin from './images/pin.png'
import Image1 from './images/fact(1).jpg'
import Image2 from './images/fact(2).jpg'
import Image3 from './images/fact(3).jpg'
import Image4 from './images/fact(4).jpg'

import './About.css'
function About() {
  useEffect(() => {
    document.title = 'University - Education'
  }, [])
  return (
    <>
    <Navbar />
      <div className='about_header'>
        <div className='header_wrapper'>
          <h1>About the University</h1>
          <p>
            The latest University Events, some of them are free. <br />
            Join the Events by entering and then clicking the join now.
          </p>
        </div>
      </div>
      <div className='history'>
        <div className='history_wrapper'>
          <div className='history_left'>
            <h1>Brief History</h1>
            <p className='history_text'>
              Read about some of the success stories at Kalium University.
            </p>
            <p>
              Maecenas tempor tortor ac magna sagittis vestibulum. Cras
              tincidunt quam ut libero venenatis, in lacinia velit elementum.
              Quisque viverra feugiat mi, ut tristique purus pulvinar at.
            </p>
            <p>
              Curabitur laoreet, sapien ac luctus commodo, erat lacus sodales
              risus, ac ullamcorper massa ligula eu ligula. Sed faucibus
              fermentum ornare. Sed viverra accumsan sodales. Quisque at
              suscipit nulla, condimentum mattis tellus. Donec ultricies ante
              nulla, ut luctus mauris ultricies sit amet. Nam posuere orci at
              aliquet pretium.
            </p>
            <p>
              Nulla rutrum nisi magna, at blandit ipsum maximus sollicitudin.
              Integer vel malesuada dolor. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Etiam
              bibendum, arcu ut maximus sagittis, lacus lorem tristique leo,
              vitae suscipit risus felis ac est.
            </p>
            <p>
              Curabitur laoreet, sapien ac luctus commodo, erat lacus sodales
              risus, ac ullamcorper massa ligula eu ligula. Sed faucibus
              fermentum ornare. Sed viverra accumsan sodales. Quisque at
              suscipit nulla, condimentum mattis tellus. Donec ultricies ante
              nulla, ut luctus mauris ultricies sit amet. Nam posuere orci at
              aliquet pretium.
            </p>
          </div>
          <div className='history_right'>
            <h1>Faculites</h1>
            <p className='history_text'>Schools and Colleges</p>

            <div className='card_wrapper'>
              <div className='card'>
                <img src={pin} alt='' />
                <span>Technology and Science</span>
              </div>
              <div className='card'>
                <img src={pin} alt='' />
                <span>Business</span>
              </div>
              <div className='card'>
                <img src={pin} alt='' />
                <span>Medicine</span>
              </div>
              <div className='card'>
                <img src={pin} alt='' />
                <span>Architecture</span>
              </div>
              <div className='card'>
                <img src={pin} alt='' />
                <span>Arts and Design</span>
              </div>
              <div className='card'>
                <img src={pin} alt='' />
                <span>Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fact'>
        <div className='fact_head'>
          <h1>Facts</h1>
          <p>Kalium University by Numbers</p>
          <div className='fact_wrap'>
            <div className='major_card'>
              <div className='card'>
                <img src={Image1} alt='' />
              </div>
              <div className='card text'>
                <h2>Los Angeles, U.S.A</h2>
                <p>Located</p>
              </div>
            </div>
            <div className='major_card'>
              <div className='card'>
                <img src={Image2} alt='' />
              </div>
              <div className='card text'>
                <h2>John Doe</h2>
                <p>President</p>
              </div>
            </div>
            <div className='major_card'>
              <div className='card text'>
                <h2>1813</h2>
                <p>Founded</p>
              </div>
              <div className='card'>
                <img src={Image3} alt='' />
              </div>
            </div>
            <div className='major_card'>
              <div className='card text'>
                <h2>3,150</h2>
                <p>Students</p>
              </div>
              <div className='card'>
                <img src={Image4} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='stories'>
        <div className='stories_head'>
          <h1>Success Stories</h1>
          <p>Read about some of the success stories at Kalium University.</p>
        </div>
        <div className='stories_major'>
          <div className='stories_left'>
            <div className='left_wrap'>
              <h2>Susan Barnett</h2>
              <div className='line'></div>
              <p>Director of University</p>
            </div>
          </div>
          <div className='stories_right'>
            <div className='card one'>
              <div className='card_wrap'>
                <h2>Helen Bowman</h2>
                <div className='line'></div>
                <p>Freshmen Student</p>
              </div>
            </div>
            <div className='card two'>
              <div className='card_wrap'>
                <h2>Adam Edney</h2>
                <div className='line'></div>
                <p>Senior Student</p>
              </div>
            </div>
            <div className='card three'>
              <div className='card_wrap'>
                <h2>Levi Jones</h2>
                <div className='line'></div>
                <p>Chemistry Student</p>
              </div>
            </div>
            <div className='card four'>
              <div className='card_wrap'>
                <h2>Cheryl Flores</h2>
                <div className='line'></div>
                <p>Post-graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
