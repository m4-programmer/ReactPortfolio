import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { IoLogoTwitter} from 'react-icons/io'
import { FaWhatsapp } from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer_logo'>MIRACLE</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="#"><FaFacebookF /> </a>
        <a href="https://instagram.com/adolphusmiracle"><FaInstagram /> </a>
        <a href="https://twitter.com/mine679"><IoLogoTwitter /> </a>
        <a href="https://api.whatsapp.com/send?phone=+2349093386514"><FaWhatsapp /> </a>
        <a href="https://linkedin.com/in/adolphus-miracle"><AiFillLinkedin /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Adolphus Miracle. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer