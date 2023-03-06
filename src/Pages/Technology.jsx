import { useState, useEffect} from 'react'
import './stylePages/technology.css'
import MenuTech from '../components/MenuTech.jsx'
import useSwipe from '../hooks/useSwipe'

export default function Technology({data}) {
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    document.body.classList.add('technology-back')
      return () => { document.body.classList.remove('technology-back') }
    }, [])

  return (
    <div className='wrapper'>

    <div className='heading_5 heading_5_cards' style={{color: 'white'}}>
      <strong>03&nbsp;</strong> SPACE LAUNCH 101
    </div>
      <div className='content' {... useSwipe(index, setIndex, data.length)} >

          <div className='tech-image'>
            <picture>
              <source srcSet={data[index].images.landscape} media="(max-width: 820px)" />
              <img src={data[index].images.portrait} alt="Spacecraft" />
            </picture>
          </div>
          
          <div className='tech-card-with-menu'>
            <MenuTech data={data} index={index} setIndex={setIndex}
                  className={'menu-tech'}/> 
            <section className=" tech-card">
              <p className='subheading-tech'>THE TERMINOLOGY…</p>
              <p className='heading_3 heading-tech'>{data[index].name.toUpperCase()}</p>
              <p className='text text-tech'>{data[index].description}</p>
            </section>
          </div>

      </div>
  </div>
  )
}
