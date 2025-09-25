import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import Button from '../Layouts/Button'

import blog1 from "../images/blog1.png"
import blog2 from "../images/blog2.png"
import blog3 from "../images/blog3.png"



const Blog = () => {
  return (
      <div className=' bg-[#F0F0F0] py-[110px] font-primary'>
          <Container>
              <Flex className='justify-between items-center'>
                  <div className='w-[33%] mr-2 z-[1] after:z-[-1] relative bg-[url(./components/images/blog1.png)] bg-no-repeat bg-cover bg-center pt-[75px] pb-[55px] px-[45px] after:absolute after:bg-black/60 after:content-[""] after:w-full after:h-full after:top-0 after:left-0 '>
                      <div>
                          <p className='font-primary font-bold text-[24px] text-white w-[249px] mb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                          <Button className='bg-white/50 text-white hover:bg-transparent hover:ring-2 hover:ring-white hover:rounded-lg'>
                              <p className='font-semibold text-[12px]' >Read more</p>
                          </Button>
                      </div>
                      
                  </div>
                  <div className='w-[33%] ml-2 mr-2 z-[1] after:z-[-1] relative bg-[url(./components/images/blog2.png)] bg-no-repeat bg-cover bg-center pt-[75px] pb-[55px] px-[45px] after:absolute after:bg-black/60 after:content-[""] after:w-full after:h-full after:top-0 after:left-0'>
                      <div>
                          <p className='font-primary font-bold text-[24px] text-white w-[249px] mb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                          <Button className='bg-white/50 text-white hover:bg-transparent hover:ring-2 hover:ring-white hover:rounded-lg'>
                              <p className='font-semibold text-[12px]' >Read more</p>
                          </Button>
                      </div>

                  </div>
                  <div className='w-[33%] ml-2 z-[1] after:z-[-1] relative bg-[url(./components/images/blog3.png)] bg-no-repeat bg-cover bg-center pt-[75px] pb-[55px] px-[45px] after:absolute after:bg-black/60 after:content-[""] after:w-full after:h-full after:top-0 after:left-0'>
                      <div>
                          <p className='font-primary font-bold text-[24px] text-white w-[249px] mb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                          <Button className='bg-white/50 text-white hover:bg-transparent hover:ring-2 hover:ring-white hover:rounded-lg'>
                              <p className='font-semibold text-[12px]' >Read more</p>
                          </Button>
                      </div>
                      
                  </div>
                  
                  
                  
              </Flex>
          </Container>
          <Container className='flex justify-end items-center' >
              <div className='font-primary font-bold mt-[29px] space-x-[20px]'>MORE FROM THE BLOG  
              </div>
              <div className='text-[18px] mt-[27px] '><IoIosArrowForward /></div>
              
              
          </Container>
    </div>
  )
}

export default Blog