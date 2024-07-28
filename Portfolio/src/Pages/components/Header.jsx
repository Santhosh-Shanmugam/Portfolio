import React from 'react'
const Header = () => {
  return (
    <>
       <nav className='navlinks'>
        <div className='name'>Santhosh Shanmugam</div>
        <div>
          <ul className='ul'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Project</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        </nav>
    </>
  )
}

export default Header