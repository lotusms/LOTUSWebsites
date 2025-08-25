import React from 'react'
import FullWidthSection from '../global/FullWidthSection'
import SvgDivider from '../global/SvgDivider'
import Image from 'next/image'

const judopedia = "https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/apps%2FJudoPedia.png?alt=media&token=8e0f55b3-f11c-45f2-a53e-0bedf7d53fc3"

const forkcastmeals = "https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/apps%2FForkastMeals.png?alt=media&token=38b67450-1914-4524-b7b2-e8695ed15f7b"

const Apps = () => {
  return (
    <FullWidthSection variant="light">
      <SvgDivider color="#1e293b" />

      <div className="py-12 px-8">
        <div className="flex flex-col items-start max-w-5xl me-auto mb-12">
          <h3 className="uppercase text-4xl sm:text-7xl lg:text-8xl font-sfBlack my-8 text-lime-600 text-left">
            Some of Our<br/> Recent Mobile Apps
          </h3>
          <p className="text-left">
            We take pride in delivering high-quality, custom mobile app solutions that meet the unique needs of our clients. Here are a couple of examples of recent mobile apps we've developed.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-12">
          <div className="flex flex-col items-center space-y-4 bg-lime-600 text-slate-800 p-6">
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='md:w-3/4'>
                <h3 className="text-3xl font-sfBlack mb-4">
                  JudoPedia
                </h3>
                <p className="">
                  JudoPedia is a comprehensive mobile app designed for judo enthusiasts of all levels. It offers a rich database of judo techniques, training drills, and competition strategies, making it an essential resource for athletes, coaches, and fans alike. With user-friendly navigation and high-quality video tutorials, JudoPedia provides an engaging learning experience that helps users improve their skills and deepen their understanding of the sport. Whether you're a beginner looking to learn the basics or an experienced judoka aiming to refine your techniques, JudoPedia is your go-to app for all things judo.
                </p>
              </div>
              <div className='md:w-1/4'>
                <Image 
                  src={judopedia} 
                  alt="JudoPedia App Screenshot" 
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg shadow-lg ring-2 ring-offset-4 ring-slate-800 ring-offset-lime-600" />   
              </div>             
            </div>

          </div>
          <div className="flex flex-col items-center space-y-4 bg-lime-600 text-slate-800 p-6">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <Image 
                src={forkcastmeals} 
                alt="Forkcast Meals App Screenshot" 
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg shadow-lg ring-2 ring-offset-4 ring-slate-800 ring-offset-lime-600" />   
                <h3 className="text-3xl font-sfBlack mb-4">
                  Forkcast Meals
                </h3>
                <p className="">
                  Forkcast Meals is a dynamic meal planning and recipe app designed to simplify your culinary experience. Whether you're a busy professional, a health-conscious individual, or someone who simply loves to cook, Forkcast Meals has something for everyone. The app offers personalized meal plans based on your dietary preferences, nutritional goals, and lifestyle. With a vast collection of delicious recipes, easy-to-follow cooking instructions, and grocery lists, Forkcast Meals makes it easy to prepare healthy and tasty meals at home. Say goodbye to mealtime stress and hello to a more organized and enjoyable cooking experience with Forkcast Meals.
                </p>
            </div>
          </div>
        </div>
      </div>
    </FullWidthSection>
  )
}

export default Apps