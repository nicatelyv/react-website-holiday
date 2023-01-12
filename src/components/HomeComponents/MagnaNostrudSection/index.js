import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

function Hometexts() {
  return (
    <section className='Hometexts'>
        <div className='container'>
            <div>
                <a href='!#'><Link to={'/magnanostrudpage'}>
                <h2>Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.</h2>
                <h3>Labore irure irure laborum quis tempor aliqua. Dude</h3>
                </Link></a>
                <p>February 19, 2020</p>
            </div>
            <div>
                <a href='!#'><Link to={'/dolorepariaturpage'}>
                <h2>Dolore pariatur amet ullamco aliquip mollit aliqua qui.</h2>
                <h3>Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.</h3>
                </Link></a>
                <p>February 17, 2020</p>
            </div>
            <div>
                <a href='!#'><Link to={'/velitessepage'}>
                <h2>Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.</h2>
                <h3>Adipisicing sit minim occaecat nulla proident exercitation do laboris.</h3>
                </Link></a>
                <p>February 15, 2020</p>
            </div>
        </div>
    </section>
  )
}

export default Hometexts