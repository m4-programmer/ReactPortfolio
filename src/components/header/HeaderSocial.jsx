import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const HeaderSocial = () => {
  return (
      <div className="header__socials">
          <a href="https://linked.com" target="blank"><BsLinkedin /></a>
          <a href="https://linked.com" target='blank'><FaGithub/></a>
          <a href="https://linked.com" target='blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocial