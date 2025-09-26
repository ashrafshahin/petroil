import React from 'react'
import map from "../images/map.png"
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import Button from '../Layouts/Button'

const Map = () => {
  return (
      <div>
          <div className=''>
              <img className='md:h-full h-[200px] w-[500px] md:w-full' src={map} alt="" />
          </div>
          <div className='bg-primary py-[45px]'>
              <Container>
                  <Flex className='items-center'>
                      <p className='font-primary font-bold text-[24px] md:text-[36px] text-white'>Want to join as member branch in your area?</p>
                      <Button className='font-primary font-semibold  '>
                          <p className='border-2 border-[#ffffff] py-[15px] px-[30px] hover:bg-transparent hover:ring-2 hover:ring-white hover:rounded-lg'>CONTACT</p>
                      </Button>
                  </Flex>
              </Container>
              
          </div>
          <div className="bg-secondary border-b-2 border-[#FFB800]"></div>
          
      </div>
  )
}

export default Map