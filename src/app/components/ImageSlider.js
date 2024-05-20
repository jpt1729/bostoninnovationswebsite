"use client";

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: false,
    centerMode: true,
    centerPadding: "40%", // Adjust this value to change the spacing
    prevArrow: null,
    nextArrow: null
    
  };

  return (
    <div className="relative w-full overflow-hidden">
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="flex items-center justify-center w-full h-full">
                    <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="max-w-full max-h-64 object-cover"
                    />
                </div>
            ))}
        </Slider>
    </div>
);
};

export default ImageSlider;
