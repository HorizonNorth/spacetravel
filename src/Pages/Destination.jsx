import { useState, useEffect } from 'react';
import './stylePages/destination.css'
import MenuDestination from '../components/MenuDestination'
import useSwipe from '../hooks/useSwipe'


export default function Destination({data}) {
  const [index, setIndex] = useState(0)
    
  useEffect(() => {
    document.body.classList.add('destination-back')
      return () => { document.body.classList.remove('destination-back') }
    }, [])

  return ( 
    <div className='wrapper'>

      <div className='heading_5 heading_5_cards' style={{color: 'white'}}>
        <strong>01 &nbsp;</strong>PICK YOUsR DESTINATION
      </div>
          <div className='content' {... useSwipe(index, setIndex, data.length)}>
           
            <div className='planet-image'>
              <img src={`${data[index].images.png}`} />
            </div>         
            
            <section className="destination-card">
              <MenuDestination data={data} index={index} setIndex={setIndex}
              className={'menu-destination'} />
              
              <p className='heading_2 destination_heading' >{data[index].name.toUpperCase()}</p>
              <p className='text text-destination'>{data[index].description}</p>
              <hr className='line2'/>
              <div className='info-wrapper'>
                <div className='info'>AVG. DISTANCE
                  <p>{data[index].distance}</p>
                </div>
                <div className='info'>EST. TRAVEL TIME
                  <p>{data[index].travel}</p>
                </div>
              </div>
            </section>
          </div>
    </div>

)
}
