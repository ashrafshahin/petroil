import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import logo from '../images/logo.png'


function Navbar() {
    return (
        <>
            <div className='bg-[#F40404] py-[30px]'>
                <Container>
                    <Flex className='justify-between items-center '>
                        <div>
                            {/* i put srting on logo, it wasn't working 2 hours */}
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className='flex space-x-[20px] text-white font-primary font-semibold items-center '>
                            <ul>
                                <li><a className='border-2 border-red-500 px-6 py-[13px] hover:border-gray-500' href="#">Home</a></li>
                            </ul>
                            <ul>
                                <li><a className='border-2 border-red-500 px-6 py-[13px] hover:border-gray-500' href="#">About</a></li>
                            </ul>
                            <ul>
                                <li><a className='border-2 border-red-500 px-6 py-[13px] hover:border-gray-500' href="#">Services</a></li>
                            </ul>
                            <ul>
                                <li><a className='border-2 border-red-500 px-6 py-[13px] hover:border-gray-500' href="#">Gallary</a></li>
                            </ul>
                            <ul>
                                <li><a className='border-2 border-red-500 px-6 py-[13px] hover:border-gray-500' href="#">Blog</a></li>
                            </ul>
                            <button className='border-[2px] px-6 py-[13px] hover:border-gray-500 hover:text-[#000000] '>CONTACT</button>
                            
                        </div>
                        

                    </Flex>

                </Container>
            </div>
        </>



    );


}

export default Navbar