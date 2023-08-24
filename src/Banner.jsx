import React from 'react'
import bannerImage from './IMG-20230823-WA0039.jpg'
import bannerImage2 from './IMG-20230823-WA0017.jpg'
import bannerImage3 from './IMG-20230823-WA0018.jpg'
const banner = () => {
  return (
    <div>
         <div class="box">

<div class="overlay">
    <div className='text container'>
    <p>I Deal with the</p>
 <h3>engineering of residential, commercial, distribution and telecommunications systems<span>.</span></h3> 

    </div>
  
</div>
</div>
<div className='about-img container'>

    <img src={bannerImage} alt="" />
    <img src={bannerImage2} alt="" />
    <img src={bannerImage3} alt="" />
    <img src="" alt="" />
</div>

<div className="about container">
  
    
<p>Energetic and results driven AutoCAD professional with over several years of experience. Possesses broad background in the engineering of residential, commercial, distribution and telecommunications systems.</p>
<p>An adept problem solver, possessing strong analytical and leadership qualities needed for engineering projects. </p>
<p> Demonstrated excellence in all aspects of project and program management from development to implementation; developed and led successful teams within organizations. </p>
<p>Seeking a position in Engineering Operations or Project Management where my diverse talents will be further developed while utilizing my exceptional organizational skills and attention to detail that I have gained in my career in the past. </p>

</div>
    </div>
  )
}

export default banner