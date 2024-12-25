"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import img from '../../public/images/Channels-6.png'
import img2 from '../../public/images/Channels-6.png'
import img6 from '../../public/images/Channels-6.png'
import img8 from '../../public/images/Channels-6.png'
import img9 from '../../public/images/Channels-6.png'
import img11 from '../../public/images/Channels-6.png'
import img15 from '../../public/images/Channels-6.png'
import img19 from '../../public/images/IMovies-19.jpg'
import img20 from '../../public/images/Channels-6.png'
import img24 from '../../public/images/Movies-24.jpg'
import img25 from '../../public/images/Channels-6.png'
import img26 from '../../public/images/Channels-6.png'
import img27 from '../../public/images/Channels-6.png'
import img28 from '../../public/images/Channels-6.png'
import img30 from '../../public/images/Channels-6.png'
const CompaniesCarousel = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
    };

    const images = [
        img, img2, img6, img8,img9, img11, img15, img19, img20,img24, img25,img26, img27, img28, img30
    ];

  return (
    <div className='container h-[300px] border-[10px] rounded-[10px]  border-[#FFFFFF] mx-auto'>
      <Carousel
                      responsive={responsive}
                      infinite={true} 
                      autoPlay={true}  
                      autoPlaySpeed={1000}  
                      transitionDuration={500}  
                      arrows={true} 
                      itemClass=""
                  >
                      {images.map((image, index) => (
                          <Image
                              key={index}
                              src={image}
                              style={{ width: '100%',height:"280px",  objectFit: 'cover' }}
                              alt={`Image ${index + 1}`}
                          />
                      ))}
                  </Carousel>
    </div>
  )
}

export default CompaniesCarousel
