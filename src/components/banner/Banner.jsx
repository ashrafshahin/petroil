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
                  <h1 className='text-white font-primary font-bold text-[64px] w-[842px]'>We exist since 1975 on the oil and gas industry.</h1>
                  <Button className='mt-[31px]'>
                      <p>LEARN MORE</p>
                  </Button>

              </Container>
          </BackgroundImage>
          
              
              
              
        
          
          
            
      
      </>
  )
}

export default Banner