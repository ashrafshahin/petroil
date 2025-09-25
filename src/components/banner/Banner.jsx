import React from 'react'
import bannerImage from "../images/banner.png"
import Container from '../Layouts/Container'
import Button from '../Layouts/Button'
import BackgroundOverlay from '../Layouts/BackgroundOverlay'
import BackgroundImage from '../Layouts/BackgroundImage'


const Banner = () => {
  return (
      <>
          {/* <div style={{
              backgroundImage: `url(${bannerImage})`,
              height: 100
          }}></div> */}
          <BackgroundImage>
              <BackgroundOverlay/>
              
              <Container>
                  <h1 className=' text-white font-primary font-bold text-[28px] md:text-[64px] md:w-[842px]'>We exist since 1975 on the oil and gas industry.</h1>
                  <Button className=' mt-[31px] hover:bg-transparent hover:outline-2 hover:outline-white hover:rounded-lg transition duration-700 '>
                      <p>LEARN MORE</p>
                  </Button>
                  <Button className=' hidden md:ml-[30px] hover:bg-transparent hover:ring-2 transition duration-500 easy-in-out'>
                      <p>LEARN CORE</p>
                  </Button>

              </Container>
          </BackgroundImage>
          
              
              
              
        
          
          
            
      
      </>
  )
}

export default Banner