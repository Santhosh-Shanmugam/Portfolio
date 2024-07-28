import React from 'react'

const Education = () => {
  return (
    <div className='Edu'>
       <h1 className='Edu_title'>Education</h1>
       <p className='Edu_description'>The Journey where i come from </p>
       <div className='Edu_sec'>
            <div className='Edu_clg'>
                <i></i>
                <h2 className='clg'>BE Computer Science And Engineering</h2>
                <p className='clg_des'>Kongu Engineering College</p>
                <p className='edu_per'>CGPA : 8.33</p>
            </div>
            <div className='Edu_sch'>
                <i></i>
                <h2 className='sch'>HSC</h2>
                <p className='sch_des'>Velavan Matric Hr Sec School</p>
                <p className='edu_per'>92.5%</p>
            </div>
            <div className='Edu_sch'>
                <i></i>
                <h2 className='sch'>SSLC</h2>
                <p className='sch_des'>Velavan Matric Hr Sec School</p>
                <p className='edu_per'>87%  </p>
            </div>
       </div>
    </div>
  )
}

export default Education