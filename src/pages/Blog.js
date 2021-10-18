import React from 'react'
import { Link } from 'react-router-dom'
import data from '../components/News/Newsdata'
import archive from '../components/News/Archive/Archive'
import categories from '../components/News/Archive/categories'
import Navbar from '../components/Navbar/navbar'
import calender from './images/calendar.svg'
import folder from './images/folder.svg'
import './Blog.css'

function Blog() {
 return (
   <>
     <Navbar />
     <div className='blog_header'>
       <div className='header_wrapper'>
         <h1>News</h1>
         <p>
           The latest University Events, some of them are free. <br />
           Join the Events by entering and then clicking the join now.
         </p>
       </div>
     </div>
     <div className='blog_wrap'>
       <div className='blog_left'>
         {data.map((cast) => {
           return (
             <div key={cast.id} className='card'>
               <div className='card_left'>
                 <img src={cast.Image} alt='' />
               </div>
               <div className='card_right'>
                 <Link to={`/news/${cast.Tittle}`}>
                   <h1>{cast.Tittle}</h1>
                 </Link>
                 <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Excepturi, maiores sunt. Ipsum iure accusamus similique
                   saepe, voluptatem eius autem optio, nostrum porro
                   dignissimos, reiciendis nesciunt modi quidem quisquam quod
                   est?
                 </p>
                 <div className='lap'>
                   <img src={calender} alt='' />
                   <span>{cast.Date}</span>
                 </div>
                 <div className='lap'>
                   <img src={folder} alt='' />

                   <Link to='/'>
                     <span>{cast.Archive}</span>
                   </Link>
                 </div>
               </div>
             </div>
           )
         })}
       </div>
       <div className='blog_right'>
         <div className='archive'>
           <h1>Archives</h1>
           {archive.map((cast) => {
             return (
               <div key={cast.id} className='bright_card'>
                 <Link to='/news'>
                   <span>{cast.Date}</span>
                 </Link>
               </div>
             )
           })}
         </div>
         <div className='category'>
           <h1>Categories</h1>
           {categories.map((cast) => {
             return (
               <div key={cast.id} className='bright_card'>
                 <Link to='/news'>
                   <span>{cast.Archive}</span>
                 </Link>
               </div>
             )
           })}
         </div>
       </div>
     </div>
   </>
 )
}

export default Blog
