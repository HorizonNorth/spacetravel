import { useEffect } from "react"

export default function MenuCrew({index, setIndex, className, data} ) {
    
    useEffect(() => {     
        let buttons = document.querySelectorAll('div.menu-tech > button')  
        buttons.forEach((item) => item.classList.remove('techActive'))
        buttons.item(index).classList.add('techActive')
      }, [index])
       
      return (
        <div className={className}> 
          {data.map((item, i) => 
          <button onClick={() => setIndex(i)} 
            key={item.name}
            id={i}>
              {i + 1}
          </button>) }
        </div>
      )
}
