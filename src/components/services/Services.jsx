import React from 'react'
import Flex from '../Layouts/Flex'
import service1 from "../images/service1.png"
import service2 from "../images/service2.png"
import service3 from "../images/service3.png"
import Button from '../Layouts/Button'
import ServiceBackground from '../Layouts/ServiceBackground'

const Services = () => {
  return (
      <div className='font-primary'>
          <Flex className='items-center'>
              <div className='w-[50%]'>
                  <div className='flex justify-end mr-[60px]'>
                      <div className=''>
                          <p className=' font-bold text-[64px]'>Our Services</p>
                          <p className=' font-medium text-para w-[405px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                      </div>
                  </div>
              </div>
              <ServiceBackground className=''>
                  <div className='ml-[100px]'>
                      <h3 className='mb-[20px] ml-[116px]font-primary font-bold text-[36px]  text-white'>Modern natural oil and gas refineries.</h3>
                      <Button className='hover:bg-transparent hover:ring-2 hover:ring-white hover:rounded-lg cursor-progress '>
                          <p>Learn More</p>
                      </Button>
                  </div>
              </ServiceBackground>
              
          </Flex>
          <Flex>
              <ServiceBackground className='bg-[url(./components/images/service2.png)]'>
                  <div className='ml-[100px]'>
                      <h3 className='mb-[20px] ml-[116px]font-primary font-bold text-[36px]  text-white'>Supply of national industries.</h3>
                      <Button className='hover:bg-transparent hover:outline-2 hover:outline-white hover:rounded-lg'>
                          <p>Learn More</p>
                      </Button>
                  </div>
              </ServiceBackground>
              
              <div className='z-[1] after:z-[-1] w-[50%] relative bg-[url(./components/images/service3.png)] bg-no-repeat bg-cover bg-center pt-[147px] pb-[139px] after:absolute after:bg-black/60 after:content-[""] after:w-full after:h-full after:top-0 after:left-0 '>
                  
                  <div className='ml-[100px]'>
                      <h3 className='mb-[20px] ml-[116px]font-primary font-bold text-[36px]  text-white'>National fuel distribution and supply.</h3>
                      <Button className='hover:bg-transparent hover:ring-2 hover:ring-white hover:rounded-lg'>
                          <p>Learn More</p>
                      </Button>
                  </div>
              </div>
          </Flex>
    </div>
  )
}

export default Services

// for learning purposes 
// i made components by position - in banner
// components by after / before - in service
// direct coding service last part