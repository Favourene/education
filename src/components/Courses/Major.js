import React, { useState, useEffect } from 'react'
import data from './Coursesdata'
import { useParams } from 'react-router'
import './Major.css'
import clock from './clock.svg'
import pin from './map.svg'
import calender from './calendar.svg'

function Major() {
  const [image, setImage] = useState('default')
  const [tittle, setTittle] = useState('default')
  const [info, setInfo] = useState('default')
  const [details1, setDetails1] = useState('default')
  const [details2, setDetails2] = useState('default')
  const [details3, setDetails3] = useState('default')
  const [time, setTime] = useState('default')
  const [location, setLocation] = useState('default')
  const [date, setDate] = useState('default')
  const { Tittle } = useParams();
  useEffect(() => {
   const newMajor = data.find((major)=> major.Tittle === Tittle);
   setImage(newMajor.Image);
   setTittle(newMajor.Tittle);
   setInfo(newMajor.Info);
   setDetails1(newMajor.Details1);
   setDetails2(newMajor.Details2);
   setDetails3(newMajor.Details3);
   setTime(newMajor.Time);
   setLocation(newMajor.Location);
   setDate(newMajor.Date);
    document.title = newMajor.Header
  }, [])

  


  return (
    <>
      <section className='major'>
        <div className='cover'></div>
        <div className='hero'>
          <img src={image} alt='' />
        </div>
        <div className='text'>
          <h1>{tittle}</h1>
          <p className='info'>{info}</p>
          <p className='details'>{details1}</p>
          <p className='details'>{details2}</p>
          <p className='details'>{details3}</p>
        </div>
        <div className='schedule'>
          <div className='card'>
            <div className='left'>
              <img src={clock} alt='' />
            </div>
            <div className='right'>
              <h2>Time</h2>
              <p>{time}</p>
            </div>
          </div>
          <div className='card'>
            <div className='left'>
              <img src={pin} alt='' />
            </div>
            <div className='right'>
              <h2>Location</h2>
              <p>{location}</p>
            </div>
          </div>
          <div className='card'>
            <div className='left'>
              <img src={calender} alt='' />
            </div>
            <div className='right'>
              <h2>When?</h2>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Major
