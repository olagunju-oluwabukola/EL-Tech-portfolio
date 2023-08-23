import React from 'react'
import bannerImage2 from './IMG-20230819-WA0023.jpg'
import bannerImage3 from './IMG-20230819-WA0023.jpg'
const Services = () => {
  return (
    <div>
     
        <div className=" container"> 
        <h1 className='services-h1'>Services</h1>
        <div className='services'>
        <span>

<p>MEP Design Engineering</p>
<img src={bannerImage2} alt="" />
<p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit mollitia corporis cupiditate autem corrupti harum necessitatibus aspernatur minus eos laudantium.</p>
</span>
<span>

<p>M&E Engineering </p>
<img src={bannerImage2} alt="" />
<p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit voluptate sequi fugit esse reiciendis, nostrum deleniti perferendis dicta voluptatem dignissimos.</p>
</span>
        </div>
           
       
        </div>
    </div>
  )
}

export default Services