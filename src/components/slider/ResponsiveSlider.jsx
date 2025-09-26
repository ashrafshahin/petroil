import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../images/slider1.png"
import slider2 from "../images/slider2.png"
import slider3 from "../images/slider3.png"
import slider4 from "../images/slider4.png"

const ResponsiveSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        autoplaySpeed: 3000,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return (
      <div className=" mb-4 slider-container">
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
    );
}
  


export default ResponsiveSlider