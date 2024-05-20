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
          Information
        </h1>
      </div>

      <div className="relative overflow-none mt-5">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-semibold mb-5 text-center">
          Our Company Leadership:
        </h2>

        <div className="">
          <div className="flex flex-wrap justify-center">

            <div className="w-96 rounded-lg overflow-none shadow-lg mx-6 flex flex-col">
              <div className="p-4 flex-1 flex flex-col">
                <div className="h-80">
                  <Image
                    className="w-full h-full object-cover rounded"
                    src={jamesHillis}
                    alt="Card image"

                  />
                </div>
                <div className="h-20">
                  <p className="text-gray-500 text-base">Board of Advisors</p>
                  <div className="text-black font-bold text-xl mb-2">Dr. James Hillis</div>
                  <p className="text-gray-700 text-base">Director of Neurological Clinical Operations</p>
                  <p className="text-gray-700 text-base">Digital Clinical Research and Artificial Intelligence</p>
                  <p className="text-gray-700 text-base mb-4">Organization at Mass General Brigham</p>
                </div>
              </div>
            </div>

            <div className="w-96 rounded-lg overflow-hidden shadow-lg mx-6 flex flex-col">
              <div className="p-4 flex-1 flex flex-col">
                <div className="h-80 w-full">
                  <div className="h-full w-full">
                    <Image
                      className="w-full h-full object-cover rounded"
                      src={irving}
                      alt="Card image"
                    />
                  </div>
                </div>
                <div className="h-20">
                  <p className="text-gray-500 text-base">Founder & CEO</p>
                  <div className="text-black font-bold text-xl mb-2">Nicholas Irving</div>
                  <p className="text-gray-700 text-base">McKinsey & Company Intern</p>
                  <p className="text-gray-700 text-base mb-4">Harvard & MIT program alum</p>
                </div>
              </div>
            </div>


            <div className="w-96 rounded-lg overflow-hidden shadow-lg mx-6 flex flex-col">
              <div className="p-4 flex-1 flex flex-col">
                <div className="h-80 w-full">
                  <div className="h-full w-full">
                    <Image
                      className="w-full h-full object-none rounded"
                      src={dougRett}
                      alt="Card image"
                    />
                  </div>
                </div>
                <div className="h-40">
                  <p className="text-gray-500 text-base">Board of Advisors</p>
                  <div className="text-black font-bold text-xl mb-2">Dr. Doug Rett</div>
                  <p className="text-gray-700 text-base">Chief of Optometry</p>
                  <p className="text-gray-700 text-base mb-4">Veteran Affairs New England Region</p>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>

      <div className=" py-4 relative overflow-hidden">
        <h2 className="flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl text-black font-semibold">
          Colleges with partnered student researchers:
        </h2>
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


