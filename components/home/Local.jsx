import React from 'react'
import Section from '../global/Section'
import Image from 'next/image';
import areas from '@/data/areas';

const Local = () => {
  return (
    <Section className="pt-10 pb-20" variant="light">
      <div className="mx-auto w-full px-6 lg:px-8">
        <h3 className="text-center text-4xl font-sfHeavy sm:text-5xl mt-16 mb-12">
          Local Marketing Services in<br/> Harrisburg, Lancaster, York & Carlisle
        </h3>
        <p className="text-lg text-pretty mb-12">
          Looking to grow your business in Harrisburg, Lancaster, York, Carlisle, and surrounding areas? We specialize in targeted digital marketing campaigns designed to generate high-quality leads for local businesses. Our team understands the unique challenges of marketing in Central Pennsylvania and helps businesses like yours attract and convert more customers through strategic SEO, paid advertising, social media marketing, and web design. 
          <br /><br />
          Let us connect you with your ideal customers in your target area. Let’s put your business on the map and drive real results!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {areas.map((area, index) => (
            <div key={index} className="relative group">
              <Image 
                src={area.src} 
                alt={area.city} 
                width={600}
                height={350}
                className="w-full h-[350px] object-cover rounded-lg shadow-lg ring-1 ring-amber-500 ring-offset-8 ring-offset-blue-900" />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-lg shadow-lg"></div>
              <h4 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl">
                {area.city}
              </h4>
            </div>
          ))}
        </div>
        <p className="text-xl font-bold text-pretty text-center mt-12">
          If you are not located in these areas, don't worry! We work with clients all over the United States and beyond. Our team is equipped to handle projects of any size, no matter where you are located.
        </p>
      </div>
    </Section> 
  )
}

export default Local
