import React from 'react'
import FullWidthSection from '../global/FullWidthSection'
import SvgDivider from '../global/SvgDivider'
import AppShowcase from "./AppShowcase";

const judopediaVideo = "https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/apps%2FJudoPediaVideoRaw.mp4?alt=media&token=d7bf8a56-27fe-41ad-8b20-a249e546d4de"
const mealsplangoVideo = "https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/apps%2FMealsPlanGO.VideoRaw.mp4?alt=media&token=3fa11c6f-9d31-423c-8b6b-881b340f18de" 
const cinemaclubtvVideo = "https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/apps%2FCinemaClubVideoRaw.mp4?alt=media&token=a51adcaa-c9a1-474a-890b-8de7dc467c44"

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
          <AppShowcase
            title="JudoPedia"
            videoSrc={judopediaVideo}>
            <p>
              JudoPedia is a comprehensive mobile app designed for judo enthusiasts of all levels. It offers a rich database of judo techniques, training drills, and competition strategies, making it an essential resource for athletes, coaches, and fans alike. With user-friendly navigation and high-quality video tutorials, JudoPedia provides an engaging learning experience that helps users improve their skills and deepen their understanding of the sport. Whether you're a beginner looking to learn the basics or an experienced judoka aiming to refine your techniques, JudoPedia is your go-to app for all things judo.
            </p>
          </AppShowcase>
          <AppShowcase
            title="Meals-Plan-GO!"
            videoSrc={mealsplangoVideo}
            reverse>
            <p>
              Meals-Plan-GO! is a dynamic meal planning and recipe app designed to simplify your culinary experience. Whether you're a busy professional, a health-conscious individual, or someone who simply loves to cook, Meals-Plan-GO! has something for everyone. The app offers personalized meal plans based on your dietary preferences, nutritional goals, and lifestyle. With a vast collection of delicious recipes, easy-to-follow cooking instructions, and grocery lists, Meals-Plan-GO! makes it easy to prepare healthy and tasty meals at home. Say goodbye to mealtime stress and hello to a more organized and enjoyable cooking experience with Meals-Plan-GO!.
            </p>  
          </AppShowcase>
          <AppShowcase
            title="CinemaClubTV"
            videoSrc={cinemaclubtvVideo}>
              <p>
                CinemaClubTV is an innovative streaming app that brings the magic of cinema right to your fingertips. Designed for movie enthusiasts, CinemaClubTV offers a vast library of films across various genres, from timeless classics to the latest blockbusters. The app features a user-friendly interface that makes it easy to browse, search, and discover new movies. With personalized recommendations based on your viewing history and preferences, CinemaClubTV ensures that you'll always find something exciting to watch. Whether you're in the mood for a thrilling action movie, a heartwarming drama, or a laugh-out-loud comedy, CinemaClubTV is your ultimate destination for all things film.
              </p>
          </AppShowcase>
        </div>
      </div>
    </FullWidthSection>
  )
}

export default Apps