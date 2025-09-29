import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";


import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

import logo5 from "../images/logo5.png"
import certificate1 from "../images/certificate1.png"
import certificate2 from "../images/certificate2.png"



const Footer = () => {
  return (
    <div className='bg-[#1F1F1F] pt-11 md:pt-[150px] pb-10 md:pb-[150px] font-primary'>
      <Container>
        <Flex className='flex-col md:flex-row ml-15 md:ml-0'>
          <div className='md:w-[30%] md:mr-[145px]'>
            <img src= {logo5} alt="" />
            <div className='flex items-center text-white mt-[33px] text-[14px]'>
              <IoMailUnreadOutline />
              <p className='ml-[5px]'>mail@yourcompany.com</p>
            </div>
            <div className='flex items-center text-white mt-[15px] text-[14px]'>
              <FiPhoneCall />
              <p className='ml-[5px]'>+896 120 5889 (Toll free)</p>
            </div>
            <div className='flex items-center text-white mt-[15px] text-[14px]'>
              <GrMapLocation />
              <p className='ml-[5px]'>101 Baker Street, New York, USA, 12345</p>
            </div>
            <div className=' flex items-center text-white mt-[33px] '>
              <FaFacebookF className='bg-red-500 rounded-full h-8 w-8 p-1 mr-[12px]' />
              <FaTwitter className='bg-red-500 rounded-full h-8 w-8 p-1 mr-[12px]' />
              <FaLinkedinIn className='bg-red-500 rounded-full h-8 w-8 p-1 mr-[12px]' />
              <FaInstagram className='bg-red-500 rounded-full h-8 w-8 p-1' />
              
            </div>
          </div>
          <div className='py-5 md:py-0 md:w-[20%] text-white text-[14px] mr-[42px]'>
            <h3 className='font-bold mb-[21px] text-[20px]'>Company</h3>
            <ul >
              <li className='mb-[15px]'>Home</li>
              <li className='mb-[15px]'>About</li>
              <li className='mb-[15px]'>Services</li>
              <li className='mb-[15px]'>Gallery</li>
            </ul>
          </div>
          <div className='py-5 md:py-0 md:w-[20%] text-white text-[14px] mr-[42px]'>
            <h3 className='font-bold mb-[21px] text-[20px]'>Others</h3>
            <ul >
              <li className='mb-[15px]'>Blog</li>
              <li className='mb-[15px]'>Contact</li>
              <li className='mb-[15px]'>Terms & Conditions</li>
              <li className='mb-[15px]'>Privacy Policy</li>
            </ul>
          </div>
          <div className='md:w-[30%] text-white'>
            <h3 className='font-bold mb-[21px] text-[20px]'>Certificate</h3>
            <div className='flex'>
              <img  className='mr-[7px]' src={certificate1} alt="" />
              <img src={certificate2} alt="" />
            </div>
          </div>
        </Flex>
      </Container>
          
    </div>
  )
}

export default Footer