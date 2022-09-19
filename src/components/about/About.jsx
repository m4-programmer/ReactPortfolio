import React from 'react'
import './about.css'
import ME from '../../assets/Me.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Pics" style={{ height: 'auto' }} />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icons'/>
              <h5>Experience</h5>
              <small>5+ Years Working Experience</small>
            </article>

             <article className="about_card hide-sm">
              <FaUsers className='about_icons'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

             <article className="about_card">
              <VscFolderLibrary className='about_icons'/>
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          {/* Paragraphs */}
          <p className='hide-sm'>
            Am a fullstack developer with 5 years + working experience, over the years i have acquire lot's of skills
            across many tech stacks such as web development, software development and  data science.
          </p>
          <p className='hide-sm'>
            Am a self motivated person, i love challenges and i enjoy solving real wolrd problems with my tech skills
          </p>
          <a href="#contact" className='btn btn-primary mt-2'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About