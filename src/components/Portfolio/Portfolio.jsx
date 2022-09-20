import React from 'react'
import './portfolio.css'
import { data } from './Porfolio_Data'
const Porfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      {data.map((value) => {
        return (
          <Porfolio_Card key={value.id}  {...value} />
        )
      })}
      </div>
    </section>
  )
}

const Porfolio_Card = (props) => {
  const { title, image, github, demo,target } = props
  
  return (
    <>
    
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
        <div className="portfolio_item-cta">
          <a href={demo} className='btn btn-primary'  target={!target ? false : '_blank'}>Live Demo</a>
            <a href={github} className='btn' target="_blank">Github</a>
            
          </div>
        </article>
      
    </>
  )
}

export default Porfolio
