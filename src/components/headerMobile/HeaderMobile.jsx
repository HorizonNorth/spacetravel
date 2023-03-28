import React from 'react'
import { useState, useEffect } from 'react';
import Burger from "../burger/Burger"
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export default function HeaderMobile() {
    const [openAside, setOpenAside] = useState(true);

    function showAside() {
        setOpenAside(!openAside)
    }

    useEffect(() => {
        document.getElementById('aside').classList.toggle('aside-show')
        document.getElementById('nav-icon1').classList.toggle('open')
        if (openAside) window.addEventListener('click', showAside)
        else window.removeEventListener('click', showAside)
    }, [openAside])

  return (
    <header className="header-mobile" onClick={event => event.stopPropagation()}>
      <div className="logo"><HashLink to="/"><img src="./logo.svg" alt="logo"></img></HashLink></div>
      <Burger showAside={showAside}/>
      <aside id="aside">
        <div className="aside-nav">
          <NavLink to="/" onClick={showAside} className={({isActive}) => isActive ? 'activeMobile' : undefined }>
            <p><b>00&nbsp;</b>&nbsp;HOME</p>
          </ NavLink>
          
          <NavLink to="/destination" onClick={showAside} className={({isActive}) => isActive ? "activeMobile" : undefined }>
            <p><b>01&nbsp;</b>&nbsp;DESTINATION</p>
          </NavLink>

          <NavLink to="/crew" onClick={showAside} className={({isActive}) => isActive ? "activeMobile" : undefined }>
            <p><b>02&nbsp;</b>&nbsp;CREW</p>
          </NavLink>

          <NavLink to="/technology" onClick={showAside} className={({isActive}) => isActive ? "activeMobile" : undefined }>
             <p><b>03&nbsp;</b>&nbsp;TECHNOLOGY</p>
          </NavLink>

        </div>
      </aside>
    </header>  
  )
}
