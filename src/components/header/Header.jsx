import React from 'react'
import IMG from '../../assets/card-1.png'
import CTA from './CTA'
import './header.css'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Adolphus Miracle</h1>
        <h5 className="text-light">
          Full Stack Developer and a Programming Tutor
        </h5>
         <p className='show-sm'>
            Am a fullstack developer with 5 years + working experience. <br /> Over the years i have acquire lot's of skills
            across many tech stacks such as web development, software development and  data science.
          </p>
          <p className='show-sm'>
          Am a self motivated person, i love challenges and i enjoy solving real world problems with my tech skills.
          Do you need a proficient website for your business or company or do you want to learn how to program, then contact me quickly.
          </p>
        <CTA />
        <HeaderSocial />
        {/* Image */}
        <div className="me">
          <img src={IMG} alt="Logo" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header