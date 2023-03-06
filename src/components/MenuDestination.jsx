import { useEffect } from 'react'

export default function MenuDestination({data, index, setIndex, className}) {
  
  useEffect(() => {     
    let buttons = document.querySelectorAll('div.menu-destination > button')  
    buttons.forEach((item) => item.classList.remove('destinationActive'))
    buttons.item(index).classList.add('destinationActive')
  }, [index])
   
  return (
    <div className={className}> 
      {data.map((item, i) => 
      <button onClick={() => setIndex(i)} 
        key={item.name}
        id={i}>
        <p>{item.name.toUpperCase()}</p> 
      </button>) }
    </div>
  )
}

