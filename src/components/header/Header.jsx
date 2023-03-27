import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import HeaderMobile from '../headerMobile/HeaderMobile'
import "./Header.css"

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    {(width > 520) ? (
      <header className="header">
       <div className="logo"><a href="/"><img src="/logo.svg" alt="logo" /></a></div>
        <hr className="line" />
        <nav>
            <NavLink to="/" className={({isActive}) => isActive ? 'activeStyle' : undefined }>
              <p><b className="nav_numbers">00&nbsp;</b>&nbsp;HOME</p>
            </ NavLink>
            
            <NavLink to="/destination" className={({isActive}) => isActive ? "activeStyle" : undefined }>
              <p><b className="nav_numbers">01&nbsp;</b>&nbsp;DESTINATION</p>
            </NavLink>

            <NavLink to="/crew" className={({isActive}) => isActive ? "activeStyle" : undefined }>
              <p><b className="nav_numbers">02&nbsp;</b>&nbsp;CREW</p>
            </NavLink>

            <NavLink to="/technology" className={({isActive}) => isActive ? "activeStyle" : undefined }>
              <p><b className="nav_numbers">03&nbsp;</b>&nbsp;TECHNOLOGY</p>
            </NavLink>
        </nav>
      </header> )
    
    : ( <HeaderMobile /> )
    }
    </>
  )
}
