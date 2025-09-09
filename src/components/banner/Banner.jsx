import React from 'react'
import bannerImage from "../images/banner.png"
import Container from '../Layouts/Container'
import Button from '../Layouts/Button'


const Banner = () => {
  return (
      <>
          {/* <div style={{
              backgroundImage: `url(${bannerImage})`,
              height: 100
          }}></div> */}
          <div className=' z-[1] relative bg-[url(./components/images/banner.png)] py-[257px] bg-no-repeat bg-cover bg-center '>
              <div className=' z-[-1] absolute content-[""] bg-black/60 w-full h-full top-[0px] left-[0px]'>   
              
              </div>
              <Container>
                  <h1 className='text-white font-primary font-bold text-[64px] w-[842px]'>We exist since 1975 on the oil and gas industry.</h1>
                  <Button className='mt-[31px]'>
                      <p>LEARN MORE</p>
                  </Button>
                  
              </Container>
              
          </div>
          
          
            
      
      </>
  )
}

export default Banner