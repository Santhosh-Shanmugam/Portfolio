import React from 'react'
import './css/Contact.style.css'
import Banner from './Assects/Banner.jpg'
const Contact = () => {
  return (
    <section className='contact_des'>
      <div className='contact_center'>
        <h2 className='contact_con'>Contact</h2>
        <p className='contact_me'>To contact with me</p>
      </div>
      <div className='contact_div'>
        <div className='contact_img'>
            <div className='contact_banner'>
              <img src={Banner} alt='BannerImg' className='img'/>
              <div className='pad_contact'>
                <h3 className='h_des'>Santhosh</h3>
                <p className='h_des_des'>Full Stack Developer</p>
                <div className='icons_all'>
                    <a href="https://github.com/Santhosh-Shanmugam"> <i class='bx bxl-github'></i> </a>
                   <a href="" > <i class='bx bx-chat'></i></a>
                    <a href="https://www.linkedin.com/in/santhosh-s-167110254/"> <i class='bx bxl-linkedin'></i></a>
                </div>
              </div>
            </div>
        </div>
        <div className='contact_form_des'>
              <form className='contact_form'>
                    
              </form>
        </div>
      </div>
    </section>
  )
}

export default Contact