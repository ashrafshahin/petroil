import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

import logo1 from "../images/logo1.png"
import logo2 from "../images/logo2.png"
import logo3 from "../images/logo3.png"
import logo4 from "../images/logo4.png"

const Logo = () => {
  return (
      <div className='py-[115px]'>
          <Container>
              <Flex className='flex-col md:flex-row'>
                  <img className='pr-[32px]' src={logo1} alt="" />
                  <img className='pr-[32px]' src={logo2} alt="" />
                  <img className='pr-[32px]' src={logo3} alt="" />
                  <img className='pr-[32px]' src={logo4} alt="" />
              </Flex>
          </Container>
    </div>
      
  )
}

export default Logo