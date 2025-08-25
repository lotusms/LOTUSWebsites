"use client"

import FullWidthSection from "../global/FullWidthSection"
import SvgDivider from "../global/SvgDivider"
import Image from "next/image"

const cards = [
  {
    title: "Offline Access",
    url:"",
    image:"https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/app%20development/offline%20access.webp",
    description: "Apps provide instant access to content, even without an internet connection. This is especially useful for travel, remote areas, or areas with poor connectivity.",
  },
  {
    title: "Push Notifications",
    url:"",
    image:"https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/app%20development/notifications.webp",
    description: "Websites rely on email or ads to bring users back. Push notifications are instant, direct, and get 3x more engagement than emails—reminding customers of promotions, updates, and abandoned carts.",
  },
  {
    title: "Location-Based Services",
    url:"",
    image:"https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/app%20development/fitness%20tracking-gyAM6iEhLWN8qILoRDaeiESm7drYrU.webp",
    description: "Apps can track user location, preferences, and behavior to offer hyper-personalized experiences—like local deals, ride-sharing, and fitness tracking. ",
  },
  {
    title: "Hardware Integration",  
    url:"",
    image:"https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/app%20development/gps-rCb025FVFhK8rg0lxdX11rx0EpTzEo.webp",
    description: "Unlike websites, apps can access device features like cameras, GPS, and sensors to offer unique experiences—like AR filters, payment scanning, and smart home controls.", 
  },
  {
    title: "Instant Access",
    url:"",
    image:"https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/app%20development/instant%20access.webp",
    description: "Websites get buried in browser history and difficult to find in mobile devices. Whereas apps are always visible on the home screen, making it easy for users to access and engage with your brand.",
  },
  {
    title: "Personalization",
    url:"",
    image:"https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/app%20development/personalization-pmIuKvEFtni7thEgegG6EOSEKvHLSb.webp",
    description: "Apps can remember user preferences, behavior, and history to offer personalized experiences—like product recommendations, content suggestions, and tailored notifications.",
  }
]

const Why = () => {
  return (
    <FullWidthSection variant="slate">
      <SvgDivider color="#f1f5f9" />
      <div className="py-12 px-8">
        <div className="flex flex-col items-end max-w-4xl ms-auto mb-12">
          <h3 className="uppercase text-4xl sm:text-7xl lg:text-8xl font-sfBlack my-8 text-slate-200 text-right">
            Why Do I Need<br/> A Mobile App?
          </h3>
          <p className="text-right">
            Having only a website is no longer enough if you want to stay ahead in today’s mobile-first world. A website is great for visibility, but it can’t deliver the same level of engagement and convenience that users expect from apps. Think about brands like Starbucks, Uber, Amazon, or Instagram — their apps keep users coming back.
            <br /><br />
            A mobile app gives your business direct access to customers through their phones, with features like push notifications, offline access, and personalized experiences. Unlike websites, apps offer faster performance, deeper customer engagement, and stronger brand loyalty. Investing in a mobile app means giving your customers the convenience they want and your business the competitive edge it needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2">
          {cards.map(card => (
            <div key={card.title} className="flex flex-col items-center space-y-4 bg-lime-600 text-slate-800 p-6">
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg shadow-lg ring-2 ring-offset-4 ring-slate-800 ring-offset-lime-600" />
                <div>
                  <h3 className="text-3xl font-sfBlack mb-4">{card.title}</h3>
                  <p className="">{card.description}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </FullWidthSection>
  )
}

export default Why
