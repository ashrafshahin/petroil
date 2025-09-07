import React from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import logo from '../images/logo.png'


function Navbar() {
    return (
        <>
            <div className='bg-[#F40404] py-[32px]'>
                <Container>
                    <Flex className='justify-between items-center '>
                        <div>
                            {/* i put srting on logo, it wasn't working 2 hours */}
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className='flex space-x-[50px] text-white font-primary font-semibold items-center '>
                            <ul>
                                <li><a className='hover:text-blue-500 hover:border-[2px] hover:p-[15px]  hover:bg-white' href="#">Home</a></li>
                            </ul>
                            <ul>
                                <li><a className='hover:text-blue-500 hover:border-[2px] hover:p-[15px] hover:bg-white' href="#">About</a></li>
                            </ul>
                            <ul>
                                <li><a className='hover:text-blue-500 hover:border-[2px] hover:p-[15px] hover:bg-white' href="#">Services</a></li>
                            </ul>
                            <ul>
                                <li><a className='hover:text-gray-500 hover:border-[2px] hover:p-[15px] hover:bg-white ' href="#">Gallary</a></li>
                            </ul>
                            <ul>
                                <li><a className='hover:text-blue-500 hover:border-[2px] hover:p-[15px]  hover:bg-white' href="#">Blog</a></li>
                            </ul>
                            <button className='border-[2px] px-6 py-[13px] hover:border-gray-500 '>CONTACT</button>
                            
                        </div>
                        

                    </Flex>

                </Container>
            </div>
        </>



    );


}

export default Navbar