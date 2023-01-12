import React from 'react'
import "./style.scss"

function Footer() {
  return (
    <footer>
        <div className='footericons'>
            <div><a href='https://twitter.com/sbootstrap'><i class="fa-brands fa-twitter"></i></a></div>
            <div><a href='!#'><i class="fa-brands fa-facebook"></i></a></div>
            <div><a href='https://github.com/nicatelyv'><i class="fa-brands fa-github"></i></a></div>
        </div>
        <p>Copyright © Your Website 2020</p>
    </footer>
  )
}

export default Footer