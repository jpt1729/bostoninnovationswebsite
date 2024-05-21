import React from "react";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import ImageSlider from '../app/components/ImageSlider';
import jamesHillis from '../app/assets/jamesHillis.jpeg'
import dougRett from '../app/assets/Doug-Rett.jpg'
import irving from '../app/assets/nicholasIrving.jpeg'

// const Slider = dynamic(() => import("react-slick"), { ssr: false });


export default function Information() {


  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1200px-Northeastern_seal.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Texas_A%26M_University_logo.svg/2492px-Texas_A%26M_University_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boston_University_seal.svg/1200px-Boston_University_seal.svg.png',
    'https://seeklogo.com/images/T/tufts-university-logo-C22B1DB618-seeklogo.com.png',
    'https://seeklogo.com/images/M/MIT-logo-73A348B3DB-seeklogo.com.png',
    // Add more image URLs as needed
  ];

  return (
    <div className="pt-10 bg-gray-200">
      <div className="mt-5 pt-10 max-w-xl text-center mx-auto">
        <h1 className="block font-bold text-black text-4xl md:text-5xl lg:text-6xl ">
          College's We're Partnered With
        </h1>
      </div>

    


      <div className=" py-4 relative overflow-hidden">
        
        <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
          {/* <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="flex items-center justify-center w-full h-full">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="max-w-full max-h-64 object-cover"
                />
              </div>
            ))}
          </Slider> */}
          <ImageSlider images={images} />
        </div>
      </div>

      <div className="overflow-hidden flex justify-center mx-auto">
        <p className="mt-2 sm:mt-3 text-2xl sm:text-4xl font-bold text-blue-800">
          Committed to partnering with local doctors' offices in the Boston area.          </p>


      </div>

      <div id="new" className="bg-gray-200 flex justify-center">
        <div className="overflow-hidden">
          <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid gap-10 grid-cols-1 sm:gap-12 lg:grid-cols-3 lg:gap-40">
              <div className="p-4 bg-gray rounded-lg shadow-md">
                <h4 className="text-lg sm:text-xl font-semibold text-black">
                  Projects
                </h4>
                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-800">
                  4+
                </p>
              </div>
              <div className="p-4 bg-gray rounded-lg shadow-md">
                <h4 className="text-lg sm:text-xl font-semibold text-black">
                  College Mentors
                </h4>
                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-800">
                  20+
                </p>
              </div>
              <div className="p-4 bg-gray rounded-lg shadow-md">
                <h4 className="text-lg sm:text-xl font-semibold text-black">
                  Mentors
                </h4>
                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-800">
                  100+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}


