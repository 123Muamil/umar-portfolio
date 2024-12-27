"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import img from '../../public/images/channels1.png'
import img1 from '../../public/images/channels2.png'
import img2 from '../../public/images/channels3.png'
import img3 from '../../public/images/channels4.png'
import img4 from '../../public/images/channels5.png'
import img5 from '../../public/images/channels6.png'
import img6 from '../../public/images/channels7.png'
import img7 from '../../public/images/channels8.png'
import img8 from '../../public/images/channels9.png'
import img9 from '../../public/images/channels10.png'
import img10 from '../../public/images/channels11.png'
import img12 from '../../public/images/channels12.png'
import img13 from '../../public/images/channels13.png'
import img14 from '../../public/images/channels14.png'
import img15 from '../../public/images/channels15.png'
import img16 from '../../public/images/channels16.png'
import img17 from '../../public/images/channels17.png'
import img18 from '../../public/images/channels18.png'
import img19 from '../../public/images/channels19.png'
import img20 from '../../public/images/channels20.png'
import img21 from '../../public/images/channels21.png'
import img22 from '../../public/images/channels22.png'
import img23 from '../../public/images/channels23.png'
import img24 from '../../public/images/channels24.png'
import img25 from '../../public/images/channels25.png'
import img26 from '../../public/images/channels26.png'
import img27 from '../../public/images/channels27.png'
import img28 from '../../public/images/channels28.png'
import img29 from '../../public/images/channels29.png'
import img30 from '../../public/images/channels30.png'
import img31 from '../../public/images/channels31.png'
import img32 from '../../public/images/channels32.png'

const ChannelsCarousel = () => {
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
        img, img1, img2, img3,img4, img5, img6, img7, img8,img9, img10,img12, img13, img14, img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32
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

export default ChannelsCarousel
