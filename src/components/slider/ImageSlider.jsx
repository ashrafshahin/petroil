import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../images/slider1.png"
import slider2 from "../images/slider2.png"
import slider3 from "../images/slider3.png"
import slider4 from "../images/slider4.png"

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };
  return (
    <div className=' pb-[25px] slider-container'>
      <Slider {...settings}>
        <img className='w-[24%] gap-x-[30px] p-2' src={slider1} alt="slider1" />
        <img className='w-[24%] gap-x-[30px] p-2' src={slider2} alt="slider2" />
        <img className='w-[24%] gap-x-[30px] p-2' src={slider3} alt="slider3" />
        <img className='w-[24%] gap-x-[30px] p-2' src={slider4} alt="slider4" />
        <img className='w-[24%] gap-x-[30px] p-2' src={slider1} alt="slider1" />
        <img className='w-[24%] gap-x-[30px] p-2' src={slider2} alt="slider2" />
        <img className='w-[24%] gap-x-[30px] p-2' src={slider3} alt="slider3" />
        <img className='w-[24%] gap-x-[30px] p-2' src={slider4} alt="slider4" />

      </Slider>
    </div>
  
  )
}

export default ImageSlider