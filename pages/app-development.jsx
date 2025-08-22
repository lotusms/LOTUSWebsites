'use client';

import Head from 'next/head';
import { pageMetadata, bannerImages } from "@/data/metadata";
import ImageHeader from '@/components/global/ImageHeader'
import Section from '@/components/global/Section'
import Cta from '@/components/global/Cta'
import PageHead from '@/components/global/PageHead';
import GrayCard from '@/components/global/GrayCard';
import Image from 'next/image';
const banner = bannerImages.appDevelopmentImage;

const process = [
  {
    number: 1,
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and app requirements. This helps us create a roadmap for your app development project.'
  },
  {
    number: 2,
    title: 'Design',
    description: 'Our design team creates wireframes and prototypes to visualize the app’s layout and features. We focus on usability and user experience to ensure your app is intuitive and engaging.'
  },
  {
    number: 3,
    title: 'Development',
    description: 'Our development team brings your app to life using the latest technologies and best practices. We follow an agile approach to ensure your app is delivered on time and within budget.'
  },
  {
    number: 4,
    title: 'Testing',
    description: 'We conduct rigorous testing to identify and fix any bugs or issues. This ensures your app is stable, secure, and performs well on all devices and platforms.'
  },
  {
    number: 5,
    title: 'Launch',
    description: 'We help you submit your app to the App Store and Play Store. Our team provides support during the review process and ensures your app meets all guidelines and requirements.'
  },
  {
    number: 6,
    title: 'Maintenance',
    description: 'We offer ongoing maintenance and support to keep your app up-to-date and running smoothly. Our team monitors performance, fixes issues, and implements new features as needed.'
  }
]

const packages = [
  {
    title: 'Progressive Web App',
    subtitle: 'Browser-Based Apps with Native Features',
    description: 'A website that looks and feel like a mobile app. This package is perfect for businesses that want to offer a seamless user experience across all devices wihtout the need to download an app.',
    features: [
      'Custom PWA design & development',
      'Mobile responsiveness',
      'Offline functionality',
      'Push notifications',
      'Add to home screen prompt',
      'Google Analytics setup'
    ],
    price: 'Staring at $7,800'
  },
  {
    title: 'Cross Platform Mobile App',
    subtitle: 'Best bang for your buck',
    description: 'Designed for businesses that need a cost-effective solution to reach both iOS and Android users. This package offers a single codebase for both platforms, saving time and resources.',
    features: [
      'Cross-platform app design & development',
      'Single codebase for iOS & Android',
      'Native-like performance & user experience',
      'App Store & Play Store submission',
      'Basic analytics & reporting',
      'Ongoing maintenance & support'
    ],
    price: 'Staring at $12,400'
  },
  {
    title: 'Hybrid Mobile App',
    subtitle: 'Web + Mobile in One App',
    description: 'Designed for businesses that need a versatile app that works on multiple platforms. This package offers a combination of web and mobile technologies for a seamless user experience.',
    features: [
      'Hybrid app design & development',
      'Web & mobile features combined',
      'Offline functionality',
      'User authentication & account management',
      'App Store & Play Store submission',
      'Ongoing maintenance & support'
    ],
    price: 'Staring at $27,500'
  },
  {
    title: 'Native Mobile App',
    subtitle: 'Best for Performance & User Experience',
    description: 'Designed for businesses that need a high-performance mobile app with advanced features and functionality. This package is often paired with a custom website for a seamless user experience.',
    features: [
      'Custom mobile app design & development',
      'Advanced features & functionality (push notifications, in-app messaging, etc.)',
      'User authentication & account management',
      'Real-time updates & analytics',
      'App Store & Play Store submission',
      'Ongoing maintenance & support'
    ],
    price: 'Contact Us for a Quote'
  }
]

const cards = [
  {
    title: "Offline Access",
    image:"https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/app%20development/offline%20access.webp",
    description: "Apps provide instant access to content, even without an internet connection. This is especially useful for travel, remote areas, or areas with poor connectivity.",
  },
  {
    title: "Push Notifications",
    image:"https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/app%20development/notifications.webp",
    description: "Websites rely on email or ads to bring users back. Push notifications are instant, direct, and get 3x more engagement than emails—reminding customers of promotions, updates, and abandoned carts.",
  },
  {
    title: "Location-Based Services",
    image:"https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/app%20development/fitness%20tracking-gyAM6iEhLWN8qILoRDaeiESm7drYrU.webp",
    description: "Apps can track user location, preferences, and behavior to offer hyper-personalized experiences—like local deals, ride-sharing, and fitness tracking. ",
  },
  {
    title: "Hardware Integration",  
    image:"https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/app%20development/gps-rCb025FVFhK8rg0lxdX11rx0EpTzEo.webp",
    description: "Unlike websites, apps can access device features like cameras, GPS, and sensors to offer unique experiences—like AR filters, payment scanning, and smart home controls.", 
  },
  {
    title: "Instant Access",
    image:"https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/app%20development/instant%20access.webp",
    description: "Websites get buried in browser history and difficult to find in mobile devices. Whereas apps are always visible on the home screen, making it easy for users to access and engage with your brand.",
  },
  {
    title: "Personalization",
    image:"https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/app%20development/personalization-pmIuKvEFtni7thEgegG6EOSEKvHLSb.webp",
    description: "Apps can remember user preferences, behavior, and history to offer personalized experiences—like product recommendations, content suggestions, and tailored notifications.",
  }
]

