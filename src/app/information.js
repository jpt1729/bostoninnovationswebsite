import React from "react";
import dynamic from 'next/dynamic';
import Image from 'next/image';

// const Slider = dynamic(() => import("react-slick"), { ssr: false });

const InfoCard = ({ title, description, imageUrl }) => {
  return (
    <div className="w-96 h-90 rounded-lg overflow-hidden shadow-lg mx-6 flex flex-col">
      <div className="p-4 flex-1 flex flex-col">
        <div className="h-40">
          <Image
            className="w-full h-full object-cover rounded"
            src={imageUrl}
            alt="Card image"
            width={800}
            height={800}
          />
        </div>
        <div>
          <div className="flex items-center justify-center font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function Information() {
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

  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1200px-Northeastern_seal.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Texas_A%26M_University_logo.svg/2492px-Texas_A%26M_University_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boston_University_seal.svg/1200px-Boston_University_seal.svg.png',
    'https://seeklogo.com/images/T/tufts-university-logo-C22B1DB618-seeklogo.com.png',
    'https://cdn.freebiesupply.com/images/large/2x/mit-logo-transparent.png',
    // Add more image URLs as needed
  ];

  return (
    <div className="pt-10 bg-gray-200">
      <div className="mt-5 pt-10 max-w-xl text-center mx-auto">
        <h1 className="block font-bold text-black text-4xl md:text-5xl lg:text-6xl ">
          Information
        </h1>
      </div>

      <div className="relative overflow-hidden mt-5">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-semibold mb-5 text-center">
          Our Company Leadership:
        </h2>
        <div className="flex flex-wrap justify-center items-start gap-20">
          <div className="flex flex-wrap justify-center">
            <div className="w-96 rounded-lg overflow-hidden shadow-lg mx-6 flex flex-col">
              <div className="p-4 flex-1 flex flex-col">
                <div className="h-90">
                  <Image
                    className="w-full h-full object-cover rounded"
                    src="https://media.licdn.com/dms/image/C4E03AQGSHfdlSPVP5Q/profile-displayphoto-shrink_800_800/0/1585400318784?e=2147483647&v=beta&t=f2gyP0_iXgmhoUM7uQsPYiBySbbU5vwGZTOrWUuy1Ew"
                    alt="Card image"
                    width={800}
                    height={800}
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-base">Board of Advisors</p>
                  <div className="font-bold text-xl mb-2">Dr. James Hillis</div>
                  <p className="text-gray-700 text-base">Director of Neurological Clinical Operations</p>
                  <p className="text-gray-700 text-base">Digital Clinical Research and Artificial Intelligence</p>
                  <p className="text-gray-700 text-base mb-4">Organization at Mass General Brigham</p>
                </div>
              </div>
            </div>

            <div className="w-96 rounded-lg overflow-hidden shadow-lg mx-6 flex flex-col">
              <div className="p-4 flex-1 flex flex-col">
                <div className="h-90">
                  <Image
                    className="w-full h-full object-cover rounded"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Seal_of_Massachusetts_Institute_of_Technology.svg/1200px-Seal_of_Massachusetts_Institute_of_Technology.svg.png"
                    alt="Card image"
                    width={800}
                    height={800}
                  />
                </div>
                <div className="h-20">
                  <p className="text-gray-500 text-base">Founder & CEO</p>
                  <div className="font-bold text-xl mb-2">Nicholas Irving</div>
                  <p className="text-gray-700 text-base">McKinsey & Company Intern</p>
                  <p className="text-gray-700 text-base mb-4">Harvard & MIT program alum</p>
                </div>
              </div>
            </div>

            <div className="w-96 rounded-lg overflow-hidden shadow-lg mx-6 flex flex-col">
              <div className="p-4 flex-1 flex flex-col">
                <div className="h-50">
                  <Image
                    className="w-full h-full object-cover rounded"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Seal_of_the_United_States_Department_of_Veterans_Affairs_%28alternate%29.svg/1200px-Seal_of_the_United_States_Department_of_Veterans_Affairs_%28alternate%29.svg.png"
                    alt="Card image"
                    width={800}
                    height={800}
                  />
                </div>
                <div className="h-40">
                  <p className="text-gray-500 text-base">Board of Advisors</p>
                  <div className="font-bold text-xl mb-2">Dr. Doug Rett</div>
                  <p className="text-gray-700 text-base">Chief of Optometry</p>
                  <p className="text-gray-700 text-base mb-4">Veteran Affairs New England Region</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
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
        </div>
      </div>

      <div id="new" className="bg-gray-200">
        <div className="overflow-hidden h-auto">
          <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8 h-auto">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-black">
                  Projects
                </h4>
                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-800">
                  4+
                </p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-black">
                  College Mentors
                </h4>
                <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-800">
                  20+
                </p>
              </div>
              <div>
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


