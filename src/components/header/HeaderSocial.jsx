import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const HeaderSocial = () => {
  return (
      <div className="header__socials">
          <a href="#" target="blank"><BsLinkedin /></a>
          <a href="https://github.com/m4-programmer" target='blank'><FaGithub/></a>
          <a href="#" target='blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocial