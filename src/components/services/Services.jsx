import React from 'react'
import "./services.css";
import { BiCheck } from 'react-icons/bi'
import { WebDevPackage, TeachingPackages, SoftwarePackages } from './services_data';
import MyPackage from '../../assets/M4ACADEMY PRICE.pdf'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
                {/* Begining of Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development Services</h3>
          </div>

          <ul className="service_list">
            {WebDevPackage.map(({id,title}) => {
              return (
              <li key={id}>
                <BiCheck className='service_list-icon' />
                  <p>{ title}</p>
              </li>
              )
            })}
           
            
          </ul>
        </article>
        {/* End of Web Development */}

        {/* Begining of  Teaching */}
        <article className="service">
          <div className="service_head">
            <h3>Tutoring and Mentorship Packages</h3>
          </div>

          <ul className="service_list">
            {TeachingPackages.map(({id,name, price, duration}) => {
              return (
              <li key={id}>
                <BiCheck className='service_list-icon' />
                  <p>{ name}</p>
                <p>₦{price}</p>
            
              </li>
              )
            })}
            <div className='center'>
              <a href={MyPackage} download target={'_blank'} className='btn btn-danger'>See More</a> 
            </div>
          
           
          </ul>
        </article>
        {/* End ofTeaching*/}



        {/* Begining of Software Development */}
        <article className="service">
          <div className="service_head">
            <h3>Software Development</h3>
          </div>

          <ul className="service_list">
            {SoftwarePackages.map(({id,title}) => {
              return (
              <li key={id}>
                <BiCheck className='service_list-icon' />
                  <p>{ title}</p>
              </li>
              )
            })}
            
          </ul>
        </article>
        {/* End of Software Development */}

      </div>
    </section>
  )
}

export default Services