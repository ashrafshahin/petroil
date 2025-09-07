import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter, FaInstagram } from "react-icons/fa6";



import React from 'react'
import Container from "../Layouts/Container";

const Header = () => {
    return (
        <>
            <div className="bg-secondary border-b-4 border-[#FFB800]">
                <Container>
                    <div className=' py-[15px] text-white'>
                        <div className='flex justify-between '>
                            <div className='flex space-x-[49px]'>
                                <div className="flex relative items-center space-x-[5px]">
                                    <IoMailUnreadOutline size={20} />
                                    <p className="text-[12px]">mail@yourcompany.com</p>
                                    {/* <div className="absolute top-0 left-57 h-[100px] w-[100px] color-red ">|</div> */}
                                </div>
                                {/* <div className="relative before:absolute before:content-[''] before:top-[5px] before:left-[-27px] before:h-[16px] before:w-[2px] before:bg-green-500"></div> */}

                                <div className=" relative after:absolute after:content-[''] after:top-[5px] after:left-[-27px] after:h-[16px] after:w-[2px] after:bg-[#5C6A92] flex items-center space-x-[5px]">
                                    <FaPhoneAlt size={20} />
                                    <p className="text-[12px]">+896 120 5889 (Toll free)</p>
                                </div>
                            </div>

                            <div className="flex space-x-[19px] " >
                                <FaFacebookF className="size-[16px]" />
                                <FaTwitter className="size-[16px]" />
                                <FaLinkedinIn className="size-[16px]" />
                                <FaInstagram className="size-[16px]" />

                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </>
      
      
  )
}

export default Header