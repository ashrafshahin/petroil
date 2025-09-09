import React from 'react'

import slider1 from "../images/slider1.png"
import slider2 from "../images/slider2.png"
import slider3 from "../images/slider3.png"
import slider4 from "../images/slider4.png"
import Flex from '../Layouts/Flex'

const Slider = () => {
  return (
      <div>
          <Flex className='justify-between pb-[25px]'>
              
                  <img className='w-[24%] gap-x-[30px]' src={slider1} alt="slider1" />
                  <img className='w-[24%] gap-x-[30px]' src={slider2} alt="slider2" />
                  <img className='w-[24%] gap-x-[30px]' src={slider3} alt="slider3" />
                  <img className='w-[24%] gap-x-[30px]' src={slider4} alt="slider4" />
              
          </Flex>
    </div>
  )
}

export default Slider