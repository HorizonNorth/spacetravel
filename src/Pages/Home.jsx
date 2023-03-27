import {useEffect} from 'react'
import './stylePages/home.css'

export default function Home() {

  useEffect(() => {
  document.body.classList.add('home-back')
    return () => { document.body.classList.remove('home-back') }
  }, [])
  
  return (
    <main className="container main-wrapper ">
      <div className="text_box">
        <p className="heading_5">SO, YOU WANT TO TRAVEL TO</p> 
        <h1 className="heading_1">SPACE</h1>
        <p className="text">Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience!</p> 
      </div>
      <div className="main_button_container">
        <a href="/destination"><button className="main_button">EXPLORE</button></a>
      </div>
    </main>
  )
}



