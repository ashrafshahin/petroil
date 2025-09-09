import React from 'react'
import Flex from '../Layouts/Flex'
import service1 from "../images/service1.png"
import service2 from "../images/service2.png"
import service3 from "../images/service3.png"
import Button from '../Layouts/Button'

const Services = () => {
  return (
      <>
          <Flex className='items-center'>
              <div className='w-[50%]'>
                  <div className='ml-[190px]'>
                      <p className=' font-primary font-bold text-[64px]'>Our Services</p>
                      <p className=' font-primary font-medium text-para w-[405px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </div>
              </div>
              <div className='z-[1] after:z-[-1] w-[50%] relative bg-[url(./components/images/service1.png)] bg-no-repeat bg-cover bg-center pt-[147px] pb-[139px] after:absolute after:bg-black/60 after:content-[""] after:w-full after:h-full after:top-0 after:left-0 '>
                  {/* <div className='relative after:absolute after:bg-black/60 after:h-full after:w-full after:top-[0px]'>
                    
                      <img src={service1} alt="" />
                      
                  </div> */}
                  <div className='ml-[100px]'>
                      <h3 className=' ml-[116px]font-primary font-bold text-[36px]  text-white'>Modern natural oil and gas refineries.</h3>
                      <Button>
                          <p>Learn More</p>
                      </Button>
                  </div>
              </div>
          </Flex>
          <Flex>
              <div className='z-[1] after:z-[-1] w-[50%] relative bg-[url(./components/images/service2.png)] bg-no-repeat bg-cover bg-center pt-[147px] pb-[139px] after:absolute after:bg-black/60 after:content-[""] after:w-full after:h-full after:top-0 after:left-0 '>
                  
                  <div className='ml-[100px]'>
                      <h3 className=' ml-[116px]font-primary font-bold text-[36px]  text-white'>Supply of national industries.</h3>
                      <Button>
                          <p>Learn More</p>
                      </Button>
                  </div>
              </div>
              <div className='z-[1] after:z-[-1] w-[50%] relative bg-[url(./components/images/service3.png)] bg-no-repeat bg-cover bg-center pt-[147px] pb-[139px] after:absolute after:bg-black/60 after:content-[""] after:w-full after:h-full after:top-0 after:left-0 '>
                  
                  <div className='ml-[100px]'>
                      <h3 className=' ml-[116px]font-primary font-bold text-[36px]  text-white'>National fuel distribution and supply.</h3>
                      <Button>
                          <p>Learn More</p>
                      </Button>
                  </div>
              </div>
          </Flex>
    </>
  )
}

export default Services