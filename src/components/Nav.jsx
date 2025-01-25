import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <img src={Logo} alt='YGO_Logo' className='logo'></img>
        <ul className='nav__links'>
          <li className='nav__list'>
            <Link to='/' className='nav__link'>Home</Link>
          </li>
          <li className="nav__list">
            <Link to='/' className='nav__link'>Cards</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
