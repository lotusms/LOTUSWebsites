import React from 'react'
import FullWidthSection from '../global/FullWidthSection'
import Image from 'next/image'
import SvgDivider from '../global/SvgDivider'
import Cta from '../global/Cta'

const MobileApps = () => {
  return (
    <FullWidthSection className="pt-0 pb-20 relative" variant="light">
      <SvgDivider color="#334155" />
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/JudoPedia-iPhone%20Mockup.png?alt=media&token=8cb9809b-752e-467b-bb77-ff3a0af18f6c"
          alt="Mobile Apps"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Backdrop Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col mx-auto items-center md:me-auto md:items-end md:justify-end w-full px-6 lg:px-8">
          <h2 className="uppercase text-right text-4xl sm:text-7xl lg:text-8xl font-sfBlack mb-8 text-white">
            Mobile Apps 
            <br/>That Keep You 
            <br/><span className="text-lime-400 ps-4">Within Reach</span>
          </h2>
          <p className="text-lg text-pretty mb-12 md:max-w-4xl text-center md:text-right text-white/90">
            We specialize in creating mobile apps for Apple Store and Android Play Store that connect you with your customers right where they are. Our team of experts will work with you to develop a custom app that meets your business needs and engages your audience. 
          </p>
        </div>

        <Cta label={false} link="/app-development"/>
      </div>
    </FullWidthSection>
  )
}

export default MobileApps
