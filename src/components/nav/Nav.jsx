import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import {FaLaptopCode} from 'react-icons/fa'
import { BsBarChartFill } from 'react-icons/bs'
import { AiFillRightCircle } from 'react-icons/ai'

import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} 
      className={activeNav === '#' ? 'active' : ''} title='Home'>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''} title='About'>
          <AiOutlineUser />
        </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''} title='My Experience'>
        <BiBook />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''} title='My Services'>
        <RiServiceLine />
      </a>
       <a href="#portfolio"  onClick={() => setActiveNav('#portfolio')}
          className={ activeNav === '#portfolio' ? 'active ' : '' } title='My Portfolio'>
          <FaLaptopCode />
        </a>
        <a href="#testimonials" onClick={() => setActiveNav('#testimonials')}
          className={activeNav === '#review' ? 'active hide-sm' : 'hide-sm'} title='Testimonials'>
          <BsBarChartFill />
        </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''} title='My Contact'>
        <BiMessageSquareDetail />
      </a>
      
      <a href="#footer" onClick={() => setActiveNav('#footer')}
        className={activeNav === '#footer' ? 'active ' : ''} title='My Contact'>
        <AiFillRightCircle />
      </a>
      
    </nav>
  )
}

export default Nav
