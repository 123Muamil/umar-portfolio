"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import img1 from '../../public/images/c1.png'
import img2 from '../../public/images/c2.png'
import img3 from '../../public/images/c3.png'
import img4 from '../../public/images/c4.png'
import img5 from '../../public/images/c5.png'
import img6 from '../../public/images/c6.png'
import img7 from '../../public/images/c7.png'
import img8 from '../../public/images/c8.png'
import img9 from '../../public/images/c9.png'
import img10 from '../../public/images/c10.png'
import img11 from '../../public/images/c11.png'
import img12 from '../../public/images/c12.png'
import img13 from '../../public/images/c13.png'
import img14 from '../../public/images/c14.png'
import img15 from '../../public/images/c15.png'
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
        img1, img2, img3, img4,img5, img6, img7, img8, img9,img10, img11,img12, img13, img14, img15
    ];

  return (
    <div className='container h-[250px] border-[10px] rounded-[10px]  border-[#FFFFFF] mx-auto'>
     <Carousel
                      responsive={responsive}
                      infinite={true} 
                      autoPlay={true}  
                      autoPlaySpeed={1000}  // Slower autoplay speed (default is 3000)
                      transitionDuration={500}  // Slower transition duration (default is 500)
                      arrows={true} 
                      itemClass="p-4"
                  >
                      {images.map((image, index) => (
                          <Image
                              key={index}
                              src={image}
                              style={{ width: '100%',height:"200px",borderRadius:'10px' }}
                              alt={`Image ${index + 1}`}
                          />
                      ))}
                  </Carousel>
    </div>
  )
}

export default CompaniesCarousel
