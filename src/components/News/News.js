import React from 'react'
import { Link } from 'react-router-dom'
import './News.css'
import news from './Newsdata'
import Logo from './logo1.png'

function News() {
  return (
    <>
      <div className='uninews-wrap'>
        {news.slice(1,4).map((neww) => {
          return (
            <div key={neww.id} className='uni-card'>
              <div
                className='unicard-img'
                style={{
                  backgroundImage: `url(${neww.Image})`,
                }}
              >
                <Link to={`/news/${neww.Tittle}`} className='uni_logo'>
                  <img src={Logo} alt='' />
                </Link>
              </div>
              <div className='unicard-text'>
                <p className='card_p'>
                  <span>{neww.Date}</span>
                </p>
                <Link to={`/news/${neww.Tittle}`} className='card_h'>
                  <h1>{neww.Tittle}</h1>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default News
