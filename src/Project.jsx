import React from 'react'
import bannerImage2 from './IMG-20230823-WA0022.jpg'
import bannerImage3 from './IMG-20230823-WA0039.jpg'
import bannerImage4 from './IMG-20230819-WA0024.jpg'
import bannerImage5 from './IMG-20230823-WA0036.jpg'
import bannerImage6 from './IMG-20230823-WA0038.jpg'
import bannerImage7 from './IMG-20230823-WA0052.jpg'
import bannerImage8 from './IMG-20230823-WA0021.jpg'
import bannerImage9 from './IMG-20230823-WA0045.jpg'
import bannerImage10 from './IMG-20230823-WA0036.jpg'

const project = () => {
  return (
    <div className='project container'>
<h1>Projects</h1>
        <div className='projects'>
          <div className='project-container' >
          <img src={bannerImage4} alt="" />
       
          </div>
        
          <div className='project-container' >
          <img src={bannerImage2} alt="" />
       
          </div>
          <div className='project-container' >
          <img src={bannerImage3} alt="" />
       
          </div>
        </div>
        <div className='projects'>
          <div className='project-container' >
          <img src={bannerImage5} alt="" />
       
          </div>
        
          <div className='project-container' >
          <img src={bannerImage6} alt="" />
       
          </div>
          <div className='project-container' >
          <img src={bannerImage7} alt="" />
       
          </div>
        </div>
        <div className='projects'>
          <div className='project-container' >
          <img src={bannerImage8} alt="" />
       
          </div>
        
          <div className='project-container' >
          <img src={bannerImage9} alt="" />
       
          </div>
          <div className='project-container' >
          <img src={bannerImage10} alt="" />
       
          </div>
        </div>
    </div>
  )
}

export default project