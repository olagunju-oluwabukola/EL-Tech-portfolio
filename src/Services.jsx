import React from 'react'
import bannerImage2 from './IMG-20230823-WA0034.jpg'
import bannerImage3 from './IMG-20230823-WA0053.jpg'
import bannerImage4 from './IMG-20230823-WA0043.jpg'
import bannerImage5 from './IMG-20230823-WA0041.jpg'
import bannerImage6 from './IMG-20230823-WA0049.jpg'
import bannerImage7 from './IMG-20230823-WA0029.jpg'
import bannerImage8 from './IMG-20230823-WA0035.jpg'
import bannerImage9 from './IMG-20230823-WA0047.jpg'
const Services = () => {
  return (
    <div>
     
        <div className=" container"> 
        <h1 className='services-h1'>Services</h1>
        <div className='services'>
        <div >

<h2 className='mep-h2'>MEP Design Engineering</h2>
<div className='mep-img'>
<img src={bannerImage2} alt="" />
<img src={bannerImage3} alt="" />

</div>
<div className='mep-img'>
<img src={bannerImage4} alt="" />
<img src={bannerImage5} alt="" />
</div>


<p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit mollitia corporis cupiditate autem corrupti harum necessitatibus aspernatur minus eos laudantium.</p>
</div>

<span>

<h2 className='me-h2'>M&E Engineering </h2>
<div className='mep-img'>
<img src={bannerImage6} alt="" />
<img src={bannerImage8} alt="" />

</div>
<div className='mep-img'>
<img src={bannerImage7} alt="" />
<img src={bannerImage9} alt="" />
</div>
<p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit voluptate sequi fugit esse reiciendis, nostrum deleniti perferendis dicta voluptatem dignissimos.</p>
</span>
        </div>
           
       
        </div>
    </div>
  )
}

export default Services