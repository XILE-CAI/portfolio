import React from 'react'
import './about.scss'

export default function About() {
  return (
    <div className='about' id='about'>
        <div className='left'>
          <img src="assets/about.jpg" alt="developer.jpg" />
        </div>

        <div className='right'>
            <h3>About</h3>
            <h1>Who I Am</h1>
            <div className='description'>
              <p>
                A motivated and enthusiastic University of Adelaide IT graduate with a master of data science, having the passion for Web development field. More than 2 years IT industry studies and always aim to deliver readable, maintainable and reusable codes. Person who is constantly striving to learn new technologies. 
              </p>
            </div>
        </div>
    </div>
  )
}
