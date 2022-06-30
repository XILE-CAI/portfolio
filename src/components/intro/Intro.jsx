import {React} from 'react'
import './intro.scss'



export default function Intro() {


  return (
    <div className='intro' id='intro'>
        <div className='wrapper'>
          <h4>LET'S BUILD SOMETHING TOGETHER</h4>
          <h1>Hi, I'm <span>Bryan</span></h1>
          <h2>
            A Graduated Developer
          </h2>
        </div>

        <a href="#about">
          <img src="assets/down.png" alt="down_img" />
        </a>
    </div>
  )
}