const AppDevelopment = () => {
  const meta = pageMetadata["/app-development"];

  return (
    <>
      <PageHead
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical={meta.canonical}
        ogimage={meta.ogimage}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Mobile App Development",
              "name": "App Development Services | LOTUS Marketing Solutions",
              "description": "Seamless app development services for iOS and Android. Build high-performance, cross-platform, native, or hybrid apps with LOTUS Marketing Solutions.",
              "provider": {
                "@type": "Organization",
                "name": "LOTUS Marketing Solutions",
                "url": "https://www.lotuswebsites.com",
                "logo": bannerImages.logoImage,
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-717-945-8132",
                  "contactType": "Customer Support",
                  "areaServed": "US"
                },
                "sameAs": [
                  "https://www.facebook.com/lotusmarketingsolutionsLLC",
                  "https://www.instagram.com/lotusmarsol/",
                  "https://www.youtube.com/@codingNerd",
                  "https://x.com/LotusMarketingS"
                ]
              },
              "areaServed": {
                "@type": "Place",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Mobile App Packages",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Progressive Web App Development",
                      "description": "Custom PWA with offline functionality, mobile responsiveness, and push notifications."
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": 7800
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cross Platform App Development",
                      "description": "Cost-effective app using a single codebase for iOS and Android."
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": 12400
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hybrid Mobile App Development",
                      "description": "Web and mobile functionality combined in a single hybrid application."
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": 27500
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Native Mobile App Development",
                      "description": "High-performance app for iOS and Android with advanced features.",
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "USD",
                      "price": "Contact for quote"
                    }
                  }
                ]
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.lotuswebsites.com/app-development"
              },
              "image": bannerImages.appDevelopmentImage,
            }),
          }}
        />
      </Head>

      <ImageHeader 
        backgroundImage={banner}
        overlay
        wordone='Mobile App'
        wordtwo='Development'
        subtitle='Seamless app development for the App Store and Play Store that you can rely on. Put your business in the hands of your consumers.'
        className='mt-20' />
      <Section variant="dark" className='pb-24'>
        <div className="mx-auto max-w-7xl py-12">
          <h2 className="text-4xl font-bold text-center mb-2">Why Do I Need a Mobile App?</h2>
          <p>
            Having a presence on both the App Store and Play Store is crucial for reaching a larger audience. With millions of users on iOS and Android, offering your app on both platforms ensures your business can connect with customers wherever they are. It also enhances your brand’s visibility and credibility.<br /><br />

            Mobile apps allow businesses to offer a more personalized and engaging experience for users. With features like push notifications, in-app messaging, and real-time updates, you can interact directly with customers and build stronger relationships. This drives customer loyalty and repeat business.<br /><br />

            Both app stores also provide valuable analytics and feedback tools. These insights help you understand user behavior, improve your app’s performance, and adapt to changing customer needs. A strong presence in these stores is a strategic way to grow and future-proof your business.
          </p>
        </div>
      </Section>  
      <Section variant="light" className='rounded-t-3xl -mt-12'>  
        <div className="mx-auto max-w-7xl py-12">

          <p className="text-pretty text-center mb-4">
            The process is very simple to a custom website made from the ground up. The main difference is the cost. Because we are using your existing content, we can save you money. Also keep in mind that the more you add to the project, it can drive the cost up. But we will do our best to keep it as low as possible.
          </p>
          <p className="text-xl text-pretty font-sfHeavy text-center">
            To make it simple, we have grouped our services into four packages that are sure to fit your online strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">            
            {packages.slice(0,4).map((item, index) => (
              <div key={index} className="mx-auto max-w-7xl">
                <GrayCard
                  title={`${item.title} Package`}
                  subtitle={item.subtitle}
                  description={item.description}
                  features={item.features}
                  price={item.price}
                />
              </div>
            ))}            
          </div>          
        </div>
      </Section>
      <Section variant="dark">
        <div className="mx-auto max-w-7xl py-12">
          <h3 className="text-3xl font-bold text-center text-slate-50">Why Do I Need a Mobile App?</h3>
          <p className="text-center text-slate-50 mt-4">A mobile app isn’t just a trend—it’s a powerful tool that can boost engagement, improve customer experience, and drive more sales. The question is not so much why you need a mobile app, but why your customers or clients need you to offer an app. Here are some of the key benefits of having a mobile app for your business:</p>  
          <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2">
            {cards.map(card => (
              <div key={card.title} className="flex flex-col items-center space-y-4 border border-amber-500 p-6 rounded-lg shadow-lg">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    width={150}
                    height={150}
                    className="w-full h-48 object-cover rounded-lg shadow-lg" />
                  <div>
                    <h3 className="text-2xl font-bold text-amber-600">{card.title}</h3>
                    <p className="text-slate-50">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </Section>
      <Section variant="light">
        <div className="mx-auto max-w-7xl py-12">
          <h3 className="text-3xl font-bold text-center text-slate-900">Our App Development Process</h3>
          <p className="text-center text-slate-600 mt-4">We follow a structured approach to ensure your app meets your business goals and user needs. The app design and development process is more complex than web development, requiring more time and precision. It takes considerable time to ensure everything is done correctly, including extensive testing to meet performance standards and user expectations. Additionally, we ensure your app passes all necessary tests and guidelines before it is deployed on the App Store or Play Store, ensuring a seamless user experience. </p>
          <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2">
            {process.map(step => (
              <div key={step.number} className="relative flex flex-col items-center mb-8">
                <div className="absolute -top-12 flex items-center justify-center size-24 bg-amber-500 border-8 border-slate-100 rounded-full text-slate-50">
                  <span className="text-4xl font-sfBlack font-bold">{step.number}</span>
                </div>
                <div className="border border-amber-500 p-6 pt-12 rounded-lg flex flex-col items-center space-y-4 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-center text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>


      <Cta />
    </>
  )
}

export default AppDevelopment
