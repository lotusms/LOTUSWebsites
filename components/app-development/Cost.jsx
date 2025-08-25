import React from 'react'
import FullWidthSection from '../global/FullWidthSection'
import SvgDivider from '../global/SvgDivider'
import Card from '../global/Card'
import ResponsiveBackgroundNumber from '@/components/webdesign/ResponsiveBackgroundNumber';
import TextResizeObserver from '@/components/webdesign/TextResizeObserver';
import AppCostCalculator from './AppCostCalculator';
import Divider from '../global/Divider';
import Cta from '../global/Cta';

const factors = [
  {
    title: "App Functionality",
    description: "The more complex your mobile app is, the more development time and resources it will require. This includes features such as user authentication, payment systems, AI-driven tools, custom APIs, and real-time data interactions.",
  },
  {
    title: "Development Timeline",
    description: "If your app needs to be launched quickly, it may require additional developers or extended hours, which can affect the overall cost. Most custom apps take 6–9 months to develop, depending on complexity and how quickly assets and feedback are provided.",
  },
  {
    title: "App Store Optimization & Marketing",
    description: "If you need help with App Store Optimization (ASO), content creation, or social media integration, these services can increase the project scope. Basic ASO and performance tracking are included with all of our mobile app builds.",
  },
]

const packages = [
  {
    title: 'Progressive Web App (PWA)',
    subtitle: 'Browser-Based Web Apps with Native Features',
    description:
      'A browser-based app (website) that looks and feels like a mobile app. This package is perfect for businesses that want to offer a seamless user experience across all devices without the need to download an app.',
    benefits: [
      'No app store approval needed; updates are instant',
      'Fastest development time and lowest cost',
      'Launch faster and get to market quickly',
      'Deliver a consistent experience across desktop and mobile',
      'Allow users to access your app even without internet',
      'Re-engage users with push notifications, just like native apps',
    ],
  },
  {
    title: 'Cross Platform Mobile App',
    subtitle: 'Best bang for your buck',
    description:
      'Designed for businesses that need a cost-effective solution to reach both iOS and Android users. This package offers a single codebase for both platforms, saving time and resources.',
    benefits: [
      'Reach both iOS and Android users with one build',
      'Save on development time and cost with a unified codebase',
      'Deliver a smooth, native-like user experience',
      'Boost visibility with listings on the App Store and Google Play',
      'Users can access your app offline',
    ],
  },
  {
    title: 'Hybrid Mobile App',
    subtitle: 'Web + Mobile in One App',
    description:
      'Designed for businesses that need a versatile app that works on multiple platforms. This package offers a combination of web and mobile technologies for a seamless user experience.',
    benefits: [
      'Get the best of both web and mobile',
      'Expand your reach across multiple platforms and devices',
      'Allow users to stay connected even when offline',
      'Securely manage user accounts and data',
      'Publish your app on both major app stores',
      'Keep your app running smoothly with regular support',
    ],
  },
  {
    title: 'Native Mobile App',
    subtitle: 'Best for Performance & User Experience',
    description:
      'Designed for businesses that need a high-performance mobile app with advanced features and functionality. This package is often paired with a custom website and a CMS for a complete ecosystem.',
    benefits: [
      'Deliver the highest performance and smoothest user experience possible',
      'Unlock powerful features like real-time messaging and advanced notifications',
      'Offer secure login and personalized user experiences',
      'Access deep insights with detailed usage analytics',
      'Reach a wider audience with App Store and Play Store deployment',
      'Ensure reliability with long-term maintenance and support',
    ],
  }
]

const Cost = () => {
  return (
    <FullWidthSection variant="light" className=''>  
      <SvgDivider color="#65a30d" />
      <div className="mx-auto max-w-7xl py-12 px-8">
        <h2 className="uppercase text-4xl sm:text-7xl lg:text-8xl text-center font-sfBlack mb-8 text-slate-700">
          App Development <br/> Costs Made Clear
        </h2>
        <p className="text-center">
          When it comes to mobile app development, we prioritize clarity and honesty in our pricing. There are no hidden fees, no surprise charges — just straightforward, transparent costs based on your app’s unique needs. Every app we build is fully customized from the ground up. We don’t use generic templates or recycled code, so your final price will reflect the specific features, functionality, and complexity of your project.
          <br /><br />
          Ready to explore your options? Reach out to our mobile app developers for a personalized quote. In the meantime, here are some of the key factors that influence app development pricing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
          <div className="grid grid-cols-1 gap-4">
            {factors.map((item, index) => (
              <div key={index}>
                <Card variant="lime" className="relative flex flex-col h-full">
                  <ResponsiveBackgroundNumber>{index + 1}</ResponsiveBackgroundNumber>
                  <div className="p-4">
                    <TextResizeObserver max={28} min={12}>
                      <h4 className="font-sfHeavy text-slate-900/80 tracking-tight mb-4 text-right">
                        {item.title}
                      </h4>
                    </TextResizeObserver>
                    <TextResizeObserver max={16} min={12}>
                      <p className="text-justify">{item.description}</p>
                    </TextResizeObserver>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div>
            <Card variant="dark" className="p-4">
              <TextResizeObserver max={28} min={12}>
                <h4 className="font-sfHeavy text-slate-100 tracking-tight mb-4 text-left">
                  Cost Calculator
                </h4>
              </TextResizeObserver>

              <TextResizeObserver max={16} min={12}>
                <p className="text-justify">
                  We understand that every project is unique. That's why we offer a cost calculator to help you estimate your project's cost based on your specific needs and requirements. Keep in mind that this is just an estimate, and the final cost may vary based on the complexity of your project and any additional features or services you may require.
                </p>
                <p className="text-lime-500 font-sfHeavy text-center my-4 border border-lime-500 rounded-lg p-4">
                  And yes, it may actually be lower than the estimate!
                </p>
              </TextResizeObserver>    

              <AppCostCalculator/>
            </Card>
          </div>
        </div>

        <Divider className="my-12" />

        <h3 className="uppercase text-4xl sm:text-5xl lg:text-6xl text-center font-sfBlack mb-8 text-slate-700">
          App Development Packages
        </h3>
        <p className="text-center mb-12">
          Let's break down our app development packages to help you find the perfect fit for your business needs and budget. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {packages.map((pkg, index) => (
            <Card key={index} variant="dark" className="flex flex-col h-full">
              <h4 className="font-sfBlack text-2xl text-lime-500 mb-2">{pkg.title}</h4>
              <h5 className="font-sfHeavy text-lg text-slate-200 mb-4">{pkg.subtitle}</h5> 
              <p className="text-justify text-slate-200 mb-4 flex-grow">{pkg.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {pkg.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-slate-200">{benefit}</li>
                ))}
              </ul>
            </Card>
          ))} 
        </div>

        <Cta label='Contact Us If You Have Any Questions' readmore={false} labelClassName='text-slate-800' />
      </div>
    </FullWidthSection>
  )
}

export default Cost
