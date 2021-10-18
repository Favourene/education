import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import Navbar from '../Navbar/navbar'
import news from './Newsdata'
import './Magazine.css'
import calender from './calendar.svg'
import folder from './folder.svg'

function Magazine() {

  const { Tittle } = useParams();
  const [image, setImage] = useState('default')
  const [tittle, setTittle] = useState('default')
  const [date, setDate] = useState('default')
  const [archive, setArchive] = useState('default')
  const [blog1, setBlog1] = useState('default')
  const [blog2, setBlog2] = useState('default')


  useEffect(()=>{
    const newMagazine = news.find((magazine) => magazine.Tittle === Tittle);
    document.title = newMagazine.Tittle
     setImage(newMagazine.Image)
     setTittle(newMagazine.Tittle)
     setDate(newMagazine.Date)
     setArchive(newMagazine.Archive)
     setBlog1(newMagazine.BlogImage1)
      setBlog2(newMagazine.BlogImage2)
  }, [Tittle])

 return (
   <>
     <Navbar />
     <div className='black'></div>
     <section className='read'>
       <div className='img'>
         <img src={image} alt='' />
       </div>
       <div className='details'>
         <h1>{tittle}</h1>
         <div className='wrapp'>
           <div className='card'>
             <img src={calender} alt='' />
             <span>{date}</span>
           </div>
           <div className='card'>
             <img src={folder} alt='' />
             <Link to='/'>{archive}</Link>
           </div>
         </div>
         <div className='content'>
           <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et soluta
             cupiditate voluptas voluptatibus laboriosam commodi, libero
             temporibus. Recusandae, esse animi ex fugiat earum, perferendis
             odit laborum non dolores saepe suscipit. Lorem, ipsum dolor sit
             amet consectetur adipisicing elit. Impedit, ea amet! Nobis debitis
             architecto libero cumque est maiores ad molestias! Cum ab esse
             laudantium eligendi. Error inventore molestias vero sunt?
           </p>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
             ullam totam beatae consectetur mollitia, distinctio sequi minima
             possimus molestias doloribus, quia voluptates eum ipsa. Nam unde
             doloremque praesentium quae laudantium. Lorem ipsum dolor sit amet
             consectetur, adipisicing elit. Exercitationem quidem repellat
             nostrum totam ipsa odit, porro quod quia amet iste! Error fuga
             nostrum, aliquam officia itaque repudiandae voluptatem magnam
             reiciendis.
           </p>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
             assumenda unde facere harum doloremque soluta aut fuga tempora
             excepturi maxime totam exercitationem minus, labore impedit at
             dolor ducimus quam dolorum! Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Voluptates molestiae rem quis incidunt, quaerat
             facilis cumque nemo deserunt quos ratione illo, provident dolore
             doloribus quisquam voluptatum officiis asperiores dolorem
             consequuntur.
           </p>
           <img className='img1' src={blog1} alt='' />
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius
             explicabo error excepturi. Fugiat numquam animi tenetur ullam
             beatae sunt laudantium fugit illum praesentium quasi. Atque, quam.
             Magnam, esse iusto. Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Obcaecati deserunt consectetur est beatae! Sunt
             voluptates in corporis eos quaerat quia rerum sint beatae maiores?
             Quasi, incidunt. Praesentium enim mollitia consequuntur.
           </p>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
             officia quod voluptate reprehenderit, dignissimos consequuntur
             dolore nulla pariatur facere suscipit recusandae et, vero,
             temporibus assumenda obcaecati rerum quo animi tempora? Lorem ipsum
             dolor sit amet consectetur adipisicing elit. Modi in aperiam eum
             nisi totam tempora, quos vel necessitatibus. Ea quas obcaecati hic
             eius molestias voluptatem non rerum beatae reprehenderit amet.
           </p>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius
             explicabo error excepturi. Fugiat numquam animi tenetur ullam
             beatae sunt laudantium fugit illum praesentium quasi. Atque, quam.
             Magnam, esse iusto. Lorem, ipsum dolor sit amet consectetur
             adipisicing elit. Id officiis, debitis eius impedit similique
             tenetur aperiam blanditiis saepe sequi ipsam error culpa facere, a
             autem? Quisquam adipisci autem quo excepturi!
           </p>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
             officia quod voluptate reprehenderit, dignissimos consequuntur
             dolore nulla pariatur facere suscipit recusandae et, vero,
             temporibus assumenda obcaecati rerum quo animi tempora? Lorem,
             ipsum dolor sit amet consectetur adipisicing elit. Harum
             consequuntur ducimus nisi id sequi odit, ea voluptatibus non
             officiis quam suscipit et quis in inventore porro voluptatum,
             ratione, maxime quos.
           </p>
           <img className='img2' src={blog2} alt='' />
           <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos magni
             dolorum architecto labore pariatur cum nemo veniam necessitatibus
             quis. Repellat expedita obcaecati consequatur repellendus at
             reiciendis tempora eos qui doloremque. Lorem ipsum dolor sit amet
             consectetur adipisicing elit. Sint ex architecto officiis labore
             minus ullam, impedit, vero perspiciatis culpa asperiores accusamus
             voluptatem tempore inventore eum commodi aperiam magni incidunt!
             Quaerat?
           </p>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
             mollitia veniam maxime! Quae sunt modi amet quo quasi ipsum facere,
             perferendis possimus ipsam sequi, vero dolorem libero odit nihil
             culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
             expedita magnam dolorum iure laboriosam eius odit voluptas ipsum
             vero? Ullam in eos corporis harum dolore architecto quibusdam
             corrupti iusto assumenda?
           </p>
           <p>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
             exercitationem numquam culpa recusandae officiis optio,
             necessitatibus unde fugit dolor eum corrupti eveniet, officia quia
             perferendis rem expedita quas deserunt sit Lorem ipsum dolor sit
             amet, consectetur adipisicing elit. Nobis porro temporibus
             accusantium reiciendis ea. Voluptatibus magni corrupti non officiis
             excepturi! Vitae quos eum odio tempore eius recusandae repellat
             doloremque assumenda!.
           </p>
           
         </div>
       </div>
     </section>
   </>
 )
}

export default Magazine
