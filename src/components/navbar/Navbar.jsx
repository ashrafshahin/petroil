import React, { useState } from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import logo from '../images/logo.png'

import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";


function Navbar() {
    const [show, setShow] = useState(false);

    // const handleClick = () => {
    //     setShow(!show)
        
    // }
    return (
        <>
            <div className='bg-[#F40404] py-[30px]'>
                <Container>
                    <div className='hidden md:flex justify-between items-center '>
                        <div >
                            <img src={logo} alt="Logo" />
                        </div>
                        
                            <div className=' md:flex space-x-[20px] text-white font-primary font-semibold items-center '>
                                <ul>
                                    <li><a className='  px-6 py-[13px] ' href="#">Home</a></li>
                                </ul>
                                <ul>
                                    <li><a className='px-6 py-[13px] ' href="#">About</a></li>
                                </ul>
                                <ul>
                                    <li><a className='  px-6 py-[13px] ' href="#">Services</a></li>
                                </ul>
                                <ul>
                                    <li><a className='  px-6 py-[13px] ' href="#">Gallary</a></li>
                                </ul>
                                <ul>
                                    <li><a className='  px-6 py-[13px] ' href="#">Blog</a></li>
                                </ul>
                                <button className='mt-2 md:mt-0 border-[2px] px-6 py-[13px] hover:text-[#000000] '>CONTACT</button>

                            </div>
                         
                    </div>

                    {/* mobile responsive menu starts here */}

                    <div className='flex md:hidden items-center justify-between '>
                        
                        <div className=' w-[150px] md:w-auto'>
                                <img src={logo} alt="Logo" />
                        </div>
                        
                        <div> 
                            {
                                show ? 
                                    <div className='absolute top-[182px] left-0 w-full bg-[#F40404]/85  z-[999999] p-2'>
                                        <div className=' md:flex space-x-[20px] text-white font-primary font-semibold items-center '>
                                            <ul>
                                                <li><a className='md:border-2 border-red-500 px-6 py-[13px] hover:border-gray-500' href="#">Home</a></li>
                                            </ul>
                                            <ul>
                                                <li><a className='md:border-2 border-red-500 px-6 py-[13px] hover:border-gray-500' href="#">About</a></li>
                                            </ul>
                                            <ul>
                                                <li><a className='md:border-2 border-red-500 px-6 py-[13px] hover:border-gray-500' href="#">Services</a></li>
                                            </ul>
                                            <ul>
                                                <li><a className='md:border-2 border-red-500 px-6 py-[13px] hover:border-gray-500' href="#">Gallary</a></li>
                                            </ul>
                                            <ul>
                                                <li><a className='md:border-2 border-red-500 px-6 py-[13px] hover:border-gray-500' href="#">Blog</a></li>
                                            </ul>
                                            <button className='mt-2 md:mt-0 border-[2px] px-1 py-2 hover:border-gray-500 hover:text-[#000000] '>CONTACT</button>

                                        </div>
                                    
                                    </div>
                                    :
                                    ""
                            }
                            {
                                show ?
                                    <ImCross onClick={() => { setShow(!show) }} className='border-2 text-white border-white p-1 text-4xl' />
                                    :
                                    <FaBars onClick={() => { setShow(!show) }} className='border-2 text-white border-white p-1 text-4xl' />

                            }
                            {/* <FaBars onClick={handleClick} className='border-2 text-white border-white p-1 text-4xl' /> */}
                                
                        

                        </div>
                    </div>

                </Container>
            </div>
        </>



    );


}

export default Navbar