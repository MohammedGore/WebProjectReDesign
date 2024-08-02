import React from 'react';
import GalleryImage from '../assets/images/Gallery.png'
import { Carousel, CarouselCaption } from 'react-bootstrap';



const MyCarousel = () => {
  return (
    <Carousel className='space-y-20'>
      <Carousel.Item className='text-center'>
        <img
          className="d-block w-100"
          src={GalleryImage}
          alt="First slide"
        />
        <CarouselCaption>
          <p className='text-black text-[12px] md:text-sm'>Vanity pool overlooking the hills at the park.</p>
      </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={GalleryImage}
          alt="Second slide"
        />
        <CarouselCaption>
          <p className='text-black text-center text-[12px] md:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </CarouselCaption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={GalleryImage}
          alt="Third slide"
        />
        <CarouselCaption>
        <p className='text-black text-center text-[12px] md:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </CarouselCaption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;