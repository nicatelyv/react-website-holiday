import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.scss"

function Navbar() {
  return (
    <nav>
        <div id='topnav'>
            <a href='/'>Start Bootstrap</a>
            <i class="fa-solid fa-bars"></i>
            <ul>
                <a href='!#'><NavLink to={'/'}>HOME</NavLink></a>
                <a href='!#'><NavLink to={'/about'}>ABOUT</NavLink></a>
                <a id='githubicon' href='https://github.com/nicatelyv'><i class="fa-brands fa-github"></i></a>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar