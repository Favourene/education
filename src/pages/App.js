import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import Navbar from '../components/Navbar/navbar'
import News from '../components/News/News'
import Course from '../components/Courses/Courses'
import pin from './images/pin.png'
import girl from './images/schoolgirl.png'

SwiperCore.use([Autoplay, Pagination, Navigation])

function App() {
  useEffect(() => {
    document.title = 'Education Template'
  }, [])
  return (
    <div className='App'>
      <Navbar />
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className='mySwiper'
      >
        <SwiperSlide className='slider one'>
          <div className='swiper-wrap'>
            <p>OCTOBER 7, 2021</p>
            <h1>Hundeds of books in the University Library</h1>
            <Link to={`/news/Hundeds of books in the University Library`}>
              <button>READ MORE</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slider two'>
          <div className='swiper-wrap'>
            <p>OCTOBER 8, 2021</p>
            <h1>Benefits from studying at Klaium University</h1>
            <Link to={`/news/Benefits from studying at Klaium University`}>
              <button>READ MORE</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slider three'>
          <div className='swiper-wrap'>
            <p>OCTOBER 9, 2021</p>
            <h1>Gallery from the Convocation Party.</h1>
            <Link to={`/news/Gallery from the Convocation Party.`}>
              <button>READ MORE</button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
      <section className='uninews'>
        <div className='uniheader'>
          <h1 className='uni-hText'>University News</h1>
          <p className='uni-text'>
            Latest news from the university, see more to view all.
          </p>
        </div>
        <News />
      </section>
      <section className='courses'>
        <div className='courses_header'>
          <h1>Courses online, faculty classes and seminars.</h1>
          <p>
            Received shutters expenses ye he pleasant. Drift as blind above at
            up.
            <br />
            No up simple county stairs do should praise as. Drawings sir
            gaytogether landlord had law smallest.
          </p>
        </div>
        <Course />
      </section>
      <div className='join'>
        <div className='join_wrap'>
          <p>Get a worldwide bachelor degree</p>
          <h1>Join now & Study</h1>
          <div className='line'></div>
          <p>
            Received shutters expenses ye he pleasant. Drift as blind above at
            up. <br /> No up simple county stairs do should praise as. Drawings
            sir gay together landlord had law smallest. Apply Now
          </p>
          <button>Apply Now</button>
        </div>
      </div>
      <section className='college'>
        <div className='college-left'>
          <h1>Schools and Colleges</h1>
          <p>
            Received shutters expenses ye he pleasant. Drift as blind above at
            up. <br />
            No up simple county stairs do should praise as. Drawings sir gay
            together landlord had law smallest.
          </p>
          <div className='left-wrapper'>
            <div className='left-card'>
              <img src={pin} alt='' />
              <span>Law School</span>
            </div>
            <div className='left-card'>
              <img src={pin} alt='' />
              <span>Medicine</span>
            </div>
            <div className='left-card'>
              <img src={pin} alt='' />
              <span>Engineering</span>
            </div>
            <div className='left-card'>
              <img src={pin} alt='' />
              <span>Technology and Science</span>
            </div>
            <div className='left-card'>
              <img src={pin} alt='' />
              <span>Arts and Design</span>
            </div>
            <div className='left-card'>
              <img src={pin} alt='' />
              <span>Business</span>
            </div>
            <div className='left-card'>
              <img src={pin} alt='' />
              <span>Computing</span>
            </div>
            <div className='left-card'>
              <img src={pin} alt='' />
              <span>Architecture</span>
            </div>
          </div>
        </div>
        <div className='college-right'>
          <img src={girl} alt='' />
        </div>
      </section>
      <section className='counter'>
        <div className='counter-card'>
          <h1>10,000</h1>
          <p>Graduated Students</p>
        </div>
        <div className='counter-card'>
          <h1>24</h1>
          <p>Schools and Colleges</p>
        </div>
        <div className='counter-card'>
          <h1>50,000+</h1>
          <p>Books in our library</p>
        </div>
        <div className='counter-card'>
          <h1>94.22%</h1>
          <p>Students get employed</p>
        </div>
      </section>
    </div>
  )
}

export default App
