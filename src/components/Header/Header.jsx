import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='Header'>
      <Link to="/"><h1>INTUITIVE QUIZ HUB</h1></Link>
      <hr className='line' />
    </div>
  )
}

export default Header
