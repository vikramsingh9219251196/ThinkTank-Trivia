import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <span className='made'>Made by Becomedeveloper</span>
      <div className='contact'>
      
      <a href="https://www.linkedin.com/feed/" >{<BsLinkedin/>}</a>
      <a href="https://github.com/" >{<BsGithub/>}</a>
      <a href="https://www.instagram.com/" >{<BsInstagram/>}</a>
      </div>
      
    </div>
  )
}

export default Footer
