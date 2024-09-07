import React from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'

function Nav() {
  return (
        <div className='nav'>
          <img alt='' src={logo}  className='logo'/>
            <ul>
                <li>Home</li>
                <li>Feature</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
           <div className='nav-right'>

            <select>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
            </select>

            <button>Sign up <img src={arrow_icon}  alt=''/></button>

            </div>

        </div>
  )
}

export default Nav