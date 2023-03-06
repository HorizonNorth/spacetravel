import { useState, useEffect } from 'react'
import './stylePages/crew.css'
import MenuCrew from '../components/MenuCrew.jsx'
import useSwipe from '../hooks/useSwipe'

export default function Crew({data}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    document.body.classList.add('crew-back')
      return () => { document.body.classList.remove('crew-back') }
    }, [])

  return (
    <div className='wrapper'>
        
    <div className='heading_5 heading_5_cards' style={{color: 'white'}}>
      <strong>02&nbsp;</strong> MEET YOUR CREW
    </div>
          <div className='content' {... useSwipe(index, setIndex, data.length)}>
            
            <img className='crew-image' src={data[index].images.png} />
            <section className="crew-card"> 
              <p className='heading_4'>{data[index].role}</p>
              <p className='heading_3 crew_heading'>{data[index].name.toUpperCase()}</p>
              <p className='text text_crew'>{data[index].bio}</p>            
                          
              <MenuCrew data={data} index={index} setIndex={setIndex}
                className={'menu-crew'}/>          
            </section>
            
          </div>  
    </div>
  )
}
