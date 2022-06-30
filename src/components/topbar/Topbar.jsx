
import React from 'react'
import './topbar.scss'
import {PermPhoneMsg, Mail} from "@mui/icons-material"
// import { Link } from 'react-router-dom'

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active") }>
        <div className='wrapper'>

            <div className='left'>
                <a href="#intro" className='logo'>Bryan.</a>
                <div className="itemContainer">
                    <PermPhoneMsg className='icon'/>
                    <span>0413 108 841</span>
                </div>
                <div className="itemContainer">
                    <Mail className='icon'/>
                    <span>cai.bryan.au@gmail.com</span>
                </div>
                {/* <div className="itemContainer" id="github">
                    <Link style={{ color: '#16181b' }} to={{ pathname: "https://github.com/XILE-CAI" }} target="_blank" >
                        <GitHub className="icon" />
                    </Link>
                </div> */}
            </div>
       
            <div className='right'>
                <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>
        </div>
    </div>  
  )
}
