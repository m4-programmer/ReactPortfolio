import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css'
import { Testimonials } from './testimonial_Data'

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {Testimonials.map(({id, avatar, name, review}) => {
          return (
          <SwiperSlide key={id} className='testimonial'>
          <div className="client_avatar">
                <img src={avatar} alt={name} />                
              </div>
              <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{ review}</small>
        </SwiperSlide>
        )
      })}
        
      </Swiper>
    </section>
  )
}

export default Testimonial