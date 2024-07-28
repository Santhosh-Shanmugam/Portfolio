import React from 'react'
import './css/About.style.css'
import IMG from './Assects/Image.jpg'

const About = () => {
  return (
    <section className='about_top'>
      <h1 className='about_me'>About Me</h1>
      <p className='about_intro'>My Introduction</p>
      <div className='pic_description'>
        <img src={IMG} alt='MyProfile' className='pic_des'/>
        <p className=''></p>
      </div>
    </section>
  )
}

export default About