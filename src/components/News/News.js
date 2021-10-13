import React from 'react'
import './News.css'
import news from './Newsdata'
import Logo from './logo1.png'

const New = ({ Image, Link, Date, Tittle }) => {
  return (
    <div className='uni-card'>
      <div
        className='unicard-img'
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <a href={Link} className='uni_logo'>
          <img src={Logo} alt='' />
        </a>
      </div>
      <div className='unicard-text'>
        <p className='card_p'>
          <span>{Date}</span>
        </p>
        <a href={Link} className='card_h'>
          <h1>{Tittle}</h1>
        </a>
      </div>
    </div>
  )
}

function News() {
  return (
    <>
      <div className='uninews-wrap'>
        {news.map((neww) => {
          return <New key={neww.id} {...neww}></New>
        })}
      </div>
    </>
  )
}

export default News
