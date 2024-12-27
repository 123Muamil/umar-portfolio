"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import img from '../../public/images/chat-2.png'
import img2 from '../../public/images/chat-3.png'
import img4 from '../../public/images/chat-4.png'
import img8 from '../../public/images/chat-5.png'
import img9 from '../../public/images/chat-6.png'
import img11 from '../../public/images/chat-8.png'
import img15 from '../../public/images/chat-9.png'
import img19 from '../../public/images/chat-10.png'
import img20 from '../../public/images/chat-11.png'
import img24 from '../../public/images/chat-12.png'
import img25 from '../../public/images/chat14.png'
import img26 from '../../public/images/chat-15.png'
import img27 from '../../public/images/chat-16.png'
import img28 from '../../public/images/chat-17.png'

const ChatCarousel = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 6,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
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
        img, img2, img4, img8,img9, img11, img15, img19, img20,img24, img25,img26, img27, img28
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
                      itemClass="mr-2"
                    
                  >
                      {images.map((image, index) => (
                          <Image
                              key={index}
                              src={image}
                              style={{ width: '100%', height: '400px', borderRadius:"5px" }}
                              alt={`Image ${index + 1}`}
                          />
                      ))}
                  </Carousel>
    </div>
  )
}

export default ChatCarousel
