import { useEffect } from "react"

export default function MenuCrew({index, setIndex, className, data} ) {
    
    useEffect(() => {     
        let buttons = document.querySelectorAll('div.menu-crew > button')  
        buttons.forEach((item) => item.classList.remove('crewActive'))
        buttons.item(index).classList.add('crewActive')
      }, [index])
       
      return (
        <div className={className}> 
          {data.map((item, i) => 
          <button onClick={() => setIndex(i)} 
            key={item.name}
            id={i}>
          </button>) }
        </div>
      )
}
