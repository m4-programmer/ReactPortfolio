import React from 'react'
import './contact.css'

import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail  className='contact_icons'/>
            <h4>Email</h4>
            <h5>Miraboy13@gmail.com</h5>
            <a href="mailto:Miraboy13@gmail.com" target={'_blank'}>Send a Message</a>
          </article>

          {/* <article className="contact_option">
            <RiMessengerLine className='contact_icons'/>
            <h4>Messenger</h4>
            <h5>Miraboy13@gmail.com</h5>
            <a href="https://m.me/miracle.adolphus" target={'_blank'}>Send a Message</a>
          </article> */}

          <article className="contact_option">
            <BsWhatsapp className='contact_icons'/>
            <h4>Whatsapp</h4>
            <h5>+2348127872082</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348127872082" target={'_blank'}>Send a Message</a>
          </article>
        </div>

        {/* End of Contact Options */}

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact