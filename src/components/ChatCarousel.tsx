"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import img from '../../public/images/Movies.jpg'
import img2 from '../../public/images/Movies-2.jpg'
import img4 from '../../public/images/Movies-4.jpg'
import img8 from '../../public/images/Movies-8.jpg'
import img9 from '../../public/images/Movies-9.jpg'
import img11 from '../../public/images/Movies-11.jpg'
import img15 from '../../public/images/Movies-15.jpg'
import img19 from '../../public/images/IMovies-19.jpg'
import img20 from '../../public/images/Movies-20.jpg'
import img24 from '../../public/images/Movies-24.jpg'
import img25 from '../../public/images/Movies-25.jpg'
import img26 from '../../public/images/Movies-26.jpg'
import img27 from '../../public/images/Movies-27.jpg'
import img28 from '../../public/images/Movies-28.jpg'
import img30 from '../../public/images/Movies-30.jpg'

const ChatCarousel = () => {
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
        img, img2, img4, img8,img9, img11, img15, img19, img20,img24, img25,img26, img27, img28, img30
    ];
  return (
    <div className='bg-[#221E5B] pt-[60px] pb-[60px]'>
       <Carousel
                      responsive={responsive}
                      infinite={true} 
                      autoPlay={true}  
                      autoPlaySpeed={1000}  // Slower autoplay speed (default is 3000)
                      transitionDuration={500}  // Slower transition duration (default is 500)
                      arrows={true} 
                      itemClass=""
                  >
                      {images.map((image, index) => (
                          <Image
                              key={index}
                              src={image}
                              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                              alt={`Image ${index + 1}`}
                          />
                      ))}
                  </Carousel>
    </div>
  )
}

export default ChatCarousel
