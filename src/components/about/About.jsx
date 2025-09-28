import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import Button from '../Layouts/Button'

const About = () => {
  return (
      <div className='md:py-[136px] px-[0px] bg-[#F0F0F0]'>
          <Container>
              <Flex className='flex-col md:flex-row'>
                  <div className='md:w-[30%] py-3 md:py-[100px] px-3 md:px-[75px] bg-primary'>
                      <p className='font-primary text-white font-bold text-[20px] md:text-[36px] md:w-[262px]'>Learn more about our company</p>
                  </div>
                  <div className='md:w-[70%] after:z-[-1] z-[1] relative bg-[url(./components/images/about.png)] bg-no-repeat bg-cover bg-center pt-[147px] pb-[139px] after:absolute after:bg-black/20 after:content-[""] after:w-full after:h-full after:top-0 after:left-0'>
                      <div className='pl-[100px] md:pl-[280px]'>
                          <Button className='bg-white hover:bg-transparent hover:ring-2 hover:ring-white hover:rounded-lg'>
                              <p className='text-primary'>Learn More</p>
                          </Button>
                      </div>
                  </div>
              </Flex>
          </Container>
      </div>
  )
}

export default About